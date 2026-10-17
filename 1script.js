
// ======================================================
// LYRICS CLUB
// 原生 JavaScript：12 首歌曲、雙版本、同步歌詞播放器
// ======================================================

"use strict";


// ======================================================
// 1. 歌曲資料設定區
// ======================================================

/*
  每首歌都包含：

  id              ：歌曲唯一識別碼
  title           ：歌曲名稱
  description     ：首頁卡片的簡介
  normalVideoId   ：普通版 YouTube 影片 ID
  advancedVideoId ：進階版 YouTube 影片 ID
  normalLyrics    ：普通版歌詞資料
  advancedLyrics  ：進階版歌詞資料

  歌詞資料格式：
  { time: 秒數, text: "歌詞文字" }

  例如：
  { time: 5, text: "開始應援！" }

  代表影片播放到 5 秒時，這句歌詞開始高亮。

  注意：
  以下使用 YouTube IFrame API 的示範影片 ID。
  為方便測試，24 個版本暫時共用同一支影片。
  你可以逐一替換成真正的影片 ID。
*/


// 建立示範歌詞。
// 這些都是自行編寫的示範文字，不是任何真實歌曲的歌詞。
function makeDemoLyrics(lines) {
  return lines.map(function (text, index) {
    return {
      time: index * 5,
      text: text
    };
  });
}


