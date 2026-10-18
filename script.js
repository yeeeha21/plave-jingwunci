
/* =========================================================
   K-POP Karaoke Player
   - 每首歌支援普通版 / 進階版
   - 每個版本有獨立 videoId 與 lyrics
   - 支援多色 segments
   - 支援逐字 start / end 時間
   - YouTube IFrame Player
   - 支援 LRC 匯入與還原目前版本歌詞
   ========================================================= */

/* =========================================================
   1. 歌曲資料
   請在 normal / advanced 中分別填入影片 ID 和歌詞。
   所有時間都以影片開頭為 0 秒。
   ========================================================= */

const SONGS = [
  {
    id: 1,
    title: "Wait for you",
    description: "",
    normal: {
      videoId: "IYojNEdcvbg",
      lyrics: [
           {
            time: 0.19,
            segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Whoa-oa, Whoa", start: 0.19, end: 0.23 }
                ]
              }
            ]
           },
           {
            time: 0.25,
            segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Whoa-oa, Whoa", start: 0.25, end: 0.29 }
                ]
              }
            ]
           },
           {
            time: 0.30,
            segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "매일 이렇게 난 늘 혼잣말을 해 Always\n每個日子裏 我總是自言自語 Always", start: 0.30, end: 0.37 },
                ]
              }
            ]
           },
           {
            time: 0.39,
            segments: [
            {
              color: "#ff962d",
              words: [
                { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 0.39, end: 0.40 }
                ]
               }
             ]
           },
           {
            time: 0.40,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Hello, 요즘 어때\nHello，過得好嗎", start: 0.40, end: 0.42 }
              ]
             }
            ]
           },
           {
            time: 0.42,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "그래 여전히 널 그리곤 해\n是的，我依然在思念你", start: 0.42, end: 0.45 }
              ]
             }
            ]
           },
           {
            time: 0.45,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                { text: "수 백 번씩 준비한 birthday\n準備無數次的 birthday", start: 0.45, end: 0.47 }
              ]
            }
           ]
          },
          {
            time: 0.47,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "아무 일도 없이 지나간 걸 Hello\n就這樣無聲無息地過去 Hello", start: 0.47, end: 0.49 }
              ]
             }
            ]
           },
           {
            time: 0.51,
            segments: [
            {
              color: "#ffafcf",
              words: [
                { text: "이 말을 못 하고 애써\n我未能對你說", start: 0.51, end: 0.52 }
              ]
             }
            ]
           },
           {
            time: 0.53,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "난 무심한 척 너를 지나쳐갔어 oh-oh, uh-oh\n故意若無其事地與你擦肩而過 oh-oh uh-oh", start: 0.53, end: 0.59 }
               ]
              }
            ]
           },
           {
            time: 1.00,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "절대 \njer嗲\n我一", start: 1.00, end: 1.07 }
               ]
              },
              {
               color: "#8bc1ff",
               words:[
                  { text: "난 어울리지 않을 거란 \n \n直告訴自己根本配不", start: 1.02, end: 1.07 }
               ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "말로\n埋嬲\n上你", start: 1.05, end: 1.07 }
              ]
             }
            ]
          },
          {
            time: 1.07,
            segments: [
             {
              color: "#8bc1ff",
              words:[
                { text: "내 감정을 숨겼어\n隱藏自己的感情", start: 1.07, end: 1.09 }
               ]
              }
             ]
           },
           {
            time: 1.10,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "별 의미가 없잖아\n一切變得沒意義", start: 1.10, end: 1.12 }
              ]
             }
            ]
           },
           {
            time: 1.12,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "널 향한 나의 맘이 점점 커져서\n我的心為你傾倒 如排山倒海", start: 1.12, end: 1.18 }
              ]
             }
            ]
           },
           {
            time: 1.19,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 1.19, end: 1.21 }
              ]
             }
            ]
           },
           {
            time: 1.21,
            segments: [
             {
              color: "#cfa7eb",
              words:[
                { text: "너의 그곳에 내가 닿을 수 있게\n在你的左右讓我觸及得到你", start: 1.21, end: 1.23 }
              ]
             }
            ]
           },
           {
            time: 1.24,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 1.24, end: 1.25 }
              ]
             }
            ]
           },
           {
            time: 1.26,
            segments: [
             {
              color: "#cfa7eb",
              words:[
                { text: "너의 곁에 내가 숨쉴 수 있길\n在你身邊讓我感受到呼吸", start: 1.26, end: 1.29 }
              ]
             }
            ]
           },
           {
            time: 1.30,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "매일 이렇게 난 늘 혼잣말을 해\n未姨呢(ne1)茄 na攣 胸炸 媽攣呢\n每個日子裏我總是自言自語", start: 1.30, end: 1.39 }
               ]
              },
              {
               color: "#cfa7eb",
               words: [
                 { text: "Always\n \nAlways", start: 1.35, end: 1.39 }
              ]
             }
            ]
           },
           {
            time: 1.40,
            segments: [
             {
              color: "#ff962d",
              words:[
                { text: "Whoa-oa, whoa", start: 1.40, end: 1.42 }
               ]
              }
             ]
           },
           {
            time: 1.43,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "Wait for you", start: 1.43, end: 1.45 }
              ]
             }
            ]
           },
           {
            time: 1.45,
            segments: [
             {
              color: "#ff962d",
              words:[
                { text: "Whoa-oa", start: 1.45, end: 1.47 }
              ]
             }
            ]
           },
           {
            time: 1.48,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "Yeah wait for you", start: 1.48, end: 1.50 }
              ]
             }
            ]
           },
           {
            time: 1.50,
            segments: [
              {
               color: "#ff962d",
               words: [
                 { text: "매일 이렇게 난 늘 혼잣말을 해\n未姨呢(ne1)囉茄 na攣 胸炸 媽攣呢\n每個日子裏我總是自言自語", start: 1.50, end: 1.59 }
               ]
              },
              {
               color: "#8bc1ff",
               words: [
                 { text: "Always\n \nAlways", start: 1.55, end: 1.59 }
              ]
             }
            ]
           },
           {
            time: 1.59,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 1.59, end: 2.01 }
              ]
             }
            ]
           },
           {
            time: 2.02,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "꽤나 오랜만인 것 같아\n似乎好久沒見到你", start: 2.02, end: 2.03 }
                ]
               }
             ]
           },
           {
            time: 2.03,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "떠오르는 건 오직 잘 지냈냐는 \n \n只會想到 你過得好不好 ", start: 2.02, end: 2.05 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "말 밖에\nmy拍嘅\n這句話", start: 2.04, end: 2.05 }
                 ]
               }
             ]
           },
           {
            time: 2.05,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "아무 소식 없는 널 같은 자리에서 기다렸어\n沒有任何消息 我一直留在原處等待著你", start: 2.05, end: 2.08 }
              ]
             }
            ]
           },
           {
            time: 2.08,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "몇 번의 계절이 지나도 \n \n走過好幾個季節也", start: 2.08, end: 2.10 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "너 밖엔\n囉拍嘅\n只有你", start: 2.09, end: 2.10 }
              ]
             }
            ]
           },
           {
            time: 2.10,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "생각나지 않고 아무것도 보이지가 않아\n我心裏只有你 我的眼裏也只有你", start: 2.10, end: 2.13 }
               ]
              }
            ]
           },
           {
            time: 2.13,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "아무리 노력해 봐야 제자리만 맴돌아\n不管我再怎麼努力 只會在原地打轉", start: 2.13, end: 2.15 }
               ]
              }
            ]
           },
           {
            time: 2.15,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "시작이 다르더라도 괜찮아\n在不同時間點開始也可以", start: 2.15, end: 2.17 }
                ]
               }
             ]
           },
           {
            time: 2.17,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "난 항상 출발선에 멈춰 있으니까\n因為我始終停留在起跑線", start: 2.17, end: 2.20 }
             ]
            }
          ]
         },
         {       
    advanced: {
      videoId: "T_gJpnjJsnk",
      lyrics: [
        {
          time: 1.00,
          segments: [
            {
              color: "#FF6FAE",
              words: [
                { text: "星", start: 1.00, end: 1.08 },
                { text: "光", start: 1.08, end: 1.10 }
              ]
            },
            {
              color: "#9B7BFF",
              words: [
                { text: "閃", start: 1.10, end: 1.15 },
                { text: "耀", start: 1.15, end: 1.20 }
              ]
            }
          ]
        }
      ]
    }
  },
  }
];

