
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
    image: "Image/ASTERUM,jpg",
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
    image: "Image/pixel world.jpg",
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
                 { text: "\n因為", start: 15.7, end: 18.4 }
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
                 { text: "uhm…(ha) You know? Yeah", start: 28.9, end: 31.6 }
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
                 { text: "\n夏拉嫁聽", start: 79.9, end: 81}
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
              color: "#ff962d",
              words: [
                 { text: "\n援拉嘅", start: 82.9, end: 84.7}
               ]
              },
              {
              color: "#b81818",
              words: [
                 { text: "\n要不要一直一起走下去 漫無邊際的", start: 76.9, end: 84.7}
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
    image: "Image/ASTERUM The Shape of Things to Come.jpg",
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
                { text: "영원을 말했죠 꿈이 아니기를\n說了永遠 希望不是夢", start: 7.6, end: 13.1}
              ]
             }
            ]
           },
           {
          time: 13.1,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "혼돈 속을 지나면\n渡過混亂之後", start: 13.1, end: 15.2}
              ]
             }
            ]
           },
           {
          time: 15.2,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "반짝일 거라고\n會是閃耀", start: 13.1, end: 17.2}
              ]
             }
            ]
           },
           {
          time: 17.2,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "소나기가", start: 17.2, end: 20.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(가) ", start: 18.3, end: 20.1}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "내려오면", start: 18.6, end: 20.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(면)", start: 19.5, end: 20.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(家)", start: 18.3, end: 20.1},
                { text: "(妙)", start: 19.5, end: 20.1},
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n如果暴", start: 17.2, end: 20.1},
                { text: "雨來臨", start: 18.6, end: 20.1}
              ]
             }
            ]
           },
           {
          time: 20.1,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "이건 잠시뿐일 거야\n它只會是暫時", start: 13.1, end: 22.6}
              ]
             }
            ]
           },
           {
          time: 22.6,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "눈이 부신 그날의 기억은\n因為那天耀眼的記憶", start: 22.6, end: 25.5}
              ]
             }
            ]
           },
           {
          time: 25.5,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "기적이니까요\n是奇蹟", start: 25.5, end: 27.8}
              ]
             }
            ]
           },
           {
          time: 27.8,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "좀 더 ", start: 25.5, end: 30.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "좀 ", start: 28.6, end: 30.7},
                { text: "리 ", start: 29, end: 30.7},
                { text: "좀 ", start: 29.4, end: 30.7},
                { text: "리 ", start: 29.6, end: 30.7},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n摸", start: 28.6, end: 30.7},
                { text: "li ", start: 29, end: 30.7},
                { text: "摸", start: 29.4, end: 30.7},
                { text: "li", start: 29.6, end: 30.7},
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n再遠", start: 25.5, end: 30.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "一", start: 28.6, end: 30.7},
                { text: "點 ", start: 29, end: 30.7},
                { text: "一", start: 29.4, end: 30.7},
                { text: "點", start: 29.6, end: 30.7},
              ]
             }
            ]
           },
           {
          time: 30.7,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "닿을 수 있을까\n能觸及到嗎？", start: 30.7, end: 33.3}
              ]
             }
            ]
           },
           {
          time: 33.3,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "길고 긴 ", start: 33.3, end: 35.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "여", start: 34.4, end: 35.9},
                { text: "정", start: 34.6, end: 35.9},
                { text: "에", start: 35.1, end: 35.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\nyour", start: 34.4, end: 35.9},
                { text: "沖", start: 34.6, end: 35.9},
                { text: "er", start: 35.1, end: 35.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n在這漫長的", start: 33.3, end: 35.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "旅", start: 34.4, end: 35.9},
                { text: "途", start: 34.6, end: 35.9},
                { text: "中", start: 35.1, end: 35.9}
              ]
             }
            ]
           },
           {
          time: 35.9,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "마침표를 찍을 수만 있다면\n如果能畫上句號的話", start: 35.9, end: 39.3}
              ]
             }
            ]
           },
           {
          time: 39.3,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "마지막 땀방울의 결말은\n我知道最後汗珠的結局", start: 39.3, end: 43.6}
              ]
             }
            ]
           },
           {
          time: 43.6,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "헛된 길이 아닐 걸 잘 알아\n不會是徒勞之路", start: 43.6, end: 49.2}
              ]
             }
            ]
           },
           {
          time: 49.2,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "반복되는 계절의 중간에 ", start: 43.6, end: 52.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "있", start: 51.6, end: 52.7},
                { text: "어", start: 52.1, end: 52.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n易", start: 51.6, end: 52.7},
                { text: "sor", start: 52.1, end: 52.7}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n在反覆的季節", start: 43.6, end: 52.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n中", start: 51.6, end: 52.7},
                { text: "間", start: 52.1, end: 52.7}
              ]
             }
            ]
           },
           {
          time: 52.7,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "그토록 바랬던 어둠 속의 빛을 찾고 말았어\n終於找到了一直期望的 黑暗裏的光", start: 52.7, end: 59.1}
              ]
             }
            ]
           },
           {
          time: 59.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 59.1, end: 63.7},
                { text: "에", start: 59.5, end: 63.7},
                { text: "게", start: 59.8, end: 63.7}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "로 달려가는 이 시공간을 넘어서", start: 60, end: 63.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n囉", start: 59.1, end: 63.7},
                { text: "er", start: 59.5, end: 63.7},
                { text: "嘅", start: 59.8, end: 63.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n越", start: 59.1, end: 63.7},
                { text: "過", start: 59.5, end: 63.7},
                { text: "奔", start: 59.8, end: 63.7}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "向你的這個時空間", start: 60, end: 63.7}
              ]
             },
            ]
           },
           {
          time: 63.7,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "닿은 이곳은 여섯 번째 여름의 시작이었단 걸\n到達的此處是第六個夏天的開始", start: 63.7, end: 70}
              ]
             }
            ]
           },
           {
          time: 70,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "꿈꿨어\n灌覺傻\n夢見了此境", start: 70, end: 71.5}
              ]
             }
            ]
           },
           {
          time: 71.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "푸른 하늘, 마치 눈물 같아", start: 71.5, end: 74.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(아)\n(他)", start: 71.5, end: 74.1}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n藍天，宛如眼淚", start: 71.5, end: 74.1}
              ]
             },
            ]
           },
           {
          time: 74.1,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "날이 밝아도 결국 쏟아진다", start: 71.5, end: 76.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(다)\n打(daa1)", start: 76.2, end: 76.9}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n即使在白天也會傾瀉", start: 71.5, end: 76.9}
              ]
             }
            ]
           },
           {
          time: 76.9,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "하염없이 달려온 길 위 oh\n無止境跑過來的路上 oh", start: 76.9, end: 79.4}
              ]
             }
            ]
           },
           {
          time: 79.4,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "속도를 올렸어\n索端攣屙亂啦sor\n加快了速度", start: 79.4, end: 81.1}
              ]
             }
            ]
           },
           {
          time: 81.1,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "망설이다 전부 다 놓쳐 버릴까 ", start: 79.4, end: 84}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "또", start: 83.2, end: 84},
                { text: "\n都", start: 83.2, end: 84}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n怕猶豫不決而又要錯過全", start: 79.4, end: 84}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "部", start: 83.2, end: 84}
              ]
             }
            ]
           },
           {
          time: 84,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "일곱 번의 여름은 없을 거라", start: 84, end: 86.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "고", start: 85.8, end: 86.6},
                { text: "\n高", start: 85.8, end: 86.6}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n不會有第七個夏", start: 84, end: 86.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "天", start: 85.8, end: 86.6}
              ]
             }
            ]
           },
           {
          time: 86.6,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "끝이 없던 평행곡선\n無盡的平行曲線", start: 86.6, end: 89.3}
              ]
             }
            ]
           },
           {
          time: 89.3,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "결국 같은 곳을 지나왔어\n結果經過了同一個地方", start: 89.3, end: 91.9}
              ]
             }
            ]
           },
           {
          time: 91.9,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "좀 더 ", start: 91.9, end: 94.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "좀 ", start: 92.7, end: 94.7},
                { text: "리 ", start: 93, end: 94.7},
                { text: "좀 ", start: 93.2, end: 94.7},
                { text: "리 ", start: 93.6, end: 94.7},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n摸", start: 92.7, end: 94.7},
                { text: "li ", start: 93, end: 94.7},
                { text: "摸", start: 93.2, end: 94.7},
                { text: "li", start: 93.6, end: 94.7},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n再遠", start: 91.9, end: 94.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "一", start: 92.7, end: 94.7},
                { text: "點 ", start: 93, end: 94.7},
                { text: "一", start: 93.2, end: 94.7},
                { text: "點", start: 93.6, end: 94.7},
              ]
             }
            ]
           },
           {
          time: 94.7,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "닿을 수 있을까\n能觸及到嗎？", start: 94.7, end: 97.3}
              ]
             }
            ]
           },
           {
          time: 97.3,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "길고 긴 ", start: 97.3, end: 100}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "여", start: 98.4, end: 100},
                { text: "정", start: 98.6, end: 100},
                { text: "에", start: 99, end: 100}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\nyour", start: 98.4, end: 100},
                { text: "沖", start: 98.6, end: 100},
                { text: "er", start: 99, end: 100}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n在這漫長的", start: 97.3, end: 100}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "旅", start: 98.4, end: 100},
                { text: "途", start: 98.6, end: 100},
                { text: "中", start: 99, end: 100}
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
                { text: "마침표를 찍을 수만 있다면\n如果能畫上句號的話", start: 100, end: 103.2}
              ]
             }
            ]
           },
           {
          time: 103.2,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "마지막 땀방울의 결말은\n我知道最後汗珠的結局", start: 103.2, end: 107.6}
              ]
             }
            ]
           },
           {
          time: 107.6,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "헛된 길이 아닐 걸 잘 알아\n不會是徒勞之路", start: 107.6, end: 113.2}
              ]
             }
            ]
           },
           {
          time: 113.2,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "반복되는 계절의 중간에 ", start: 113.2, end: 116.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "있", start: 115.6, end: 116.7},
                { text: "어", start: 116.1, end: 116.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n易", start: 115.6, end: 116.7},
                { text: "sor", start: 116.1, end: 116.7}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n在反覆的季節", start: 113.2, end: 116.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n中", start: 115.6, end: 116.7},
                { text: "間", start: 116.1, end: 116.7}
              ]
             }
            ]
           },
           {
          time: 116.7,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그토록 바랬던 어둠 속의 빛을 찾고 말았어\n終於找到了一直期望的 黑暗裏的光", start: 116.7, end: 123.1}
              ]
             }
            ]
           },
           {
          time: 123.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 123.1, end: 127.7},
                { text: "에", start: 123.6, end: 127.7},
                { text: "게", start: 123.7, end: 127.7}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "로 달려가는 이 시공간을 넘어서", start: 124.1, end: 127.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n囉", start: 123.1, end: 127.7},
                { text: "er", start: 123.6, end: 127.7},
                { text: "嘅", start: 123.7, end: 127.7},
                { text: "\n越", start: 123.1, end: 127.7},
                { text: "過", start: 123.6, end: 127.7},
                { text: "奔", start: 123.7, end: 127.7}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "向你的這個時空間", start: 124.1, end: 127.7}
              ]
             },
            ]
           },
           {
          time: 127.7,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "닿은 이곳은 여섯 번째 여름의 시작이었단 걸\n到達的此處是第六個夏天的開始", start: 127.7, end: 134.1}
              ]
             }
            ]
           },
           {
          time: 134.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "꿈꿨어\n灌覺傻\n夢見了此境", start: 134.1, end: 135.6}
              ]
             }
            ]
           },
           {
          time: 135.6,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "꿈일까 꿈일까\n會是夢嗎 會是夢嗎", start: 135.6, end: 137.6}
              ]
             }
            ]
           },
           {
          time: 137.6,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "우리 함께하는 이 순간 ", start: 137.6, end: 140.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(꿈같아)\n(灌格他)", start: 139.5, end: 140.6}
              ]
             },
               {
              color: "#ffafcf",
              words: [
                { text: "我們一起的這個瞬間", start: 137.6, end: 140.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(像是夢)", start: 139.5, end: 140.6}
              ]
             }
            ]
           },
          {
          time: 140.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "마법 같은 하루가 \n在魔法一般的一天", start: 140.6, end: 144.1}
              ]
             }
            ]
           },
           {
          time: 144.1,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "(결국엔 사라질까)\n(最終會消失嗎？)", start: 144.1, end: 145.9}
              ]
             }
            ]
           },
           {
          time: 145.9,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "그칠까 그칠까 찬란히\n會停止嗎 會停止嗎 燦爛地", start: 145.9, end: 147.6}
              ]
             }
            ]
           },
           {
          time: 147.6,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "반짝이던 눈물의 기적\n閃耀的眼淚的奇蹟", start: 147.6, end: 152.9}
              ]
             }
            ]
           },
           {
          time: 152.9,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "빛나줘\n發光吧", start: 152.9, end: 152.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(歡呼!!)", start: 154.1, end: 167.1}
              ]
             }
            ]
           },
           {
          time: 167.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 한노아 채밤비 도은호 유하민\n躝夜轉 慳糯也 車扮B Do䟴呵 you夏mean\n南藝俊 韓諾亞 蔡斑比 都銀虎 柳河玟", start: 167.1, end: 174.2}
              ]
             }
            ]
           },
           {
          time: 174.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플 레 이 브  영 원 하 자\n噗 呢 伊 bu  嗡 wong 哈 炸\nP L A V E  永 遠 在 一 起 吧", start: 174.2, end: 177.4}
              ]
             }
            ]
           },
             {
          time: 177.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "반복되는 계절의 중간에 ", start: 177.4, end: 180.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "있", start: 179.7, end: 180.6},
                { text: "어", start: 180, end: 180.6},
                { text: "\n易", start: 179.7, end: 180.6},
                { text: "sor", start: 180, end: 180.6}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n在反覆的季節", start: 177.4, end: 180.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n中", start: 179.7, end: 180.6},
                { text: "間", start: 180, end: 180.6}
              ]
             }
            ]
           },
           {
          time: 180.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그토록 바랬던 어둠 속의 빛을 찾고 말았어\n終於找到了一直期望的 黑暗裏的光", start: 180.6, end: 183.3}
              ]
             }
            ]
           },
           {
          time: 183.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 183.3, end: 191.6},
                { text: "에", start: 187.6, end: 191.6},
                { text: "게", start: 187.8, end: 191.6}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "로 달려가는 이 시공간을 넘어서", start: 188.2, end: 191.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n囉", start: 183.3, end: 191.6},
                { text: "er", start: 187.6, end: 191.6},
                { text: "嘅", start: 187.8, end: 191.6},
                { text: "\n越", start: 183.3, end: 191.6},
                { text: "過", start: 187.6, end: 191.6},
                { text: "奔", start: 187.8, end: 191.6}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "向你的這個時空間", start: 188.2, end: 191.6}
              ]
             },
            ]
           },
           {
          time: 191.6,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "닿은 이곳은 여섯 번째 여름의 시작이었단 걸\n到達的此處是第六個夏天的開始", start: 191.6, end: 198.2}
              ]
             }
            ]
           },
           {
          time: 198.2,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "꿈꿨어\n夢見了此境", start: 198.2, end: 206}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 199.5, end: 206}
              ]
             }
            ]
           }

      ]
    },
    advanced: {
      videoId: "dE_ddOigeZA",
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
    id: 4,
    title: "Why?Why?Why?",
    image: "Image/왜요 왜요 왜.jpg",
    description: "",
    normal: {
      videoId: "jF4B7Yvct-c",
      lyrics: [
          {
          time: 5.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플 ", start: 5.1, end: 10.5},
                { text: "레 ", start: 5.9, end: 10.5},
                { text: "이 ", start: 6.6, end: 10.5},
                { text: "브 ", start: 7.2, end: 10.5},
                { text: "왜", start: 7.8, end: 10.5},
                { text: "요 ", start: 8.4, end: 10.5},
                { text: "왜", start: 8.9, end: 10.5},
                { text: "요 ", start: 9.4, end: 10.5},
                { text: "왜", start: 9.5, end: 10.5},
                { text: "\n噗 ", start: 5.1, end: 10.5},
                { text: "呢 ", start: 5.9, end: 10.5},
                { text: "伊 ", start: 6.6, end: 10.5},
                { text: "bu ", start: 7.2, end: 10.5},
                { text: "where ", start: 7.8, end: 10.5},
                { text: "yo ", start: 8.4, end: 10.5},
                { text: "where/", start: 8.9, end: 10.5},
                { text: "yo/", start: 9.4, end: 10.5},
                { text: "where", start: 9.5, end: 10.5},
                { text: "\nP ", start: 5.1, end: 10.5},
                { text: "L A ", start: 5.9, end: 10.5},
                { text: "V ", start: 6.6, end: 10.5},
                { text: "E ", start: 7.2, end: 10.5},
                { text: "《Wh", start: 7.8, end: 10.5},
                { text: "y ", start: 8.4, end: 10.5},
                { text: "Wh", start: 8.9, end: 10.5},
                { text: "y ", start: 9.4, end: 10.5},
                { text: "Why?》", start: 9.5, end: 10.5}
              ]
             }
            ]
           },
          ]
         },
    advanced: {
      videoId: "9WQ-kx-Y6m8",
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
    id: 5,
    title: "WAT 4 LUV",
    image: "Image/ASTERUM 134-1.jpg",
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
    image: "Image/Pump Up The Volume!.jpg",
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
    image: "Image/Caligo Pt.1.jpg",
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
    image: "Image/かくれんぼ (Hide and Seek).jpg",
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
    image: "Image/숨바꼭질 (Hide and Seek).jpg",
    description: "",
    normal: {
      videoId: "mGqYMma_YIk",
      lyrics: [
          {
          time: 45,
          segments: [
             {
              color: "#954b01",
              words: [
                { text: "MUSIC START!", start: 45, end: 54.6}
              ]
             }
            ]
           },
          {
          time: 55.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 ", start: 55.2, end: 61.8},
                { text: "한노아 ", start: 56.5, end: 61.8},
                { text: "채밤비 ", start: 57.8, end: 61.8},
                { text: "도은호 ", start: 59.2, end: 61.8},
                { text: "유하민", start: 60.4, end: 61.8},
                { text: "\n躝夜轉 ", start: 55.2, end: 61.8},
                { text: " 慳糯也 ", start: 56.5, end: 61.8},
                { text: " 車扮B ", start: 57.8, end: 61.8},
                { text: " Do䟴呵 ", start: 59.2, end: 61.8},
                { text: "you夏mean", start: 60.4, end: 61.8},
                 { text: "\n南藝俊 ", start: 55.2, end: 61.8},
                { text: " 韓諾亞 ", start: 56.5, end: 61.8},
                { text: " 蔡斑比 ", start: 57.8, end: 61.8},
                { text: " 都銀虎 ", start: 59.2, end: 61.8},
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
                { text: "플 ", start: 61.8, end: 65.7},
                { text: "레 ", start: 62.2, end: 65.7},
                { text: "이 ", start: 62.5, end: 65.7},
                { text: "브 ", start: 62.9, end: 65.7},
                { text: " 숨 ", start: 63.1, end: 65.7},
                { text: "바 ", start: 63.8, end: 65.7},
                { text: "꼭 ", start: 64.4, end: 65.7},
                { text: "질", start: 65.1, end: 65.7},
                { text: "\n噗 ", start: 61.8, end: 65.7},
                { text: "呢 ", start: 62.2, end: 65.7},
                { text: "伊 ", start: 62.5, end: 65.7},
                { text: "bu ", start: 62.9, end: 65.7},
                { text: " Zoo ", start: 63.1, end: 65.7},
                { text: " 拍 ", start: 63.8, end: 65.7},
                { text: " 谷 ", start: 64.4, end: 65.7},
                { text: " 知", start: 65.1, end: 65.7},
                { text: "\nP ", start: 61.8, end: 65.7},
                { text: "L A ", start: 62.2, end: 65.7},
                { text: "V ", start: 62.5, end: 65.7},
                { text: "E ", start: 62.9, end: 65.7},
                { text: " 捉 ", start: 63.1, end: 65.7},
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
                { text: "고 ", start: 66.3, end: 71.1},
                { text: "싶았어 ", start: 66.9, end: 71.1},
                { text: " 플 ", start: 68.3, end: 71.1},
                { text: "레 ", start: 69, end: 71.1},
                { text: "이 ", start: 69.5, end: 71.1},
                { text: "브", start: 70.3, end: 71.1},
                { text: "\n噗", start: 65.7, end: 71.1},
                { text: "茹 ", start: 66.3, end: 71.1},
                { text: "書撲sor ", start: 66.9, end: 71.1},
                { text: " 噗 ", start: 68.3, end: 71.1},
                { text: "呢 ", start: 69, end: 71.1},
                { text: "伊 ", start: 69.5, end: 71.1},
                { text: "bu", start: 70.3, end: 71.1},
                { text: "\n很", start: 65.7, end: 71.1},
                { text: "想", start: 66.3, end: 71.1},
                { text: "你們 ", start: 66.9, end: 71.1},
                { text: " P ", start: 68.3, end: 71.1},
                { text: "L A ", start: 69, end: 71.1},
                { text: "V ", start: 69.5, end: 71.1},
                { text: "E", start: 70.3, end: 71.1},
              ]
             }
            ]
           },
           {
          time: 70.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "드", start: 70.9, end: 76.5},
                { text: "디", start: 71.3, end: 76.5},
                { text: "어 ", start: 71.5, end: 76.5},
                { text: " 찾", start: 72.1, end: 76.5},
                { text: "았 ", start: 72.5, end: 76.5},
                { text: "어 ", start: 72.8, end: 76.5},
                { text: " 플 ", start: 73.4, end: 76.5},
                { text: "레 ", start: 74.1, end: 76.5},
                { text: "이 ", start: 74.7, end: 76.5},
                { text: "브", start: 75.3, end: 76.5},
                { text: "\n箍", start: 70.9, end: 76.5},
                { text: "啲", start: 71.3, end: 76.5},
                { text: "哦 ", start: 71.5, end: 76.5},
                { text: " 差", start: 72.1, end: 76.5},
                { text: "咋", start: 72.5, end: 76.5},
                { text: "sor ", start: 72.8, end: 76.5},
                { text: " 噗 ", start: 73.4, end: 76.5},
                { text: "呢 ", start: 74.1, end: 76.5},
                { text: "伊 ", start: 74.7, end: 76.5},
                { text: "bu", start: 75.3, end: 76.5},
                { text: "\n終", start: 71.1, end: 76.5},
                { text: "於", start: 71.3, end: 76.5},
                { text: "找", start: 71.5, end: 76.5},
                { text: "到", start: 72.1, end: 76.5},
                { text: "你", start: 72.5, end: 76.5},
                { text: "們 ", start: 72.8, end: 76.5},
                { text: " P ", start: 73.4, end: 76.5},
                { text: "L A ", start: 74.1, end: 76.5},
                { text: "V ", start: 74.7, end: 76.5},
                { text: "E", start: 75.3, end: 76.5},
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
                { text: "조금은 헷갈려 할지도 몰라\n說不定會有點混亂", start: 85.9, end: 89.4}
              ]
             }
            ]
           },
           {
          time: 89.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "너도 그런 걸까?\n你也是這樣嗎？", start: 89.4, end: 91.4}
              ]
             }
            ]
           },
           {
          time: 91.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "나도 그래왔었으니까 ", start: 91.4, end: 97.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(플 ", start: 95.8, end: 97.3},
                { text: "레 ", start: 96, end: 97.3},
                { text: "이 ", start: 96.3, end: 97.3},
                { text: "브)", start: 96.7, end: 97.3},
                { text: "\n(噗 ", start: 95.8, end: 97.3},
                { text: " 呢 ", start: 96, end: 97.3},
                { text: " 伊 ", start: 96.3, end: 97.3},
                { text: " bu)", start: 96.7, end: 97.3}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n因為我也曾經如此 ", start: 91.4, end: 97.3}
              ]
             },
               {
              color: "#ff962d",
              words: [
                { text: "(P ", start: 95.8, end: 97.3},
                { text: " L A ", start: 96, end: 97.3},
                { text: " V ", start: 96.3, end: 97.3},
                { text: " E)", start: 96.7, end: 97.3}
              ]
             }
            ]
           },
           {
          time: 97.3,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "네가 나를 찾아왔던 그 순간\n你向我找來的那瞬間", start: 97.3, end: 99.9}
              ]
             }
            ]
           },
           {
          time: 99.9,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "너의 흔적들을 따라가 봤어\n我也曾跟隨你的蹤跡", start: 99.9, end: 102.2}
              ]
             }
            ]
           },
           {
          time: 102.2,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "마치 미로 같은 수수께끼인 걸까?\n就像是如同迷宮般的謎底嗎？", start: 102.2, end: 107.9}
              ]
             }
            ]
           },
           {
          time: 107.7,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그런 기분이 들 때", start: 107.7, end: 112.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: " (숨 ", start: 110, end: 112.6},
                { text: " 바 ", start: 110.7, end: 112.6},
                { text: " 꼭 ", start: 111.2, end: 112.6},
                { text: " 질)", start: 111.8, end: 112.6},
                { text: "\n(Zoo ", start: 110, end: 112.6},
                { text: " 拍 ", start: 110.7, end: 112.6},
                { text: " 谷 ", start: 111.2, end: 112.6},
                { text: " 知)", start: 111.9, end: 112.6}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n當這種感覺浮現", start: 107.7, end: 112.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: " (捉 ", start: 110, end: 112.6},
                { text: " 迷 ", start: 110.7, end: 112.6},
                { text: " 藏) ", start: 111.2, end: 112.6}
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
                { text: "확신해 나", start: 112.6, end: 116.8}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "를 찾는 너의", start: 112.6, end: 116.8}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n今天我堅", start: 112.6, end: 116.8}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "定不移奔向", start: 112.6, end: 116.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(歡呼!!)", start: 115.2, end: 116.8}
              ]
             }
            ]
           },
           {
          time: 116.8,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "세계로 오늘을 달려왔어\n追尋著我的你的世界", start: 116.8, end: 120}
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
                { text: "포기할 수 없던 시간 속에\n在無法割捨的時間裡", start: 120, end: 123.3}
              ]
             }
            ]
           },
           {
          time: 123.3,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "숨바꼭질은 나의\n捉迷藏就是我的", start: 123.3, end: 125.7}
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
                { text: "이젠 알겠어 ", start: 127.8, end: 129.2}
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
                { text: "\n現在明白了 ", start: 127.8, end: 129.2}
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
                { text: "힘", start: 139.3, end: 140.6},
                { text: "껏", start: 140, end: 140.6},
                { text: "\n謙", start: 139.3, end: 140.6},
                { text: "鋸", start: 140, end: 140.6},
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
                { text: "吶", start: 139.3, end: 140.6},
                { text: "喊", start: 140, end: 140.6}
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
                { text: "힘", start: 141.9, end: 143.3},
                { text: "껏", start: 142.6, end: 143.3},
                { text: "\n謙", start: 141.9, end: 143.3},
                { text: "鋸", start: 142.6, end: 143.3},
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
                { text: "吶", start: 141.9, end: 143.3},
                { text: "喊", start: 142.6, end: 143.3}
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
                { text: "들린다면 ", start: 143.3, end: 145.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "지", start: 144.5, end: 145.9},
                { text: "금", start: 145.2, end: 145.9},
                { text: "\n次", start: 144.5, end: 145.9},
                { text: "捐", start: 145.2, end: 145.9},
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n倘若你有聽見 ", start: 143.3, end: 145.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "現", start: 144.5, end: 145.9},
                { text: "在", start: 145.2, end: 145.9}
              ]
             }
            ]
           },
           {
          time: 145.9,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그곳에서 웃어줘\n請在那處綻放笑容吧", start: 145.9, end: 148.4}
              ]
             }
            ]
           },
           {
          time: 148.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "이젠 알겠어 ", start: 148.4, end: 150.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(알겠어)", start: 149.7, end: 150.2},
                { text: "\n(艾嘅傻)", start: 149.7, end: 150.2},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n現在明白了 ", start: 148.4, end: 150.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(明白了)", start: 149.7, end: 150.2}
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
                { text: "나는 깨달았어 ", start: 150.2, end: 151.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(깨달았어)", start: 151, end: 151.4},
                { text: "\n(括(打daa1)啦傻)", start: 151, end: 151.4},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我領悟到了 ", start: 150.2, end: 151.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(領悟到了)", start: 151, end: 151.4}
              ]
             }
            ]
           },
           {
          time: 151.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "결국 우린 마주한다는 걸 안 순간\n當我知道我們終將相遇的那瞬間", start: 151.4, end: 154.3}
              ]
             }
            ]
           },
           {
          time: 154.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "달려갈게 오늘도\n今天也依舊奔向你", start: 154.3, end: 159.8}
              ]
             }
            ]
           },
           {
          time: 159.8,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "그래 정답은 항상 ", start: 159.8, end: 161.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "너였어", start: 160.8, end: 161.8},
                { text: "\n囉your傻", start: 160.8, end: 161.8},
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n是啊我的答案一直", start: 159.8, end: 161.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "都是你", start: 160.8, end: 161.8}
              ]
             }
            ]
           },
           {
          time: 161.7,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "망가진 꿈 너로 인해 난 되찾았어 ", start: 161.7, end: 164.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(되찾았어)", start: 164, end: 164.6},
                { text: "\n(車差揸sor)", start: 164, end: 164.6},
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n因為你而找回支離破碎的夢", start: 161.7, end: 164.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(破碎的夢)", start: 164, end: 164.6}
              ]
             }
            ]
           },
           {
          time: 164.6,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "이젠 알아 심장이 뛰는 이유\n現在才知道心臟跳動的理由", start: 164.6, end: 166.9}
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
                { text: "너의 흔적을 지나치고 있어\n我沿著你留下的痕跡", start: 173, end: 175.2}
              ]
             }
            ]
           },
           {
          time: 175.2,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "이젠 풀 수 있는 수수께끼인 걸까?\n現在終於能解開這道謎題了嗎？", start: 175.2, end: 180.8}
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
                { text: "그런 기분", start: 180.8, end: 185.4}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "이 들 때 ", start: 180.8, end: 185.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(찾", start: 183, end: 185.4},
                { text: "아", start: 183.7, end: 185.4},
                { text: "갈", start: 184.3, end: 185.4},
                { text: "게)", start: 185, end: 185.4},
                { text: "\n(差", start: 183, end: 185.4},
                { text: "齋", start: 183.7, end: 185.4},
                { text: "哀", start: 184.3, end: 185.4},
                { text: "嘅)", start: 185, end: 185.4}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n當這種感", start: 180.8, end: 185.4}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "覺浮現 ", start: 180.8, end: 185.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(我會", start: 183, end: 185.4},
                { text: "去", start: 183.7, end: 185.4},
                { text: "找", start: 184.3, end: 185.4},
                { text: "你)", start: 185, end: 185.4}
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
                { text: "나를 찾는 너의 ", start: 185.4, end: 190.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(플 ", start: 188.3, end: 190.4},
                { text: "레 ", start: 188.9, end: 190.4},
                { text: "이 ", start: 189.5, end: 190.4},
                { text: "브)", start: 190.2, end: 190.4},
                { text: "\n(噗 ", start: 188.3, end: 190.4},
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
                { text: "(P ", start: 188.3, end: 190.4},
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
                { text: "포기할 수 없던 시간 속에\n在無法割捨的時間裡", start: 193, end: 196.4}
              ]
             }
            ]
           },
           {
          time: 196.4,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "숨바꼭질은 나의\n捉迷藏就是我的", start: 196.4, end: 198.7}
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
                { text: "맘이 차올라서\n心緒洶湧而上", start: 206.5, end: 211.1}
              ]
             }
            ]
           },
           {
          time: 211.1,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "소리칠게 ", start: 211.1, end: 213.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "힘", start: 212.3, end: 213.8},
                { text: "껏", start: 213, end: 213.8},
                { text: "\n謙", start: 212.3, end: 213.8},
                { text: "鋸", start: 213, end: 213.8}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我會竭力", start: 211.1, end: 140.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "吶", start: 212.3, end: 213.8},
                { text: "喊", start: 213, end: 213.8}
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
                { text: "소리칠게 ", start: 213.8, end: 216.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "힘", start: 215, end: 216.3},
                { text: "껏", start: 215.7, end: 216.3},
                { text: "\n謙", start: 215, end: 216.3},
                { text: "鋸", start: 215.7, end: 216.3}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我會竭力", start: 213.8, end: 216.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "吶", start: 215, end: 216.3},
                { text: "喊", start: 215.7, end: 216.3}
              ]
             }
            ]
           },
           {
          time: 216.3,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "들린다면 ", start: 216.3, end: 219}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "지", start: 217.6, end: 219},
                { text: "금", start: 218.3, end: 219},
                { text: "\n次", start: 217.6, end: 219},
                { text: "捐", start: 218.3, end: 219}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n倘若你有聽見 ", start: 216.3, end: 219}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "現", start: 217.6, end: 219},
                { text: "在", start: 218.3, end: 219}
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
                { text: "이젠 알겠어 ", start: 221.6, end: 223.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(알겠어)", start: 222.7, end: 223.1},
                { text: "\n(艾嘅傻)", start: 222.7, end: 223.1},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n現在明白了 ", start: 221.6, end: 223.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(明白了)", start: 222.7, end: 223.1}
              ]
             }
            ]
           },
           {
          time: 223.1,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "나는 깨달았어 ", start: 223.1, end: 224.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(깨달았어)", start: 224, end: 224.5},
                { text: "\n(括(打daa1)啦傻)", start: 224, end: 224.5},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我領悟到了 ", start: 223.1, end: 224.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(領悟到了)", start: 224, end: 224.5}
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
          time: 233,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 233, end: 240.7}
              ]
             }
            ]
           }
          ]
         },

    advanced: {
      videoId: "g2VTFOnp51E",
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
    id: 10,
    title: "BBUU!",
    image: "Image/PLBBUU.jpg",
    description: "",
    normal: {
      videoId: "ma3evv4vnW0",
      lyrics: [
          {
          time: 36.9,
          segments: [
             {
              color: "#954b01",
              words: [
                { text: "MUSIC START!", start: 36.9, end: 41.3}
              ]
             }
            ]
           },
           {
          time: 41.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "예", start: 41.3, end: 45.8},
                { text: "노 ", start: 41.9, end: 45.8},
                { text: "밤", start: 42.5, end: 45.8},
                { text: "은", start: 42.8, end: 45.8},
                { text: "하 ", start: 43, end: 45.8},
                { text: " P ", start: 43.6, end: 45.8},
                { text: "L A ", start: 43.8, end: 45.8},
                { text: "V ", start: 44.2, end: 45.8},
                { text: "E ", start: 44.4, end: 45.8},
                { text: " 사 ", start: 44.6, end: 45.8},
                { text: "랑 ", start: 45, end: 45.8},
                { text: "해", start: 45.2, end: 45.8},
                { text: "\nyeah", start: 41.3, end: 45.8},
                { text: "囉 ", start: 41.9, end: 45.8},
                { text: "攀", start: 42.5, end: 45.8},
                { text: "悶", start: 42.8, end: 45.8},
                { text: "啦 ", start: 43, end: 45.8},
                { text: " P ", start: 43.6, end: 45.8},
                { text: "L A ", start: 43.8, end: 45.8},
                { text: "V ", start: 44.2, end: 45.8},
                { text: "E ", start: 44.4, end: 45.8},
                { text: " 沙 ", start: 44.6, end: 45.8},
                { text: "躝 ", start: 45, end: 45.8},
                { text: "hea", start: 45.2, end: 45.8},
                { text: "\n藝", start: 41.3, end: 45.8},
                { text: "諾", start: 41.9, end: 45.8},
                { text: "斑", start: 42.5, end: 45.8},
                { text: "銀", start: 42.8, end: 45.8},
                { text: "河 ", start: 43, end: 45.8},
                { text: " P ", start: 43.6, end: 45.8},
                { text: "L A ", start: 43.8, end: 45.8},
                { text: "V ", start: 44.2, end: 45.8},
                { text: "E ", start: 44.4, end: 45.8},
                { text: " 我 ", start: 44.6, end: 45.8},
                { text: "愛 ", start: 45, end: 45.8},
                { text: "你", start: 45.2, end: 45.8},
              ]
             }
            ]
           },
           {
          time: 45.8,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "우주 속에서 널 마주한 건\n在宇宙中遇見你", start: 45.8, end: 50}
              ]
             }
            ]
           },
           {
          time: 50,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Cause it's only you\n因為只有你", start: 50, end: 52.4}
              ]
             }
            ]
           },
           {
          time: 52.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "말해 ", start: 52.4, end: 54.5},
                { text: "뭐 ", start: 52.9, end: 54.5},
                { text: "해?", start: 53.2, end: 54.5},
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "Yeah ", start: 53.6, end: 54.5},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n媽呢 ", start: 52.4, end: 54.5},
                { text: "摸", start: 52.9, end: 54.5},
                { text: "hae", start: 53.2, end: 54.5},
                { text: "\n還用", start: 52.4, end: 54.5},
                { text: "多說", start: 52.9, end: 54.5},
                { text: "嗎？", start: 53.2, end: 54.5}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "Yeah ", start: 53.6, end: 54.5},
              ]
             }
            ]
           },
           {
          time: 54.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 54.5, end: 56.7}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "너를 사랑하는 이유", start: 55.2, end: 56.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n一、", start: 54.5, end: 56.7}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "愛上你的理由", start: 55.2, end: 56.7}
              ]
             }
            ]
           },
           {
          time: 56.7,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 56.7, end: 58.8}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "아무 이유 없는 기분", start: 57.4, end: 58.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 56.7, end: 58.8}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "毫無理由的好心情", start: 57.4, end: 58.8}
              ]
             }
            ]
           },
           {
          time: 58.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 58.8, end: 60.7},
                { text: "to the ", start: 59.6, end: 60.7},
                { text: "four", start: 59.9, end: 60.7}
              ]
             }
            ]
           },
           {
          time: 60.7,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그냥 five, six, seven ", start: 58.8, end: 63.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 62.5, end: 63.2}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n就五、六、七 ", start: 58.8, end: 63.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 62.5, end: 63.2}
              ]
             }
            ]
           },
           {
          time: 63.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 63.2, end: 65.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "너를 사랑하는 이유", start: 63.9, end: 65.4}
              ]
             },
             {
              color: "#ff962d",
              word:[
                { text: "\n一、", start: 63.2, end: 65.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "愛上你的理由", start: 63.9, end: 65.4}
              ]
             }
            ]
           },
           {
          time: 65.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 65.4, end: 67.5}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "아무 이유 없는 기분", start: 66.1, end: 67.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 65.4, end: 67.5}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "毫無理由的好心情", start: 66.1, end: 67.5}
              ]
             }
            ]
           },
           {
          time: 67.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 67.5, end: 69.5},
                { text: "to the ", start: 68.3, end: 69.5},
                { text: "four", start: 68.6, end: 69.5}
              ]
             }
            ]
           },
           {
          time: 69.5,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그냥 five, six, seven ", start: 69.5, end: 72}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 71.3, end: 72}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n就五、六、七 ", start: 69.5, end: 72}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 71.3, end: 72}
              ]
             }
            ]
           },
           {
          time: 72,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "지금부터 천천히 널 설명할게\n現在開始慢慢向你說明", start: 72, end: 76}
              ]
             }
            ]
           },
           {
          time: 76,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "Oh, 정리 안 된 머릿속은 도대체 왜\n哦，我混亂的腦袋到底為什麼", start: 72, end: 80}
              ]
             }
            ]
           },
           {
          time: 80,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "어지러워 ", start: 80, end: 81.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Oh)", start: 81.2, end: 81.8}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n會頭昏腦脹", start: 80, end: 81.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Oh)", start: 81.2, end: 81.8}
              ]
             }
            ]
           },
           {
          time: 81.8,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "핑핑 돌아 ", start: 81.8, end: 84}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(돌아)", start: 82.8, end: 84}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(two拿)", start: 82.8, end: 84}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n會頭昏腦脹", start: 81.8, end: 84}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(打轉)", start: 82.8, end: 84}
              ]
             }
            ]
           },
           {
          time: 84,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "온종일 비상사태\n一整天都是緊急狀態", start: 84, end: 85.8}
              ]
             }
            ]
           },
           {
          time: 85.8,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "네 앞에 서면\n只要站在你面前", start: 85.8, end: 87.2}
              ]
             }
            ]
           },
           {
          time: 87.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "찌릿 ", start: 87.2, end: 89.4},
                { text: "찌릿 ", start: 87.7, end: 89.4},
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "백만 볼트", start: 88.3, end: 89.4},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n痴呢(ne1)", start: 87.2, end: 89.4},
                { text: "痴呢(ne1)", start: 87.7, end: 89.4},
                { text: "\n就像百萬", start: 87.2, end: 89.4},
                { text: "伏特的電流", start: 87.7, end: 89.4},
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "劈啪作響", start: 88.3, end: 89.4},
              ]
             }
            ]
           },
           {
          time: 89.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 89.4, end: 91.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "너를 사랑하는 이유", start: 90.2, end: 91.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n一、", start: 89.4, end: 91.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "愛上你的理由", start: 90.2, end: 91.5}
              ]
             }
            ]
           },
           {
          time: 91.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 91.5, end: 93.6}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "아무 이유 없는 기분", start: 92.4, end: 93.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 91.5, end: 93.6}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "毫無理由的好心情", start: 92.4, end: 93.6}
              ]
             }
            ]
           },
           {
          time: 93.6,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 93.6, end: 95.6},
                { text: "to the ", start: 94.5, end: 95.6},
                { text: "four", start: 94.8, end: 95.6}
              ]
             }
            ]
           },
           {
          time: 95.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그냥 five, six, seven ", start: 95.6, end: 98.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 97.4, end: 98.1}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n就五、六、七 ", start: 95.6, end: 98.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 97.4, end: 98.1}
              ]
             }
            ]
           },
           {
          time: 98.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 98.1, end: 100.3}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "너를 사랑하는 이유", start: 98.9, end: 100.3}
              ]
             },
             {
              color: "#ff962d",
              word:[
                { text: "\n一、", start: 98.1, end: 100.3}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "愛上你的理由", start: 98.9, end: 100.3}
              ]
             }
            ]
           },
           {
          time: 100.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 100.3, end: 102.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "아무 이유 없는 기분", start: 101.1, end: 102.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 100.3, end: 102.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "毫無理由的好心情", start: 101.1, end: 102.4}
              ]
             }
            ]
           },
           {
          time: 102.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 102.4, end: 104.4},
                { text: "to the ", start: 103.2, end: 104.4},
                { text: "four", start: 103.5, end: 104.4}
              ]
             }
            ]
           },
           {
          time: 104.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그냥 five, six, seven ", start: 104.4, end: 106.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 106.1, end: 106.8}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n就五、六、七 ", start: 104.4, end: 106.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 106.1, end: 106.8}
              ]
             }
            ]
           },
           {
          time: 106.8,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "우주 속에서 널 마주한 건\n在宇宙中遇見你", start: 106.8, end: 111.2}
              ]
             }
            ]
           },
           {
          time: 111.2,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "Cause it's only you\n因為只有你", start: 111.2, end: 113.6}
              ]
             }
            ]
           },
           {
          time: 113.6,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "말해 ", start: 119.6, end: 115.7},
                { text: "뭐 ", start: 114, end: 115.7},
                { text: "해?", start: 114.2, end: 115.7},
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "Yeah ", start: 114.8, end: 115.7},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n媽呢 ", start: 119.6, end: 115.7},
                { text: "摸", start: 114, end: 115.7},
                { text: "hae", start: 114.2, end: 115.7},
                { text: "\n還用", start: 119.6, end: 115.7},
                { text: "多說", start: 114, end: 115.7},
                { text: "嗎？", start: 114.2, end: 115.7}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "Yeah ", start: 114.8, end: 115.7},
              ]
             }
            ]
           },
           {
          time: 115.7,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "오늘 밤 널 데리러 갈게 ", start: 115.7, end: 118}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(응!)", start: 117.2, end: 118},
                { text: "\n(嗯!)", start: 117.2, end: 118}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n今晚我會去接你", start: 115.7, end: 118}
              ]
             },
              {
              color: "#ff962d",
              words: [
                { text: "(嗯!)", start: 117.2, end: 118}
              ]
             }
            ]
           },
           {
          time: 118,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "나와주기만 해, babe\n你只要出來就好，寶貝", start: 118, end: 120.1}
              ]
             }
            ]
           },
           {
          time: 120.1,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "드림로 433 근처야 십분 뒤에 만나요\n在Dream路 433附近，十分鐘後見面", start: 120.1, end: 124.5}
              ]
             }
            ]
           },
           {
          time: 124.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "준비돼 있지 완벽한 플리\n準備好完美歌單", start: 124.5, end: 125.5}
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
                { text: "준비돼 있지 완벽한 플리\n準備好完美歌單", start: 125.5, end: 126.7}
              ]
             }
            ]
           },
           {
          time: 126.7,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "온습도까지 ", start: 126.7, end: 128.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(와~)", start: 128.1, end: 128.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(嘩~)", start: 128.1, end: 128.8}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n連溫濕度都調好了", start: 126.7, end: 128.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(嘩~)", start: 128.1, end: 128.8}
              ]
             }
            ]
           },
           {
          time: 128.8,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "우연인지 운명인지?\n是偶然還是命運？", start: 128.8, end: 130.8}
              ]
             }
            ]
           },
           {
          time: 130.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Everything's so good\n一切都太美好", start: 130.8, end: 132.9}
              ]
             }
            ]
           },
           {
          time: 132.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 132.9, end: 135.2}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "너를 사랑하는 이유", start: 133.9, end: 135.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n一、", start: 132.9, end: 135.2}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "愛上你的理由", start: 133.9, end: 135.2}
              ]
             }
            ]
           },
           {
          time: 135.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 135.2, end: 137.3}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "아무 이유 없는 기분", start: 136, end: 137.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 135.2, end: 137.3}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "毫無理由的好心情", start: 136, end: 137.3}
              ]
             }
            ]
           },
           {
          time: 137.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 137.3, end: 139.3},
                { text: "to the ", start: 138.1, end: 139.3},
                { text: "four", start: 138.4, end: 139.3}
              ]
             }
            ]
           },
           {
          time: 139.3,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그냥 five, six, seven ", start: 139.3, end: 141.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 141, end: 141.7}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n就五、六、七 ", start: 139.3, end: 141.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 141, end: 141.7}
              ]
             }
            ]
           },
           {
          time: 141.7,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 141.7, end: 143.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "너를 사랑하는 이유", start: 142.4, end: 143.9}
              ]
             },
             {
              color: "#ff962d",
              word:[
                { text: "\n一、", start: 141.7, end: 143.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "愛上你的理由", start: 142.4, end: 143.9}
              ]
             }
            ]
           },
           {
          time: 143.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 143.9, end: 146.1}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "아무 이유 없는 기분", start: 144.6, end: 146.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 143.9, end: 146.1}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "毫無理由的好心情", start: 144.6, end: 146.1}
              ]
             }
            ]
           },
           {
          time: 146.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 146.1, end: 148},
                { text: "to the ", start: 146.9, end: 148},
                { text: "four", start: 147.2, end: 148}
              ]
             }
            ]
           },
           {
          time: 148,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그냥 five, six, seven ", start: 148, end: 150.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 149.8, end: 150.7}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n就五、六、七 ", start: 148, end: 150.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 149.8, end: 150.7}
              ]
             }
            ]
           },
           {
          time: 150.7,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "I ain't done love before\n我以前從沒真正談過戀愛", start: 150.7, end: 154.2}
              ]
             }
            ]
           },
           {
          time: 154.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "But she says\n但她說", start: 153.7, end: 156.4}
              ]
             }
            ]
           },
           {
          time: 156.4,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "'I can tell this time we could be the true love'\n「我感覺這次我們會是真愛」", start: 156.4, end: 159.5}
              ]
             }
            ]
           },
           {
          time: 159.5,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "You ain't done love in this world before?\n你以前沒在這世界上談過戀愛嗎？", start: 159.5, end: 164.1}
              ]
             }
            ]
           },
           {
          time: 164.1,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "Before, before", start: 164.1, end: 170}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(플 ", start: 165.7, end: 170},
                { text: "레 ", start: 166.2, end: 170},
                { text: "이 ", start: 166.7, end: 170},
                { text: "브 ", start: 167.3, end: 170},
                { text: " BBUU~)", start: 167.8, end: 170},
                { text: "\n(噗 ", start: 165.7, end: 170},
                { text: "呢 ", start: 166.2, end: 170},
                { text: "伊 ", start: 166.7, end: 170},
                { text: "bu ", start: 167.3, end: 170},
                { text: " BBUU~)", start: 167.8, end: 170},
                { text: "\n(P ", start: 165.7, end: 170},
                { text: "L A ", start: 166.2, end: 170},
                { text: "V ", start: 166.7, end: 170},
                { text: "E ", start: 167.3, end: 170},
                { text: " BBUU~)", start: 167.8, end: 170}
              ]
             }
            ]
           },
           {
          time: 170,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 170, end: 172.2}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "두근두근 대는 기분", start: 1170.9, end: 172.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n一、", start: 170, end: 172.2}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "怦怦心動的感覺", start: 1170.9, end: 172.2}
              ]
             }
            ]
           },
           {
          time: 172.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 172.2, end: 174.3}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "増え続けるミス", start: 173.1, end: 174.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 172.2, end: 174.3}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "持續增加的失誤", start: 173.1, end: 174.3}
              ]
             }
            ]
           },
           {
          time: 174.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 174.3, end: 176.3},
                { text: "to the ", start: 175.2, end: 176.3},
                { text: "four", start: 175.5, end: 176.3}
              ]
             }
            ]
           },
           {
          time: 176.3,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그냥 five, six, seven ", start: 176.3, end: 178.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 178.1, end: 178.9}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n就五、六、七 ", start: 176.3, end: 178.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 178.1, end: 178.9}
              ]
             }
            ]
           },
           {
          time: 178.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "One ", start: 178.9, end: 180.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "every day I wanna see you", start: 179.7, end: 180.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n一、", start: 178.9, end: 180.9}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "我每天都想見你", start: 179.7, end: 180.9}
              ]
             }
            ]
           },
           {
          time: 180.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Two ", start: 180.9, end: 183.2}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "也許你就是我的禮物", start: 181.8, end: 183.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n二、", start: 180.9, end: 183.2}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "也許你就是我的禮物", start: 181.8, end: 183.2}
              ]
             }
            ]
           },
           {
          time: 183.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Three ", start: 183.2, end: 185},
                { text: "to the ", start: 184, end: 185},
                { text: "four", start: 184.2, end: 185}
              ]
             }
            ]
           },
           {
          time: 185,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "그냥 five, six, seven ", start: 185, end: 187.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 187, end: 187.5}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n就五、六、七 ", start: 185, end: 187.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(Bbuu)", start: 187, end: 187.5}
              ]
             }
            ]
           },
           {
          time: 187.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "일,", start: 187.5, end: 189.7},
                { text: "이,", start: 187.8, end: 189.7},
                { text: "삼,", start: 188, end: 189.7},
                { text: "사,", start: 188.6, end: 189.7},
                { text: "오,", start: 188.9, end: 189.7},
                { text: "육", start: 189.1, end: 189.7},
                { text: "\n伊、", start: 187.5, end: 189.7},
                { text: "呢(ne1)、", start: 187.8, end: 189.7},
                { text: "衫、", start: 188, end: 189.7},
                { text: "沙、", start: 188.6, end: 189.7},
                { text: "烏、", start: 188.9, end: 189.7},
                { text: "撩(liu1)", start: 189.1, end: 189.7},
                { text: "\n一、", start: 187.5, end: 189.7},
                { text: "二、", start: 187.8, end: 189.7},
                { text: "三、", start: 188, end: 189.7},
                { text: "四、", start: 188.6, end: 189.7},
                { text: "五、", start: 188.9, end: 189.7},
                { text: "六", start: 189.1, end: 189.7},
              ]
             }
            ]
           },
           {
          time: 189.7,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "셀 ", start: 189.7, end: 192},
                { text: "수 ", start: 190, end: 192},
                { text: "없어 ", start: 190.3, end: 192},
                { text: "다 ", start: 190.8, end: 192}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: " eh ", start: 191.4, end: 192}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n些 ", start: 189.7, end: 192},
                { text: "舒 ", start: 190, end: 192},
                { text: "up梳 ", start: 190.3, end: 192},
                { text: "達 ", start: 190.8, end: 192}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: " eh ", start: 191.4, end: 192}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n多", start: 189.7, end: 192},
                { text: "得", start: 190, end: 192},
                { text: "數不", start: 190.3, end: 192},
                { text: "完", start: 190.8, end: 192}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: " eh ", start: 191.4, end: 192}
              ]
             }
            ]
           },
           {
          time: 192,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너를", start: 192, end: 196.3},
                { text: "사", start: 192.4, end: 196.3},
                { text: "랑하는 ", start: 193.1, end: 196.3},
                { text: "이유를 ", start: 194, end: 196.3},
                { text: "말이야 ", start: 194.9, end: 196.3}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: " eh ", start: 195.7, end: 196.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n囉攣", start: 192, end: 196.3},
                { text: "沙", start: 192.4, end: 196.3},
                { text: "拉夏攣 ", start: 193.1, end: 196.3},
                { text: "이유呢(ne1)妖攣 ", start: 194, end: 196.3},
                { text: "嘛呢(ne1)呀", start: 194.9, end: 196.3},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n愛你", start: 192, end: 196.3},
                { text: "的", start: 192.4, end: 196.3},
                { text: "理", start: 193.1, end: 196.3},
                { text: "由", start: 194, end: 196.3},
                { text: "啊 ", start: 194.9, end: 196.3}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: " eh ", start: 195.7, end: 196.3}
              ]
             },
            ]
           },
           {
          time: 196.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "일,", start: 196.3, end: 198.4},
                { text: "이,", start: 196.5, end: 198.4},
                { text: "삼,", start: 196.8, end: 198.4},
                { text: "사,", start: 197.4, end: 198.4},
                { text: "오,", start: 197.6, end: 198.4},
                { text: "육", start: 197.9, end: 198.4},
                { text: "\n伊、", start: 196.3, end: 198.4},
                { text: "呢(ne1)、", start: 196.5, end: 198.4},
                { text: "衫、", start: 196.8, end: 198.4},
                { text: "沙、", start: 197.4, end: 198.4},
                { text: "烏、", start: 197.6, end: 198.4},
                { text: "撩(liu1)", start: 197.9, end: 198.4},
                { text: "\n一、", start: 196.3, end: 198.4},
                { text: "二、", start: 196.5, end: 198.4},
                { text: "三、", start: 196.8, end: 198.4},
                { text: "四、", start: 197.4, end: 198.4},
                { text: "五、", start: 197.6, end: 198.4},
                { text: "六", start: 197.9, end: 198.4},
              ]
             }
            ]
           },
           {
          time: 198.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "세어만 ", start: 198.4, end: 200},
                { text: "보", start: 199.2, end: 200},
                { text: "다", start: 199.6, end: 200},
                { text: "\n些噢掹 ", start: 198.4, end: 200},
                { text: "Bu", start: 199.2, end: 200},
                { text: "打", start: 199.6, end: 200},
                { text: "\n一邊", start: 198.4, end: 200},
                { text: "數", start: 199.2, end: 200},
                { text: "著", start: 199.6, end: 200}
              ]
             }
            ]
           },
           {
          time: 200,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "깜", start: 200, end: 202.7},
                { text: "빡 ", start: 201.1, end: 202.7},
                { text: "스", start: 201.7, end: 202.7},
                { text: "르", start: 202, end: 202.7},
                { text: "륵", start: 202.2, end: 202.7},
                { text: "\n班", start: 200, end: 202.7},
                { text: "啪 ", start: 201.1, end: 202.7},
                { text: "舒", start: 201.7, end: 202.7},
                { text: "lu", start: 202, end: 202.7},
                { text: "lu", start: 202.2, end: 202.7},
                { text: "\n不", start: 200, end: 202.7},
                { text: "小", start: 201.1, end: 202.7},
                { text: "心", start: 201.7, end: 202.7}
              ]
             },
            ]
           },
           {
          time: 202.7,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "잠이 ", start: 200, end: 20},
                { text: "들", start: 203.3, end: 20},
                { text: "었", start: 203.6, end: 20},
                { text: "다 ", start: 203.8, end: 20}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "(아이쿠)", start: 204.5, end: 20}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n參伊 ", start: 200, end: 20},
                { text: "嘟", start: 203.3, end: 20},
                { text: "哦", start: 203.6, end: 20},
                { text: "打 ", start: 203.8, end: 20},
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n就", start: 200, end: 20},
                { text: "睡", start: 203.3, end: 20},
                { text: "著", start: 203.6, end: 20},
                { text: "了", start: 203.8, end: 20},
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "(哎呀)", start: 204.5, end: 205.2}
              ]
             },
            ]
           },
           {
          time: 205.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 205.2, end: 211}
              ]
             },
            ]
           },
          ]
         },
    advanced: {
      videoId: "zYfM_sYClnY",
      lyrics: []
    }
  },
  {
    id: 11,
    title: "Born Savage",
    image: "Image/Caligo Pt.2.jpg",
    description: "",
    normal: {
      videoId: "fVH5atHZtys",
      lyrics: [
         {
          time: 28.5,
          segments: [
             {
              color: "#954b01",
              words: [
                { text: "MUSIC START!", start: 28.5, end: 29.4}
              ]
             }
            ]
           },
           {
          time: 29.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 29.4, end: 34}
              ]
             }
            ]
           },
           {
          time: 36.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 ", start: 36.4, end: 41.1},
                { text: "한노아 ", start: 37.3, end: 41.1},
                { text: "채밤비 ", start: 38.3, end: 41.1},
                { text: "도은호 ", start: 39.2, end: 41.1},
                { text: "유하민", start: 40.1, end: 41.1},
                { text: "\n躝夜轉 ", start: 36.4, end: 41.1},
                { text: "慳糯也 ", start: 37.3, end: 41.1},
                { text: "車扮B ", start: 38.3, end: 41.1},
                { text: "Do䟴呵 ", start: 39.2, end: 41.1},
                { text: "you夏mean", start: 40.1, end: 41.1},
                { text: "\n南藝俊 ", start: 36.4, end: 41.1},
                { text: "韓諾亞 ", start: 37.3, end: 41.1},
                { text: "蔡斑比 ", start: 38.3, end: 41.1},
                { text: "都銀虎 ", start: 39.2, end: 41.1},
                { text: "柳河玟", start: 40.1, end: 41.1},
              ]
             }
            ]
           },
           {
          time: 41.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플", start: 41.1, end: 44.2},
                { text: "레", start: 41.3, end: 44.2},
                { text: "이", start: 41.5, end: 44.2},
                { text: "브 ", start: 41.7, end: 44.2},
                { text: " 본! ", start: 42, end: 44.2},
                { text: "새! ", start: 42.4, end: 44.2},
                { text: "비! ", start: 42.9, end: 44.2},
                { text: "지!", start: 43.4, end: 44.2},
                { text: "\n噗", start: 41.1, end: 44.2},
                { text: "呢", start: 41.3, end: 44.2},
                { text: "伊", start: 41.5, end: 44.2},
                { text: "bu ", start: 41.7, end: 44.2},
                { text: " 碰! ", start: 42, end: 44.2},
                { text: "些! ", start: 42.4, end: 44.2},
                { text: "B! ", start: 42.9, end: 44.2},
                { text: "之!", start: 43.4, end: 44.2},
                { text: "\nP", start: 41.1, end: 44.2},
                { text: "LA", start: 41.3, end: 44.2},
                { text: "V", start: 41.5, end: 44.2},
                { text: "E ", start: 41.7, end: 44.2},
                { text: " Born ", start: 42, end: 44.2},
                { text: "Sa", start: 42.4, end: 44.2},
                { text: "va", start: 42.9, end: 44.2},
                { text: "ge!", start: 43.4, end: 44.2},
              ]
             }
            ]
           },
           {
          time: 44.2,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "제법 멀리 와 버렸지\n我們已經走了很遠", start: 44.2, end: 48}
              ]
             }
            ]
           },
           {
          time: 48,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Never look back", start: 48, end: 48.9}
              ]
             }
            ]
           },
           {
          time: 48.9,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "왜 여긴 대책도 없이\n為什麼在這毫無對策", start: 48.9, end: 51.4}
              ]
             }
            ]
           },
           {
          time: 51.4,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "끝이 중요한 게 아냐 이건 나의 ", start: 51.4, end: 57}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "Destiny", start: 54.1, end: 57}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "結局不重要 這就是我的 ", start: 51.4, end: 57}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "Destiny", start: 54.1, end: 57}
              ]
             }
            ]
           },
           {
          time: 57,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Louder than the rain", start: 57, end: 58.8}
              ]
             }
            ]
           },
           {
          time: 58.8,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "We run beyond the darkness", start: 58.8, end: 60.6}
              ]
             }
            ]
           },
           {
          time: 60.6,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "Ooh 잿더미의 blue\nOoh灰燼中的 blue", start: 60.6, end: 62.5}
              ]
             }
            ]
           },
           {
          time: 62.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "I'm betting it all on me", start: 62.5, end: 64.3}
              ]
             }
            ]
           },
           {
          time: 64.3,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "Roll the dice ", start: 64.3, end: 66.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "두 ", start: 65.3, end: 66.4},
                { text: "배", start: 65.5, end: 66.4},
                { text: "로", start: 65.8, end: 66.4},
                { text: "\nDo", start: 65.3, end: 66.4},
                { text: "啤", start: 65.5, end: 66.4},
                { text: "羅", start: 65.8, end: 66.4},
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\nRoll the dice ", start: 64.3, end: 66.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n加", start: 65.3, end: 66.4},
                { text: "倍", start: 65.5, end: 66.4}
              ]
             },
            ]
           },
           {
          time: 66.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "One ", start: 66.4, end: 70.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "touch, ", start: 66.8, end: 70.1}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "One ", start: 67.4, end: 70.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "rush, ", start: 67.9, end: 70.1},
                { text: "headed ", start: 68.3, end: 70.1},
                { text: "for the ", start: 68.7, end: 70.1},
                { text: "bloom", start: 69.2, end: 70.1},
              ]
             }
            ]
           },
           {
          time: 70.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 70.1, end: 72.4}
              ]
             }
            ]
           },
           {
          time: 72.4,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Unlock the power woo", start: 72.4, end: 74.4}
              ]
             }
            ]
           },
           {
          time: 74.4,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "선택을 받은 운명을 거슬러\n逆轉被選定的命運", start: 74.4, end: 77.6}
              ]
             }
            ]
           },
           {
          time: 77.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Energetic ", start: 77.6, end: 79.3},
                { text: "Keep it manic", start: 78.4, end: 79.3}
              ]
             }
            ]
           },
           {
          time: 79.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "I'm never falling down ", start: 79.3, end: 81.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(down!)", start: 80.9, end: 81.4}
              ]
             }, 
            ]
           },
           {
          time: 81.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Woo 다친대도 내 전부를 걸겠어\nWoo 即使受傷我也會賭上全部", start: 81.4, end: 85.1}
              ]
             }
            ]
           },
           {
          time: 85.1,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Energetic ", start: 85.1, end: 86.8},
                { text: "Keep it manic", start: 85.9, end: 86.8}
              ]
             }
            ]
           },
           {
          time: 86.8,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "I'm never falling down ", start: 86.8, end: 89.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(down!)", start: 88.4, end: 89.5}
              ]
             }
            ]
           },
           {
          time: 89.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "혼돈에 비친\n映照在混沌中", start: 89.5, end: 91.3}
              ]
             }
            ]
           },
           {
          time: 91.3,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "그 눈을 감아\n閉上你的眼睛", start: 91.3, end: 92.6}
              ]
             }
            ]
           },
           {
          time: 92.6,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "세상의 답을 외친 다음\n向世界喊出答案後", start: 92.6, end: 95.1}
              ]
             }
            ]
           },
           {
          time: 95.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Born ", start: 95.1, end: 97},
                { text: "savage", start: 95.5, end: 97}
              ]
             }
            ]
           },
           {
          time: 97,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "갈망하는가\n是否有渴望", start: 97, end: 98.9}
              ]
             }
            ]
           },
           {
          time: 98.9,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "두 눈을 떠봐\n睜開你的雙眼", start: 98.9, end: 100.2}
              ]
             }
            ]
           },
           {
          time: 100.2,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "세상의 답을 외친 다음\n向世界喊出答案後", start: 100.2, end: 102.5}
              ]
             }
            ]
           },
           {
          time: 102.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Born ", start: 102.5, end: 104},
                { text: "savage", start: 102.9, end: 104}
              ]
             }
            ]
           },
           {
          time: 104,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "긴 밤을 걸어 매일\n每天走過漫長的夜晚", start: 104, end: 105.4}
              ]
             }
            ]
           },
           {
          time: 105.4,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "암흑 속에 그 상처들을 ", start: 105.4, end: 107.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "피워", start: 106.8, end: 107.7},
                { text: "\nP喎", start: 106.8, end: 107.7},
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "在黑暗中讓傷口", start: 105.4, end: 107.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "綻放", start: 106.8, end: 107.7}
              ]
             },
            ]
           },
           {
          time: 107.7,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "긴 밤을 지나 매일\n每天穿越漫長的夜晚", start: 107.7, end: 109.1}
              ]
             }
            ]
           },
           {
          time: 109.1,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "피워냈던 그 상처들을 ", start: 109.1, end: 110.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "깨워", start: 110.4, end: 110.8},
                { text: "\n嘅喎", start: 110.4, end: 110.8},
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "喚醒曾經綻放的", start: 109.1, end: 110.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "傷口", start: 110.4, end: 110.8}
              ]
             },
            ]
           },
           {
          time: 110.4,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "이미 다다랐지, make it rain, thumbs up\n己經到達 make it rain, thumbs up", start: 110.4, end: 112.1}
              ]
             }
            ]
           },
           {
          time: 112.1,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "의미 없는 그 원성\n毫無意義的怨言", start: 112.1, end: 113}
              ]
             }
            ]
           },
           {
          time: 113,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "지껄일수록 확실해지는 Vision and 목표\n越是喋喋不休 Vision和目標越清晰", start: 113, end: 115}
              ]
             }
            ]
           },
           {
          time: 115,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "Hold on tight", start: 115, end: 115.6}
              ]
             }
            ]
           },
           {
          time: 115.6,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "흔들린 적 없지 높은 절벽\n從未在高崖上動搖", start: 115.6, end: 116.8}
              ]
             }
            ]
           },
           {
          time: 116.8,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "쉽지 않을 길을 걸어 Man, I'm breakin' the wall\n走上不易之路 Man, I'm breakin' the wall", start: 116.8, end: 118.8}
              ]
             }
            ]
           },
           {
          time: 118.8,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "We run beyond the darkness", start: 118.8, end: 120.6}
              ]
             }
            ]
           },
           {
          time: 120.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Ooh 잿더미의 blue\nOoh 灰燼中的 blue", start: 120.6, end: 122.6}
              ]
             }
            ]
           },
           {
          time: 122.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "I'm betting it all on me", start: 122.6, end: 124.5}
              ]
             }
            ]
           },
           {
          time: 124.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Roll the dice ", start: 124.5, end: 126.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "두 ", start: 125.2, end: 126.4},
                { text: "배", start: 125.6, end: 126.4},
                { text: "로", start: 125.7, end: 126.4},
                { text: "\nDo", start: 125.2, end: 126.4},
                { text: "啤", start: 125.6, end: 126.4},
                { text: "羅", start: 125.7, end: 126.4},
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\nRoll the dice ", start: 124.5, end: 126.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n加", start: 125.2, end: 126.4},
                { text: "倍", start: 125.6, end: 126.4}
              ]
             },
            ]
           },
           {
          time: 126.4,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "One ", start: 126.4, end: 130.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "touch, ", start: 126.9, end: 130.2}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "One ", start: 127.4, end: 130.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "rush, ", start: 127.8, end: 130.2},
                { text: "headed ", start: 128.3, end: 130.2},
                { text: "for the ", start: 128.7, end: 130.2},
                { text: "bloom", start: 129.2, end: 130.2},
              ]
             }
            ]
           },
           {
          time: 130.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플 ", start: 130.2, end: 132.5},
                { text: "레 ", start: 130.6, end: 132.5},
                { text: "이 ", start: 131.1, end: 132.5},
                { text: "브", start: 131.6, end: 132.5},
                { text: "\n噗 ", start: 130.2, end: 132.5},
                { text: "呢 ", start: 130.6, end: 132.5},
                { text: "伊 ", start: 131.1, end: 132.5},
                { text: "bu", start: 131.6, end: 132.5},
                { text: "\nP ", start: 130.2, end: 132.5},
                { text: "LA ", start: 130.6, end: 132.5},
                { text: "V ", start: 131.1, end: 132.5},
                { text: "E", start: 131.6, end: 132.5},
              ]
             }
            ]
           },
           {
          time: 132.5,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Unlock the power woo", start: 132.5, end: 134.3}
              ]
             }
            ]
           },
           {
          time: 134.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "선택을 받은 운명을 거슬러\n逆轉被選定的命運", start: 134.3, end: 137.6}
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
                { text: "Energetic", start: 137.6, end: 1141.5},
                { text: "Keep it manic", start: 138.4, end: 1141.5}
              ]
             }
            ]
           },
           {
          time: 139.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "I'm never falling down ", start: 139.3, end: 141.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(down!)", start: 141, end: 141.5}
              ]
             }, 
            ]
           },
           {
          time: 141.5,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Woo 다친대도 내 전부를 걸겠어\nWoo 即使受傷我也會賭上全部", start: 141.5, end: 145}
              ]
             }
            ]
           },
           {
          time: 145,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Energetic", start: 145, end: 146.8},
                { text: "Keep it manic", start: 146, end: 146.8}
              ]
             }
            ]
           },
           {
          time: 146.8,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "I'm never falling down ", start: 146.8, end: 148.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(down!)", start: 148.3, end: 148.9}
              ]
             }
            ]
           },
           {
          time: 148.9,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "Yeah we goin' straight to the top ", start: 148.9, end: 150.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(top!)", start: 150.3, end: 150.9}
              ]
             }
            ]
           },
           {
          time: 150.9,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "기회야 No time to hesitate\n機會 No time to hesitate", start: 150.9, end: 152.5}
              ]
             }
            ]
           },
           {
          time: 152.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "Burn it up keep up the fire ", start: 152.5, end: 154.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(fire!)", start: 154.1, end: 154.5}
              ]
             }
            ]
           },
           {
          time: 154.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "본능이 날 깨워 Savage\n本能喚醒了我 Savage", start: 154.5, end: 156.3}
              ]
             }
            ]
           },
           {
          time: 156.3,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "Yeah we goin' straight to the top ", start: 156.3, end: 158.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(top!)", start: 157.9, end: 158.4}
              ]
             }
            ]
           },
           { 
          time: 158.4,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "기회야 No time to hesitate\n機會 No time to hesitate", start: 158.4, end: 160.2}
              ]
             }
            ]
           },
           { 
          time: 160.2,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "부정할 수 없지 넌 Because I'm true\n你無法否認 Because I'm true", start: 160.2, end: 162.5}
              ]
             }
            ]
           },
           { 
          time: 162.5,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "I was born savage", start: 162.5, end: 165.3}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(歡呼!!)", start: 163.7, end: 165.3}
              ]
             }
            ]
           },
           {
          time: 165.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Unlock the power woo", start: 165.3, end: 166.4}
              ]
             }
            ]
           },
           {
          time: 166.4,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "선택을 받은 운명을 거슬러\n逆轉被選定的命運", start: 166.4, end: 169.6}
              ]
             }
            ]
           },
           {
          time: 169.6,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Energetic ", start: 169.6, end: 171.3},
                { text: "Keep it manic", start: 170.2, end: 171.3}
              ]
             }
            ]
           },
           {
          time: 171.3,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "I'm never falling down ", start: 171.3, end: 173.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(down!)", start: 172.9, end: 173.5}
              ]
             }, 
            ]
           },
           {
          time: 173.5,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Woo 다친대도 내 전부를 걸겠어\nWoo 即使受傷我也會賭上全部", start: 173.5, end: 177}
              ]
             }
            ]
           },
           {
          time: 177,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "Energetic ", start: 177, end: 178.9},
                { text: "Keep it manic", start: 177.8, end: 178.9}
              ]
             }
            ]
           },
           {
          time: 178.9,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "I'm never falling down ", start: 178.9, end: 180.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(down!)", start: 180.4, end: 180.8}
              ]
             }
            ]
           },
           {
          time: 180.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(Woo!)", start: 180.8, end: 182.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "혼돈에 비친", start: 181.4, end: 182.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(Woo!)", start: 180.8, end: 182.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "映照在混沌中", start: 181.4, end: 182.5}
              ]
             }
            ]
           },
           {
          time: 182.5,
          segments: [
            {
              color: "#ff962d",
              words: [
                { text: "(Woo!)", start: 182.5, end: 184.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "혼돈에 비친", start: 183.2, end: 184.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(Woo!)", start: 182.5, end: 184.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "映照在混沌中", start: 183.2, end: 184.5}
              ]
             }
            ]
           },
           {
          time: 184.5,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "세상의 답을 외친 다음\n向世界喊出答案後", start: 184.5, end: 186.8}
              ]
             }
            ]
           },
           {
          time: 186.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Born ", start: 186.8, end: 188.3},
                { text: "savage", start: 187.4, end: 188.3}
              ]
             }
            ]
           },
           {
          time: 188.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(Woo!)", start: 188.3, end: 190.2}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "갈망하는가", start: 188.9, end: 190.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(Woo!)", start: 188.3, end: 190.2}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "是否有渴望", start: 188.9, end: 190.2}
              ]
             }
            ]
           },
           {
          time: 190.2,
          segments: [
            {
              color: "#ff962d",
              words: [
                { text: "(Woo!)", start: 190.2, end: 192.1}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "두 눈을 떠봐", start: 190.8, end: 192.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "\n(Woo!)", start: 190.2, end: 192.1}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "睜開你的雙眼", start: 190.8, end: 192.1}
              ]
             }
            ]
           },
           {
          time: 192.1,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "세상의 답을 외친 다음\n向世界喊出答案後", start: 192.1, end: 194.3}
              ]
             }
            ]
           },
           {
          time: 194.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Born ", start: 194.3, end: 195.8},
                { text: "savage", start: 194.8, end: 195.8}
              ]
             }
            ]
           },
           {
          time: 195.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 195.8, end: 203.5}
              ]
             }
            ]
           }
          ]
         },

    advanced: {
      videoId: "3zvHS4-C4uo",
      lyrics: []
    }
  },
  {
    id: 12,
    title: "Star Trace",
    image: "Image/HYPERDRIVE.jpg",
    description: "",
    normal: {
      videoId: "2UZ4MLjFDG0",
      lyrics: [
          {
          time: 34,
          segments: [
             {
              color: "#954b01",
              words: [
                { text: "MUSIC START!", start: 34, end: 35}
              ]
             }
            ]
           },
           {
          time: 35,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 35, end: 39.6}
              ]
             }
            ]
           },
           {
          time: 39.6,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 ", start: 39.6, end: 43.8},
                { text: "한노아 ", start: 40.4, end: 43.8},
                { text: "채밤비 ", start: 41.1, end: 43.8},
                { text: "도은호 ", start: 41.8, end: 43.8},
                { text: "유하민", start: 42.6, end: 43.8},
                { text: "\n躝夜轉 ", start: 39.6, end: 43.8},
                { text: "慳糯也 ", start: 40.4, end: 43.8},
                { text: "車扮B ", start: 41.1, end: 43.8},
                { text: "Do䟴呵 ", start: 41.8, end: 43.8},
                { text: "you夏mean", start: 42.6, end: 43.8},
                { text: "\n南藝俊 ", start: 39.6, end: 43.8},
                { text: "韓諾亞 ", start: 40.4, end: 43.8},
                { text: "蔡斑比 ", start: 41.1, end: 43.8},
                { text: "都銀虎 ", start: 41.8, end: 43.8},
                { text: "柳河玟", start: 42.6, end: 43.8},
              ]
             }
            ]
           },
           {
          time: 43.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플! ", start: 43.8, end: 45.6},
                { text: "레! ", start: 44.3, end: 45.6},
                { text: "이! ", start: 44.6, end: 45.6},
                { text: "브!", start: 45, end: 45.6},
                { text: "\n噗! ", start: 43.8, end: 45.6},
                { text: "呢! ", start: 44.3, end: 45.6},
                { text: "伊! ", start: 44.6, end: 45.6},
                { text: "bu!", start: 45, end: 45.6},
                { text: "\nP ", start: 43.8, end: 45.6},
                { text: "L A ", start: 44.3, end: 45.6},
                { text: "V ", start: 44.6, end: 45.6},
                { text: "E!", start: 45, end: 45.6}
              ]
             }
            ]
           },
           {
          time: 45.6,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "I'm alone, but I don't really feel alone\n我孤身一人 但我從不感到孤獨", start: 45.6, end: 51}
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
                { text: "언제든 어디서든 보이니까 ", start: 51, end: 55.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(언제나! ", start: 53.4, end: 55.4},
                { text: "함께해!)", start: 54.1, end: 55.4},
                { text: "\n(on借啦! ", start: 53.4, end: 55.4},
                { text: "哼嘅er!)", start: 54.1, end: 55.4}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n因為何時何地都能看見 ", start: 51, end: 55.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(永遠都! ", start: 53.4, end: 55.4},
                { text: "在一起!)", start: 54.1, end: 55.4}
              ]
             }
            ]
           },
           {
          time: 55.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "Don't wanna live without\n我不願活在失去", start: 55.4, end: 58}
              ]
             }
            ]
           },
           {
          time: 58,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "stars that light the sky\n星光照耀的夜空下", start: 58, end: 61.4}
              ]
             }
            ]
           },
           {
          time: 61.4,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "just, tell me what it's like, to see the other side\n請告訴我遙望對面 是種什麼樣的感覺", start: 61.4, end: 65.8}
              ]
             }
            ]
           },
           {
          time: 65.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Star ", start: 65.8, end: 67.6},
                { text: "Race!", start: 66.5, end: 67.6},
              ]
             }
            ]
           },
           {
          time: 67.6,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "I'm stuck here loving afar, my ", start: 67.6, end: 70.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "desire", start: 69, end: 70.2}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n我被困在此處 遠遠愛著我的", start: 67.6, end: 70.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "摯愛", start: 69, end: 70.2}
              ]
             }
            ]
           },
           {
          time: 70.2,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "When we're apart, it never grows ", start: 70.2, end: 73.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "tired", start: 71.9, end: 73.1}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n當我們分離 這份愛意不會讓我", start: 70.2, end: 73.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "疲憊", start: 71.9, end: 73.1}
              ]
             }
            ]
           },
           {
          time: 73.1,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "I need it ", start: 73.1, end: 75.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(We ", start: 74.3, end: 75.7},
                { text: "need ", start: 74.7, end: 75.7},
                { text: "you!)", start: 75.2, end: 75.7}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n我需要它", start: 73.1, end: 75.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(我們 ", start: 74.3, end: 75.7},
                { text: "需要 ", start: 74.7, end: 75.7},
                { text: "你!)", start: 75.2, end: 75.7},
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
                { text: "Can you hear me ", start: 75.7, end: 78.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(I ", start: 77, end: 78.2},
                { text: "can ", start: 77.3, end: 78.2},
                { text: "hear ", start: 77.5, end: 78.2},
                { text: "you!)", start: 77.8, end: 78.2}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n你可曾聽見我的聲音", start: 75.9, end: 78.2}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(我 ", start: 77, end: 78.2},
                { text: "聽 ", start: 77.3, end: 78.2},
                { text: "見 ", start: 77.5, end: 78.2},
                { text: "你!)", start: 77.8, end: 78.2}
              ]
             }
            ]
           },
           {
          time: 78.2,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "I couldn't wait till you pull me up ", start: 78.2, end: 81.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 81.2, end: 81.8}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n我等不及你來救我 ", start: 78.3, end: 81.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 81.2, end: 81.8}
              ]
             }
            ]
           },
           {
          time: 81.8,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "When a star falls on you\n當繁星向你墜落", start: 81.8, end: 83.4}
              ]
             }
            ]
           },
           {
          time: 83.4,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 83.4, end: 84.9},
                { text: "를 ", start: 83.7, end: 84.9},
                { text: "위", start: 84.1, end: 84.9},
                { text: "해", start: 84.4, end: 84.9},
                { text: "서", start: 84.7, end: 84.9},
                { text: "\n囉", start: 83.4, end: 84.9},
                { text: "攣 ", start: 83.7, end: 84.9},
                { text: "we/", start: 84.1, end: 84.9},
                { text: "er/", start: 84.4, end: 84.9},
                { text: "sor", start: 84.7, end: 84.9},
                { text: "\n只", start: 83.4, end: 84.9},
                { text: "要", start: 83.7, end: 84.9},
                { text: "為", start: 84.1, end: 84.9},
                { text: "了", start: 84.4, end: 84.9},
                { text: "你", start: 84.7, end: 84.9},
              ]
             }
            ]
           },
           {
          time: 84.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "I want it to be close to you right now\n現在我就想再離你更近一些", start: 84.9, end: 89.1}
              ]
             }
            ]
           },
           {
          time: 89.1,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "I can't contain this, you light me up", start: 89.1, end: 92.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 92.1, end: 92.9}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我無法抑制這份愛 你點亮了我的世界", start: 89.3, end: 92.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 92.1, end: 92.9}
              ]
             }
            ]
           },
           {
          time: 92.9,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "When a star falls on you\n當繁星向你墜落", start: 92.9, end: 94.5}
              ]
             }
            ]
           },
           {
          time: 94.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 94.5, end: 95.9},
                { text: "를 ", start: 94.8, end: 95.9},
                { text: "위", start: 95, end: 95.9},
                { text: "해", start: 95.3, end: 95.9},
                { text: "서", start: 95.7, end: 95.9},
                { text: "\n囉", start: 94.5, end: 95.9},
                { text: "攣 ", start: 94.8, end: 95.9},
                { text: "we/", start: 95, end: 95.9},
                { text: "er/", start: 95.3, end: 95.9},
                { text: "sor", start: 95.7, end: 95.9},
                { text: "\n只", start: 94.5, end: 95.9},
                { text: "要", start: 94.8, end: 95.9},
                { text: "為", start: 95, end: 95.9},
                { text: "了", start: 95.3, end: 95.9},
                { text: "你", start: 95.7, end: 95.9},
              ]
             }
            ]
           },
           {
          time: 95.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "I want it to be close to you right now\n現在我就想再離你更近一些", start: 95.9, end: 99.8}
              ]
             }
            ]
           },
           {
          time: 99.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "HO!", start: 99.8, end: 100.2}
              ]
             }
            ]
           },
           {
          time: 111.1,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Moves like a signal pulling me ", start: 111.1, end: 113.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "again", start: 112.8, end: 113.8}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n訊號再次牽引著我", start: 111.1, end: 113.8}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "前行", start: 112.8, end: 113.8}
              ]
             }
            ]
           },
           {
          time: 113.8,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "떨어지는 별의 선이 ", start: 113.8, end: 116.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "빛", start: 115.2, end: 116.6},
                { text: "날 ", start: 115.6, end: 116.6},
                { text: "때", start: 116, end: 116.6},
                { text: "\n騙 ", start: 115.2, end: 116.6},
                { text: "night ", start: 115.6, end: 116.6},
                { text: "嗲", start: 116, end: 116.6},
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n當流星的軌跡照", start: 113.8, end: 116.6}
              ]
             },
             {
              color: "#ff962d",
              words: [
                 { text: "亮", start: 115.2, end: 116.6},
                { text: "夜", start: 115.6, end: 116.6},
                { text: "空", start: 116, end: 116.6}
              ]
             }
            ]
           },
           {
          time: 116.6,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Baby it's a feeling that I've ", start: 116.6, end: 119.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "never felt", start: 118, end: 119.1}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n這種感覺我從", start: 116.6, end: 119.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "未有過", start: 118, end: 119.1}
              ]
             }
            ]
           },
           {
          time: 119.1,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Trust me, I will hold you, and we'll ", start: 119.1, end: 122.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "be okay", start: 120.8, end: 122.4}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n相信我 我會緊抱住你 我們都會", start: 119.1, end: 122.4}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "沒事的", start: 120.8, end: 122.4}
              ]
             }
            ]
           },
           {
          time: 122.4,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "I'm stuck here loving afar, my ", start: 122.4, end: 125}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "desire", start: 124.1, end: 125}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我被困在此處 遠遠愛著我的", start: 122.4, end: 125}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "摯愛", start: 124.1, end: 125}
              ]
             }
            ]
           },
           {
          time: 125,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "When we're apart, it never grows ", start: 125, end: 127.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "tired", start: 126.9, end: 127.9}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n當我們分離 這份愛意不會讓我", start: 125, end: 127.9}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "疲憊", start: 126.9, end: 127.9}
              ]
             }
            ]
           },
           {
          time: 127.9,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "I need it ", start: 127.9, end: 130.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(We ", start: 129.2, end: 130.7},
                { text: "need ", start: 129.7, end: 130.7},
                { text: "you!)", start: 130, end: 130.7}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n我需要它", start: 127.9, end: 130.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(我們 ", start: 129.2, end: 130.7},
                { text: "需要 ", start: 129.7, end: 130.7},
                { text: "你!)", start: 130, end: 130.7},
              ]
             }
            ]
           },
           {
          time: 130.7,
          segments: [
             {
              color: "#2a2a2a",
              words: [
                { text: "Can you hear me ", start: 130.7, end: 133.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(I ", start: 132, end: 133.1},
                { text: "can ", start: 132.2, end: 133.1},
                { text: "hear ", start: 132.5, end: 133.1},
                { text: "you!)", start: 132.8, end: 133.1}
              ]
             },
             {
              color: "#2a2a2a",
              words: [
                { text: "\n你可曾聽見我的聲音", start: 130.7, end: 133.1}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(我 ", start: 132, end: 133.1},
                { text: "聽 ", start: 132.2, end: 133.1},
                { text: "見 ", start: 132.5, end: 133.1},
                { text: "你!)", start: 132.8, end: 133.1}
              ]
             }
            ]
           },
           {
          time: 133.1,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "I couldn't wait till you pull me up ", start: 133.1, end: 136.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 136.1, end: 136.7}
              ]
             },
             {
              color: "#ffafcf",
              words: [
                { text: "\n我等不及你來救我 ", start: 133.3, end: 136.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 136.1, end: 136.7}
              ]
             }
            ]
           },
           {
          time: 136.7,
          segments: [
             {
              color: "#ffafcf",
              words: [
                { text: "When a star falls on you\n當繁星向你墜落", start: 136.7, end: 138.3}
              ]
             }
            ]
           },
           {
          time: 138.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 138.3, end: 139.8},
                { text: "를 ", start: 138.6, end: 139.8},
                { text: "위", start: 139, end: 139.8},
                { text: "해", start: 139.2, end: 139.8},
                { text: "서", start: 139.5, end: 139.8},
                { text: "\n囉", start: 138.3, end: 139.8},
                { text: "攣 ", start: 138.6, end: 139.8},
                { text: "we/", start: 139, end: 139.8},
                { text: "er/", start: 139.2, end: 139.8},
                { text: "sor", start: 139.5, end: 139.8},
                { text: "\n只", start: 138.3, end: 139.8},
                { text: "要", start: 138.6, end: 139.8},
                { text: "為", start: 139, end: 139.8},
                { text: "了", start: 139.2, end: 139.8},
                { text: "你", start: 139.5, end: 139.8},
              ]
             }
            ]
           },
           {
          time: 139.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "I want it to be close to you right now\n現在我就想再離你更近一些", start: 139.8, end: 143.9}
              ]
             }
            ]
           },
            {
          time: 143.9,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "I can't contain this, you light me up", start: 143.9, end: 147.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 147, end: 147.7}
              ]
             },
             {
              color: "#cfa7eb",
              words: [
                { text: "\n我無法抑制這份愛 你點亮了我的世界", start: 143.9, end: 147.7}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 147, end: 147.7}
              ]
             }
            ]
           },
           {
          time: 147.7,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "When a star falls on you\n當繁星向你墜落", start: 147.7, end: 149.3}
              ]
             }
            ]
           },
           {
          time: 149.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 149.3, end: 150.8},
                { text: "를 ", start: 149.7, end: 150.8},
                { text: "위", start: 149.8, end: 150.8},
                { text: "해", start: 150.3, end: 150.8},
                { text: "서", start: 150.6, end: 150.8},
                { text: "\n囉", start: 149.3, end: 150.8},
                { text: "攣 ", start: 149.7, end: 150.8},
                { text: "we/", start: 149.8, end: 150.8},
                { text: "er/", start: 150.3, end: 150.8},
                { text: "sor", start: 150.6, end: 150.8},
                { text: "\n只", start: 149.3, end: 150.8},
                { text: "要", start: 149.7, end: 150.8},
                { text: "為", start: 149.8, end: 150.8},
                { text: "了", start: 150.3, end: 150.8},
                { text: "你", start: 150.6, end: 150.8},
              ]
             }
            ]
           },
           {
          time: 150.8,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "I want it to be close to you right now\n現在我就想再離你更近一些", start: 150.8, end: 153.5}
              ]
             }
            ]
           },
           {
          time: 153.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "(歡呼!!)", start: 153.5, end: 155}
              ]
             }
            ]
           },
           {
          time: 155,
          segments: [
             {
              color: "#cfa7eb",
              words: [
                { text: "Wow-o Wo-o-oh", start: 155, end: 160.3}
              ]
             }
            ]
           },
           {
          time: 160.3,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Wow-o Wo-o-oh", start: 160.3, end: 165.3}
              ]
             }
            ]
           },
           {
          time: 165.3,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "This is the time of our lives\n此刻就是我們人生的瞬間", start: 165.3, end: 174.2}
              ]
             }
            ]
           },
           {
          time: 176.6,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "Go!", start: 176.6, end: 176.9}
              ]
             }
            ]
           },
           {
          time: 176.9,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 ", start: 176.9, end: 181},
                { text: "한노아 ", start: 177.6, end: 181},
                { text: "채밤비 ", start: 178.3, end: 181},
                { text: "도은호 ", start: 178.9, end: 181},
                { text: "유하민", start: 179.7, end: 181},
                { text: "\n躝夜轉 ", start: 176.9, end: 181},
                { text: "慳糯也 ", start: 177.6, end: 181},
                { text: "車扮B ", start: 178.3, end: 181},
                { text: "Do䟴呵 ", start: 178.9, end: 181},
                { text: "you夏mean", start: 179.7, end: 181},
                { text: "\n南藝俊 ", start: 176.9, end: 181},
                { text: "韓諾亞 ", start: 177.6, end: 181},
                { text: "蔡斑比 ", start: 178.3, end: 181},
                { text: "都銀虎 ", start: 178.9, end: 181},
                { text: "柳河玟", start: 179.7, end: 181},
              ]
             }
            ]
           },
           {
          time: 181,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플! ", start: 181, end: 182.5},
                { text: "레! ", start: 181.4, end: 182.5},
                { text: "이! ", start: 181.8, end: 182.5},
                { text: "브!", start: 182.1, end: 182.5},
                { text: "\n噗! ", start: 181, end: 182.5},
                { text: "呢! ", start: 181.4, end: 182.5},
                { text: "伊! ", start: 181.8, end: 182.5},
                { text: "bu!", start: 182.1, end: 182.5},
                { text: "\nP! ", start: 181, end: 182.5},
                { text: "L! A! ", start: 181.4, end: 182.5},
                { text: "V! ", start: 181.8, end: 182.5},
                { text: "E!", start: 182.1, end: 182.5}
              ]
             }
            ]
           },
           {
          time: 182.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "남예준 ", start: 182.5, end: 186.6},
                { text: "한노아 ", start: 183.1, end: 186.6},
                { text: "채밤비 ", start: 183.8, end: 186.6},
                { text: "도은호 ", start: 184.5, end: 186.6},
                { text: "유하민", start: 185.2, end: 186.6},
                { text: "\n躝夜轉 ", start: 182.5, end: 186.6},
                { text: "慳糯也 ", start: 183.1, end: 186.6},
                { text: "車扮B ", start: 183.8, end: 186.6},
                { text: "Do䟴呵 ", start: 184.5, end: 186.6},
                { text: "you夏mean", start: 185.2, end: 186.6},
                { text: "\n南藝俊 ", start: 182.5, end: 186.6},
                { text: "韓諾亞 ", start: 183.1, end: 186.6},
                { text: "蔡斑比 ", start: 183.8, end: 186.6},
                { text: "都銀虎 ", start: 184.5, end: 186.6},
                { text: "柳河玟", start: 185.2, end: 186.6}
              ]
             }
            ]
           },
           {
          time: 186.6,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "플! ", start: 186.6, end: 187.9},
                { text: "레! ", start: 186.8, end: 187.9},
                { text: "이! ", start: 187.2, end: 187.9},
                { text: "브!", start: 187.6, end: 187.9},
                { text: "\n噗! ", start: 186.6, end: 187.9},
                { text: "呢! ", start: 186.8, end: 187.9},
                { text: "伊! ", start: 187.2, end: 187.9},
                { text: "bu!", start: 187.6, end: 187.9},
                { text: "\nP! ", start: 186.6, end: 187.9},
                { text: "L! A! ", start: 186.8, end: 187.9},
                { text: "V! ", start: 187.2, end: 187.9},
                { text: "E!", start: 187.6, end: 187.9}
              ]
             }
            ]
           },
           {
          time: 187.9,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "I couldn't wait till you pull me up ", start: 187.9, end: 191.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 190.8, end: 191.5}
              ]
             },
             {
              color: "#b81818",
              words: [
                { text: "\n我等不及你來救我 ", start: 187.9, end: 191.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 190.8, end: 191.5}
              ]
             }
            ]
           },
           {
          time: 191.5,
          segments: [
             {
              color: "#b81818",
              words: [
                { text: "When a star falls on you\n當繁星向你墜落", start: 191.5, end: 193.1}
              ]
             }
            ]
           },
           {
          time: 193.1,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 193.1, end: 194.5},
                { text: "를 ", start: 193.6, end: 194.5},
                { text: "위", start: 193.8, end: 194.5},
                { text: "해서", start: 194.1, end: 194.5},
                { text: "서", start: 194.3, end: 194.5},
                { text: "\n囉", start: 193.1, end: 194.5},
                { text: "攣 ", start: 193.6, end: 194.5},
                { text: "we/", start: 193.8, end: 194.5},
                { text: "er/", start: 194.1, end: 194.5},
                { text: "sor", start: 194.3, end: 194.5},
                { text: "\n只", start: 193.1, end: 194.5},
                { text: "要", start: 193.6, end: 194.5},
                { text: "為", start: 193.8, end: 194.5},
                { text: "了", start: 194.1, end: 194.5},
                { text: "你", start: 194.3, end: 194.5},
              ]
             }
            ]
           },
           {
          time: 194.5,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "I want it to be close to you right now\n現在我就想再離你更近一些", start: 194.5, end: 199}
              ]
             }
            ]
           },
           {
          time: 199,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "I can't contain this, you light me up", start: 199, end: 202.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 201.8, end: 202.5}
              ]
             },
             {
              color: "#8bc1ff",
              words: [
                { text: "\n我無法抑制這份愛 你點亮了我的世界", start: 199, end: 202.5}
              ]
             },
             {
              color: "#ff962d",
              words: [
                { text: "(up)", start: 201.8, end: 202.5}
              ]
             }
            ]
           },
           {
          time: 202.5,
          segments: [
             {
              color: "#8bc1ff",
              words: [
                { text: "When a star falls on you\n當繁星向你墜落", start: 202.5, end: 204.2}
              ]
             }
            ]
           },
           {
          time: 204.2,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "너", start: 204.2, end: 205.6},
                { text: "를 ", start: 204.6, end: 205.6},
                { text: "위", start: 204.7, end: 205.6},
                { text: "해", start: 205.1, end: 205.6},
                { text: "서", start: 205.4, end: 205.6},
                { text: "\n囉", start: 204.2, end: 205.6},
                { text: "攣 ", start: 204.6, end: 205.6},
                { text: "we/", start: 204.7, end: 205.6},
                { text: "er/", start: 205.1, end: 205.6},
                { text: "sor", start: 205.4, end: 205.6},
                { text: "\n只", start: 204.2, end: 205.6},
                { text: "要", start: 204.6, end: 205.6},
                { text: "為", start: 204.7, end: 205.6},
                { text: "了", start: 205.1, end: 205.6},
                { text: "你", start: 205.4, end: 205.6},
              ]
             }
            ]
           },
           {
          time: 205.6,
          segments: [
             {
              color: "#ff962d",
              words: [
                { text: "I want it to be close to you right now\n現在我就想再離你更近一些", start: 205.6, end: 210.2}
              ]
             }
            ]
           }
          ]
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

    // 歌名
    const title = document.createElement("div");
    title.className = "song-title";
    title.textContent = song.title;

    // 專輯圖片（先用占位）
    const albumArt = document.createElement("div");
