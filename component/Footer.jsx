import styled from 'styled-components'
import logo1 from '../public/footer_logo1.png'
import logo2 from '../public/footer_logo2.png'
import logo3 from '../public/footer_logo3.png'
import bigStar from '../public/footer_bigstar.png'
import smallStar from '../public/footer_smallstar.png'

const Container = styled.section`
  background: #151F3F;
  padding-top: 80px;
  padding-bottom: 100px;
`

const Title = styled.h2`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;

  /* identical to box height, or 150% */
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  /* Neutral Color/N1 */
  color: #FFFFFF;
  margin: 0 auto;

    @media (max-width: 1104px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;

  /* identical to box height, or 150% */
  text-align: center;
  text-transform: uppercase;

  /* Neutral Color/N1 */
  color: #FFFFFF;
  margin-top: 8px;
    @media (max-width: 1104px) {
    font-size: 32px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  @media (max-width: 1104px) {
    flex-direction: column;
  }
`

const Logo = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 32px;
  margin-right: 60px;
      @media (max-width: 1104px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`
const FooterSection = styled.footer`
  padding-top: 17px;
  padding-bottom: 32px;
`

const FooterText = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  /* identical to box height, or 143% */
  text-align: center;
  text-transform: capitalize;

  /* Neutral Color/N1 */
  color: #FFFFFF
`

const TitleSection = styled.div`
  position: relative;
  width: 391px;
  margin: 0 auto;
`

const BigStar = styled.img`
  position: absolute;
  left: -40px;
  bottom: -10px;
`

const SmallStar = styled.img`
  position: absolute;
  top: -5px;
  right: -25px;
`

function Footer () {
  return (
    <>
    <Container>
      <TitleSection>
        <BigStar src={bigStar.src} />
        <Title>sponsors</Title>
        <SmallStar src={smallStar.src} />
      </TitleSection>

      <Subtitle>鑽石級贊助商</Subtitle>
      <LogoContainer>
        <Logo>
          <img src={logo1.src} />
        </Logo>
        <Logo>
          <img src={logo2.src} />
        </Logo>
        <Logo>
          <img src={logo3.src} />
        </Logo>
      </LogoContainer>
    </Container>
    <FooterSection>
      <FooterText>Copyright © 2022 HexSchool.All rights reserved.</FooterText>
    </FooterSection>
    </>
  )
}

export default Footer