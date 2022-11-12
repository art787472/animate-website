import styled from 'styled-components'
import anim1Rectangle from '../public/section2_anim1_rectangle.png'
import anim1Star from '../public/section2_anim1_star.png'
import animDialoge1 from '../public/section2_anim1_question.png'
import animQuestionMark from '../public/section2_anim1_questionmark.png'
import animBang from '../public/section2_anim2_bang.png'
import animPeanut from '../public/section2_anim2_peanut.png'
import animDialogue2 from '../public/section2_anim2_question.png'
import animRectangle2 from '../public/section2_anim3_rectangle.png'
import animTriangle from '../public/section2_anim3_triangle.png'
import animDialogue3 from '../public/section2_anim3_question.png'
import animEyes from '../public/section2_anim3_sadeyes.png'

import { useRef } from 'react'
import { gsap } from 'gsap'

import useGsap from './../hook/useGsap'

const Container = styled.section`
  position: relative;
  height: 1000px;
`

const FirstRectangle = styled.img`
  position: absolute;
  top: 49px;
  left: 343px;
`

const FirstStar = styled.img`
  position: absolute;
  top: 80px;
  left: 720px;
`

const FirstQuestion = styled.img`
  position: absolute;
  top: 172px;
  left: 285px;
`

const FirstQuestionMark = styled.img`
  position: absolute;
  top: 120px;
  left: 870px;
`

const SecondBang = styled.img`
  position: absolute;
  top: 412px;
  left: 260px;
`

const SecondPeanut = styled.img`
  position: absolute;
  top: 430px;
  left: 580px;
`

const SecondQuestion = styled.img`
  position: absolute;
  top: 300px;
  left: 670px;
`

const ThirdRectangle = styled.img`
  position: absolute;
  top: 535px;
  left: 580px;
`

const ThirdTriangle = styled.img`
  position: absolute;
  top: 525px;
  left: 963px;
`

const ThirdQuestion = styled.img`
  position: absolute;
  top: 665px;
  left: 358px;
`

const ThirdEye = styled.img`
  position: absolute;
  top: 650px;
  left: 946px;
`

function QuestionSection () {
  const ref = useRef(null)

  useGsap(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".a",
        marker: true,
        start: 'top 50%',
        end: 'top 1%',
        scrub: true
      }
    })

    t1.fromTo(".first-anim",
    {
      yPercent: -100,
      opacity: 0,
      visiblity: 'hidden'
    },
    {
      yPercent: 0,
      opacity: 1,
      visiblity: 'visible',
      duration: 3
    })

    const t2 = gsap.timeline({
       scrollTrigger: {
        trigger: ".b",
        marker: true,
        start: 'top 60%',
        end: 'top 1%',
        scrub: true
      }
    })

    t2.fromTo(".second-anim",
    {
      yPercent: -100,
      opacity: 0,
      visiblity: 'hidden'
    },
    {
      yPercent: 0,
      opacity: 1,
      visiblity: 'visible',
      duration: 2,
      delay: 1
    })

    const t3 = gsap.timeline({
       scrollTrigger: {
        trigger: ".c",
        marker: true,
        start: 'top 80%',
        end: 'top 1%',
        scrub: true
      }
    })

    t3.fromTo(".third-anim",
    {
      yPercent: -100,
      opacity: 0,
      visiblity: 'hidden'
    },
    {
      yPercent: 0,
      opacity: 1,
      visiblity: 'visible',
      duration: 2,
      delay: 3
    })

  },ref)

  return (
    <Container ref={ref}>
      <FirstRectangle className="a first-anim" src={anim1Rectangle.src} />
      <FirstStar  className="first-anim" src={anim1Star.src} />
      <FirstQuestion  className="first-anim" src={animDialoge1.src} />
      <FirstQuestionMark  className="first-anim" src={animQuestionMark.src} />
      <SecondBang className="b second-anim" src={animBang.src} />
      <SecondPeanut className="second-anim" src={animPeanut.src} />
      <SecondQuestion className="second-anim" src={animDialogue2.src} />
      <ThirdRectangle className="c third-anim"  src={animRectangle2.src} />
      <ThirdTriangle className="third-anim"  src={animTriangle.src} />
      <ThirdQuestion className="third-anim"  src={animDialogue3.src} />
      <ThirdEye className="third-anim"  src={animEyes.src} />

    </Container>
  )
}

export default QuestionSection