// 12 首歌曲。
// 每首歌都有獨立的普通版及進階版歌詞陣列。
const SONGS = [
  {
    id: 1,
    title: "Starlight",
    description: "一起點亮舞台的星光 ✦",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Starlight，大家準備好了嗎？",
      "一起舉起雙手",
      "跟著節奏拍手",
      "我們的星光正在閃耀",
      "Starlight，永遠支持你"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Starlight！大家大聲喊出來！",
      "左邊的朋友準備好了嗎？",
      "右邊的朋友一起回應！",
      "全場一起拍手三次！",
      "Starlight！我們永遠在這裡！"
    ])
  },

  {
    id: 2,
    title: "Moonlight",
    description: "月光下的溫柔應援",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Moonlight，今晚一起唱歌",
      "把祝福送到舞台",
      "讓月光照亮夢想",
      "每一份心意都會被聽見",
      "Moonlight，我們一起閃耀"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Moonlight！第一拍！",
      "第二拍！大家一起！",
      "左邊呼喊，右邊回應！",
      "全場一起揮動雙手！",
      "Moonlight！一起唱到最後！"
    ])
  },

  {
    id: 3,
    title: "Pink Dream",
    description: "粉色夢境與歡樂節奏",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Welcome to our pink dream",
      "今天也要開心微笑",
      "跟著旋律一起跳舞",
      "把快樂傳給每一個人",
      "Pink Dream，永遠不散場"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Pink Dream！準備應援！",
      "左邊拍手，右邊揮手！",
      "聽到節奏就一起喊！",
      "全場把氣氛帶起來！",
      "Pink Dream！再來一次！"
    ])
  },

  {
    id: 4,
    title: "Golden Hour",
    description: "在最閃耀的時刻相遇",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Golden Hour，最美的時刻",
      "我們一起迎接明天",
      "把掌聲送給舞台",
      "讓夢想繼續發光",
      "Golden Hour，謝謝有你"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Golden Hour！準備好了！",
      "一、二、三！一起喊！",
      "每個角落都要聽見！",
      "掌聲跟著節奏響起！",
      "Golden Hour！永遠支持！"
    ])
  },

  {
    id: 5,
    title: "Dream Signal",
    description: "把應援訊號傳到舞台",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Dream Signal，收到請回答",
      "我們正在這裡",
      "把心意傳向遠方",
      "每一次回應都是約定",
      "Dream Signal，連線成功"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Dream Signal！訊號開始！",
      "第一區準備大聲回答！",
      "第二區一起接上節奏！",
      "全場一起喊出約定！",
      "Dream Signal！連線成功！"
    ])
  },

  {
    id: 6,
    title: "Cherry Pop",
    description: "充滿活力的甜蜜節拍",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Cherry Pop，節奏開始",
      "一起露出燦爛笑容",
      "跟著音樂拍手",
      "讓快樂不斷延續",
      "Cherry Pop，大家一起跳"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Cherry Pop！跟上節拍！",
      "左、右、左！一起拍手！",
      "前排後排一起回應！",
      "準備好最大聲的應援！",
      "Cherry Pop！再喊一次！"
    ])
  },

  {
    id: 7,
    title: "Blue Horizon",
    description: "朝著夢想的地平線前進",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Blue Horizon，向前出發",
      "帶著我們的祝福",
      "跨過每一個挑戰",
      "未來一定更加閃亮",
      "Blue Horizon，一起前進"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Blue Horizon！準備出發！",
      "大家一起喊出夢想！",
      "節拍來了，不要錯過！",
      "全場一起揮舞雙手！",
      "Blue Horizon！一起前進！"
    ])
  },

  {
    id: 8,
    title: "Magic Stage",
    description: "讓每個舞台都變成魔法",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Magic Stage，燈光亮起",
      "今天的舞台好耀眼",
      "我們一起唱出祝福",
      "讓每個瞬間成為回憶",
      "Magic Stage，魔法不散"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Magic Stage！燈光亮起！",
      "第一句，大家一起喊！",
      "第二句，換另一邊回應！",
      "最後一拍，全場一起！",
      "Magic Stage！太棒了！"
    ])
  },

  {
    id: 9,
    title: "Forever Young",
    description: "把青春與熱情留在歌聲裡",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Forever Young，青春不散",
      "把熱情留在這裡",
      "每一個笑容都珍貴",
      "一起創造新的回憶",
      "Forever Young，永遠同行"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Forever Young！大家一起！",
      "左邊先喊，右邊接上！",
      "全場跟著節拍拍手！",
      "把熱情送到舞台中央！",
      "Forever Young！永遠同行！"
    ])
  },

  {
    id: 10,
    title: "Heartbeat",
    description: "讓全場的心跳同步",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Heartbeat，聽見心跳",
      "跟著旋律一起呼吸",
      "讓掌聲連成一片",
      "我們的心意始終一致",
      "Heartbeat，為你應援"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Heartbeat！心跳開始！",
      "第一拍！第二拍！",
      "所有人一起大聲回應！",
      "掌聲不要停下來！",
      "Heartbeat！全場同步！"
    ])
  },

  {
    id: 11,
    title: "Shining Day",
    description: "迎接每一個閃耀的日子",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Shining Day，美好的一天",
      "我們帶著笑容相見",
      "把所有祝福送上",
      "讓舞台更加耀眼",
      "Shining Day，今天也加油"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Shining Day！準備應援！",
      "全場一起喊出名字！",
      "節奏一到，大家拍手！",
      "最後一段一起唱出來！",
      "Shining Day！今天也加油！"
    ])
  },

  {
    id: 12,
    title: "Our Universe",
    description: "屬於粉絲與舞台的宇宙",
    normalVideoId: "M7lc1UVf-VE",
    advancedVideoId: "M7lc1UVf-VE",

    normalLyrics: makeDemoLyrics([
      "Our Universe，歡迎回來",
      "每顆星星都有光芒",
      "我們一起唱出約定",
      "不管多遠都能相遇",
      "Our Universe，永遠同在"
    ]),

    advancedLyrics: makeDemoLyrics([
      "Our Universe！全場準備！",
      "左邊的星星一起喊！",
      "右邊的星星一起回應！",
      "全場一起完成應援！",
      "Our Universe！永遠同在！"
    ])
  }
];


// ======================================================
// 2. DOM 元素
// ======================================================

const homePage = document.getElementById("home-page");
const playerPage = document.getElementById("player-page");
const songList = document.getElementById("song-list");

const backToListButton = document.getElementById("back-to-list");
const homeLogo = document.getElementById("home-logo");

const currentSongTitle = document.getElementById("current-song-title");
const currentSongSubtitle = document.getElementById("current-song-subtitle");
const playerBadge = document.getElementById("player-badge");

const videoForm = document.getElementById("video-form");
const videoUrlInput = document.getElementById("video-url");
const playerStatus = document.getElementById("player-status");

const playButton = document.getElementById("play-button");
const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");
const timeDisplay = document.getElementById("time-display");
const seekBar = document.getElementById("seek-bar");

