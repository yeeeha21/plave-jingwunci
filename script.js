
// ================================================
// LYRICS CLUB — 同步歌詞播放器
// 原生 JavaScript，無需任何框架
// ================================================

"use strict";

// -----------------------------------------------
// 1. 設定與 DOM 元素
// -----------------------------------------------

// 範例 YouTube 影片 ID。
// 這是 YouTube API 官方示範影片，不代表 K-pop MV。
const DEFAULT_VIDEO_ID = "M7lc1UVf-VE";

// 內建範例歌詞：時間單位為秒。
// 請換成與實際影片相符的時間及應援詞。
const DEFAULT_LYRICS = [
  { time: 0,  text: "Welcome to our practice room ✦" },
  { time: 5,  text: "Everybody, are you ready?" },
  { time: 10, text: "Let the music take us higher" },
  { time: 15, text: "Sing it loud, sing it together" },
  { time: 20, text: "We will always be right here" },
  { time: 25, text: "One more time, everybody!" },
  { time: 30, text: "Make this moment shine forever ♡" },
  { time: 36, text: "Let's sing it together ✦" }
];

// 快取 DOM 元素，避免重複查詢。
const videoForm = document.getElementById("video-form");
const videoUrlInput = document.getElementById("video-url");
const playerStatus = document.getElementById("player-status");

const playButton = document.getElementById("play-button");
const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");
const timeDisplay = document.getElementById("time-display");
const seekBar = document.getElementById("seek-bar");

const lrcFileInput = document.getElementById("lrc-file");
const resetLyricsButton = document.getElementById("reset-lyrics");
const lyricsList = document.getElementById("lyrics-list");
const lyricsCount = document.getElementById("lyrics-count");
const lyricsStatus = document.getElementById("lyrics-status");

const songTitle = document.getElementById("song-title");
const songSubtitle = document.getElementById("song-subtitle");

// -----------------------------------------------
// 2. 播放器與歌詞狀態
// -----------------------------------------------

let player = null;

// 目前使用的歌詞陣列。
// 每個項目格式：{ time: 秒數, text: 歌詞 }
let lyrics = [];

// 目前高亮的歌詞索引。
let activeLyricIndex = -1;

// 使用者是否正在拖曳進度條。
let isSeeking = false;

// 記錄目前載入的影片 ID。
let currentVideoId = DEFAULT_VIDEO_ID;

// 記錄目前播放狀態。
let currentPlayerState = -1;

// 上一次同步時的影片時間。
let lastKnownTime = -1;

// 避免同一句歌詞重複觸發自動滾動。
let lastScrolledIndex = -1;

// 用來取消已經過期的 LRC 讀檔操作。
let fileLoadToken = 0;

// 用來判斷是否已建立 YouTube 播放器。
let playerReady = false;


// -----------------------------------------------
// 3. 通用工具函式
// -----------------------------------------------

/**
 * 將秒數轉換成 mm:ss。
 *
 * 例如：
 * 0    -> 00:00
 * 65   -> 01:05
 * 3665 -> 61:05
 */
function formatTime(seconds) {
  const safeSeconds = Math.max(
    0,
    Math.floor(Number(seconds) || 0)
  );

  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainder).padStart(2, "0")
  );
}


/**
 * 顯示目前播放時間與總長度。
 */
function updateTimeDisplay() {
  if (!playerReady || !player) {
    return;
  }

  const current = player.getCurrentTime() || 0;
  const duration = player.getDuration() || 0;

  timeDisplay.textContent =
    `${formatTime(current)} / ${formatTime(duration)}`;
}


/**
 * 驗證影片 ID 格式。
 *
 * YouTube 一般影片 ID 為 11 個英數字、
 * 底線或連字號。
 */
function isValidVideoId(id) {
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}


// -----------------------------------------------
// 4. 從 YouTube 網址取得影片 ID
// -----------------------------------------------

/**
 * 支援以下輸入格式：
 *
 * VIDEO_ID
 * https://www.youtube.com/watch?v=VIDEO_ID
 * https://youtu.be/VIDEO_ID
 * https://www.youtube.com/embed/VIDEO_ID
 * https://www.youtube.com/shorts/VIDEO_ID
 * https://www.youtube.com/live/VIDEO_ID
 *
 * 不接受其他網站的網址。
 */
