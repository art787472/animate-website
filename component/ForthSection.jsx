import styled from 'styled-components'
import useGsap from './../hook/useGsap'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import lock from '../public/lock.png'
import dashboard from '../public/section4_card_image1.png'
import pencil from '../public/section4_card_image2.png'
import circleArrow from '../public/section4_card_image3.png'

const Container = styled.section`
  position: relative;
  height: 1100px;
  padding-top: 152px;
    @media (max-width: 1104px) {
    height: auto;
  }
`

const Headline = styled.h2`
  width: 700px;
  height: 108px;
  font-family: 'Noto Sans CJK TC';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #55FFAD;
  border: 4px solid #55FFAD;
  filter: drop-shadow(0px 0px 10px rgba(85, 255, 173, 0.6));
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 36px 20px;
  gap: 10px;
  margin: 0 auto;
  @media (max-width: 1104px) {
    font-size: 32px;
    width: 85%;
    height: auto;
    display: block;
    text-align: center;
  }
`

const Description = styled.p`
  width: 408px;
  height: 72px;

  /* Desktop CH/H4-Reg */
  font-family: 'Noto Sans CJK TC';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  /* or 150% */
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* Neutral Color/N1 */
  color: #FFFFFF;
  margin: 0 auto;
  margin-top: 60px;

  @media (max-width: 1104px) {

    width: 60%;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 980px;
  margin: 0 auto;
  margin-top: 60px;
  @media (max-width: 1104px) {
    flex-direction: column;
    width: 100%;
  }
`
const CardBackground = styled.div`
  width: 300px;
  height: 360px;
  background: linear-gradient(180deg, #9DA4FF 0%, #6E77E9 100%);
  border-radius: 32px;
  padding: 50px 56.5px;
  visiblity: hidden;
  backface-visibility: hidden;
  @media (max-width: 1104px) {
    margin-bottom: 40px;
  }
`

const CardTitle = styled.h4`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
`

const CardFront = styled.div`
  width: 300px;
  height: 360px;
  background: #FFFFFF;
  border-radius: 32px;
  visiblity: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;

`

const CardHashtag = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 8px;
  gap: 10px;

  height: 28px;
  background: #83FAC1;
  border-radius: 8px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */


  text-transform: uppercase;
  /* Neutral Color/N5 */
  color: #06102B;
  margin-top: 16px;
`

const CardFrontTitle = styled.h4`
  width: 252px;
  height: 36px;
  /* Desktop CH/H4-Bold */
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;
  text-transform: uppercase;
  /* Primary Color/P3 */
  color: #6E77E9;
  margin: 0 auto;
  margin-top: 20px;
`

const CardFrontSubtitle= styled.h5`
  height: 28px;

  /* Desktop CH/H5-Reg */
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  /* identical to box height, or 140% */
  text-align: center;
  text-transform: capitalize;

  /* Primary Color/P3 */
  color: #6E77E9;
  margin: 0 auto;
  margin-top: 8px;

`

const CardImage = styled.img`
  width: 134px;
  height: 134px;
  display: block;
  margin: 0 auto;
`

const CardDetails = styled.div`
width: 240px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 18px;
`

const MoreInfo = styled.p`
  width: 84px;
height: 18px;

/* Desktop CH/Subtitle */
font-family: 'Noto Sans TC';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;

/* identical to box height, or 129% */
display: flex;
align-items: center;
text-transform: uppercase;

/* Primary Color/P3 */
color: #6E77E9;
`
const WeekTitle = styled.p`
width: 90px;
height: 18px;

/* Desktop EN/Subtitle */
font-family: 'Monument Extended';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;

/* identical to box height, or 129% */
display: flex;
align-items: center;
letter-spacing: 0.1em;
text-transform: uppercase;

/* Primary Color/P2 */
color: #C4C8FF;
`


function Card ({hashtag, title, subTitle, image, week}) {
  return (
    <div className="card">
      <CardBackground className="card-front">
        <CardTitle>{week}</CardTitle>
        <img src={lock.src}/>
      </CardBackground>
      <CardFront className="card-back">
        <CardHashtag># {hashtag}</CardHashtag>
        <CardFrontTitle>{title}</CardFrontTitle>
        <CardFrontSubtitle>{subTitle}</CardFrontSubtitle>
        <CardImage src={image} />
        <CardDetails>
          <WeekTitle>{week}</WeekTitle>
          <MoreInfo>查看關卡細節</MoreInfo>
        </CardDetails>
      </CardFront>
    </div>
  )
}

const CardData = [
  {
    hashtag: "板塊設計",
    title: "THE F2E 活動網站設計",
    subTitle: "視覺滾動",
    image: dashboard.src,
    week: "week 1"
  },
  {
    hashtag: "凱鈿行動科技",
    title: "今晚，我想來點點簽",
    subTitle: "CANVAS",
    image: pencil.src,
    week: "week 2"
  },
  {
    hashtag: "鈦坦科技",
    title: "Scrum 新手村",
    subTitle: "JS Draggable",
    image: circleArrow.src,
    week: "week 3"
  }
]

function ForthSection () {
  const ref = useRef(null)
  useGsap(() => {
  let delay = 0
  gsap.utils.toArray(".card").forEach(function(card) {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
  });
  const q = gsap.utils.selector(card);
  const front = q(".card-front");
  const back = q(".card-back");

  gsap.set(back, { rotationY:-180 });

  const tl = gsap.timeline({ paused: true, delay: delay })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0)
    .to(card, { z: 50 }, 0)
    .to(card, { z: 0 }, 0.5)


     ScrollTrigger.create({
      trigger: '.card-container',
      onEnter () {
        tl.play()
      },
      onLeave () {
        tl.reverse()
      }
    })
    delay++

  });
  }, ref)
  return (
    <Container ref={ref}>
      <Headline>年度最強合作 三大主題來襲</Headline>
      <Description>各路廠商強強聯手 <br /> 共同設計出接地氣的網頁互動關卡</Description>
      <CardContainer className='card-container'>
        {CardData.map(c => <Card {...c} key={c.title}/>)}
      </CardContainer>
    </Container>
  )
}

export default ForthSection