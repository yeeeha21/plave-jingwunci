
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
            time: 19.6,
            segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Whoa-oa, Whoa", start: 19.6, end: 24.2 }
                ]
              }
            ]
           },
           {
            time: 24.7,
            segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Whoa-oa, Whoa", start: 24.7, end: 29.1 }
                ]
              }
            ]
           },
           {
            time: 29.7,
            segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "매일 이렇게 난 늘 혼잣말을 해 Always\n每個日子裏 我總是自言自語 Always", start: 29.9, end: 38.4 },
                ]
              }
            ]
           },
           {
            time: 38.9,
            segments: [
            {
              color: "#ff962d",
              words: [
                { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 38.9, end: 40.1 }
                ]
               }
             ]
           },
           {
            time: 40.3,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Hello, 요즘 어때\nHello，過得好嗎", start: 40.3, end: 42.4 }
              ]
             }
            ]
           },
           {
            time: 42.4,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "그래 여전히 널 그리곤 해\n是的，我依然在思念你", start: 42.4, end: 44.9 }
              ]
             }
            ]
           },
           {
            time: 45.3,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                { text: "수 백 번씩 준비한 birthday\n準備無數次的 birthday", start: 45.3, end: 47.5 }
              ]
            }
           ]
          },
          {
            time: 47.5,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "아무 일도 없이 지나간 걸 Hello\n就這樣無聲無息地過去 Hello", start: 47.5, end: 50.6 }
              ]
             }
            ]
           },
           {
            time: 51,
            segments: [
            {
              color: "#ffafcf",
              words: [
                { text: "이 말을 못 하고 애써\n我未能對你說", start: 51, end: 53 }
              ]
             }
            ]
           },
           {
            time: 53.6,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "난 무심한 척 너를 지나쳐갔어 oh-oh, uh-oh\n故意若無其事地與你擦肩而過 oh-oh uh-oh", start: 53.6, end: 59.9 }
               ]
              }
            ]
           },
           {
            time: 60.1,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "절 ", start: 60.1, end: 67 },
                 { text: "대 ", start: 61.1, end: 67 }
               ]
              },
              {
               color: "#8bc1ff",
               words:[
                  { text: "난 어울리지 않을 거란 ", start: 62.4, end: 67 }
               ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "말", start: 65.1, end: 67.2 },
                 { text: "로", start: 66.2, end: 67.2 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\njer", start: 60.1, end: 67.2 },
                { text: "嗲", start: 61.1, end: 67.2 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "埋", start: 65.1, end: 67.2 },
                 { text: "嬲", start: 66.2, end: 67.2 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "\n我", start: 60.1, end: 67.2 },
                 { text: "一", start: 61.1, end: 67.2 }
               ]
              },
              {
               color: "#8bc1ff",
               words:[
                  { text: "直告訴自己根本配不", start: 62.4, end: 67.2 }
               ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "上", start: 65.1, end: 67.2 },
                 { text: "你", start: 66.2, end: 67.2 }
              ]
             }
            ]
          },
          {
            time: 67.2,
            segments: [
             {
              color: "#8bc1ff",
              words:[
                { text: "내 감정을 숨겼어\n隱藏自己的感情", start: 67.2, end: 69.6 }
               ]
              }
             ]
           },
           {
            time: 70,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "별 의미가 없잖아\n一切變得沒意義", start: 70, end: 72.1 }
              ]
             }
            ]
           },
           {
            time: 72.5,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "널 향한 나의 맘이 점점 커져서\n我的心為你傾倒 如排山倒海", start: 72.5, end: 78.8 }
              ]
             }
            ]
           },
           {
            time: 79.2,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 79.2, end: 81.8 }
              ]
             }
            ]
           },
           {
            time: 81,
            segments: [
             {
              color: "#cfa7eb",
              words:[
                { text: "너의 그곳에 내가 닿을 수 있게\n在你的左右讓我觸及得到你", start: 81, end: 84.5 }
              ]
             }
            ]
           },
           {
            time: 84.4,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 84.4, end: 85.8 }
              ]
             }
            ]
           },
           {
            time: 86,
            segments: [
             {
              color: "#cfa7eb",
              words:[
                { text: "너의 곁에 내가 숨쉴 수 있길\n在你身邊讓我感受到呼吸", start: 86, end: 90.2 }
              ]
             }
            ]
           },
           {
            time: 90.4,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "매일 이 ", start: 90.5, end: 99 },
                 { text: "렇", start: 91.2, end: 99 },
                 { text: "게 ", start: 91.5, end: 99 },
                 { text: "난 늘 ", start: 92.4, end: 99 },
                 { text: "혼잣", start: 93.1, end: 99 },
                 { text: "말", start: 93.6, end: 99 },
                 { text: "을 ", start: 93.6, end: 99 },
                 { text: "해 ", start: 94.1, end: 99 }
               ]
              },
              {
               color: "#cfa7eb",
               words: [
                 { text: "Always", start: 94.8, end: 99 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "\n未姨呢(ne1)", start: 90.5, end: 99 },
                 { text: "囉", start: 91.2, end: 99 },
                 { text: "茄 ", start: 91.5, end: 99 },
                 { text: "na攣 ", start: 92.4, end: 99 },
                 { text: "胸炸 ", start: 93.1, end: 99 },
                 { text: "媽", start: 93.6, end: 99 },
                 { text: "攣", start: 93.6, end: 99 },
                 { text: "呢", start: 94.1, end: 99 }
               ]
              },
              {
               color: "#ff962d",
               words: [
                 { text: "\n每個日", start: 90.5, end: 99 },
                 { text: "子", start: 91.2, end: 99 },
                 { text: "裏", start: 91.5, end: 99 },
                 { text: "我總", start: 92.4, end: 99 },
                 { text: "是自", start: 93.1, end: 99 },
                 { text: "言", start: 93.6, end: 99 },
                 { text: "自", start: 93.6, end: 99 },
                 { text: "語 ", start: 94.1, end: 99 }
              ]
             },
             {
               color: "#cfa7eb",
               words: [
                 { text: "Always", start: 94.8, end: 99 }
              ]
             }
            ]
           },
           {
            time: 100.5,
            segments: [
             {
              color: "#ff962d",
              words:[
                { text: "Whoa-oa, whoa", start: 100.5, end: 103.4 }
               ]
              }
             ]
           },
           {
            time: 103.6,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "Wait for you", start: 103.6, end: 105.4 }
              ]
             }
            ]
           },
           {
            time: 104.7,
            segments: [
             {
              color: "#b81818",
              words:[
                { text: "여전히\n我總是", start: 104.7, end: 105.5 }
              ]
             }
            ]
           },
           {
            time: 105.7,
            segments: [
             {
              color: "#ff962d",
              words:[
                { text: "Whoa-oa", start: 105.7, end: 107.8 }
              ]
             }
            ]
           },
           {
            time: 107.7,
            segments: [
             {
              color: "#ffafcf",
              words:[
                { text: "Yeah wait for you", start: 107.7, end: 110.3 }
              ]
             }
            ]
           },
           {
            time: 110.5,
            segments: [
              {
              color: "#ff962d",
              words: [
                { text: "매일 이 ", start: 110.5, end: 119 },
                 { text: "렇", start: 111.5, end: 119 },
                 { text: "게 ", start: 111.7, end: 119 },
                 { text: "난 늘 ", start: 112.5, end: 119 },
                 { text: "혼잣", start: 113.2, end: 119 },
                 { text: "말", start: 113.7, end: 119 },
                 { text: "을 ", start: 114, end: 119 },
                 { text: "해 ", start: 114.3, end: 119 }
               ]
              },
              {
               color: "#8bc1ff",
               words: [
                 { text: "Always", start: 115.1, end: 119 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "\n未姨呢(ne1)", start: 110.5, end: 119 },
                 { text: "囉", start: 111.5, end: 119 },
                 { text: "茄 ", start: 111.7, end: 119 },
                 { text: "na攣 ", start: 112.5, end: 119 },
                 { text: "胸炸 ", start: 113.2, end: 119 },
                 { text: "媽", start: 113.7, end: 119 },
                 { text: "攣", start: 114, end: 119 },
                 { text: "呢", start: 114.3, end: 119 }
               ]
              },
              {
               color: "#ff962d",
               words: [
                 { text: "\n每個日", start: 110.5, end: 119 },
                 { text: "子", start: 111.2, end: 119 },
                 { text: "裏", start: 111.5, end: 119 },
                 { text: "我總", start: 112.4, end: 119 },
                 { text: "是自", start: 113.1, end: 119 },
                 { text: "言", start: 113.6, end: 119 },
                 { text: "自", start: 114, end: 119 },
                 { text: "語 ", start: 114.3, end: 119 }
              ]
             },
             {
               color: "#8bc1ff",
               words: [
                 { text: "Always", start: 115.1, end: 119 }
              ]
             }
            ]
           },
           {
            time: 119.9,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 119.9, end: 120 }
              ]
             }
            ]
           },
           {
            time: 120.9,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "꽤나 오랜만인 것 같아\n似乎好久沒見到你", start: 120.9, end: 122.8 }
                ]
               }
             ]
           },
           {
            time: 123,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "떠오르는 건 오직 잘 지냈냐는  ", start: 123, end: 125.4 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "말 ", start: 124.5, end: 125.4},
                { text: "밖", start: 124.9, end: 125.4},
                { text: "에", start: 125.1, end: 125.4}
                 ]
              },
              {
              color: "#ff962d",
              words: [
                { text: "\nmy", start: 124.5, end: 125.4},
                { text: "拍", start: 124.9, end: 125.4},
                { text: "嘅", start: 125.1, end: 125.4}
                 ]
              },
              {
              color: "#2a2a2a",
              words: [
                 { text: "\n只會想到 你過得好不好 ", start: 123, end: 125.4 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "這", start: 124.5, end: 125.4},
                 { text: "句", start: 124.9, end: 125.4},
                 { text: "話", start: 125.1, end: 125.4}
                 ]
              }
             ]
           },
           {
            time: 125.5,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "아무 소식 없는 널 같은 자리에서 기다렸어\n沒有任何消息 我一直留在原處等待著你", start: 125.5, end: 128.2 }
              ]
             }
            ]
           },
           {
            time: 128.4,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "몇 번의 계절이 지나도 ", start: 128.4, end: 130.5 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "너 ", start: 129.6, end: 130.5 },
                 { text: "밖", start: 129.8, end: 130.5 },
                 { text: "엔", start: 130.1, end: 130.5 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "\n囉", start: 129.6, end: 130.5 },
                 { text: "拍", start: 129.8, end: 130.5 },
                 { text: "嘅", start: 130.1, end: 130.5 }
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                 { text: "\n走過好幾個季節也", start: 128.4, end: 130.5 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "只", start: 129.6, end: 130.5 },
                 { text: "有", start: 129.8, end: 130.5 },
                 { text: "你", start: 130.1, end: 130.5 }
              ]
             }
            ]
           }, 
           {
            time: 130.5,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "생각나지 않고 아무것도 보이지가 않아\n我心裏只有你 我的眼裏也只有你", start: 130.5, end: 132.9 }
               ]
              }
            ]
           },
           {
            time: 132.9,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "아무리 노력해 봐야 제자리만 맴돌아\n不管我再怎麼努力 只會在原地打轉", start: 132.9, end: 135.8 }
               ]
              }
            ]
           },
           {
            time: 135.8,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "시작이 다르더라도 괜찮아\n在不同時間點開始也可以", start: 135.8, end: 137.7 }
                ]
               }
             ]
           },
           {
            time: 137.7,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "난 항상 출발선에 멈춰 있으니까\n因為我始終停留在起跑線", start: 137.7, end: 139.9 }
             ]
            }
          ]
         },
          {
            time: 140.1,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 140.1, end: 141.2 }
              ]
             }
            ]
           },
           {
            time: 142.6,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                 { text: "너의 그곳에 내가 닿을 수 있게\n在你的左右讓我觸及得到你", start: 142.6, end: 145 }
              ]
             }
            ]
           },
           {
            time: 145,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 145, end: 146.6 }
              ]
             }
            ]
           },
           {
            time: 147,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                 { text: "너의 곁에 내가 숨쉴 수 있길\n在你身邊讓我感受到呼吸", start: 147, end: 150.7 }
              ]
             }
            ]
           },
           {
            time: 151.1,
            segments: [
               {
              color: "#ff962d",
              words: [
                { text: "매일 이 ", start: 151.1, end: 159.5 },
                 { text: "렇", start: 152, end: 159.5 },
                 { text: "게 ", start: 152.2, end: 159.5 },
                 { text: "난 늘 ", start: 153, end: 159.5 },
                 { text: "혼잣", start: 153.7, end: 159.5 },
                 { text: "말", start: 154.1, end: 159.5 },
                 { text: "을 ", start: 154.5, end: 159.5 },
                 { text: "해 ", start: 154.7, end: 159.5 }
               ]
              },
              {
               color: "#cfa7eb",
               words: [
                 { text: "Always", start: 155.5, end: 159.5 }
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "\n未姨呢(ne1)", start: 151.1, end: 159.5 },
                 { text: "囉", start: 152, end: 159.5 },
                 { text: "茄 ", start: 152.2, end: 159.5 },
                 { text: "na攣 ", start: 153, end: 159.5 },
                 { text: "胸炸 ", start: 153.7, end: 159.5 },
                 { text: "媽", start: 154.1, end: 159.5 },
                 { text: "攣", start: 154.5, end: 159.5 },
                 { text: "呢", start: 154.7, end: 159.5 }
               ]
              },
              {
               color: "#ff962d",
               words: [
                 { text: "\n每個日", start: 151.1, end: 159.5 },
                 { text: "子", start: 152, end: 159.5 },
                 { text: "裏", start: 152.2, end: 159.5 },
                 { text: "我總", start: 153, end: 159.5 },
                 { text: "是自", start: 153.7, end: 159.5 },
                 { text: "言", start: 154.1, end: 159.5 },
                 { text: "自", start: 154.5, end: 159.5 },
                 { text: "語 ", start: 154.7, end: 159.5 }
              ]
             },
             {
               color: "#cfa7eb",
               words: [
                 { text: "Always", start: 155.5, end: 159.5 }
              ]
             }
            ]
           },
           {
            time: 160.9,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "어젯밤 꿈속에 활짝 웃는 ", start: 160.9, end: 166.2 }
              ]
             },
             {
               color: "#ff962d",
               words: [
                 { text: "너", start: 164.9, end: 166.2 },
                 { text: "를 ", start: 165.3, end: 166.2 },
                 { text: "봤", start: 165.6, end: 166.2 },
                 { text: "어", start: 165.8, end: 166.2 }
              ]
             },
             {
               color: "#ff962d",
               words: [
                 { text: "\n攞", start: 164.9, end: 166.2 },
                 { text: "攣", start: 165.3, end: 166.2 },
                 { text: "拔", start: 165.6, end: 166.2 },
                 { text: "傻", start: 165.8, end: 166.2 }
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                 { text: "\n在昨夜的夢裏 看到笑逐", start: 160.9, end: 166.2 }
              ]
             },
             {
               color: "#ff962d",
               words: [
                 { text: "顏", start: 164.9, end: 166.2 },
                 { text: "開", start: 165.3, end: 166.2 },
                 { text: "的", start: 165.6, end: 166.2 },
                 { text: "你", start: 165.8, end: 166.2 }
              ]
             }
            ]
           },
           {
            time: 166.2,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "그런 널 위해 꽃 한 송일 ", start: 166.2, end: 171.3 }
              ]
             },
             {
               color: "#ff962d",
               words: [
                 { text: "품", start: 170, end: 171.3 },
                 { text: "에 ", start: 170.3, end: 171.3 },
                 { text: "안", start: 170.6, end: 171.3 },
                 { text: "고", start: 170.8, end: 171.3 }
              ]
             },
             {
               color: "#ff962d",
               words: [
                 { text: "\n噗", start: 170, end: 171.3 },
                 { text: "咩", start: 170.3, end: 171.3 },
                 { text: "un", start: 170.6, end: 171.3 },
                 { text: "哥", start: 170.8, end: 171.3 }
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                 { text: "\n為了送給你 地一朵花", start: 166.2, end: 171.3 }
              ]
             },
             {
               color: "#ff962d",
               words: [
                 { text: "捧", start: 170, end: 171.3 },
                 { text: "在", start: 170.3, end: 171.3 },
                 { text: "手", start: 170.6, end: 171.3 },
                 { text: "裏", start: 170.8, end: 171.3 }
              ]
             }
            ]
           },
           {
            time: 171.3,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "약속을 할게 두 번 다시 네 손\n我願答應你 再也不會把你", start: 171.2, end: 176.2 }
              ]
             }
            ]
           },
           {
            time: 176.2,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "놓지 않을 거라고 ooh whoa, ooh whoa\n那雙手輕易放開 ooh whoa, ooh whoa", start: 176.2, end: 181.5 }
              ]
             }
            ]
           },
           {
            time: 181.5,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "(歡呼!!)", start: 181.5, end: 183.1 }
              ]
             }
            ]
           },
           {
            time: 183.1,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 183.1, end: 184.6 }
              ]
             }
            ]
           },
           {
            time: 184.6,
            segments: [
             {
              color: "#8bc1ff",
              words: [
                 { text: "너의 그곳에 내가 닿을 수 있게 \n在你的左右讓我觸及得到你", start: 184.6, end: 188 }
              ]
             }
            ]
           },
           {
            time: 188,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 188, end: 189.1 }
               ]
              }
             ]
            },
            {
            time: 189,
            segments: [
            {
              color: "#cfa7eb",
              words: [
                 { text: "너의 곁에 내가 숨쉴 수 있길\n在你身邊讓我感受到呼吸", start: 189, end: 193.9 }
              ]
             }
            ]
           },
           {
            time: 193.9,
            segments: [
              {
              color: "#ff962d",
              words: [
                 { text: "매일 이 ", start: 193.9, end: 202.4 },
                 { text: "렇", start: 194.9, end: 202.4 },
                 { text: "게 ", start: 195.2, end: 202.4 },
                 { text: "난 늘 ", start: 196, end: 202.4 },
                 { text: "혼잣", start: 196.6, end: 202.4 },
                 { text: "말", start: 197.1, end: 202.4 },
                 { text: "을 ", start: 197.5, end: 202.4 },
                 { text: "해 ", start: 197.7, end: 202.4 }
               ]
              },
              {
               color: "#cfa7eb",
               words: [
                 { text: "Always", start: 198.5, end: 202.4 }
                ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "\n未姨呢(ne1)", start: 193.9, end: 202.4 },
                 { text: "囉", start: 194.9, end: 202.4 },
                 { text: "茄 ", start: 195.2, end: 202.4 },
                 { text: "na攣 ", start: 196, end: 202.4 },
                 { text: "胸炸 ", start: 196.6, end: 202.4 },
                 { text: "媽", start: 197.1, end: 202.4 },
                 { text: "攣", start: 197.5, end: 202.4 },
                 { text: "呢", start: 197.7, end: 202.4 }
               ]
              },
              {
               color: "#ff962d",
               words: [
                 { text: "\n每個日", start: 193.9, end: 202.4 },
                 { text: "子", start: 194.9, end: 202.4 },
                 { text: "裏", start: 195.2, end: 202.4 },
                 { text: "我總", start: 196, end: 202.4 },
                 { text: "是自", start: 196.6, end: 202.4 },
                 { text: "言", start: 197.1, end: 202.4 },
                 { text: "自", start: 197.5, end: 202.4 },
                 { text: "語 ", start: 197.7, end: 202.4 }
              ]
             },
             {
               color: "#cfa7eb",
               words: [
                 { text: "Always", start: 198.5, end: 202.4 }
              ]
             }
            ]
           },
           {
            time: 204,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "얘들아 ", start: 204, end: 205.4 },
                 { text: "안녕", start: 204.8, end: 205.4 },
                 { text: "\n夜啲啦 ", start: 204, end: 205.4 },
                 { text: "un翁", start: 204.8, end: 205.4 },
                 { text: "\n孩子們 ", start: 204, end: 205.4 },
                 { text: "你好", start: 204.8, end: 205.4 },
              ]
             }
            ]
           },
           {
            time: 205.4,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "나는 ", start: 205.4, end: 206.7 },
                 { text: "나플리(Plli)야", start: 206.1, end: 206.7 },
                 { text: "\n拿攣 ", start: 205.4, end: 206.7 },
                 { text: "Plli亞", start: 206.1, end: 206.7 },
                 { text: "\n我是", start: 205.4, end: 206.7 },
                 { text: "Plli呀", start: 206.1, end: 206.7 }
               ]
              }
             ]
            },
            {
            time: 206.7,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "너희가 ", start: 206.7, end: 209.3 },
                 { text: "너무 ", start: 207.4, end: 209.3 },
                 { text: "보고싶었어", start: 208, end: 209.3 },
                 { text: "\n囉er嫁 ", start: 206.7, end: 209.3 },
                 { text: "羅沒 ", start: 207.4, end: 209.3 },
                 { text: "潑菇雪棵(po1)所", start: 208, end: 209.3 },
                 { text: "\n我真的", start: 206.7, end: 209.3 },
                 { text: "超級", start: 207.4, end: 209.3 },
                 { text: "超級想你們", start: 208, end: 209.3 }
               ]
              }
             ]
            },
            {
            time: 209.3,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "잠깐 ", start: 209.3, end: 210.5 },
                 { text: "기다리니", start: 209.9, end: 210.5 },
                 { text: "\n尋根 ", start: 209.3, end: 210.5 },
                 { text: "揭待(daai1)呢(ne1)伊", start: 209.9, end: 210.5 },
                 { text: "\n稍微", start: 209.3, end: 210.5 },
                 { text: "等待一下", start: 209.9, end: 210.5 }
             ]
            }
           ]
          },
          {
           time: 210.5,
           segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "돌아왔구나\n拖啦嘩固啦\n你就回來啦", start: 210.5, end: 211.7 }
             ]
            }
           ]
          },
          {
           time: 211.7,
           segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "그게 바로 ", start: 211.7, end: 213 },
                 { text: "나구나", start: 212.4, end: 213 },
                 { text: "\n固嘅爸囉 ", start: 211.7, end: 213 },
                 { text: "娜固拿", start: 212.4, end: 213 },
                 { text: "\n那就是在", start: 211.7, end: 213 },
                 { text: "說你們", start: 212.4, end: 213 }
             ]
            }
           ]
          },
          {
           time: 213,
           segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "풀 레 이 브\n噗 呢 伊 bu\nP L A V E", start: 213, end: 214 }
              ]
             }
            ]
           },
            {
            time: 214.2,
            segments: [
              {
               color: "#8bc1ff",
               words: [
                 { text: "매일 이렇게 난 늘 혼잣말을 해 Always\n每個日子裏我總是自言自語 Always", start: 214.2, end: 223.5 }
               ]
              }
            ]
           },
           {
            time: 223.5,
            segments: [
           {
              color: "#ff962d",
              words: [
                 { text: "기다릴게\nKey帶呢(ne1)嘅\n等待著你", start: 223.5, end: 226 }
               ]
              }
             ]
            }

           ] 
         },     
    advanced: {
      videoId: "T_gJpnjJsnk",
      lyrics: [ 
        {
            time: 179.3,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 179.3, end: 184.7 }
               ]
              }
             ]
            }
           ]
          }
         },

   
  // 複製以下結構，新增歌曲 2 至 12。
   {
    id: 2,
    title: "Pixel World",
    description: "",
    normal: {
      videoId: "9ZuqkkALRHk",
      lyrics: [
         {
          time: 10.5,
          segments: [
           {
            color: "#cfa7eb",
            words: [
                { text: "회색 빛", start: 10.5, end: 13 }
             ]
           },
           {
            color: "#ff962d",
            words: [
                { text: " (gray) ", start: 11.1, end: 13 }
              ]
           },
           {
            color: "#cfa7eb",
            words: [
                { text: "도시 속", start: 11.8, end: 13 }
             ]
           },
           {
            color: "#ff962d",
            words: [
                { text: " (city) ", start: 12.4, end: 13 }
              ]
             },
             {
             color: "#cfa7eb",
             words: [
                { text: "\n在", start: 10.5, end: 13 }
             ]
             },
             {
            color: "#ff962d",
            words: [
                { text: "灰色", start: 11.1, end: 13 }
              ]
           },
           {
            color: "#cfa7eb",
            words: [
                { text: "的", start: 11.8, end: 13 }
             ]
           },
           {
            color: "#ff962d",
            words: [
                { text: "都市裏", start: 12.4, end: 13 }
              ]
             }
            ]
           },
          {
            time: 13,
            segments: [
           {
              color: "#cfa7eb",
              words: [
                 { text: "날 깨워주는 너의 ", start: 13, end: 15.7 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "color", start: 14.1, end: 15.7 }
               ]
              },
               {
              color: "#cfa7eb",
              words: [
                 { text: "\n將我喚醒的你的 ", start: 13, end: 15.7 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "color", start: 14.1, end: 15.7 }
               ]
              }
             ]
            },
            {
            time: 15.7,
            segments: [
             {
              color: "#ffafcf",
              words: [
                 { text: "너로 인해", start: 15.7, end: 18.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: " (you) ", start: 16.4, end: 18.4 }
               ]
              },
              {
              color: "#ffafcf",
              words: [
                 { text: "나 숨을 쉬어", start: 17, end: 18.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: " (breathe) ", start: 17.7, end: 18.4 }
               ]
              },
              {
                color: "#ffafcf",
              words: [
                 { text: "因為", start: 15.7, end: 18.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "你 ", start: 16.4, end: 18.4 }
               ]
              },
              {
              color: "#ffafcf",
              words: [
                 { text: "我得以", start: 17, end: 18.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "呼吸", start: 17.7, end: 18.4 }
               ]
              }
             ]
            },
            {
            time: 18.4,
            segments: [
             {
              color: "#ffafcf",
              words: [
                 { text: "내 안에 온기를 ", start: 18.4, end: 20.8 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "더해", start: 19.6, end: 20.8 }
               ]
              },
              {
              color: "#ffafcf",
              words: [
                 { text: "\n讓我內心更加", start: 18.4, end: 20.8 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "溫暖", start: 19.6, end: 20.8 }
               ]
              }
             ]
            },
            {
            time: 20.8,
            segments: [
            {
              color: "#8bc1ff",
              words: [
                 { text: "마지막 퍼즐이 맞춰지", start: 20.8, end: 23.5 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "고", start: 22.7, end: 23.5 }
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n拼上最後一塊拼", start: 20.8, end: 23.5 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "圖", start: 22.7, end: 23.5 }
               ]
              }
             ]
            },
            {
            time: 23.5,
            segments: [
             {
              color: "#8bc1ff",
              words: [
                 { text: "끝끝내 완성된 ", start: 23.5, end: 26.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "pixel world", start: 24.9, end: 26.4 }
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n最終完成的 ", start: 23.5, end: 26.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "pixel world", start: 24.9, end: 26.4 }
               ]
              }
             ]
            },
            {
            time: 26.4,
            segments: [
             {
              color: "#2a2a2a",
              words: [
                 { text: "참 많이 기다렸지\n真的等了很及吧", start: 26.4, end: 28.9 }
               ]
              }
             ]
            },
            {
            time: 28.9,
            segments: [
             {
              color: "#b81818",
              words: [
                 { text: "uhm…(ha) You know? Yeah", start: 26.4, end: 31.6 }
               ]
              }
             ]
            },
            {
            time: 31.6,
            segments: [
            {
              color: "#ffafcf",
              words: [
                 { text: "오래도록 꿈꿔왔던 이 순간\n夢寐以久的這一刻", start: 31.6, end: 39.3 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "\n(歡呼!!)", start: 32, end: 39.3 }
               ]
              }
             ]
            },
            {
            time: 39.3,
            segments: [
             {
              color: "#cfa7eb",
              words: [
                 { text: "현실이 됐어 ", start: 39.3, end: 41.5 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(look)", start: 40.9, end: 41.5 }
               ]
              },
              {
              color: "#cfa7eb",
              words: [
                 { text: "\n成為了現實", start: 39.3, end: 41.5 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(look)", start: 40.9, end: 41.5 }
               ]
              }
             ]
            },
            {
            time: 41.5,
            segments: [
             {
              color: "#8bc1ff",
              words: [
                 { text: "하루의 끝에 ", start: 41.5, end: 43.9 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "너와 나", start: 42.7, end: 43.9 }
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n在這一天的盡頭 ", start: 41.5, end: 43.9 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "你和我", start: 42.7, end: 43.9 }
               ]
              }
             ]
            },
            {
            time: 43.9,
            segments: [
             {
              color: "#8bc1ff",
              words: [
                 { text: "우린 시작을 해 ", start: 43.9, end: 46.8 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "tonight", start: 45.6, end: 46.8 }
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n我們開始 ", start: 43.9, end: 46.8 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "tonight", start: 45.6, end: 46.8 }
               ]
              }
             ]
            },
            {
            time: 46.8,
            segments: [
            {
              color: "#cfa7eb",
              words: [
                 { text: "I wanna love ", start: 46.8, end: 48.4 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(hey!)", start: 47.6, end: 48.4 }
               ]
              }
             ]
            },
            {
            time: 48.4,
            segments: [
            {
              color: "#cfa7eb",
              words: [
                 { text: "You wanna love", start: 48.4, end: 49.5 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(ho!)", start: 49.1, end: 49.5 }
               ]
              }
             ]
            },
            {
            time: 49.5,
            segments: [
            {
              color: "#cfa7eb",
              words: [
                 { text: "We are making new world ", start: 49.5, end: 52.8 }
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(let's dance)", start: 51.7, end: 52.8 }
               ]
              }
             ]
            },
            {
            time: 52.8,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "손을 들어 높이\n將手高高舉起", start: 52.8, end: 54.9 }
                ]
               }
              ]
             },
             {
            time: 53.5,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "(모두 put your hands up!)\n(摸do put your hands up!)\n(所有人put your hands up!)", start: 53.5, end: 54.9 }
               ]
              }
             ]
            },
            {
            time: 54.9,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "내일 따윈 없지\n沒有明天", start: 54.9, end: 57.8 }
                ]
               }
              ]
             },
             {
            time: 55.9,
            segments: [
              {
              color: "#ff962d",
              words: [
                 { text: "(불필요해 맨 정신!)\n(噗P(呢ne1)er man沖先!)\n(不需要保持理智!)", start: 55.9, end: 57.8 }
               ]
              }
             ]
            },
            {
            time: 57.8,
            segments: [
            {
              color: "#ffafcf",
              words: [
                 { text: "불태워 다, let's rock all night\n點燃全場 let's rock all night", start: 57.8, end: 62 }
               ]
              }
             ]
            },
            {
            time: 62,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 62, end: 63.9 }
               ]
              }
             ]
            },
            {
            time: 63.9,
            segments: [
            {
              color: "#b81818",
              words: [
                 { text: "Let's break it now, 틀에 박힌 rules\nLet's break it now 死板的rules", start: 63.9, end: 65.9 }
               ]
              }
             ]
            },
            {
            time: 65.9,
            segments: [
            {
              color: "#b81818",
              words: [
                 { text: "I don't lose 너를 위한 move\nI don't lose 為了你的move", start: 65.9, end: 67.5}
               ]
              }
             ]
            },
            {
            time: 67.5,
            segments: [
            {
              color: "#b81818",
              words: [
                 { text: "보여줄게 prove, yeah\n向你呈現prove, yeah", start: 67.5, end: 69.2}
               ]
              }
             ]
            },
            {
            time: 69.2,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "Shine bright 밝은 빛으로 어두운\nShine bright 用明亮的光芒照亮漆黑", start: 69.2, end: 71.3}
               ]
              }
             ]
            },
            {
            time: 71.3,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "세계를 밝혀 외로운 날\n的世界 孤獨的日子", start: 71.3, end: 72.6}
               ]
              }
             ]
            },
            {
            time: 72.6,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "이제는 없을테니, I promise\n現在不會再有 I promise", start: 72.6, end: 74.2}
               ]
              }
             ]
            },
            {
            time: 74.2,
            segments: [
            {
              color: "#8bc1ff",
              words: [
                 { text: "I'm falling love", start: 74.2, end: 75.7}
               ]
              }
             ]
            },
            {
            time: 75.7,
            segments: [
              {
              color: "#2a2a2a",
              words: [
                 { text: "(하얗게 물들어)\n(染成一片雪白)", start: 75.7, end: 76.9}
               ]
              }
             ]
            },
            {
            time: 76.9,
            segments: [
              {
              color: "#8bc1ff",
              words: [
                 { text: "Like falling snow", start: 76.9, end: 78.3}
               ]
              }
             ]
            },
            {
            time: 78.3,
            segments: [
              {
              color: "#b81818",
              words: [
                 { text: "눈부신 별빛아래 우리는 ", start: 76.9, end: 81}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "하나가 돼", start: 79.9, end: 81}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "夏拉嫁聽", start: 79.9, end: 81}
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "\n耀眼的星光下 我們", start: 76.9, end: 81}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "成為一體", start: 79.9, end: 81}
               ]
              }
             ]
            },
            {
            time: 81,
            segments: [
              {
              color: "#b81818",
              words: [
                 { text: "늘 같이 걸어 갈래 끝없는 ", start: 76.9, end: 84.7}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "은하계, ", start: 82.9, end: 84.7}
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "yeah", start: 83.9, end: 84.7}
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "要不要一直一起走下去 漫無邊際的", start: 76.9, end: 84.7}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "銀河系 ", start: 82.9, end: 84.7}
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "yeah", start: 83.9, end: 84.7}
               ]
              }
             ]
            },
            {
            time: 84.7,
            segments: [
              {
              color: "#ffafcf",
              words: [
                 { text: "오래도록 꿈꿔왔던 이 순간\n夢寐以久的這一刻", start: 84.7, end: 92.8}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "\n(歡呼!!)", start: 85.9, end: 92.8}
               ]
              }
             ]
            },
            {
            time: 92.8,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "현실이 됐어", start: 92.8, end: 94.8}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(look)", start: 94.3, end: 94.8}
               ]
              },
              {
              color: "#cfa7eb",
              words: [
                 { text: "\n成為了現實", start: 92.8, end: 94.8}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(look)", start: 94.3, end: 94.8}
               ]
              }
             ]
            },
            {
            time: 94.8,
            segments: [
              {
              color: "#8bc1ff",
              words: [
                 { text: "현하루의 끝에 ", start: 94.8, end: 97.6}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "너와 나", start: 96, end: 97.6}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "\n囉嘩娜", start: 96, end: 97.6}
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n在這一天的盡頭", start: 94.8, end: 97.6}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "你和我", start: 96, end: 97.6}
               ]
              }
             ]
            },
            {
            time: 97.6,
            segments: [
              {
              color: "#8bc1ff",
              words: [
                 { text: "우린 시작을 해 ", start: 94.8, end: 100.1}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "tonight", start: 99, end: 100.1}
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n我們開始 ", start: 94.8, end: 100.1}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "tonight", start: 99, end: 100.1}
               ]
              }
             ]
            },
            {
            time: 100.1,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "I wanna love ", start: 100.1, end: 101.7}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(hey!)", start: 101.1, end: 101.7}
               ]
              }
             ]
            },
            {
            time: 101.7,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "You wanna love ", start: 101.7, end: 103}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(ho!)", start: 102.4, end: 103}
               ]
              }
             ]
            },
            {
            time: 103,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "We are making new world ", start: 103, end: 106.1}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(let's dance)", start: 105.1, end: 106.1}
               ]
              }
             ]
            },
            {
            time: 106.1,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "손을 들어 높이\n將手高高舉起", start: 106.1, end: 106.7}
                ]
               }
              ]
             },
             {
            time: 106.7,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "(모두 put your hands up!)\n(摸do put your hands up!)\n(所有人put your hands up!)", start: 106.7, end: 108.1 }
               ]
              }
             ]
            },
            {
            time: 108.1,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "내일 따윈 없지\n沒有明天", start: 108.1, end: 109.2 }
                ]
               }
              ]
             },
             {
            time: 109.2,
            segments: [
              {
              color: "#ff962d",
              words: [
                 { text: "(불필요해 맨 정신!)\n(噗P(呢ne1)er man沖先!)\n(不需要保持理智!)", start: 109.2, end: 111.2 }
               ]
              }
             ]
            },
            {
            time: 111.2,
            segments: [
            {
              color: "#ffafcf",
              words: [
                 { text: "불태워 다, let's rock all night\n點燃全場 let's rock all night", start: 111.2, end: 115.5 }
               ]
              }
             ]
            },
            {
            time: 115.5,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 115.5, end: 117.5 }
               ]
              }
             ]
            },
            {
            time: 117.5,
            segments: [
            {
              color: "#cfa7eb",
              words: [
                 { text: "미소를 머금은 눈빛에, 난 녹아 버릴 거 같은데\n飽含微笑的眼神裏 我感覺就要融化", start: 117.5, end: 121.8 }
               ]
              }
             ]
            },
            {
            time: 121.8,
            segments: [
            {
              color: "#8bc1ff",
              words: [
                 { text: "Ooh-uh, whoa, 놓지 않을 게\nOoh-uh, whoa 不會放手", start: 121.8, end: 127.4 }
               ]
              }
             ]
            },
            {
            time: 127.4,
            segments: [
            {
              color: "#8bc1ff",
              words: [
                 { text: "(your ha", start: 127.4, end: 132.4 }
               ]
              },
              {
              color: "#cfa7eb",
              words: [
                 { text: "nd, your h", start: 127.4, end: 132.4 }
               ]
              },
              {
              color: "#ffafcf",
              words: [
                 { text: "eart, yo", start: 127.4, end: 132.4 }
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "ur bre", start: 127.4, end: 132.4 }
               ]
              },
              {
              color: "#2a2a2a",
              words: [
                 { text: "ath)", start: 127.4, end: 132.4 }
               ]
              }
             ]
            },
           {
            time: 132.4,
            segments: [
            {
              color: "#ffafcf",
              words: [
                 { text: "I'm melting 'cause of you", start: 132.4, end: 137.6 }
               ]
              }
             ]
            },
            {
            time: 137.6,
            segments: [
              {
              color: "#8bc1ff",
              words: [
                 { text: "현하루의 끝에 ", start: 137.6, end: 140.4}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "너와 나", start: 138.7, end: 140.2}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "\n囉嘩娜", start: 138.7, end: 140.2}
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n在這一天的盡頭", start: 137.6, end: 140.4}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "你和我", start: 138.7, end: 140.2}
               ]
              }
             ]
            },
             {
            time: 140.2,
            segments: [
              {
              color: "#8bc1ff",
              words: [
                 { text: "우린 시작을 해 ", start: 140.2, end: 142.9}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "tonight", start: 141.8, end: 142.9}
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n我們開始 ", start: 140.2, end: 142.9}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "tonight", start: 141.8, end: 142.9}
               ]
              }
             ]
            },
            {
            time: 142.9,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "I wanna love ", start: 142.9, end: 144.2}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(hey!)", start: 143.7, end: 144.2}
               ]
              }
             ]
            },
            {
            time: 144.2,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "You wanna love ", start: 144.2, end: 145.5}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(ho!)", start: 142.1, end: 145.5}
               ]
              }
             ]
            },
            {
            time: 145.5,
            segments: [
              {
              color: "#cfa7eb",
              words: [
                 { text: "We are making new world ", start: 145.5, end: 148.7}
               ]
              },
              {
              color: "#ff962d",
              words: [
                 { text: "(let's dance)", start: 147.8, end: 148.7}
               ]
              }
             ]
            },
            {
            time: 148.7,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "손을 들어 높이\n將手高高舉起", start: 148.7, end: 149.5}
                ]
               }
              ]
             },
             {
            time: 149.5,
            segments: [
             {
              color: "#ff962d",
              words: [
                 { text: "(모두 put your hands up!)\n(摸do put your hands up!)\n(所有人put your hands up!)", start: 149.5, end: 150.8 }
               ]
              }
             ]
            },
            {
            time: 150.8,
            segments: [
            {
              color: "#2a2a2a",
              words: [
                 { text: "내일 따윈 없지\n沒有明天", start: 150.8, end: 151.9 }
                ]
               }
              ]
             },
             {
            time: 151.9,
            segments: [
              {
              color: "#ff962d",
              words: [
                 { text: "(불필요해 맨 정신!)\n(噗P(呢ne1)er man沖先!)\n(不需要保持理智!)", start: 151.9, end: 153.6 }
               ]
              }
             ]
            },
            {
            time: 153.6,
            segments: [
            {
              color: "#ffafcf",
              words: [
                 { text: "불태워 다, let's rock all night\n點燃全場 let's rock all night", start: 153.6, end: 158.2}
               ]
              }
             ]
            },
            {
            time: 158.2,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 158.2, end: 163.3 }
               ]
              }
             ]
            },
            {
            time: 163.3,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 163.3, end: 167.3 }
               ]
              }
             ]
            },
            {
            time: 163.3,
            segments: [
            {
              color: "#b81818",
              words: [
                 { text: "We show another world, we show another world!", start: 167.3, end: 169.7 }
               ]
              }
             ]
            },
            {
            time: 169.7,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Hey, ", start: 169.7, end: 175 },
                 { text: "ho, ", start: 170.9, end: 175 },
                 { text: "hey, ", start: 172.4, end: 175 },
                 { text: "ho!", start: 173.7, end: 175 },
               ]
              }
             ]
            },
            {
            time: 175,
            segments: [
            {
              color: "#8bc1ff",
              words: [
                 { text: "오늘이", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#cfa7eb",
              words: [
                 { text: "야, let'", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#ffafcf",
              words: [
                 { text: "s roc", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "k all n", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#2a2a2a",
              words: [
                 { text: "ight", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#8bc1ff",
              words: [
                 { text: "\n就是今", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#cfa7eb",
              words: [
                 { text: "天 let'", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#ffafcf",
              words: [
                 { text: "s roc", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "k all n", start: 175, end: 179.3 }
               ]
              },
              {
              color: "#2a2a2a",
              words: [
                 { text: "ight", start: 175, end: 179.3 }
               ]
              },
             ]
            },
            {
            time: 179.3,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 179.3, end: 184.7 }
               ]
              }
             ]
            }

           ] 
         },     
    advanced: {
      videoId: "mk_7saG0rEE",
      lyrics: [
        {
            time: 179.3,
            segments: [
            {
              color: "#ff962d",
              words: [
                 { text: "Come in our pixel world", start: 179.3, end: 184.7 }
               ]
              }
             ]
            }
           ] 
          }
         },     

   {
    id: 3,
    title: "The 6th summer",
    description: "",
    normal: {
      videoId: "KhPe6jC-jaQ",
      lyrics: [
         {
          time: 3.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 3.1, end: 7.6 }
              ]
             }
            ]
          },
          {
          time: 7.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "영원을 말했죠 꿈이 아니기를\n說了永遠 希望不是夢", start: 7.6, end: 13}
              ]
             }
            ]
           },

      ]

    },
    advanced: {
      videoId: "dE_ddOigeZA",
      lyrics: []
    }
  },

  {
    id: 4,
    title: "Why?Why?Why?",
    description: "",
    normal: {
      videoId: "jF4B7Yvct-c",
      lyrics: []
    },
    advanced: {
      videoId: "9WQ-kx-Y6m8",
      lyrics: []
    }
  },
  {
    id: 5,
    title: "WAT 4 LUV",
    description: "",
    normal: {
      videoId: "tRSvtYMjsxw",
      lyrics: []
    },
    advanced: {
      videoId: "n5uw7ErnzKs",
      lyrics: []
    }
  },
  {
    id: 6,
    title: "Pump Up The Volume!",
    description: "",
    normal: {
      videoId: "zLLHEZp_gbM",
      lyrics: []
    },
    advanced: {
      videoId: "yZoluwCs5i8",
      lyrics: []
    }
  },
  {
    id: 7,
    title: "Dash",
    description: "",
    normal: {
      videoId: "9FopMGItmOw",
      lyrics: []
    },
    advanced: {
      videoId: "MxIm2v4W9h8",
      lyrics: []
    }
  },
  {
    id: 8,
    title: "かくれんぼ/Hide and Seek",
    description: "",
    normal: {
      videoId: "lSNygjXQ8fc",
      lyrics: []
    },
    advanced: {
      videoId: "O3ij62WO3Ro",
      lyrics: []
    }
  },
  {
    id: 9,
    title: "숨바꼭질/Hide and Seek",
    description: "",
    normal: {
      videoId: "mGqYMma_YIk",
      lyrics: [ {
          time: 55.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 ", start: 55.3, end: 61.8},
                { text: "한노아 ", start: 56.7, end: 61.8},
                { text: "채밤비 ", start: 57.7, end: 61.8},
                { text: "도은호 ", start: 59.1, end: 61.8},
                { text: "유하민", start: 60.4, end: 61.8},
                { text: "\n躝夜轉 ", start: 55.3, end: 61.8},
                { text: " 慳糯也 ", start: 56.7, end: 61.8},
                { text: " 車扮B ", start: 57.7, end: 61.8},
                { text: " Do䟴呵 ", start: 59.1, end: 61.8},
                { text: "you夏mean", start: 60.4, end: 61.8},
                 { text: "\n南藝俊 ", start: 55.3, end: 61.8},
                { text: " 韓諾亞 ", start: 56.7, end: 61.8},
                { text: " 蔡斑比 ", start: 57.7, end: 61.8},
                { text: " 都銀虎 ", start: 59.1, end: 61.8},
                { text: "柳河玟", start: 60.4, end: 61.8}
              ]
             }
            ]
           },
          {
          time: 61.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플 레 이 브 ", start: 61.8, end: 65.7},
                { text: " 숨 ", start: 63.2, end: 65.7},
                { text: " 바 ", start: 63.8, end: 65.7},
                { text: " 꼭 ", start: 64.4, end: 65.7},
                { text: " 질", start: 65.1, end: 65.7},
                { text: "\n噗 呢 伊 bu ", start: 61.8, end: 65.7},
                { text: " Zoo ", start: 63.2, end: 65.7},
                { text: " 拍 ", start: 63.8, end: 65.7},
                { text: " 谷 ", start: 64.4, end: 65.7},
                { text: " 知", start: 65.1, end: 65.7},
                { text: "\nP L A V E ", start: 61.8, end: 65.7},
                { text: " 捉 ", start: 63.2, end: 65.7},
                { text: " 迷 ", start: 63.8, end: 65.7},
                { text: " 藏 ", start: 64.4, end: 65.7},
              ]
             }
            ]
           },
           {
          time: 65.7,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "보", start: 65.7, end: 71.1},
                { text: "고 ", start: 66.5, end: 71.1},
                { text: "싶았어 ", start: 66.9, end: 71.1},
                { text: " 플 레 이 브", start: 68.3, end: 71.1},
                { text: "\n噗", start: 65.7, end: 71.1},
                { text: "茹 ", start: 66.5, end: 71.1},
                { text: "書撲sor ", start: 66.9, end: 71.1},
                { text: " 噗 呢 伊 bu", start: 68.3, end: 71.1},
                { text: "\n很", start: 65.7, end: 71.1},
                { text: "想", start: 66.5, end: 71.1},
                { text: "你們 ", start: 66.9, end: 71.1},
                { text: " P L A V E", start: 68.3, end: 71.1},
              ]
             }
            ]
           },
           {
          time: 71.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "드", start: 71.1, end: 76.5},
                { text: "디", start: 71.3, end: 76.5},
                { text: "어 ", start: 71.5, end: 76.5},
                { text: " 찾", start: 72.2, end: 76.5},
                { text: "았 ", start: 72.5, end: 76.5},
                { text: "어 ", start: 72.8, end: 76.5},
                { text: " 플 레 이 브", start: 73.5, end: 76.5},
                { text: "\n箍", start: 71.1, end: 76.5},
                { text: "啲", start: 71.3, end: 76.5},
                { text: "哦 ", start: 71.5, end: 76.5},
                { text: " 差", start: 72.2, end: 76.5},
                { text: "咋", start: 72.5, end: 76.5},
                { text: "sor ", start: 72.8, end: 76.5},
                { text: " 噗 呢 伊 bu", start: 73.5, end: 76.5},
                { text: "\n終", start: 71.1, end: 76.5},
                { text: "於", start: 71.3, end: 76.5},
                { text: "找", start: 71.5, end: 76.5},
                { text: "到", start: 72.2, end: 76.5},
                { text: "你", start: 72.5, end: 76.5},
                { text: "們 ", start: 72.8, end: 76.5},
                { text: " P L A V E", start: 73.5, end: 76.5}
              ]
             }
            ]
           },
           {
          time: 76.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "하루의 끝에 누워\n躺臥在一日結尾", start: 76.5, end: 79.3}
              ]
             }
            ]
           },
           {
          time: 79.3,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "뜬 눈을 감으면\n閉上睜開的雙眼", start: 79.3, end: 82.1}
              ]
             }
            ]
           },
           {
          time: 82.1,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "우리의 별이 반짝이니\n我們的星星正閃爍著", start: 82.1, end: 85.9}
              ]
             }
            ]
           },
           {
          time: 85.9,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "조금은 헷갈려 할지도 몰라\n說不定會有點混亂", start: 85.9, end: 89.5}
              ]
             }
            ]
           },
           {
          time: 89.5,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "너도 그런 걸까?\n你也是這樣嗎？", start: 89.5, end: 91.5}
              ]
             }
            ]
           },
           {
          time: 91.5,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "나도 그래왔었으니까 ", start: 89.5, end: 91.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(플 ", start: 95.8, end: 97.5},
                { text: "레 ", start: 96.2, end: 97.5},
                { text: "이 ", start: 96.4, end: 97.5},
                { text: "브)", start: 96.8, end: 97.5},
                { text: "\n(噗 ", start: 95.8, end: 97.5},
                { text: " 呢 ", start: 96.2, end: 97.5},
                { text: " 伊 ", start: 96.4, end: 97.5},
                { text: " bu)", start: 96.8, end: 97.5}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n因為我也曾經如此 ", start: 89.5, end: 91.5}
              ]
             },
               {
              color: "#ff962d",
              words: [
                { text: "(P ", start: 95.8, end: 97.5},
                { text: " L A ", start: 96.2, end: 97.5},
                { text: " V ", start: 96.4, end: 97.5},
                { text: " E)", start: 96.8, end: 97.5}
              ]
             }
            ]
           },
           {
          time: 97.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "네가 나를 찾아왔던 그 순간\n你向我找來的那瞬間", start: 97.5, end: 100}
              ]
             }
            ]
           },
           {
          time: 100,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "너의 흔적들을 따라가 봤어\n我也曾跟隨你的蹤跡", start: 100, end: 102.4}
              ]
             }
            ]
           },
           {
          time: 102.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "마치 미로 같은 수수께끼인 걸까?\n就像是如同迷宮般的謎底嗎？", start: 102.4, end: 107.9}
              ]
             }
            ]
           },
           {
          time: 107.9,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그런 기분이 들 때", start: 107.9, end: 112.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: " (숨 ", start: 110.1, end: 112.6},
                { text: " 바 ", start: 110.7, end: 112.6},
                { text: " 꼭 ", start: 111.4, end: 112.6},
                { text: " 질)", start: 111.8, end: 112.6},
                { text: " \n(Zoo ", start: 110.1, end: 112.6},
                { text: " 拍 ", start: 110.7, end: 112.6},
                { text: " 谷 ", start: 111.4, end: 112.6},
                { text: " 知)", start: 111.8, end: 112.6}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n當這種感覺浮現", start: 107.9, end: 112.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: " (捉 ", start: 110.1, end: 112.6},
                { text: " 迷 ", start: 110.7, end: 112.6},
                { text: " 藏) ", start: 111.4, end: 112.6}
              ]
             }
            ]
           },
           {
          time: 112.6,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "확신해 나", start: 112.6, end: 116.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "를 찾는 너의", start: 112.6, end: 116.9}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n今天我堅", start: 112.6, end: 116.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "定不移奔向", start: 112.6, end: 116.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 115.4, end: 116.9}
              ]
             }
            ]
           },
           {
          time: 116.9,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "세계로 오늘을 달려왔어\n追尋著我的你的世界", start: 116.9, end: 120}
              ]
             }
            ]
           },
           {
          time: 120,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "포기할 수 없던 시간 속에\n在無法割捨的時間裡", start: 120, end: 123.4}
              ]
             }
            ]
           },
           {
          time: 123.4,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "숨바꼭질은 나의\n捉迷藏就是我的", start: 123.4, end: 125.7}
              ]
             }
            ]
           },
           {
          time: 125.7,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "천국인걸\n天國", start: 125.7, end: 127.8}
              ]
             }
            ]
           },
           {
          time: 127.8,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "이젠 알겠어 ", start: 125.7, end: 129.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(알겠어)", start: 128.9, end: 129.2},
                { text: "\n(艾嘅傻)", start: 128.9, end: 129.2},
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n現在明白了 ", start: 125.7, end: 129.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(明白了)", start: 128.9, end: 129.2}
              ]
             }
            ]
           },
            {
          time: 129.2,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "나는 깨달았어 ", start: 129.2, end: 130.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(깨달았어)", start: 130.2, end: 130.6},
                { text: "\n(括(打daa1)啦傻)", start: 130.2, end: 130.6},
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n我領悟到了 ", start: 129.2, end: 130.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(領悟到了)", start: 130.2, end: 130.6}
              ]
             }
            ]
           },
           {
          time: 130.6,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "의미 없던 하루는 없다는 걸 안 순간\n當我知道那些日子都有意義的那瞬間", start: 130.6, end: 133.5}
              ]
             }
            ]
           },
           {
          time: 133.5,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "맘이 차올라서\n心緒洶湧而上", start: 133.5, end: 138.1}
              ]
             }
            ]
           },
           {
          time: 138.1,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "소리칠게 ", start: 138.1, end: 140.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "힘껏", start: 139.3, end: 140.6},
                { text: "\n謙鋸", start: 139.3, end: 140.6},
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我會竭力", start: 138.1, end: 140.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "吶喊", start: 139.3, end: 140.6}
              ]
             }
            ]
           },
           {
          time: 140.6,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "소리칠게 ", start: 140.6, end: 143.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "힘껏", start: 141.9, end: 143.3},
                { text: "\n謙鋸", start: 141.9, end: 143.3},
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我會竭力", start: 140.6, end: 143.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "吶喊", start: 141.9, end: 143.3}
              ]
             }
            ]
           },
           {
          time: 143.3,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "들린다면 ", start: 143.3, end: 146}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "지금", start: 144.5, end: 146},
                { text: "\n次捐", start: 144.5, end: 146},
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n倘若你有聽見 ", start: 143.3, end: 146}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "現在", start: 144.5, end: 146}
              ]
             }
            ]
           },
           {
          time: 146,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그곳에서 웃어줘\n請在那處綻放笑容吧", start: 146, end: 148.5}
              ]
             }
            ]
           },
           {
          time: 148.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "이젠 알겠어 ", start: 148.5, end: 150.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(알겠어)", start: 149.9, end: 150.2},
                { text: "\n(艾嘅傻)", start: 149.9, end: 150.2},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n現在明白了 ", start: 148.5, end: 150.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(明白了)", start: 149.9, end: 150.2}
              ]
             }
            ]
           },
           {
          time: 150.2,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "나는 깨달았어 ", start: 150.2, end: 151.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(깨달았어)", start: 151, end: 151.6},
                { text: "\n(括(打daa1)啦傻)", start: 151, end: 151.6},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我領悟到了 ", start: 150.2, end: 151.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(領悟到了)", start: 151, end: 151.6}
              ]
             }
            ]
           },
           {
          time: 151.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "결국 우린 마주한다는 걸 안 순간\n當我知道我們終將相遇的那瞬間", start: 151.6, end: 154.4}
              ]
             }
            ]
           },
           {
          time: 154.4,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "달려갈게 오늘도\n今天也依舊奔向你", start: 154.4, end: 160}
              ]
             }
            ]
           },
           {
          time: 160,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "그래 정답은 항상 ", start: 160, end: 161.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "너였어", start: 161, end: 161.8},
                { text: "\n衰your傻", start: 161, end: 161.8},
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n是啊我的答案一直", start: 160, end: 161.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "都是你", start: 161, end: 161.8}
              ]
             }
            ]
           },
           {
          time: 161.8,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "망가진 꿈 너로 인해 난 되찾았어 ", start: 161.8, end: 164.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(되찾았어)", start: 163.9, end: 164.7},
                { text: "\n(車差揸so)", start: 163.9, end: 164.7},
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n因為你而找回支離破碎的夢", start: 161.8, end: 164.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(破碎的夢)", start: 161, end: 161.8}
              ]
             }
            ]
           },
           {
          time: 161.8,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "이젠 알아 심장이 뛰는 이유\n現在才知道心臟跳動的理由", start: 161.8, end: 166.9}
              ]
             }
            ]
           },
           {
          time: 166.9,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "벅차오름은 다시 또 한걸음 가까워져", start: 166.9, end: 170.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(yeah)", start: 169.7, end: 170.4}
              ]
             },
              {
              color: "#2a2a2a",
              words: [
                { text: "\n心潮澎湃又再次向你靠近一步", start: 166.9, end: 170.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(yeah)", start: 169.7, end: 170.4}
              ]
             }
            ]
           },
           {
          time: 170.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "내가 너에게 맞닿을 이 순간\n將觸碰到你的這一刻", start: 170.4, end: 173}
              ]
             }
            ]
           },
           {
          time: 173,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "너의 흔적을 지나치고 있어\n我沿著你留下的痕跡", start: 173, end: 175.4}
              ]
             }
            ]
           },
           {
          time: 175.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "이젠 풀 수 있는 수수께끼인 걸까?\n現在終於能解開這道謎題了嗎？", start: 175.4, end: 180.8}
              ]
             }
            ]
           },
           {
          time: 180.8,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "그런 기분", start: 175.4, end: 185.4}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "이 들 때 ", start: 175.4, end: 185.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(찾", start: 183.1, end: 185.4},
                { text: "아", start: 183.7, end: 185.4},
                { text: "갈", start: 184.5, end: 185.4},
                { text: "게)", start: 184.5, end: 185.4},
                { text: "\n(差", start: 183.1, end: 185.4},
                { text: "齋", start: 183.7, end: 185.4},
                { text: "哀", start: 184.5, end: 185.4},
                { text: "嘅)", start: 184.5, end: 185.4}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n當這種感", start: 175.4, end: 185.4}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "覺浮現 ", start: 175.4, end: 185.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(我會", start: 183.1, end: 185.4},
                { text: "去", start: 183.7, end: 185.4},
                { text: "找", start: 184.5, end: 185.4},
                { text: "你)", start: 184.5, end: 185.4}
              ]
             }
            ]
           },
           {
          time: 185.4,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "확신해 ", start: 185.4, end: 190.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "나를 찾는 너의", start: 185.4, end: 190.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(플 ", start: 188.4, end: 190.4},
                { text: "레 ", start: 188.9, end: 190.4},
                { text: "이 ", start: 189.5, end: 190.4},
                { text: "브)", start: 190.2, end: 190.4},
                { text: "\n(噗 ", start: 188.4, end: 190.4},
                { text: "呢 ", start: 188.9, end: 190.4},
                { text: "伊 ", start: 189.5, end: 190.4},
                { text: "bu)", start: 190.2, end: 190.4}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n今天我堅", start: 185.4, end: 190.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "定不移奔向", start: 185.4, end: 190.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(P ", start: 188.4, end: 190.4},
                { text: " L A ", start: 188.9, end: 190.4},
                { text: "V ", start: 189.5, end: 190.4},
                { text: "E)", start: 190.2, end: 190.4}
              ]
             }
            ]
           },
           {
          time: 190.4,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "세계로 오늘을 달려왔어\n追尋著我的你的世界", start: 190.4, end: 193}
              ]
             }
            ]
           },
           {
          time: 193,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "포기할 수 없던 시간 속에\n在無法割捨的時間裡", start: 193, end: 196.5}
              ]
             }
            ]
           },
           {
          time: 196.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "숨바꼭질은 나의\n捉迷藏就是我的", start: 196.5, end: 198.7}
              ]
             }
            ]
           },
           {
          time: 198.7,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "천국인걸\n天國", start: 198.7, end: 200.7}
              ]
             }
            ]
           },
           {
          time: 200.7,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "이젠 알겠어 ", start: 200.7, end: 202.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(알겠어)", start: 201.9, end: 202.3},
                { text: "\n(艾嘅傻)", start: 201.9, end: 202.3},
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n現在明白了 ", start: 200.7, end: 202.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(明白了)", start: 201.9, end: 202.3}
              ]
             }
            ]
           },
           {
          time: 202.3,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "나는 깨달았어 ", start: 202.3, end: 203.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(깨달았어)", start: 203.2, end: 203.7},
                { text: "\n(括(打daa1)啦傻)", start: 203.2, end: 203.7},
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n我領悟到了 ", start: 202.3, end: 203.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(領悟到了)", start: 203.2, end: 203.7}
              ]
             }
            ]
           },
           {
          time: 203.7,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "의미 없던 하루는 없다는 걸 안 순간\n當我知道那些日子都有意義的那瞬間", start: 203.7, end: 206.5}
              ]
             }
            ]
           },
           {
          time: 206.5,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "맘이 차올라서\n心緒洶湧而上", start: 206.5, end: 211.2}
              ]
             }
            ]
           },
           {
          time: 211.2,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "소리칠게 ", start: 211.2, end: 213.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "힘", start: 212.3, end: 213.8},
                { text: "껏", start: 213.1, end: 213.8},
                { text: "\n謙", start: 212.3, end: 213.8},
                { text: "鋸", start: 213.1, end: 213.8}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我會竭力", start: 211.2, end: 140.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "吶", start: 212.3, end: 213.8},
                { text: "喊", start: 213.1, end: 213.8}
              ]
             }
            ]
           },
           {
          time: 213.8,
          segments: [
              {
              color: "#ffafcf",
              words: [
                { text: "소리칠게 ", start: 213.8, end: 216.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "힘", start: 215, end: 216.4},
                { text: "껏", start: 215.7, end: 216.4},
                { text: "\n謙", start: 215, end: 216.4},
                { text: "鋸", start: 215.7, end: 216.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我會竭力", start: 213.8, end: 216.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "吶", start: 215, end: 213.8},
                { text: "喊", start: 215.7, end: 216.4}
              ]
             }
            ]
           },
           {
          time: 216.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "들린다면 ", start: 216.4, end: 219}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "지", start: 217.6, end: 219},
                { text: "금", start: 218.4, end: 219},
                { text: "\n次", start: 217.6, end: 219},
                { text: "捐", start: 218.4, end: 219}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n倘若你有聽見 ", start: 216.4, end: 219}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "現", start: 217.6, end: 219},
                { text: "在", start: 218.4, end: 219}
              ]
             }
            ]
           },
           {
          time: 219,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그곳에서 웃어줘\n請在那處綻放笑容吧", start: 219, end: 221.6}
              ]
             }
            ]
           },
           {
          time: 221.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "이젠 알겠어 ", start: 221.6, end: 223.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(알겠어)", start: 222.8, end: 223.2},
                { text: "\n(艾嘅傻)", start: 222.8, end: 223.2},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n現在明白了 ", start: 221.6, end: 223.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(明白了)", start: 222.8, end: 223.2}
              ]
             }
            ]
           },
           {
          time: 223.2,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "나는 깨달았어 ", start: 223.2, end: 224.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(깨달았어)", start: 224.1, end: 224.5},
                { text: "\n(括(打daa1)啦傻)", start: 224.1, end: 224.5},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我領悟到了 ", start: 223.2, end: 224.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(領悟到了)", start: 223.2, end: 224.5}
              ]
             }
            ]
           },
           {
          time: 224.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그토록 바랬던 길을 만난 순간\n見到迫切渴望的那條路的瞬間", start: 224.5, end: 227.3}
              ]
             }
            ]
           },
           {
          time: 227.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "놓치지 않을게\n絕不會錯過", start: 227.3, end: 235.7}
              ]
             }
            ]
           },
           {
          time: 233.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 233.2, end: 240.7}
              ]
             }
            ]
           }
          ] 
       
    },
    advanced: {
      videoId: "g2VTFOnp51E",
      lyrics: []
    }
  },
  {
    id: 10,
    title: "BBUU!",
    description: "",
    normal: {
      videoId: "ma3evv4vnW0",
      lyrics: []
    },
    advanced: {
      videoId: "zYfM_sYClnY",
      lyrics: []
    }
  },
  {
    id: 11,
    title: "Born Savage",
    description: "",
    normal: {
      videoId: "fVH5atHZtys",
      lyrics: []
    },
    advanced: {
      videoId: "3zvHS4-C4uo",
      lyrics: []
    }
  },
  {
    id: 12,
    title: "Star Trace",
    description: "",
    normal: {
      videoId: "2UZ4MLjFDG0",
      lyrics: []
    },
    advanced: {
      videoId: "hxYPZpPZJ7o",
      lyrics: []
      }
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
           
          // 支援在同一個 word 裡用 \n 換行
      if (word.text.includes("\n")) {
          const parts = word.text.split("\n");
          parts.forEach((part, index) => {
      if (index > 0) {
         wordElement.appendChild(document.createElement("br"));
    }
         const textNode = document.createTextNode(part);
        wordElement.appendChild(textNode);
  });
} else {
  wordElement.textContent = word.text;
}


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