function extractVideoId(input) {
  const value = input.trim();

  // 如果使用者直接輸入 ID。
  if (isValidVideoId(value)) {
    return value;
  }

  let url;

  try {
    // 未提供協定時，補上 https://。
    const normalized = /^https?:\/\//i.test(value)
      ? value
      : `https://${value}`;

    url = new URL(normalized);
  } catch {
    return null;
  }

  // 不接受非 YouTube 網域。
  const host = url.hostname.toLowerCase();

  const isYouTube =
    host === "youtube.com" ||
    host.endsWith(".youtube.com") ||
    host === "youtube-nocookie.com" ||
    host.endsWith(".youtube-nocookie.com") ||
    host === "youtu.be";

  if (!isYouTube) {
    return null;
  }

  let id = null;

  if (host === "youtu.be") {
    // 短網址：https://youtu.be/VIDEO_ID
    id = url.pathname.split("/").filter(Boolean)[0];
  } else if (url.searchParams.has("v")) {
    // 一般網址：https://youtube.com/watch?v=...
    id = url.searchParams.get("v");
  } else {
    // embed、shorts、live 等路徑。
    const match = url.pathname.match(
      /^\/(?:embed|shorts|live)\/([a-zA-Z0-9_-]{11})(?:\/|$)/
    );

    if (match) {
      id = match[1];
    }
  }

  return isValidVideoId(id || "") ? id : null;
}


// -----------------------------------------------
// 5. YouTube IFrame API 初始化
// -----------------------------------------------

/**
 * YouTube IFrame API 載入完成後會自動呼叫此函式。
 *
 * 注意：
 * 此函式必須放在全域作用域，讓 YouTube API 找得到。
 */
window.onYouTubeIframeAPIReady = function () {
  playerStatus.textContent = "正在載入 YouTube 影片……";

  player = new YT.Player("youtube-player", {
    width: "100%",
    height: "100%",

    videoId: DEFAULT_VIDEO_ID,

    playerVars: {
      playsinline: 1,
      controls: 1,
      rel: 0
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }
  });
};


/**
 * 播放器建立完成。
 */
function onPlayerReady() {
  playerReady = true;

  playerStatus.textContent =
    "播放器已就緒，可以開始練習。";

  // 初始化介面。
  updateTimeDisplay();
  updatePlayButton();

  // 使用內建歌詞。
  loadDefaultLyrics();

  // 啟動時間同步輪詢。
  // YouTube API 本身沒有逐毫秒的時間更新事件，
  // 因此使用 setInterval 定期讀取播放位置。
  window.setInterval(syncLyrics, 100);
}


/**
 * 播放狀態變更時更新按鈕。
 */
function onPlayerStateChange(event) {
  currentPlayerState = event.data;

  updatePlayButton();

  // 播放器開始播放或播放結束時，
  // 立即同步一次歌詞。
  if (
    event.data === YT.PlayerState.PLAYING ||
    event.data === YT.PlayerState.PAUSED ||
    event.data === YT.PlayerState.ENDED
  ) {
    syncLyrics();
  }

  if (event.data === YT.PlayerState.PLAYING) {
    playerStatus.textContent = "影片播放中，歌詞同步已啟動。";
  } else if (event.data === YT.PlayerState.PAUSED) {
    playerStatus.textContent = "影片已暫停。";
  } else if (event.data === YT.PlayerState.ENDED) {
    playerStatus.textContent = "影片播放完畢。";
  }
}


/**
 * 處理 YouTube 播放器錯誤。
 *
 * 某些影片會因版權、地區、隱私或嵌入限制
 * 而不能在外部網站播放。
 */
function onPlayerError(event) {
  const messages = {
    2: "影片 ID 格式不正確。",
    5: "影片無法使用目前的 HTML5 播放器播放。",
    100: "找不到影片，或影片已被移除。",
    101: "影片擁有者不允許嵌入播放。",
    150: "影片擁有者不允許嵌入播放。",
    153: "播放器缺少必要的來源或 HTTP Referer 資訊。請使用正常的網頁伺服器開啟網站。"
  };

  playerStatus.textContent =
    messages[event.data] ||
    `YouTube 播放器發生錯誤（${event.data}）。`;
}


/**
 * 根據播放器狀態更新播放按鈕文字。
 */
function updatePlayButton() {
  if (!playerReady) {
    playButton.textContent = "▶";
    return;
  }

  if (currentPlayerState === YT.PlayerState.PLAYING) {
    playButton.textContent = "Ⅱ";
    playButton.setAttribute("aria-label", "暫停影片");
  } else {
    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "播放影片");
  }
}


// -----------------------------------------------
// 6. 切換 YouTube 影片
// -----------------------------------------------

/**
 * 載入指定影片。
 *
 * 載入新影片時：
 * 1. 更新影片 ID。
 * 2. 清除舊的同步索引。
 * 3. 保留目前歌詞，方便使用者測試不同版本。
 *
 * 如果新影片的歌詞時間不同，請匯入相對應的 LRC。
 */
