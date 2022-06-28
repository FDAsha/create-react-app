import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height ? props.height : '300px'};

  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'black'};
`

const Item = ({ width, height, backgroundColor, text }) => {
  return (
    <Container width={width} backgroundColor={backgroundColor} height={height}>
      {text}
    </Container>
  )
}

export default Item