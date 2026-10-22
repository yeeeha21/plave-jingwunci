
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
            },
         {       
    advanced: {
      videoId: "T_gJpnjJsnk",
      lyrics: []
      }
     },
     {
    id: 2,
    title: "Pixel World",
    description: "",
    normal: {
      videoId: "9ZuqkkALRHk",
      lyrics: []
    },
    advanced: {
      videoId: "mk_7saG0rEE",
      lyrics: []
    }
  },
  {
    id: 3,
    title: "The 6th summer",
    description: "",
    normal: {
      videoId: "KhPe6jC-jaQ",
      lyrics: []
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
      lyrics: []
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
    ]
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
