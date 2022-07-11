import React from "react";
import styled from "styled-components";
// import Content from "../Content";

import Item from './Item/Item'

const ItemWrapper = styled.div`
    width: 100%;
    height: 600px;
    display : flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`



function Items(props) {

  return (
    <ItemWrapper>
      {props.itemss.map((el, text) => {
        return <Item el={el} key={el.id} text={text}/>
        

      })}
    </ItemWrapper>
  )
}

export default Items;
