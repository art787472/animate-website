import styled from 'styled-components'

import doc from '../public/section6_doc.png'
import coin from '../public/section6_coin.png'
import car from '../public/section6_car.png'
import flag from '../public/section6_flag.png'

import { useRef } from 'react'
import useGsap from '../hook/useGsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

const Container = styled.section`
  height: 1024px;
  padding-top: 108px;
  padding-left: 205px;
  padding-right: 205px;
  padding-bottom: 205px;

  @media (max-width: 1104px) {
    height: auto;
    padding: 0;
    padding-top: 80px;
  }
`

const Title = styled.h1`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;

  /* identical to box height, or 150% */
  display: flex;
  align-items: center;
  text-transform: uppercase;

  /* Neutral Color/N1 */
  color: #FFFFFF;

  /* Shadow/White */
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);

  @media (max-width: 1104px) {
    font-size: 24px;
    justify-content: center;
  }
`



const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 1104px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

  }
`

const Card = styled.div`
  width: 485px;
  height: 552px;

  background: #151F3F;
  border-radius: 32px;
  padding: 40px;
  border: 2px solid transparent;
  transition: 1s;


  &:not(:last-child) {
    margin-right: 60px;
  }

  &:hover {
    border: 2px solid;

  border-image: linear-gradient(142.33deg, rgba(157, 164, 255, 0.8) -0.03%, rgba(85, 255, 173, 0.8) 99.97%) 2;
  transform: translateY(-5px);
  }

  @media (max-width: 1104px) {
    width: 90%;
    padding: 24px;
    margin-bottom: 24px;
     &:not(:last-child) {
    margin-right: 0;
  }
  }
`

const CardTitle = styled.h3`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;

  /* identical to box height, or 150% */
  text-align: center;
  text-transform: uppercase;

  /* Primary Color/P1 */
  color: #9DA4FF;

  /* Shadow/Purple */
  text-shadow: 0px 0px 10px rgba(157, 164, 255, 0.6);


`

const CardTextBold = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  /* identical to box height, or 150% */
  display: flex;
  align-items: center;
  text-transform: uppercase;

  /* Neutral Color/N1 */
  color: #FFFFFF;
`

const CardText = styled.span`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  /* identical to box height, or 140% */
  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* Neutral Color/N1 */
  color: #FFFFFF;


`

const GreenText = styled.span`
  color: #55FFAD;
`

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
`

const CardInfoText = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  /* identical to box height, or 125% */
  display: flex;
  align-items: center;
  text-transform: uppercase;

  /* Neutral Color/N2 */
  color: #858993;


`

const BoldText = styled.span`
  font-weight: 700;

   @media (max-width: 1104px) {
    display: block;
    margin-right: auto;
  }
`

const ImageContainer = styled.div`
  margin-top: 63px;
  position: relative;
  height: 63px;
  width: 856px;
  margin: 0 auto;
  margin-bottom: 60px;
  margin-top: 63px;
  @media (max-width: 1104px) {
    width: auto;
    display: flex;
    justify-content: center;
  }
`

const CarImage = styled.img`
  position: absolute;
  right: 0;
  @media (max-width: 1104px) {
    width: 10%;
  }
`

const FlagImage = styled.img`
  position: absolute;
  left: 0;

  @media (max-width: 1104px) {
    width: 10%;
    left: 10%;
    bottom: 0;
  }
`
const Line = styled.div`
  width: 856px;
height: 3px;

/* Neutral Color/N1

Primary Text
*/
background: #FFFFFF;

/* Shadow/White */
box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
position: absolute;
bottom: 0;
@media (max-width: 1104px) {
    width: 80%;
  }
`

function SixthSection () {
  const ref = useRef(null)
  useGsap(() => {
    ScrollTrigger.create({
      trigger: ".image-container",
      onEnter () {
        gsap.fromTo(".car",
        {
          x: 0
        },
        {
          x: -670
        })
      }
    })
  },ref)
  return (
    <Container ref={ref}>
      <Title>???????????????????????????????????????</Title>
      <ImageContainer className='image-container'>
        <CarImage className='car' src={car.src} />
        <FlagImage src={flag.src} />
        <Line />
      </ImageContainer>
      <CardContainer>
        <Card>
          <CardImage src={doc.src} alt="document image" />
          <CardTitle>????????????</CardTitle>
          <CardTextBold style={{paddingTop:"56px"}}>?????????</CardTextBold>
          <CardText>???????????????????????????UI ??????????????????????????????</CardText>
          <CardTextBold  style={{paddingTop:"56px"}}>?????????</CardTextBold>
          <CardText>????????????????????????????????????????????????????????????<br />?????? 12/30(???) ????????????????????????????????????</CardText>
        </Card>
        <Card>
          <CardImage src={coin.src}/>
          <CardTitle >??????</CardTitle>
          <CardText  style={{marginTop: '56px'}}><BoldText>???????????????</BoldText>????????????<GreenText>????????????</GreenText></CardText>
          <CardInfoText>?????????????????????????????????????????????</CardInfoText>

          <CardText   style={{marginTop: '24px'}}><BoldText>??????????????????</BoldText>????????? <GreenText>NTD 3,000/???</GreenText></CardText>
          <CardInfoText>????????????????????????????????????????????? ??????</CardInfoText>

          <CardText   style={{marginTop: '24px'}}><BoldText>??????????????????</BoldText>???????????<GreenText>NTD 10,000/???</GreenText></CardText>
          <CardInfoText>??????????????? 1 ???</CardInfoText>
          <CardTextBold  style={{marginTop: '24px', fontSize: '20px'}}>?????????????????????????????????</CardTextBold>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default SixthSection