/* =========================================================
   2. 狀態與 DOM
   ========================================================= */

let currentSong = SONGS[0];
let currentVersion = "normal";
let currentVersionData = currentSong.normal;

let currentLyrics = [];
let currentVideoTime = 0;

let youtubePlayer = null;
let playerReady = false;
let syncTimer = null;

let activeLineIndex = -1;
let lastScrolledLineIndex = -1;

const $ = (id) => document.getElementById(id);

const el = {
  homePage: $("home-page"),
  playerPage: $("player-page"),
  songList: $("song-list"),
  backToList: $("back-to-list"),
  homeLogo: $("home-logo"),

  currentSongTitle: $("current-song-title"),
  currentSongSubtitle: $("current-song-subtitle"),
  playerBadge: $("player-badge"),

  videoForm: $("video-form"),
  videoUrl: $("video-url"),
  playerStatus: $("player-status"),

  playButton: $("play-button"),
  backButton: $("back-button"),
  forwardButton: $("forward-button"),
  timeDisplay: $("time-display"),
  seekBar: $("seek-bar"),

  lyricsSongTitle: $("lyrics-song-title"),
  lyricsSongSubtitle: $("lyrics-song-subtitle"),
  lyricsCount: $("lyrics-count"),
  lyricsStatus: $("lyrics-status"),
  lyricsList: $("lyrics-list"),

  lrcFile: $("lrc-file"),
  restoreSongLyrics: $("restore-song-lyrics"),
  songTotal: $("song-total")
};

