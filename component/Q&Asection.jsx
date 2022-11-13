import styled from 'styled-components'

import { useState } from 'react'

const Container = styled.section`

`

const Title = styled.h2`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  /* identical to box height, or 150% */

  letter-spacing: 0.1em;
  text-transform: uppercase;

  /* Neutral Color/N1 */
  color: #FFFFFF;

  /* Shadow/White */
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);

  text-align: center;
  margin-top: 97.32px;

`

const NavbarBackground = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 24px 32px;
   gap: 545px;
   width: 1440px;
   height: 90px;
`

const List = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0px;
   gap: 4px;

   height: 28px;
   margin-top: 60px;
`

const ListItem = styled.li`

  height: 20px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #858993;
  margin-left: 32px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-bottom .5s;
  position: relative;

  &:first-child {
    margin-left: 0px;
  }

  &:hover,
  &.active {
    color: #fff;
  }

  &:hover::after,
  &.active::after {
    content: "";
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 4px;
    width: 12px;
    background-color: #55FFAD;
    border-radius: 20px;
  }
`

const QuestionSection = styled.section`
  width: 881px;
  height: 1244px;

  /* Neutral Color/N1

  Primary Text
  */
  background: #FFFFFF;
  border-radius: 32px;
  margin: 0 auto;
  margin-top: 44px;
  padding: 80px;

  @media (max-width: 1104px) {
    width: 90%;
    height: auto;
    padding: 24px;
  }
`

const QuestionIndex = styled.h3`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  /* identical to box height, or 150% */

  letter-spacing: 0.1em;
  text-transform: uppercase;

  /* Primary Color/P3 */
  color: #6E77E9;
  margin-right: 24px;
`

const QuestionText = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  /* identical to box height, or 150% */
  display: flex;
  align-items: center;
  text-transform: uppercase;

  /* Neutral Color/N5 */
  color: #06102B;
  margin-bottom: 16px;
`

const AnswerText = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  /* or 140% */
  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* Neutral Color/N5 */
  color: #06102B;
`

const QuestionBackground = styled.div`
  display: flex;
  margin-bottom: 60px;
    @media (max-width: 1104px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  display: block;
  border: none;
  width: 240px;
  height: 76px;
  background-color: #FFE34E;
  border-radius: 50px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 88px;
  cursor: pointer;

`

function QuestionCard ({id, question, answer}) {
  return (
    <QuestionBackground>
      <QuestionIndex>Q{id}</QuestionIndex>
      <div>
        <QuestionText>{question}</QuestionText>
        <AnswerText>{answer}</AnswerText>
      </div>
    </QuestionBackground>
  )
}

const commonQuestions = [
  {
    question: '如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？',
    answer: '可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。',
    id: 1
  },
  {
    question: '大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作業',
    answer: '這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。',
    id: 2
  },
  {
    question: '我不確定自己的版型有沒有符合過關門檻，要寫到什麼程度才有過關門檻？',
    answer: '主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。',
    id: 3
  },
  {
    question: '我已經寫到一半了，但時間快來不及，可以先投稿嗎？',
    answer: '可以，有投稿表示你還會持續努力在這次活動上。',
    id: 4
  }
]

const UIQuestions = [
  {
    question: '到時候投稿的平台是提供什麼呢？我也不像是工程師可以有Codepen 上傳',
    answer: '其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。',
    id: 1
  },
  {
    question: '投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？',
    answer: '會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。',
    id: 2
  },
  {
    question: '一定要上傳「線上標示文件」嗎？',
    answer: '是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。',
    id: 3
  },
  {
    question: '不能使用 PS、Illustrator 設計嗎？',
    answer: '只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。',
    id: 4
  },
  {
    question: '當每週一題目出來後，我有一些設計進度也可以先投稿嗎？',
    answer: '可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。',
    id: 5
  },
]

const frontendQuestions = [
  {
    question: '我可以不依照設計稿，自己做版面嗎？因為我自己想多練習js / 後端',
    answer: '可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。',
    id: 1
  },
  {
    question: '前端介面一定要長得一模一樣嗎？',
    answer: '不用，依照自己的想法來開發也可以',
    id: 2
  },
    {
    question: '有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好',
    answer: '這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。',
    id: 3
  },
  {
    question: '那我只想要練習 JS，HTML / CSS 我用陽春版，不依照設計稿開發可以嗎？',
    answer: '可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。',
    id: 4
  }
]

const groupQuestions = [
  {
    question: '請問團體組最多幾人？',
    answer: '最多 4 人，投稿作品時請派一位組長來投稿即可。',
    id: 1
  },
  {
    question: '我對獎項有興趣，可以只做第三道主題就好嗎？',
    answer: '可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。',
    id: 2
  },
  {
    question: '那團體第三道主題最晚投稿期限為？',
    answer: '團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。',
    id: 3
  },
  {
    question: '我們團體組比較想做手機 APP ，可以投稿並符合並符合評審門檻嗎？',
    answer: '您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。',
    id: 4
  },
  {
    question: '請問除了前端開發、 UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？',
    answer: '可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。',
    id: 5
  },
  {
    question: '團體組的 UI 設計稿，可以讓『個人組 - 前端工程師』組別採用嗎？',
    answer: '不能，預設是不能讓『個人組-前端工程師』採用。',
    id: 6
  },
]

const categories = {
    COMMON: 'common',
    UI: 'UI',
    FRONTEND: 'frontEnd',
    GROUP: 'group'
  }

function QAsection () {
  const [questionCategory, setQuestions] = useState(categories.COMMON)


  let questions = questionCategory === categories.COMMON ?
                  commonQuestions :
                  questionCategory === categories.UI ?
                  UIQuestions :
                  questionCategory === categories.FRONTEND ?
                  frontendQuestions :
                  groupQuestions



  return (
    <Container>
      <Title>Q & A</Title>
      <section style={{margin: '0 auto'}}>
      <List>
        <ListItem
          onClick={() => setQuestions(categories.COMMON)}
          className={`${questionCategory === categories.COMMON ? 'active' : ''}`}
        >常見問題</ListItem>
        <ListItem
          onClick={() => setQuestions(categories.UI)}
           className={`${questionCategory === categories.UI ? 'active' : ''}`}>
            UI 設計師常見問題</ListItem>
        <ListItem
          onClick={() => setQuestions(categories.FRONTEND)}
           className={`${questionCategory === categories.FRONTEND ? 'active' : ''}`}>前端工程師常見問題</ListItem>
        <ListItem onClick={() => setQuestions(categories.GROUP)}
         className={`${questionCategory === categories.GROUP ? 'active' : ''}`}>團體組常見問題</ListItem>
      </List>
      <QuestionSection>
        {questions.map(q => <QuestionCard {...q} key={q.id}/>)}
      </QuestionSection>

      </section>
<Button>立即報名</Button>
    </Container>
  )
}

export default QAsection