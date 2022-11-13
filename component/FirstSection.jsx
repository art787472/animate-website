import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'
import arrow from '../public/arrow.png'
import pacmen from '../public/pacmen.png'
import dashboard from '../public/dashboard.png'
import arrowBracket from '../public/arrow_bracket.png'

const Container = styled.section`
  position: relative;
  height: 750px;

  @media (max-width: 1104px) {
    height: 500px;
  }
`

const SignInButton = styled.button`
  width: 240px;
  height: 76px;
  background-color: #FFE34E;
  border-radius: 50px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  position: absolute;
  left: 600px;
  top: 487px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #FFF385;
  }

   @media (max-width: 1104px) {
    position: static;
    width: 50%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 45px;
    display: block;
  }

`

const Headline = styled.h2`
  position: absolute;
  width: 331px;
  height: 41px;
  left: 540px;
  top: 344px;
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: .8rem;
  color: #fff;

  @media (max-width: 1104px) {
    position: static;
    width: 100%;
    justify-content: center;
  }

`

const WordSection = styled.section`
    height: 100px;
    overflow: hidden;
    max-width: 100%;
    pointer-events: none;
`

const Loop = styled.ul`
    display: inline-block;
    font-size: 5rem;
    color: transparent;
    white-space: nowrap;
    height: 100%;
    font-family: 'Monument Extended';


    & > span {
      display: inline-flex;
      background: -webkit-linear-gradient(90deg, #9FA6FF 0%, #55FFAD 100%);
      -webkit-background-clip: text;
      -webkit-text-stroke: 4px transparent;
      color: #151f3f;
      line-height: 58px;
      padding: .5rem;
      align-items: center;
      justify-content: space-around;
    }

    & div {
      display: inline-block;
    }
  @media (max-width: 1104px) {
    font-size: 28px;
  }
`

const FourPointStar = styled.div`

  position:relative;
  margin: 2rem ;
  margin-bottom: 4rem;
  width:1em;
  font-size:16px;


&:before{
  content:"";
  position:absolute;
  background:linear-gradient(90deg, #9FA6FF 0%, #55FFAD 100%);
  width:1em;
  height:1.15em;
  transform:rotate(-45deg) skewX(22.5deg) skewY(22.5deg);
}

&:after{
  content:"";
  position:absolute;
  background:linear-gradient(90deg, #9FA6FF 0%, #55FFAD 100%);
  width:1em;
  height:1.15em;
  transform:rotate(45deg) skewX(22.5deg) skewY(22.5deg);
}

  @media (max-width: 1104px) {
    font-size: 10px;
    margin-bottom:45px;
  }
`

function WordCarousel () {
  const sectionRef = useRef(null)
  useEffect(() => {
    const cxt = gsap.context(() => {

      gsap.fromTo(".loop",
      {
        xPercent: "-60"
      },
      {
        xPercent: "1",
        ease: "none",
        duration: 40,
        repeat: -1,
      })
    }, sectionRef)

    return () => cxt.revert()
  },[])

  return (
    <WordSection ref={sectionRef}>
      <Loop className="loop">
        <span>JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar />  </span>
        <span>JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> </span>
        <span>JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> </span>
        <span>JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> JOIN US <FourPointStar /> </span>
      </Loop>
    </WordSection>
  )
}

const ArrowIllustration = styled.img`
  position: absolute;
  top: 349px;
  left: 300px;

  @media (max-width: 1104px) {
    visibility: hidden;
  }
`

const PacmenIllustration = styled.img`
  position: absolute;
  top: 193px;
  left: 1141px;

  @media (max-width: 1104px) {
    visibility: hidden;
  }
`

const BracketIllustration = styled.img`
  position: absolute;
  top: 248px;
  left: 97px;
  @media (max-width: 1104px) {
    left: 25px;
    top: -150px;
    width: 100px;
  }
`

const DashboardIllustration = styled.img`
  position: absolute;
  top: 268px;
  left: 886px;

  @media (max-width: 1104px) {
    left: 70%;
    top: 70%;
    width: 100px;
  }
`

const MainHeadline = styled.h2`
  position: absolute;
  width: 567px;
  height: 96px;
  left: 440px;
  top: 212px;
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 96px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #55FFAD;
  letter-spacing: 10px;

  &::after {
    content: "THE F2E";
    position:absolute;
    width: 567px;
    height: 96px;
    transform: translate(5px, 5px);
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 96px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #FFF;
    letter-spacing: 10px;
  }

  &::before {
    content: "THE F2E";
    position:absolute;
    width: 567px;
    height: 96px;
    transform: translate(10px, 10px);
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 96px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #9DA4FE;
    z-index: -10;
    letter-spacing: 10px;
  }

  @media (max-width: 1104px) {
    position: static;
    width: 100%;
    font-size: 42px;
    justify-content: center;

    &::after, &::before {
      font-size: 42px;
      justify-content: center;
    }

  }
`

const YearHeadline = styled.h2`
  position: absolute;
  width: 156px;
  height: 56px;
  left: 950px;
  top: 170px;
  font-family: 'Monument Extended';
  font-style: italic;
  font-weight: 400;
  font-size: 52px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #55FFAD;
  letter-spacing: 5px;

  &::after {
    content: "4TH";
    position:absolute;
    transform: translate(5px, 5px);
    font-family: 'Monument Extended';
    font-style: italic;
    font-weight: 400;
    font-size: 52px;
    line-height: 56px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #FFF;

  }

  &::before {
    content: "4TH";
    position:absolute;
    transform: translate(10px, 10px);
    font-family: 'Monument Extended';
    font-style: italic;
    font-weight: 400;
    font-size: 52px;
    line-height: 56px;
    text-transform: uppercase;
    color: #9DA4FE;
    z-index: -10;


  }

  @media (max-width: 1104px) {
    position: static;
    margin-top: 78px;
    justify-content: center;
    width: 100%;
    font-size: 27px;

    &::after, &::before {
      font-size: 27px;
    }
  }
`

function FirstSection () {
  const containerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const cxt = gsap.context(() => {


      gsap.fromTo(".bracket",
      {
        y: -150,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1
      })

      gsap.fromTo(".fade-in-from-bottom",
      {
        y: 150,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1
      })
    }, containerRef)


    gsap.to(".bracket",
      {
        y: 15,
        yoyo: true,
        duration: 1,
        repeat: -1,
        delay: 1
      }
    )

    gsap.to(".dashboard",
      {
        y: 15,
        yoyo: true,
        duration: 1,
        repeat: -1,
        delay: 1
      }
    )
  } , [])

  return (
    <>
    <Container ref={containerRef}>
      <ArrowIllustration src={arrow.src}/>
      <PacmenIllustration src={pacmen.src}/>
      <BracketIllustration className="bracket" src={arrowBracket.src} />
      <DashboardIllustration  className="fade-in-from-bottom dashboard" src={dashboard.src}/>
      <YearHeadline className="fade-in-from-bottom">4TH</YearHeadline>
      <MainHeadline className="fade-in-from-bottom">the f2e</MainHeadline>

      <Headline>互動式網頁設計</Headline>
      <SignInButton>立即報名</SignInButton>
    </Container>
    <WordCarousel />
    </>
  )
}

export default FirstSection