/* =========================================================
   3. 通用工具
   ========================================================= */

function formatTime(seconds) {
  const value = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(value / 60);
  const remaining = Math.floor(value % 60);

  return `${minutes}:${String(remaining).padStart(2, "0")}`;
}

function setText(element, value) {
  if (element) {
    element.textContent = value ?? "";
  }
}

function setStatus(message) {
  setText(el.playerStatus, message);
}

function setLyricsStatus(message) {
  setText(el.lyricsStatus, message);
}

function escapeColor(color) {
  return /^#[0-9a-fA-F]{3,8}$/.test(color || "")
    ? color
    : "#FF6FAE";
}

function getVideoId(input) {
  const value = String(input || "").trim();

  // 允許直接輸入 YouTube 影片 ID。
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com"
    ) {
      const videoId = url.searchParams.get("v");

      if (videoId) return videoId;

      const parts = url.pathname.split("/").filter(Boolean);
      const markerIndex = parts.findIndex((part) =>
        ["embed", "shorts", "live"].includes(part)
      );

      if (markerIndex >= 0) {
        return parts[markerIndex + 1] || "";
      }
    }
  } catch {
    // 無效網址會在呼叫端提示。
  }

  return "";
}

/* =========================================================
   4. 歌詞資料整理
   保留多色 segments 與逐字 start / end。
   也支援 { time, text } 形式的逐行歌詞。
   ========================================================= */

function normalizeLyrics(lyrics) {
  if (!Array.isArray(lyrics)) return [];

  const normalized = lyrics.map((line, originalIndex) => {
    const segments = Array.isArray(line.segments)
      ? line.segments
      : [];

    const normalizedSegments = segments
      .map((segment) => ({
        color: escapeColor(segment.color),
        words: Array.isArray(segment.words)
          ? segment.words
              .filter(
                (word) =>
                  word &&
                  typeof word.text === "string"
              )
              .map((word) => ({
                text: word.text,
                start: Number(word.start),
                end: Number(word.end)
              }))
          : []
      }))
      .filter((segment) => segment.words.length > 0);

    const plainText =
      typeof line.text === "string"
        ? line.text
        : normalizedSegments
            .flatMap((segment) =>
              segment.words.map((word) => word.text)
            )
            .join("");

    const allWords = normalizedSegments.flatMap(
      (segment) => segment.words
    );

    const validStarts = allWords
      .filter((word) => Number.isFinite(word.start))
      .map((word) => word.start);

    const firstWordStart =
      validStarts.length > 0
        ? Math.min(...validStarts)
        : Infinity;

    const requestedTime = Number(line.time);

    const time = Number.isFinite(requestedTime)
      ? requestedTime
      : firstWordStart !== Infinity
        ? firstWordStart
        : 0;

    const hasWordTiming = allWords.some(
      (word) =>
        Number.isFinite(word.start) &&
        Number.isFinite(word.end) &&
        word.end > word.start
    );

    return {
      time: Math.max(0, time),
      text: plainText,
      segments: normalizedSegments,
      hasWordTiming,
      originalIndex
    };
  });

  return normalized.sort((a, b) => a.time - b.time);
}

