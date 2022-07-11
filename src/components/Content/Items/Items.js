import React from "react";
import styled from "styled-components";
// import Content from "../Content";

import Item from './Item/item'

const ItemWrapper = styled.div`
  width: 100%;
  height: 600px;
  display : flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Items = ({ renderItems }) => {
  return (
    <ItemWrapper>
      {renderItems.map(({ id, width, height, backgroundColor, text, padding, color }) => (
        <Item 
          width={width} 
          height={height} 
          backgroundColor={backgroundColor} 
          text={text} 
          id={id} 
          padding={padding} 
          key={id} 
          color={color}
        />
      ))}
    </ItemWrapper>
  )
}

export default Items;
