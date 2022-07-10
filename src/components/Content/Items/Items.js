import React from "react";
import styled from "styled-components";
import Item from './Item/Item'

const ItemWrapper = styled.div`
    width: 100%;
    height: 600px;
    display : flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const items = [{
  id: 'one',
  width: '30%',
  height: '40%',
  backgroundColor: 'green',
  text: 'контент 1',
  padding: '80px 0 0 60px',

}, {
  id: 'two',
  width: '65%',
  height: '40%',
  backgroundColor: 'blue',
  text: 'контент 2',
  padding: '70px 0 0 100px',
}, {
  id: 'three',
  width: '100%',
  height: '50%',
  backgroundColor: 'pink',
  text: 'контент 3',
  padding: '90px 0 0 120px',
  marginBottom: '-30px'
}]

function Items() {
  return (
    <ItemWrapper>
      {items.map((item, index,) => (
        <Item
          key={index}
          width={item.width}
          height={item?.height}
          id={item.id}
          backgroundColor={item.backgroundColor}
          text={item.text}
          padding={item.padding}
          marginBottom={item.marginBottom}
        />
      ))}
    </ItemWrapper>
  )
}

export default Items;