/* =========================================================
   5. 歌曲列表
   每首歌有普通版與進階版兩個按鈕。
   ========================================================= */

function renderSongList() {
  if (!el.songList) return;

  el.songList.replaceChildren();

  SONGS.forEach((song) => {
    const card = document.createElement("article");
    card.className = "song-card";

    const heading = document.createElement("div");
    heading.className = "song-card-heading";

    const title = document.createElement("div");
    title.className = "song-card-title";
    title.textContent = song.title;

    heading.appendChild(title);

    const description = document.createElement("div");
    description.className = "song-card-description";
    description.textContent = song.description || "";

    const versionButtons = document.createElement("div");
    versionButtons.className = "song-version-buttons";

    const normalButton = document.createElement("button");
    normalButton.type = "button";
    normalButton.className = "song-version-button normal-version";
    normalButton.textContent = "普通版";
    normalButton.addEventListener("click", () => {
      openSong(song.id, "normal");
    });

    const advancedButton = document.createElement("button");
    advancedButton.type = "button";
    advancedButton.className =
      "song-version-button advanced-version";
    advancedButton.textContent = "進階版";
    advancedButton.addEventListener("click", () => {
      openSong(song.id, "advanced");
    });

    versionButtons.append(normalButton, advancedButton);
    card.append(heading, description, versionButtons);
    el.songList.appendChild(card);
  });

  setText(el.songTotal, String(SONGS.length));
}

/* =========================================================
   6. 頁面切換與版本載入
   ========================================================= */

function showHomePage() {
  if (el.homePage) el.homePage.hidden = false;
  if (el.playerPage) el.playerPage.hidden = true;
}

function showPlayerPage() {
  if (el.homePage) el.homePage.hidden = true;
  if (el.playerPage) el.playerPage.hidden = false;
}

function getVersionLabel(version) {
  return version === "advanced" ? "進階版" : "普通版";
}

function openSong(songId, version = "normal") {
  const song = SONGS.find((item) => item.id === songId);
  if (!song) return;

  const selectedVersion =
    version === "advanced" ? "advanced" : "normal";

  currentSong = song;
  currentVersion = selectedVersion;

  currentVersionData =
    song[selectedVersion] || { videoId: "", lyrics: [] };

  currentLyrics = normalizeLyrics(currentVersionData.lyrics);

  currentVideoTime = 0;
  activeLineIndex = -1;
  lastScrolledLineIndex = -1;

  const versionLabel = getVersionLabel(currentVersion);

  setText(el.currentSongTitle, song.title);
  setText(el.currentSongSubtitle, song.description || "");
  setText(el.lyricsSongTitle, song.title);
  setText(
    el.lyricsSongSubtitle,
    `${song.description || ""}${song.description ? " · " : ""}${versionLabel}`
  );
  setText(el.playerBadge, versionLabel);

  if (el.videoUrl) {
    el.videoUrl.value = currentVersionData.videoId || "";
  }

  renderLyrics();
  showPlayerPage();

  if (currentVersionData.videoId) {
    loadVideo(currentVersionData.videoId);
  } else {
    // 避免沒有設定影片 ID 時仍播放上一首歌。
    if (playerReady && youtubePlayer) {
      youtubePlayer.stopVideo();
    }

    updateLyrics(0);
    setStatus(
      `${versionLabel}尚未設定 YouTube 影片 ID。請輸入網址或 ID。`
    );
  }
}

function returnToSongList() {
  showHomePage();
}

/* =========================================================
   7. 歌詞顯示
   ========================================================= */

function getLineStart(line) {
  return Number.isFinite(line.time) ? line.time : 0;
}