const lyricsSongTitle = document.getElementById("lyrics-song-title");
const lyricsSongSubtitle = document.getElementById("lyrics-song-subtitle");
const lyricsCount = document.getElementById("lyrics-count");
const lyricsStatus = document.getElementById("lyrics-status");
const lyricsList = document.getElementById("lyrics-list");

const lrcFileInput = document.getElementById("lrc-file");
const restoreSongLyricsButton =
  document.getElementById("restore-song-lyrics");


// ======================================================
// 3. 全域狀態
// ======================================================

let player = null;
let playerReady = false;
let apiLoading = false;
let apiLoadFailed = false;
let syncTimer = null;

let currentSong = null;
let currentVersion = "normal";
let currentVideoId = "";

let currentLyrics = [];
let activeLyricIndex = -1;
let lastScrolledIndex = -1;

let currentPlayerState = -1;
let isSeeking = false;
let fileLoadToken = 0;


// ======================================================
// 4. 工具函式
// ======================================================

/**
 * 秒數轉成 mm:ss。
 */
function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainder).padStart(2, "0")
  );
}


/**
 * 驗證 YouTube 影片 ID。
 */
function isValidVideoId(id) {
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}


/**
 * 支援 YouTube 一般網址、短網址、嵌入網址、
 * Shorts 網址，以及直接輸入影片 ID。
 */
