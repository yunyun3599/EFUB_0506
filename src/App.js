import React, {useState} from 'react';
import styled,{ThemeProvider} from 'styled-components';
import profile from "./assets/profile.jpg";
import logo from "./assets/google.png";
import menu from "./assets/menu.PNG";
import search from "./assets/search.PNG";
import buttons from "./assets/button.PNG";
import {Switch} from "antd";
import "antd/dist/antd.css";


const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: flex-end;
  height: 50px;
  margin-top:3px;
`

const Button = styled.button`
  margin-right:10px;
  background:${props=>props.theme.bgColor || 'white'};
  color:${props=>props.theme.fontColor || 'black'};
  border: none;
  outline: none;
`

const Image = styled.button`
  margin-right:10px;
  margin-top:10px;
  background:${props=>props.theme.bgColor};
  border:none;
  outline: none;
`
const Center = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  margin-top:200px;
`

const Logo = styled.image`
  margin-right: 10px;
  margin-top:20px;
  background: ${props => props.theme.bgColor};
  border:none;
  outline:none;
`

const Input = styled.div`
  display:flex;
  justify-content: row;
  margin-top: 20px;
  width:550px;
  height:40px;
  border-radius:30px;
  border: 1px solid #E2E2E3;
  background: none;
`
const InputConsol = styled.input`
  border:none;
  width:400px;
  outline:none;
  background: ${props=>props.theme.bgColor};
`

const Row = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`

const GrayButton = styled.button`
  margin-right:10px;
  background: ${props => props.theme.default || '#F8F9FA'};
  color: ${props => props.theme.fontColor || 'black'};
  border:none;
  outline:none;
  margin-top:30px;
  height: 35px;
  padding-left: 25px;
  padding-right:25px;
  border-radius:10px;
`

const FooterWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-content:stretch;
  justify-content:start;
`

const Footer1 = styled.div`
  margin-top:310px;
  color:${props => props.theme.fontColor || 'gray'};
  align-content: center;
  padding-left: 20px;
  padding-top:15px;
  padding-bottom:15px;
  font-size: 14px;
  background-color: ${props => props.theme.footColor};
`

const Footer2 = styled.div`
  color:${props => props.theme.fontColor || 'gray'};
  border-top: 1px solid #E2E2E3;
  padding-left: 20px;
  padding-top:15px;
  padding-bottom:15px;
  font-size: 14px;
  background-color: ${props => props.theme.footColor};
`

const Wrapper = styled.div`
background-color:${props => props.theme.bgColor};
display: flex;
flex-direction: column;
min-height:100vh;
margin:0;
`

const Line = styled.p`
margin-top:17px;
margin-right:15px;
color:${props => props.theme.fontColor};
`

function App() {
  const [isDark, setIsDark] = useState(false);

  const dark = {
    titleColor:'#121212',
    footColor:"#242424",
    bgColor:"black",
    fontColor:"white",
    default:"black"
  }
  const light = {
    titleColor:'#b8b8b8',
    footColor:"#F2F2F2",
    bgColor:"white",
    fontColor:"black",
    default: "#F8F9FA"
  }

  const theme = isDark? dark:light;

  const changeTheme = (checked) => {
    setIsDark(!isDark);
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
      <Header>
        <Button>Gmail</Button>
        <Button>이미지</Button>
        <Button><img src={menu} style={{marginTop:"8px"}}/></Button>
        <Image><img src={profile} style={{borderRadius:"50%"}}/></Image>
        <Line>dark mode</Line> 
        <Switch style={{marginRight:"10px", marginTop:"17px"}} checked={isDark} onChange={changeTheme}/>
      </Header>
      <Center>
        <Logo> <img src= {logo}/> </Logo>
        <Input>
          <img src = {search} style={{margin:"7px"}}/>
          <InputConsol/>
          <img src={buttons} style={{height:"100%", borderRadius:"50%", marginRignt:"10px"}}/>
        </Input>
          <Row>
            <GrayButton>Google검색</GrayButton>
            <GrayButton>I'm Feeling Lucky</GrayButton>
          </Row>
          <div style={{marginTop:"20px"}}>
            <a style={{fontSize:"14px"}}> Google 제공 서비스:
            <a style={{color:"#3733BF"}}> English</a></a>
          </div>
      </Center>
      <FooterWrapper>
        <Footer1>대한민국</Footer1>
        <Footer2>
          <a href="" style={{marginRight:"23px"}}>Google 정보</a>
          <a href="" style={{marginRight:"23px"}}>광고</a>
          <a href="" style={{marginRight:"23px"}}>비즈니스</a>
          <a href="" style={{marginRight:"23px"}}>검색의 원리</a>
          <a href="" style={{marginLeft:"80rem", marginRight:"23px"}}>개인정보처리방침</a>
          <a href="" style={{marginRight:"23px"}}>약관</a>
          <a href="" style={{marginRight:"23px"}}>설정</a>
        </Footer2>
      </FooterWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