function renderLyrics() {
  if (!el.lyricsList) return;

  el.lyricsList.replaceChildren();

  activeLineIndex = -1;
  lastScrolledLineIndex = -1;

  setText(el.lyricsCount, `${currentLyrics.length} 句`);

  if (currentLyrics.length === 0) {
    const empty = document.createElement("p");
    empty.className = "lyrics-empty";
    empty.textContent =
      "這個版本還沒有歌詞。請在 SONGS 中對應版本的 lyrics 填入資料。";

    el.lyricsList.appendChild(empty);
    setLyricsStatus("尚未設定歌詞");
    return;
  }

  currentLyrics.forEach((line, lineIndex) => {
    const lineElement = document.createElement("div");

    lineElement.className = "lyric-line";
    lineElement.dataset.lineIndex = String(lineIndex);
    lineElement.tabIndex = 0;
    lineElement.setAttribute("role", "button");
    lineElement.setAttribute(
      "aria-label",
      `跳到 ${formatTime(getLineStart(line))}：${line.text}`
    );

    if (line.segments.length > 0) {
      line.segments.forEach((segment) => {
        const segmentElement = document.createElement("span");
        segmentElement.className = "lyric-segment";
        segmentElement.style.setProperty(
          "--lyric-color",
          segment.color
        );

        segment.words.forEach((word) => {
          const wordElement = document.createElement("span");

          wordElement.className = "lyric-word";
          wordElement.textContent = word.text;

          const hasValidTiming =
            Number.isFinite(word.start) &&
            Number.isFinite(word.end) &&
            word.end > word.start;

          if (hasValidTiming) {
            wordElement.dataset.start = String(word.start);
            wordElement.dataset.end = String(word.end);
            wordElement.title =
              `${word.text} (${word.start.toFixed(2)}s–${word.end.toFixed(2)}s)`;
          } else {
            wordElement.classList.add("word-untimed");
          }

          wordElement.addEventListener("click", (event) => {
            event.stopPropagation();

            if (hasValidTiming) {
              seekTo(word.start);
            } else {
              seekTo(getLineStart(line));
            }
          });

          segmentElement.appendChild(wordElement);
        });

        lineElement.appendChild(segmentElement);
      });
    } else {
      // LRC 或逐行文字：沒有逐字時間，只能整句同步。
      lineElement.textContent = line.text || "♪";
      lineElement.classList.add("lyric-line-only");
    }

    lineElement.addEventListener("click", () => {
      seekTo(getLineStart(line));
    });

    lineElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        seekTo(getLineStart(line));
      }
    });

    el.lyricsList.appendChild(lineElement);
  });

  const hasWordTiming = currentLyrics.some(
    (line) => line.hasWordTiming
  );

  setLyricsStatus(
    hasWordTiming
      ? `${getVersionLabel(currentVersion)} · 逐字同步已啟用`
      : `${getVersionLabel(currentVersion)} · 目前只有逐行時間`
  );

  updateLyrics(currentVideoTime);
}

/* =========================================================
   8. 逐句與逐字高亮
   ========================================================= */

function findActiveLineIndex(time) {
  let found = -1;

  for (let i = 0; i < currentLyrics.length; i += 1) {
    if (getLineStart(currentLyrics[i]) <= time) {
      found = i;
    } else {
      break;
    }
  }

  return found;
}

