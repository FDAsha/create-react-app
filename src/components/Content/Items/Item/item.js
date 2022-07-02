import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height ? props.height : '300px'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'black'};
  padding: ${(props) => props.padding ? props.padding : '30px'};
  margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '30px'};
`

const Item = ({ width, height, backgroundColor, padding, text, marginBottom }) => {
  return (
    <Container width={width} backgroundColor={backgroundColor} height={height} padding={padding} marginBottom={marginBottom}>
      <p padding={padding}>{text}</p>
    </Container >
  )
}

export default Item