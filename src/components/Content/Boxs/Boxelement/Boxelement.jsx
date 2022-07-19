import React from "react";
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

const Boxelement = ({
  height = "200px",
  backgroundColor = "pink",
  text = "контент ",
  padding = "90px",
  marginRight = "0px"
}) => {
  return (
    <Container
      height={height}
      backgroundColor={backgroundColor}
      padding={padding}
      marginRight={marginRight}
    >
      <Text padding={padding}>{text}</Text>
    </Container>
  );
};

export default Boxelement;
