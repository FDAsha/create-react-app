import React from "react";
import styled from "styled-components";

import Item from './Item/item'

const ItemWrapper = styled.div`
    width: 100%;
    height: 600px;

    display : flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const items = [{
  id: 'one',
  width: '20%',
  height: '290px',
  backgroundColor: 'green',
  text: 'Контент 1'
}, {
  id: 'two',
  width: '80%',
  height: '290px',
  backgroundColor: 'blue',
  text: 'Контент 2'
}, {
  id: 'three',
  width: '100%',
  backgroundColor: 'pink',
  text: 'Контент 3'
}]

function Items() {
    return (
      <ItemWrapper>
        {items.map((item, index) => (
          <Item 
            key={index} 
            width={item.width} 
            height={item?.height} 
            id={item.id} 
            backgroundColor={item.backgroundColor} 
            text={item.text} 
          />
        ))}
      </ItemWrapper>
    )
}

export default Items;