function loadVideo(videoId) {
  if (!playerReady || !player) {
    playerStatus.textContent =
      "播放器仍在初始化，請稍後再試。";
    return;
  }

  if (!isValidVideoId(videoId)) {
    playerStatus.textContent =
      "影片 ID 無效，請檢查網址。";
    return;
  }

  currentVideoId = videoId;

  // 清除舊的高亮索引。
  activeLyricIndex = -1;
  lastScrolledIndex = -1;
  lastKnownTime = -1;

  // 更新影片輸入框。
  videoUrlInput.value = videoId;

  // 載入新影片，並從頭開始播放。
  player.loadVideoById({
    videoId: videoId,
    startSeconds: 0
  });

  playerStatus.textContent =
    "正在切換影片，請稍候……";
}


/**
 * 影片表單提交事件。
 */
videoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const videoId = extractVideoId(videoUrlInput.value);

  if (!videoId) {
    playerStatus.textContent =
      "無法識別影片，請輸入有效的 YouTube 網址或影片 ID。";
    return;
  }

  loadVideo(videoId);
});


// -----------------------------------------------
// 7. 播放控制
// -----------------------------------------------

playButton.addEventListener("click", function () {
  if (!playerReady) {
    playerStatus.textContent = "播放器尚未就緒。";
    return;
  }

  if (currentPlayerState === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});


// 倒退五秒。
backButton.addEventListener("click", function () {
  if (!playerReady) return;

  const current = player.getCurrentTime() || 0;

  player.seekTo(Math.max(0, current - 5), true);
});


// 前進五秒。
forwardButton.addEventListener("click", function () {
  if (!playerReady) return;

  const current = player.getCurrentTime() || 0;
  const duration = player.getDuration() || 0;

  player.seekTo(
    Math.min(duration, current + 5),
    true
  );
});


// -----------------------------------------------
// 8. 播放進度條
// -----------------------------------------------

/**
 * 拖曳進度條時，先暫停自動更新進度條，
 * 避免播放時間與拖曳位置互相搶更新。
 */
seekBar.addEventListener("pointerdown", function () {
  isSeeking = true;
});

seekBar.addEventListener("input", function () {
  if (!playerReady) return;

  const duration = player.getDuration() || 0;

  timeDisplay.textContent =
    `${formatTime(Number(seekBar.value) / 1000 * duration)} / ` +
    `${formatTime(duration)}`;
});


// 使用者放開進度條時跳至指定位置。
function finishSeeking() {
  if (!isSeeking || !playerReady) return;

  isSeeking = false;

  const duration = player.getDuration() || 0;
  const ratio = Number(seekBar.value) / 1000;

  player.seekTo(ratio * duration, true);

  // 跳轉後重新同步歌詞。
  syncLyrics();
}

seekBar.addEventListener("pointerup", finishSeeking);
seekBar.addEventListener("pointercancel", finishSeeking);
seekBar.addEventListener("change", finishSeeking);


// -----------------------------------------------
// 9. LRC 歌詞解析
// -----------------------------------------------

/**
 * 將 LRC 格式轉換成歌詞陣列。
 *
 * 支援：
 *
 * [00:12.50] 歌詞文字
 * [01:02.25] 下一句歌詞
 * [00:10.00][00:20.00] 重複歌詞
 * [ar:歌手名稱]
 * [ti:歌曲名稱]
 *
 * 也支援：
 * [00:12] 歌詞
 *
 * 回傳：
 * {
 *   lyrics: [{ time: 12.5, text: "歌詞" }],
 *   metadata: { ar: "...", ti: "..." }
 * }
 */
function parseLRC(content) {
  const result = [];
  const metadata = {};

  // 統一換行符號，支援 Windows、Mac 和 Linux。
  const lines = content
    .replace(/^\uFEFF/, "")
    .replace(/\r\n?/g, "\n")
    .split("\n");

  // 支援 00:12、00:12.50、00:12:50。
  const timestampRegex =
    /\[(\d{1,3}):([0-5]\d)(?:[.:](\d{1,3}))?\]/g;

  const metadataRegex =
    /^\[([a-zA-Z]+):\s*(.*?)\]\s*$/;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) continue;

    // 解析歌曲標題、歌手、專輯等中繼資料。
    const metaMatch = line.match(metadataRegex);

    if (metaMatch) {
      const key = metaMatch[1].toLowerCase();
      const value = metaMatch[2].trim();

      // 不是時間戳記的標籤視為中繼資料。
      if (!/^\d+$/.test(metaMatch[1])) {
        metadata[key] = value;
      }

      continue;
    }

    // 每一行可能包含多個時間戳記。
    const timestamps = [];
    let match;

    // 每次解析前重設正規表達式狀態。
    timestampRegex.lastIndex = 0;

    while ((match = timestampRegex.exec(line)) !== null) {
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      const fraction = match[3] || "";

      // .5 代表 0.5 秒；.50 代表 0.50 秒。
      // .500 代表 0.500 秒。
      const fractionSeconds = fraction
        ? Number("0." + fraction)
        : 0;

      timestamps.push(
        minutes * 60 + seconds + fractionSeconds
      );
    }

    if (timestamps.length === 0) {
      continue;
    }

    // 移除時間標籤，保留歌詞文字。
    const text = line
      .replace(timestampRegex, "")
      .trim();

    // 跳過沒有歌詞內容的時間標籤。
    if (!text) continue;

    // 多時間戳記對應相同歌詞時，分別建立項目。
    for (const time of timestamps) {
      result.push({
        time,
        text
      });
    }
  }

  // 按時間排序，避免 LRC 檔案順序錯亂。
  result.sort((a, b) => a.time - b.time);

  return {
    lyrics: result,
    metadata
  };
}