function updateLyrics(time) {
  if (!el.lyricsList) return;

  currentVideoTime = Math.max(0, Number(time) || 0);

  const lineElements =
    el.lyricsList.querySelectorAll(".lyric-line");

  const nextActiveLineIndex =
    findActiveLineIndex(currentVideoTime);

  lineElements.forEach((lineElement, index) => {
    const isActive = index === nextActiveLineIndex;

    lineElement.classList.toggle("active", isActive);
    lineElement.classList.toggle(
      "past",
      index < nextActiveLineIndex
    );
    lineElement.classList.toggle(
      "upcoming",
      index > nextActiveLineIndex
    );

    const wordElements =
      lineElement.querySelectorAll(".lyric-word");

    wordElements.forEach((wordElement) => {
      const start = Number(wordElement.dataset.start);
      const end = Number(wordElement.dataset.end);

      const hasTiming =
        Number.isFinite(start) &&
        Number.isFinite(end) &&
        end > start;

      const isWordActive =
        hasTiming &&
        currentVideoTime >= start &&
        currentVideoTime < end;

      const isWordPast =
        hasTiming && currentVideoTime >= end;

      wordElement.classList.toggle(
        "word-active",
        isWordActive
      );
      wordElement.classList.toggle(
        "word-past",
        isWordPast
      );
      wordElement.classList.toggle(
        "word-upcoming",
        hasTiming && currentVideoTime < start
      );
    });
  });

  // 只在目前句子改變時捲動，避免每次同步都重新捲動。
  if (
    nextActiveLineIndex >= 0 &&
    nextActiveLineIndex !== lastScrolledLineIndex
  ) {
    const activeElement = lineElements[nextActiveLineIndex];

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    lastScrolledLineIndex = nextActiveLineIndex;
  }

  activeLineIndex = nextActiveLineIndex;

  setText(el.timeDisplay, formatTime(currentVideoTime));

  if (el.seekBar && playerReady && youtubePlayer) {
    const duration = Number(youtubePlayer.getDuration()) || 0;

    if (duration > 0) {
      el.seekBar.max = String(duration);
      el.seekBar.value = String(currentVideoTime);
    }
  }
}

/* =========================================================
   9. YouTube IFrame API
   ========================================================= */

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) {
    createYouTubePlayer();
    return;
  }

  if (
    document.querySelector(
      'script[data-youtube-iframe-api="true"]'
    )
  ) {
    return;
  }

  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  script.async = true;
  script.dataset.youtubeIframeApi = "true";

  document.head.appendChild(script);
}

window.onYouTubeIframeAPIReady = function () {
  createYouTubePlayer();
};

function createYouTubePlayer() {
  if (!window.YT || !window.YT.Player || !$("youtube-player")) {
    return;
  }

  if (youtubePlayer) return;

  youtubePlayer = new YT.Player("youtube-player", {
    width: "100%",
    height: "360",
    videoId: currentVersionData.videoId || "",
    playerVars: {
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: () => {
        playerReady = true;

        const videoId = currentVersionData.videoId;

        if (videoId) {
          youtubePlayer.cueVideoById(videoId);
          setStatus(
            `${getVersionLabel(currentVersion)}已載入，準備播放。`
          );
        } else {
          setStatus("請先為目前版本設定 YouTube 影片 ID。");
        }

        startSyncTimer();
      },

      onStateChange: (event) => {
        if (!window.YT) return;

        if (event.data === YT.PlayerState.PLAYING) {
          setStatus(
            `${getVersionLabel(currentVersion)}播放中`
          );
        } else if (event.data === YT.PlayerState.PAUSED) {
          setStatus("已暫停");
        } else if (event.data === YT.PlayerState.ENDED) {
          setStatus("播放完畢");
        } else if (event.data === YT.PlayerState.BUFFERING) {
          setStatus("影片載入中…");
        }
      },

      onError: (event) => {
        setStatus(
          `YouTube 播放器錯誤（${event.data}），請確認影片 ID 或影片是否可播放。`
        );
      }
    }
  });
}

function loadVideo(videoId) {
  if (!videoId) {
    setStatus("請輸入有效的 YouTube 網址或影片 ID。");
    return;
  }

  // 只更新目前選取版本的影片 ID。
  currentVersionData.videoId = videoId;

  if (el.videoUrl) {
    el.videoUrl.value = videoId;
  }

  currentVideoTime = 0;
  activeLineIndex = -1;
  lastScrolledLineIndex = -1;

  updateLyrics(0);

  if (!playerReady || !youtubePlayer) {
    loadYouTubeApi();
    setStatus("正在準備 YouTube 播放器…");
    return;
  }

  youtubePlayer.loadVideoById(videoId);

  setStatus(
    `正在載入${getVersionLabel(currentVersion)}…`
  );
}

function startSyncTimer() {
  if (syncTimer) {
    clearInterval(syncTimer);
  }

  syncTimer = setInterval(() => {
    if (!playerReady || !youtubePlayer) return;

    try {
      const time =
        Number(youtubePlayer.getCurrentTime()) || 0;

      updateLyrics(time);
    } catch {
      // 忽略播放器尚未就緒時的同步錯誤。
    }
  }, 50);
}

