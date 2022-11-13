import styled from 'styled-components'
import useGsap from './../hook/useGsap'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import grid from '../public/grid.png'
import leftHand from '../public/section3_left_hand.png'
import rightHand from '../public/section3_right_hand.png'
import boom from '../public/section3_boom.png'
import headline from '../public/section3_headline.png'
import stamp1 from '../public/section3_stamp_1.png'
import stamp2 from '../public/section3_stamp_2.png'

const Container = styled.section`
  height: 800px;

`

const WordSection = styled.section`
    height: 67px;
    overflow: hidden;
    max-width: 100%;
    pointer-events: none;
`

const Loop = styled.ul`
    display: inline-flex;
    font-size: 5rem;
    color: transparent;
    white-space: nowrap;
    height: 100%;
    align-items: center;
    font-family: 'Monument Extended';
    background: linear-gradient(90deg, #9DA4FF 0%, #55FFAD 50%);
    margin-top: 0px;

    & > span {
      font-family: 'Monument Extended';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 43px;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    & div {
      display: inline-block;
    }
`

const WhiteSpot = styled.div`
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border-radius: 50%;
    margin: 0 20px;
    margin-bottom: 5px;
    margin-right: 30px;
`

function Carousel ({ directionName }) {
  const ref = useRef(null)

  return (
    <WordSection ref={ref}>
      <Loop className={ directionName }>
        <span> interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot />
        interactive web disign <WhiteSpot /> </span>
      </Loop>
    </WordSection>
  )
}

const GridBackground = styled.section`
  height: 650px;
  background-color: #fff;
  background-image: url(${grid.src});
  position: relative;
`

const Boom = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1104px) {

    width: 80%;
  }
`

const Headline = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1104px) {

    width: 80%;
  }
`

const LeftHand = styled.img`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  @media (max-width: 1104px) {
    visibility: hidden;
  }
`

const RightHand = styled.img`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  @media (max-width: 1104px) {
    visibility: hidden;
  }
`

const Subtitle = styled.h4`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  position: absolute;
  transform: translate(-52%, -50%);
  top: 550px;
  left: 50%;
    @media (max-width: 1104px) {
    visibility: hidden;
  }
`

const StampYellow = styled.img`
  position: absolute;
  top: 413px;
  left: 220px;
  @media (max-width: 1104px) {
    left: -30%;

  }
`

const StampPurple = styled.img`
  position: absolute;
  top: 90px;
  left: 960px;
  @media (max-width: 1104px) {
    top: 10%;
    left: 60%;
    width: 30%;
  }
`


function ThirdSection () {
  const ref = useRef(null)
  useGsap(() => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: '.loop1',
        start: 'top 80%',
        end: '+=1500',
        scrub: true
      }
    })

    t.fromTo(".loop1",
    {
      xPercent: 0
    },
    {
      xPercent: -10,
      duration: 1,
      ease: 'none'
    })

    t.fromTo(".loop2",
    {
      xPercent: -10
    },
    {
      xPercent: 0,
      duration: 1,
      ease: 'none'
    },
    "<")

    // const t2 = gsap.timeline()
    // t2.fromTo(".center",
    // {
    //   scale: 0,
    //   opacity: 0,
    //   top: '50%',
    //   left: '50%',
    //   xPercent: '-50',
    //   yPercent: '-50',
    // },
    // {
    //   scale: 1,
    //   opacity: 1,
    //   duration: 2,


    // })

    ScrollTrigger.create({
      trigger: ".center",

      onEnter () {
        gsap.fromTo(".center",
        {
          scale: 0,
          opacity: 0,
          top: '50%',
          left: '50%',
          xPercent: '-50',
          yPercent: '-50',
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
        })

        gsap.fromTo(".lefthand",
        {
          left: "50%",
          opacity: 0
        },
        {
          left: "25%",
          opacity: 1
        })

        gsap.fromTo(".righthand",
        {
          left: "50%",
          opacity: 0
        },
        {
          left: "75%",
          opacity: 1
        })

        gsap.fromTo(".stamp",
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          delay: 1
        })

        gsap.to(".pulse",
        {
          scale: 1.2,
          repeat: -1,
          delay: 2,
          yoyo: true
        })
      }
    })
  }, ref)

  return (

    <Container ref={ref}>
      <Carousel directionName={"loop1"}/>
        <GridBackground>
          <Boom className="center" src={boom.src} />
          <Headline className="center" src={headline.src} />
          <RightHand className="righthand" src={rightHand.src} />
          <LeftHand className="lefthand" src={leftHand.src} />
          <Subtitle className="stamp">前端工程師    ✖    UI設計師</Subtitle>
          <StampYellow className="stamp pulse" src={stamp2.src} />
          <StampPurple className="stamp pulse" src={stamp1.src} />
        </GridBackground>
      <Carousel directionName={"loop2"}/>
    </Container>
  )
}

export default ThirdSection