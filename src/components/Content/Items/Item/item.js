import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: ${({ backgroundColor }) => backgroundColor};

  padding: ${({ padding }) => padding};

  color: ${({ color }) => color};
`

const Item = ({ 
  width = '100px', 
  height = '100px', 
  backgroundColor = 'white', 
  text, 
  id, 
  padding, 
  color = 'black' 
}) => {
  return (
    <Container width={width} height={height} backgroundColor={backgroundColor} padding={padding} color={color}>
      <p>{text[0]}</p>
    </Container>
  )
}

Item.defaultProps = {
  width: '100px',
  height: '100px',
  text: ['Дефолтный текст']
}

export default Item