albumArt.className = "album-art";

if (song.cover) {
  const img = document.createElement("img");
  img.src = song.cover;          // 這裡會自動使用你在 SONGS 裡寫的路徑
  img.alt = song.title;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  albumArt.appendChild(img);
} else {
  albumArt.textContent = "專輯圖片";
}

    // 練習按鈕
   const startBtn = document.createElement("button");
startBtn.type = "button";
startBtn.className = "start-btn";
startBtn.innerHTML = `<span class="btn-black">練習</span><span class="btn-pink">LASSGO!</span>`;
startBtn.addEventListener("click", () => {
  openSong(song.id, currentListVersion || "normal");
});

    card.append(title, albumArt, startBtn);
    el.songList.appendChild(card);
  });
}

/* =========================================================
   6. 頁面切換與版本載入
   ========================================================= */

function showHomePage() {
     // 停止目前播放的影片
  if (youtubePlayer && playerReady) {
    youtubePlayer.stopVideo();
  }

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

    if (
    nextActiveLineIndex >= 0 &&
    nextActiveLineIndex !== lastScrolledLineIndex
  ) {
    const activeElement = lineElements[nextActiveLineIndex];

    if (activeElement) {
      const container = el.lyricsList || activeElement.parentElement;
      const rect = container.getBoundingClientRect();

      const isMostlyVisible =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

      if (isMostlyVisible) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }

    lastScrolledLineIndex = nextActiveLineIndex;
  }


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
    youtubePlayer.playVideo();
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
   // ========== 版本切換 ==========
let currentListVersion = "normal";

function updateVersionLabel() {
  const label = document.getElementById("version-label");
  if (label) {
    label.textContent =
      currentListVersion === "normal"
        ? "同大家一齊應援！"
        : "我要自己嚟！";
  }
}

document.getElementById("version-prev")?.addEventListener("click", () => {
  currentListVersion = currentListVersion === "normal" ? "advanced" : "normal";
  updateVersionLabel();
});

document.getElementById("version-next")?.addEventListener("click", () => {
  currentListVersion = currentListVersion === "normal" ? "advanced" : "normal";
  updateVersionLabel();
});

// 初始化顯示
updateVersionLabel();
  bindEvents();
  showHomePage();
  loadYouTubeApi();
}

document.addEventListener("DOMContentLoaded", init);