function extractVideoId(input) {
  const value = input.trim();

  if (isValidVideoId(value)) {
    return value;
  }

  let url;

  try {
    const normalized = /^https?:\/\//i.test(value)
      ? value
      : `https://${value}`;

    url = new URL(normalized);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();

  const isYouTube =
    host === "youtube.com" ||
    host.endsWith(".youtube.com") ||
    host === "youtu.be" ||
    host === "youtube-nocookie.com" ||
    host.endsWith(".youtube-nocookie.com");

  if (!isYouTube) {
    return null;
  }

  let id = null;

  if (host === "youtu.be") {
    id = url.pathname.split("/").filter(Boolean)[0];
  } else if (url.searchParams.has("v")) {
    id = url.searchParams.get("v");
  } else {
    const match = url.pathname.match(
      /^\/(?:embed|shorts|live)\/([a-zA-Z0-9_-]{11})(?:\/|$)/
    );

    if (match) {
      id = match[1];
    }
  }

  return isValidVideoId(id || "") ? id : null;
}


// ======================================================
// 5. 首頁：產生 12 張歌曲卡片
// ======================================================

/**
 * 根據 SONGS 自動產生歌曲卡片。
 *
 * 不需要在 HTML 裡手動寫 12 次。
 * 以後新增歌曲只要新增資料項目即可。
 */
function renderSongList() {
  const fragment = document.createDocumentFragment();

  SONGS.forEach(function (song) {
    const card = document.createElement("article");
    card.className = "song-card";

    const top = document.createElement("div");
    top.className = "song-card-top";

    const number = document.createElement("span");
    number.className = "song-number";
    number.textContent =
      `TRACK ${String(song.id).padStart(2, "0")}`;

    const symbol = document.createElement("span");
    symbol.className = "song-symbol";
    symbol.textContent = "♫";

    top.append(number, symbol);

    const title = document.createElement("h3");
    title.textContent = song.title;

    const description = document.createElement("p");
    description.className = "song-description";
    description.textContent = song.description;

    const buttons = document.createElement("div");
    buttons.className = "version-buttons";

    // 普通版按鈕
    const normalButton = document.createElement("button");
    normalButton.type = "button";
    normalButton.className = "version-button normal";
    normalButton.textContent = "▶ 普通版";

    normalButton.addEventListener("click", function () {
      openSong(song, "normal");
    });

    // 進階版按鈕
    const advancedButton = document.createElement("button");
    advancedButton.type = "button";
    advancedButton.className = "version-button advanced";
    advancedButton.textContent = "✦ 進階版";

    advancedButton.addEventListener("click", function () {
      openSong(song, "advanced");
    });

    buttons.append(normalButton, advancedButton);
    card.append(top, title, description, buttons);
    fragment.appendChild(card);
  });

  songList.replaceChildren(fragment);

  document.getElementById("song-total").textContent =
    `${SONGS.length} SONGS`;
}


// ======================================================
// 6. 開啟歌曲播放頁
// ======================================================

/**
 * 點擊普通版或進階版時執行。
 *
 * @param {Object} song 歌曲設定
 * @param {"normal"|"advanced"} version 版本
 */
function openSong(song, version) {
  currentSong = song;
  currentVersion = version;

  currentVideoId = version === "normal"
    ? song.normalVideoId
    : song.advancedVideoId;

  // 切換畫面。
  homePage.hidden = true;
  playerPage.hidden = false;

  // 更新標題及版本標籤。
  currentSongTitle.textContent = song.title;

  currentSongSubtitle.textContent =
    version === "normal"
      ? "普通版 · 應援練習"
      : "進階版 · 應援練習";

  playerBadge.textContent =
    version === "normal" ? "普通版" : "進階版";

  playerBadge.classList.toggle(
    "advanced",
    version === "advanced"
  );

  // 更新影片輸入框。
  videoUrlInput.value = currentVideoId;

  // 切換歌曲時，載入該版本自己的歌詞。
  restoreCurrentSongLyrics();

  // 清空播放進度顯示。
  timeDisplay.textContent = "00:00 / 00:00";
  seekBar.value = "0";

  // 回到頁面頂端。
  window.scrollTo({ top: 0, behavior: "auto" });

  // 開始載入 YouTube API 或切換現有影片。
  ensureYouTubePlayer(currentVideoId);
}


/**
 * 返回首頁。
 * 保留已選擇的歌曲設定，但暫停影片。
 */
function returnToList() {
  fileLoadToken++;

  if (playerReady && player) {
    player.pauseVideo();
  }

  homePage.hidden = false;
  playerPage.hidden = true;

  window.scrollTo({ top: 0, behavior: "auto" });
}


backToListButton.addEventListener("click", returnToList);

homeLogo.addEventListener("click", function (event) {
  event.preventDefault();
  returnToList();
});


// ======================================================
// 7. YouTube IFrame API 載入與播放器建立
// ======================================================

/**
 * 動態載入 YouTube API。
 *
 * 在定義 onYouTubeIframeAPIReady 後才加入 script，
 * 避免 API 先載入、回呼函式卻尚未定義的競態問題。
 */
function ensureYouTubePlayer(videoId) {
  if (!isValidVideoId(videoId)) {
    playerStatus.textContent =
      "影片 ID 格式不正確，請檢查歌曲設定。";
    return;
  }

  if (playerReady && player) {
    if (currentVideoId !== videoId) {
      currentVideoId = videoId;

      player.loadVideoById({
        videoId: videoId,
        startSeconds: 0
      });
    } else {
      playerStatus.textContent = "播放器已就緒。";
    }

    return;
  }

  // 如果 API 已載入，直接建立播放器。
  if (window.YT && window.YT.Player) {
    createYouTubePlayer(videoId);
    return;
  }

  if (apiLoadFailed) {
    playerStatus.textContent =
      "YouTube API 載入失敗，請重新整理網頁後再試。";
    return;
  }

  playerStatus.textContent =
    "正在載入 YouTube 播放器……";

  // API 已在載入中，不重複插入 script。
  if (apiLoading) {
    return;
  }

  apiLoading = true;

  // 必須在插入 API script 之前設定回呼函式。
  window.onYouTubeIframeAPIReady = function () {
    apiLoading = false;

    // 使用目前選取的影片，而不是最初選取的影片。
    if (currentSong && !playerReady) {
      const selectedId = currentVersion === "normal"
        ? currentSong.normalVideoId
        : currentSong.advancedVideoId;

      createYouTubePlayer(selectedId);
    }
  };

  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  script.async = true;

  script.onerror = function () {
    apiLoading = false;
    apiLoadFailed = true;

    playerStatus.textContent =
      "無法載入 YouTube API，請檢查網路連線。";
  };

  document.head.appendChild(script);
}


/**
 * 建立 YouTube 播放器。
 * 此函式只建立一次；之後使用 loadVideoById 切換影片。
 */
function createYouTubePlayer(videoId) {
  if (!window.YT || !window.YT.Player || player) {
    return;
  }

  currentVideoId = videoId;

  player = new YT.Player("youtube-player", {
    width: "100%",
    height: "100%",
    videoId: videoId,

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
}


/**
 * 播放器準備完成。
 */
function onPlayerReady() {
  playerReady = true;

  playerStatus.textContent =
    "播放器已就緒，可以開始練習。";

  updatePlayButton();
  updateTimeDisplay();

  // 每 100 毫秒同步一次歌詞。
  if (syncTimer === null) {
    syncTimer = window.setInterval(syncLyrics, 100);
  }
}


/**
 * YouTube 播放狀態改變。
 */
function onPlayerStateChange(event) {
  currentPlayerState = event.data;

  updatePlayButton();
  updateTimeDisplay();

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
 */
function onPlayerError(event) {
  const messages = {
    2: "影片 ID 無效，請檢查設定。",
    5: "影片無法使用目前的 HTML5 播放器播放。",
    100: "找不到影片，或影片已被移除。",
    101: "影片擁有者不允許嵌入播放。",
    150: "影片擁有者不允許嵌入播放。",
    153: "播放器缺少必要的來源或 HTTP Referer 資訊。請透過本機 HTTP 伺服器開啟網站。"
  };

  playerStatus.textContent =
    messages[event.data] ||
    `YouTube 播放器發生錯誤（${event.data}）。`;
}


/**
 * 更新播放／暫停按鈕。
 */
function updatePlayButton() {
  if (
    playerReady &&
    currentPlayerState === YT.PlayerState.PLAYING
  ) {
    playButton.textContent = "Ⅱ";
    playButton.setAttribute("aria-label", "暫停影片");
  } else {
    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "播放影片");
  }
}


// ======================================================
// 8. 手動切換 YouTube 影片
// ======================================================

videoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const videoId = extractVideoId(videoUrlInput.value);

  if (!videoId) {
    playerStatus.textContent =
      "無法識別影片，請輸入有效的 YouTube 網址或影片 ID。";
    return;
  }

  currentVideoId = videoId;

  // 如果是透過表單切換影片，更新目前版本的影片設定，
  // 避免返回列表後再進入同一版本時使用舊 ID。
  if (currentSong) {
    if (currentVersion === "normal") {
      currentSong.normalVideoId = videoId;
    } else {
      currentSong.advancedVideoId = videoId;
    }
  }

  videoUrlInput.value = videoId;

  // 切換影片後重設同步狀態。
  activeLyricIndex = -1;
  lastScrolledIndex = -1;

  ensureYouTubePlayer(videoId);
});


// ======================================================
// 9. 播放控制按鈕
// ======================================================

playButton.addEventListener("click", function () {
  if (!playerReady || !player) {
    playerStatus.textContent = "播放器仍在載入，請稍候。";
    return;
  }

  if (currentPlayerState === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});


backButton.addEventListener("click", function () {
  if (!playerReady || !player) return;

  const time = player.getCurrentTime() || 0;

  player.seekTo(Math.max(0, time - 5), true);
});


forwardButton.addEventListener("click", function () {
  if (!playerReady || !player) return;

  const time = player.getCurrentTime() || 0;
  const duration = player.getDuration() || 0;

  player.seekTo(
    Math.min(duration, time + 5),
    true
  );
});


// ======================================================
// 10. 播放進度條
// ======================================================

seekBar.addEventListener("pointerdown", function () {
  isSeeking = true;
});


seekBar.addEventListener("input", function () {
  if (!playerReady || !player) return;

  const duration = player.getDuration() || 0;
  const previewTime = Number(seekBar.value) / 1000 * duration;

  timeDisplay.textContent =
    `${formatTime(previewTime)} / ${formatTime(duration)}`;
});


function finishSeeking() {
  if (!isSeeking || !playerReady || !player) return;

  isSeeking = false;

  const duration = player.getDuration() || 0;
  const ratio = Number(seekBar.value) / 1000;

  player.seekTo(ratio * duration, true);

  syncLyrics();
}


seekBar.addEventListener("pointerup", finishSeeking);
seekBar.addEventListener("pointercancel", finishSeeking);
seekBar.addEventListener("change", finishSeeking);


// ======================================================
// 11. 載入目前歌曲的歌詞
// ======================================================

/**
 * 根據目前選取的版本，取得正確的歌詞陣列。
 */
function getLyricsForCurrentVersion() {
  if (!currentSong) {
    return [];
  }

  return currentVersion === "normal"
    ? currentSong.normalLyrics
    : currentSong.advancedLyrics;
}


/**
 * 切換歌曲或版本時，恢復該歌曲設定中的歌詞。
 *
 * 如果使用者曾匯入自己的 LRC，
 * 返回列表再重新進入時會載入原先設定的歌詞資料。
 */
function restoreCurrentSongLyrics() {
  if (!currentSong) return;

  const originalLyrics = getLyricsForCurrentVersion();

  setCurrentLyrics(originalLyrics, {
    title: currentSong.title,
    subtitle: currentVersion === "normal"
      ? "普通版 · 應援練習"
      : "進階版 · 應援練習"
  });

  lyricsStatus.textContent =
    `已載入「${currentSong.title}」的${
      currentVersion === "normal" ? "普通版" : "進階版"
    }歌詞。`;
}


/**
 * 設定目前播放頁使用的歌詞。
 */
function setCurrentLyrics(items, metadata = {}) {
  currentLyrics = items
    .filter(function (item) {
      return (
        Number.isFinite(item.time) &&
        item.time >= 0 &&
        typeof item.text === "string" &&
        item.text.trim().length > 0
      );
    })
    .map(function (item) {
      return {
        time: item.time,
        text: item.text.trim()
      };
    })
    .sort(function (a, b) {
      return a.time - b.time;
    });

  activeLyricIndex = -1;
  lastScrolledIndex = -1;

  lyricsSongTitle.textContent = metadata.title || "歌曲名稱";
  lyricsSongSubtitle.textContent = metadata.subtitle || "應援練習";

  lyricsCount.textContent = `${currentLyrics.length} LINES`;

  renderLyrics();
  syncLyrics();
}


// ======================================================
// 12. 產生可點擊的歌詞
// ======================================================

function renderLyrics() {
  const fragment = document.createDocumentFragment();

  currentLyrics.forEach(function (item, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "lyric-line";
    button.dataset.index = String(index);

    const textNode = document.createElement("span");
    textNode.textContent = item.text;

    const timeNode = document.createElement("span");
    timeNode.className = "lyric-time";
    timeNode.textContent = formatTime(item.time);

    button.append(textNode, timeNode);

    // 點擊歌詞，跳至對應影片時間。
    button.addEventListener("click", function () {
      seekToLyric(index);
    });

    fragment.appendChild(button);
  });

  lyricsList.replaceChildren(fragment);
}


/**
 * 點擊歌詞後跳至該句開始的時間。
 */
function seekToLyric(index) {
  if (!playerReady || !player) {
    lyricsStatus.textContent =
      "播放器尚未就緒，請稍候再試。";
    return;
  }

  if (index < 0 || index >= currentLyrics.length) return;

  const item = currentLyrics[index];

  player.seekTo(item.time, true);

  activeLyricIndex = index;

  updateActiveLyric(index, true);
}


// ======================================================
// 13. LRC 歌詞檔解析
// ======================================================

/**
 * 支援以下 LRC 格式：
 *
 * [ti:歌曲名稱]
 * [ar:歌手名稱]
 * [00:12.50]第一句歌詞
 * [01:02.25]第二句歌詞
 * [00:10.00][00:20.00]同一句歌詞
 *
 * 支援小數點及冒號格式的時間標籤。
 */
function parseLRC(content) {
  const result = [];
  const metadata = {};

  const lines = content
    .replace(/^\uFEFF/, "")
    .replace(/\r\n?/g, "\n")
    .split("\n");

  const timestampRegex =
    /\[(\d{1,3}):([0-5]\d)(?:[.:](\d{1,3}))?\]/g;

  const metadataRegex =
    /^\[([a-zA-Z]+):\s*(.*?)\]\s*$/;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) continue;

    const metaMatch = line.match(metadataRegex);

    if (metaMatch) {
      metadata[metaMatch[1].toLowerCase()] =
        metaMatch[2].trim();

      continue;
    }

    const timestamps = [];
    let match;

    timestampRegex.lastIndex = 0;

    while ((match = timestampRegex.exec(line)) !== null) {
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      const fraction = match[3] || "";

      const fractionSeconds = fraction
        ? Number("0." + fraction)
        : 0;

      timestamps.push(
        minutes * 60 + seconds + fractionSeconds
      );
    }

    if (timestamps.length === 0) continue;

    const text = line
      .replace(timestampRegex, "")
      .trim();

    if (!text) continue;

    timestamps.forEach(function (time) {
      result.push({ time, text });
    });
  }

  result.sort(function (a, b) {
    return a.time - b.time;
  });

  return {
    lyrics: result,
    metadata: metadata
  };
}