// -----------------------------------------------
// 10. 載入及顯示歌詞
// -----------------------------------------------

/**
 * 設定目前的歌詞資料。
 */
function setLyrics(items, metadata = {}) {
  lyrics = items
    .filter(item =>
      Number.isFinite(item.time) &&
      item.time >= 0 &&
      typeof item.text === "string" &&
      item.text.trim().length > 0
    )
    .map(item => ({
      time: item.time,
      text: item.text.trim()
    }))
    .sort((a, b) => a.time - b.time);

  activeLyricIndex = -1;
  lastScrolledIndex = -1;
  lastKnownTime = -1;

  // 更新歌名及歌手資訊。
  if (metadata.ti) {
    songTitle.textContent = metadata.ti;
  } else {
    songTitle.textContent = "My Favorite Song";
  }

  if (metadata.ar) {
    songSubtitle.textContent = metadata.ar;
  } else {
    songSubtitle.textContent = "Fan Chant Practice";
  }

  // 顯示歌詞數量。
  lyricsCount.textContent = `${lyrics.length} LINES`;

  // 重新建立歌詞畫面。
  renderLyrics();

  if (lyrics.length === 0) {
    lyricsStatus.textContent =
      "沒有找到有效歌詞，請檢查 LRC 檔案格式。";
  } else {
    lyricsStatus.textContent =
      `已載入 ${lyrics.length} 句歌詞。`;
  }

  // 立即根據目前播放時間同步。
  syncLyrics();
}


/**
 * 載入內建範例歌詞。
 */
function loadDefaultLyrics() {
  setLyrics(DEFAULT_LYRICS, {
    ti: "My Favorite Song",
    ar: "Fan Chant Practice"
  });

  lyricsStatus.textContent =
    "目前使用內建範例歌詞，可匯入自己的 LRC 檔案。";
}


/**
 * 將歌詞陣列轉成按鈕。
 *
 * 使用 textContent，不使用 innerHTML 插入使用者歌詞，
 * 避免將 LRC 內容當成 HTML 執行。
 */
function renderLyrics() {
  const fragment = document.createDocumentFragment();

  lyrics.forEach(function (item, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "lyric-line";
    button.dataset.index = String(index);

    // 歌詞文字。
    const textNode = document.createElement("span");
    textNode.textContent = item.text;

    // 時間戳記。
    const timeNode = document.createElement("span");
    timeNode.className = "lyric-time";
    timeNode.textContent = formatTime(item.time);

    button.append(textNode, timeNode);

    // 點擊歌詞時跳至對應時間。
    button.addEventListener("click", function () {
      seekToLyric(index);
    });

    fragment.appendChild(button);
  });

  // 一次性替換整個歌詞列表。
  lyricsList.replaceChildren(fragment);
}


// -----------------------------------------------
// 11. 點擊歌詞跳轉
// -----------------------------------------------

/**
 * 跳到指定歌詞的開始時間。
 */
function seekToLyric(index) {
  if (!playerReady || !player) {
    lyricsStatus.textContent = "播放器尚未就緒。";
    return;
  }

  if (index < 0 || index >= lyrics.length) {
    return;
  }

  const item = lyrics[index];

  // seekTo 第二個參數為允許播放器尋找該時間點。
  player.seekTo(item.time, true);

  // 立即更新高亮，無須等待下一次輪詢。
  activeLyricIndex = index;
  lastKnownTime = item.time;

  updateActiveLyric(index, true);
}


