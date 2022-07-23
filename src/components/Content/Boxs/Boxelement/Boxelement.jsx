import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-right: ${({ marginRight }) => marginRight};
`;

const Text = styled.p`
  padding: ${({ padding }) => padding};
  text: ${({ text }) => text};
`;

const BoxElement = ({
  height = "200px",
  backgroundColor = "pink",
  padding = "90px",
  marginRight = "0px",
  text = 'Default'
}) => {
  const [
    currentColor, setCurrentColor
  ] = useState(backgroundColor)
  const [
    currentText, setCurrentText
  ] = useState(text)

  useLayoutEffect(() => {
    if (currentColor === 'yellow') {
      setCurrentText("I'm yellow")
    } else {
      setCurrentText(text)
    }
  }, [
    currentColor
  ])

  const changeColor = () => {
    if (currentColor === backgroundColor) {
      setCurrentColor('yellow')
    } else {
      setCurrentColor(backgroundColor)
    }
  }

  return (
    <Container
      height={height}
      backgroundColor={currentColor}
      padding={padding}
      marginRight={marginRight}
      onClick={changeColor}
    >
      <Text padding={padding}>{currentText}</Text>
    </Container>
  );
};

export default BoxElement;
