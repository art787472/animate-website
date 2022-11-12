import styled from 'styled-components'

const Logo = styled.h1`
  background-image: url('./../assets/f2e_logo.png');
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
   padding: 0px;
   gap: 4px;

   height: 28px;
`

const ListItem = styled.li`
  width: 64px;
  height: 20px;
  font-family: 'Noto Sans CJK TC';
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

  &:hover {
    color: #fff;
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 28px;
    left: 26px;
    height: 4px;
    width: 12px;
    background-color: #55FFAD;
    border-radius: 20px;
  }
`

const SignInBtn = styled.button`
  width: 80px;
  height: 42px;
  background-color: transparent;
  color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 40px;
  margin: 0 48px 0 32px;
  cursor: pointer;

  &:hover {
    color: #55FFAD;
    border-color: #55FFAD;
    box-shadow: 0  0 20px #55FFAD;
  }
`

function Navbar () {

  return (
    <NavbarBackground>
      <Logo>F2E</Logo>
      <List>
        <ListItem>關卡資訊</ListItem>
        <ListItem>活動說明</ListItem>
        <ListItem>攻略資源</ListItem>
        <ListItem>求職專區</ListItem>
        <SignInBtn>登入</SignInBtn>
      </List>

    </NavbarBackground>
  )
}

export default Navbar