// -----------------------------------------------
// 12. 根據播放時間找出目前歌詞
// -----------------------------------------------

/**
 * 二分搜尋法：
 * 找出 time 小於或等於播放時間的最後一句歌詞。
 *
 * 若目前時間在第一句歌詞之前，回傳 -1。
 */
function findActiveLyricIndex(time) {
  let left = 0;
  let right = lyrics.length - 1;
  let answer = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (lyrics[middle].time <= time) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}


/**
 * 定期同步影片時間與歌詞。
 */
function syncLyrics() {
  if (!playerReady || !player) {
    return;
  }

  // 影片時間由 YouTube IFrame API 提供。
  const currentTime = player.getCurrentTime() || 0;
  const duration = player.getDuration() || 0;

  updateTimeDisplay();

  // 使用者拖曳進度條時，不覆蓋其操作。
  if (!isSeeking && duration > 0) {
    seekBar.value = String(
      Math.round((currentTime / duration) * 1000)
    );
  }

  // 找出應該高亮的歌詞。
  const index = findActiveLyricIndex(currentTime);

  if (index !== activeLyricIndex) {
    activeLyricIndex = index;

    // 播放時間變動時才更新 DOM。
    updateActiveLyric(index, false);
  }

  lastKnownTime = currentTime;
}


/**
 * 更新目前高亮的歌詞。
 *
 * 自動滾動只會在歌詞索引改變時執行，
 * 避免每 100ms 都觸發滾動動畫。
 */
function updateActiveLyric(index, forceScroll) {
  const allLines = lyricsList.querySelectorAll(".lyric-line");

  allLines.forEach(function (line, lineIndex) {
    line.classList.toggle("active", lineIndex === index);
    line.classList.toggle("past", index >= 0 && lineIndex < index);

    if (lineIndex === index) {
      line.setAttribute("aria-current", "true");
    } else {
      line.removeAttribute("aria-current");
    }
  });

  if (index < 0 || !allLines[index]) {
    return;
  }

  if (forceScroll || lastScrolledIndex !== index) {
    allLines[index].scrollIntoView({
      behavior: forceScroll ? "auto" : "smooth",
      block: "center"
    });

    lastScrolledIndex = index;
  }
}


// -----------------------------------------------
// 13. 匯入 LRC 歌詞檔
// -----------------------------------------------

lrcFileInput.addEventListener("change", async function (event) {
  const file = event.target.files?.[0];

  if (!file) return;

  // 每次讀取都使用新的 token。
  // 若使用者快速選取不同檔案，只採用最後一次結果。
  const token = ++fileLoadToken;

  if (!file.name.toLowerCase().endsWith(".lrc")) {
    lyricsStatus.textContent =
      "請選擇副檔名為 .lrc 的歌詞檔。";

    lrcFileInput.value = "";
    return;
  }

  try {
    // 讀取本機檔案內容。
    const content = await file.text();

    if (token !== fileLoadToken) {
      return;
    }

    // 解析 LRC。
    const parsed = parseLRC(content);

    if (parsed.lyrics.length === 0) {
      lyricsStatus.textContent =
        "檔案內沒有可辨識的歌詞，請確認時間標籤格式。";

      return;
    }

    // 將檔名作為沒有歌曲標題時的預設名稱。
    const fallbackTitle = file.name.replace(/\.lrc$/i, "");

    setLyrics(parsed.lyrics, {
      ...parsed.metadata,
      ti: parsed.metadata.ti || fallbackTitle
    });

    lyricsStatus.textContent =
      `已成功匯入「${file.name}」，共 ${lyrics.length} 句歌詞。`;

  } catch (error) {
    console.error("LRC 讀取失敗：", error);

    lyricsStatus.textContent =
      "無法讀取這個檔案，請確認檔案格式是否正確。";

  } finally {
    // 允許使用者再次選擇同一個檔案。
    if (token === fileLoadToken) {
      lrcFileInput.value = "";
    }
  }
});


// -----------------------------------------------
// 14. 重設範例歌詞
// -----------------------------------------------

resetLyricsButton.addEventListener("click", function () {
  // 使尚未完成的檔案讀取失效。
  fileLoadToken++;

  loadDefaultLyrics();
});


// -----------------------------------------------
// 15. 頁面初始狀態
// -----------------------------------------------

// 在 YouTube API 初始化完成之前，先顯示內建歌詞。
// 如此即使網路暫時無法連線到 YouTube，
// 歌詞列表仍然可以顯示。
loadDefaultLyrics();

// 頁面初始化時設定預設影片 ID。
videoUrlInput.value = DEFAULT_VIDEO_ID;