// ======================================================
// 14. 匯入 LRC 檔案
// ======================================================

lrcFileInput.addEventListener("change", async function (event) {
  const file = event.target.files?.[0];

  if (!file) return;

  const token = ++fileLoadToken;

  if (!file.name.toLowerCase().endsWith(".lrc")) {
    lyricsStatus.textContent =
      "請選擇副檔名為 .lrc 的歌詞檔。";

    lrcFileInput.value = "";
    return;
  }

  try {
    const content = await file.text();

    // 避免舊檔案較晚讀取完成，覆蓋新檔案。
    if (token !== fileLoadToken) return;

    const parsed = parseLRC(content);

    if (parsed.lyrics.length === 0) {
      lyricsStatus.textContent =
        "找不到有效歌詞，請檢查 LRC 的時間標籤。";
      return;
    }

    const fileTitle = file.name.replace(/\.lrc$/i, "");

    setCurrentLyrics(parsed.lyrics, {
      title: parsed.metadata.ti || fileTitle,
      subtitle: parsed.metadata.ar ||
        (currentVersion === "normal" ? "普通版" : "進階版")
    });

    lyricsStatus.textContent =
      `已匯入 ${file.name}，共 ${parsed.lyrics.length} 句歌詞。`;

  } catch (error) {
    console.error("LRC 讀取失敗：", error);

    lyricsStatus.textContent =
      "讀取失敗，請檢查檔案格式。";

  } finally {
    if (token === fileLoadToken) {
      lrcFileInput.value = "";
    }
  }
});