function playPause() {
  if (!playerReady || !youtubePlayer) {
    setStatus("請先載入 YouTube 影片。");
    return;
  }

  const state = youtubePlayer.getPlayerState();

  if (state === YT.PlayerState.PLAYING) {
    youtubePlayer.pauseVideo();
  } else {
    youtubePlayer.playVideo();
  }
}

function seekTo(seconds) {
  const target = Math.max(0, Number(seconds) || 0);

  if (playerReady && youtubePlayer) {
    youtubePlayer.seekTo(target, true);
  }

  currentVideoTime = target;
  updateLyrics(target);
}

function seekRelative(delta) {
  const time =
    playerReady && youtubePlayer
      ? Number(youtubePlayer.getCurrentTime()) || 0
      : currentVideoTime;

  seekTo(time + delta);
}

/* =========================================================
   10. LRC 匯入
   LRC 是逐行時間格式，無法還原逐字時間。
   匯入內容只替換目前版本畫面中的歌詞；
   按「重新載入歌詞」可還原 script.js 的原始資料。
   ========================================================= */

function parseLRC(text) {
  const lines = [];
  const rawLines = String(text || "").split(/\r?\n/);

  const timestampPattern =
    /\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]/g;

  rawLines.forEach((rawLine) => {
    const matches = [...rawLine.matchAll(timestampPattern)];

    if (matches.length === 0) return;

    const lyricText = rawLine
      .replace(timestampPattern, "")
      .trim();

    if (!lyricText) return;

    matches.forEach((match) => {
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      const fractionText = match[3] || "0";
      const fraction = Number(`0.${fractionText}`);

      lines.push({
        time: minutes * 60 + seconds + fraction,
        text: lyricText,
        segments: []
      });
    });
  });

  return lines.sort((a, b) => a.time - b.time);
}

function handleLRCImport(file) {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    const parsedLyrics = parseLRC(reader.result);

    if (parsedLyrics.length === 0) {
      setLyricsStatus("無法讀取 LRC，請確認檔案格式。");
      return;
    }

    currentLyrics = normalizeLyrics(parsedLyrics);

    activeLineIndex = -1;
    lastScrolledLineIndex = -1;

    renderLyrics();

    setLyricsStatus(
      `已匯入 ${parsedLyrics.length} 句 LRC（${getVersionLabel(currentVersion)}）。目前只有逐行時間。`
    );
  };

  reader.onerror = () => {
    setLyricsStatus("讀取 LRC 檔案失敗。");
  };

  reader.readAsText(file);
}

function restoreCurrentVersionLyrics() {
  currentLyrics = normalizeLyrics(currentVersionData.lyrics);

  activeLineIndex = -1;
  lastScrolledLineIndex = -1;

  renderLyrics();

  setLyricsStatus(
    `已還原${getVersionLabel(currentVersion)}的原始歌詞資料。`
  );
}

/* =========================================================
   11. 事件綁定
   ========================================================= */

function bindEvents() {
  el.backToList?.addEventListener(
    "click",
    returnToSongList
  );

  el.homeLogo?.addEventListener(
    "click",
    returnToSongList
  );

  el.videoForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const videoId = getVideoId(el.videoUrl?.value);

    if (!videoId) {
      setStatus(
        "網址無效，請貼上 YouTube 影片網址或 11 位影片 ID。"
      );
      return;
    }

    loadVideo(videoId);
  });

  el.playButton?.addEventListener("click", playPause);

  el.backButton?.addEventListener("click", () => {
    seekRelative(-5);
  });

  el.forwardButton?.addEventListener("click", () => {
    seekRelative(5);
  });

  el.seekBar?.addEventListener("input", () => {
    seekTo(Number(el.seekBar.value));
  });

  el.lrcFile?.addEventListener("change", (event) => {
    handleLRCImport(event.target.files?.[0]);
    event.target.value = "";
  });

  el.restoreSongLyrics?.addEventListener(
    "click",
    restoreCurrentVersionLyrics
  );
}

/* =========================================================
   12. 初始化
   ========================================================= */

function init() {
  renderSongList();
  bindEvents();
  showHomePage();
  loadYouTubeApi();
}

document.addEventListener("DOMContentLoaded", init);
