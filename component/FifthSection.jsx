import styled from 'styled-components'
import useGsap from '../hook/useGsap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

import titleLeft from '../public/section5_title_left.png'
import titleRight from '../public/section5_title.png'
import pencil from '../public/section5_pencil.png'
import clock from '../public/section5_clock.png'
import play from '../public/section5_play.png'
import folder from '../public/section5_folder.png'
import arrowRight from '../public/section5_arrow_right.png'
import arrowDown from '../public/section5_arrow_down.png'
import arrowLeft from '../public/section5_arrow_left.png'

import styles from './../styles/FifthSection.module.css'

const Container = styled.section`
  height: 1100px;
  text-align: center;
  @media (max-width: 1104px) {
    height: auto;
  }
`

const Title = styled.h2`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Shadow/White */
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);

  @media (max-width: 1104px) {
    font-size: 32px;
    width: 100%;
  }
`

const CardContainer = styled.div`
  width: 1192px;
  height: 752px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  margin: 0 auto;
  margin-top: 100px;

  position: relative;

     & .card3 img {
      margin-left: auto;
    }
  @media (max-width: 1104px) {
    width: auto;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    & .card2, & .card3{
      flex-direction: column-reverse;
    }

    & .card3 {
      order: 3;
    }

    & .card3 img {
      margin-left: 0;
    }

    & .card4 {
      order: 4;
    }
  }

`

const CardBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 40px;
  gap: 60px;

  width: 520px;
  height: 300px;

  /* Neutral Color/N1

  Primary Text
  */
  border: 3px solid #FFFFFF;
  border-radius: 32px;
  &:hover {
    background: rgba(110, 119, 233, 0.1);

    /* Primary Color/P1 */
    border: 3px solid #9DA4FF;

    /* Shadow/Purple */
    box-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);
  }

  &:hover h4 {
    color: #9DA4FF;
  }

  @media (max-width: 1104px) {
    width: 343px;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 63px;



  }
`

const CardTitle = styled.h4`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #fff;
  @media (max-width: 1104px) {
    text-align: center;
  }
`

const CardText = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  @media (max-width: 1104px) {
    text-align: center;
  }
`

const GreenText = styled.span`
    color: #55FFAD;
`

const RightArrow = styled.img`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (max-width: 1104px) {
    transform: translate(-50%, 0%) rotate(90deg);
    top: 450px;
  }
`

const DownArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 220px;
  tranform: translate(0%, -50%);
  @media (max-width: 1104px) {
    right: 50%;
    transform: translate(50%, 0);
  }
`

const LeftArrow = styled.img`
  position: absolute;
  bottom: 130px;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (max-width: 1104px) {
    transform: rotate(-90deg) translate(50%, -25%);
    bottom: 510px;
  }
  `


function Card ({children}) {

  return (
    <CardBackground>{children}</CardBackground>
  )
}

function FifthSection () {
  const ref = useRef(null)

  useGsap(()=>{
    ScrollTrigger.create({
      trigger: '.card-container',

      onEnter () {
        gsap.fromTo(".card-one",
        {
          x: -300
        },
        {
          x: 0
        })
        gsap.fromTo(".card2",
        {
          y: -300,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          delay: 1
        })

        gsap.fromTo(".card3",
        {
          x: 300,
          opacity: 0,

        },
        {
          x: 0,
          opacity: 1,
          delay: 2
        })

        gsap.fromTo(".card4",
        {
          y: 300,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          delay: 3
        })
      }
    })
  }, ref)

  return (
    <Container ref={ref}>
      <Title><img src={titleLeft.src} /><span style={{marginLeft: '36px', marginRight: '36px'}}>活動說明</span><img src={titleRight.src} /></Title>
        <CardContainer className='card-container'>
          <RightArrow src={arrowRight.src} />
          <DownArrow src={arrowDown.src} />
          <LeftArrow src={arrowLeft.src} />
          <CardBackground className="card-one" >
            <img src={pencil.src} alt="pencil picture" />
            <div style={{textAlign: "left"}}>
              <CardTitle>開放報名</CardTitle>
              <br />
              <CardText><GreenText>10/13</GreenText> (四)早上 11:00</CardText>
              <CardText style={{textAlign: "center"}}>|</CardText>
              <CardText><GreenText>10/30</GreenText> (日)晚上 23:59</CardText>
              <br />
              <CardText>截止前可修改報名組別</CardText>
            </div>
          </CardBackground>
          <CardBackground className="card2">
            <div  style={{textAlign: "left"}}>
            <CardTitle>各組別開賽</CardTitle>
            <br />
            <CardText><GreenText>10/31</GreenText> UI組、團體組開賽</CardText>
            <CardText><GreenText>11/07</GreenText> 前端組開賽</CardText>
            <br />
            <CardText>前端工程師可採用 <br />
              UI 設計師的設計稿產出完整作品</CardText>
              </div>
              <img src={clock.src} alt="clock image" />
          </CardBackground>
          <CardBackground className="card4">
            <img src={folder.src} alt="folder image" />
            <div  style={{textAlign: "left"}}>
              <CardTitle>登錄作品</CardTitle>
              <br />
              <CardText><GreenText>10/31</GreenText> (一)早上 11:00</CardText>
              <CardText style={{textAlign: "center"}}>|</CardText>
              <CardText><GreenText>11/28</GreenText> (一)中午 12:00</CardText>
              <br />
              <CardText>依賽程登錄作品</CardText>
            </div>
          </CardBackground>
          <CardBackground className="card3">

            <div  style={{textAlign: "left"}}>
              <CardTitle>線上直播</CardTitle>
              <br />
              <CardText><GreenText>11/03-11/24</GreenText>每周四</CardText>
            </div>
            <img src={play.src} alt="player button image"/>
          </CardBackground>
        </CardContainer>
        <style jsx>{`
        .card2 {
          flex-direction: column-reverse;
        }
        p {
          color: blue;
        }
      `}</style>
    </Container>
  )
}

export default FifthSection