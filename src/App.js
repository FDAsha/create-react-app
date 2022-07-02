import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const AppWrapper = styled.div` 
width  : 1300px;
height          : 100%;
padding: 10px 15px;
margin : 0px auto;
`

const Box = styled.div`
  * {
    box-sizing: border-box;
  }
`

function App() {
    return (
        <AppWrapper>
        <Box>
            <Header />
            <Content />
            <Footer />
            </Box>
        </AppWrapper>
    )
}

export default App;