// 恢復目前歌曲及版本的內建歌詞。
restoreSongLyricsButton.addEventListener("click", function () {
  fileLoadToken++;
  restoreCurrentSongLyrics();
});


// ======================================================
// 15. 歌詞同步：依影片時間找出目前歌詞
// ======================================================

/**
 * 使用二分搜尋法，找出播放時間之前的最後一句歌詞。
 */
function findActiveLyricIndex(time) {
  let left = 0;
  let right = currentLyrics.length - 1;
  let answer = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (currentLyrics[middle].time <= time) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}


/**
 * 定期同步影片時間、進度條和歌詞高亮。
 */
function syncLyrics() {
  if (!playerReady || !player) return;

  const currentTime = player.getCurrentTime() || 0;
  const duration = player.getDuration() || 0;

  updateTimeDisplay();

  // 更新進度條，但不干擾使用者拖曳。
  if (!isSeeking && duration > 0) {
    seekBar.value = String(
      Math.round((currentTime / duration) * 1000)
    );
  }

  const index = findActiveLyricIndex(currentTime);

  if (index !== activeLyricIndex) {
    activeLyricIndex = index;

    updateActiveLyric(index, false);
  }
}


/**
 * 更新歌詞樣式及自動滾動。
 */
function updateActiveLyric(index, forceScroll) {
  const lines = lyricsList.querySelectorAll(".lyric-line");

  lines.forEach(function (line, lineIndex) {
    line.classList.toggle("active", lineIndex === index);

    line.classList.toggle(
      "past",
      index >= 0 && lineIndex < index
    );

    if (lineIndex === index) {
      line.setAttribute("aria-current", "true");
    } else {
      line.removeAttribute("aria-current");
    }
  });

  if (index < 0 || !lines[index]) return;

  if (forceScroll || lastScrolledIndex !== index) {
    lines[index].scrollIntoView({
      behavior: forceScroll ? "auto" : "smooth",
      block: "center"
    });

    lastScrolledIndex = index;
  }
}


// ======================================================
// 16. 更新播放時間顯示
// ======================================================

function updateTimeDisplay() {
  if (!playerReady || !player) return;

  const current = player.getCurrentTime() || 0;
  const duration = player.getDuration() || 0;

  timeDisplay.textContent =
    `${formatTime(current)} / ${formatTime(duration)}`;
}


// ======================================================
// 17. 初始化網站
// ======================================================

// 進入網站時只顯示歌曲列表。
// 不會自動播放影片，也不會立即載入 YouTube API。
renderSongList();

homePage.hidden = false;
playerPage.hidden = true;
