import React from "react";
import styled from "styled-components";

import ItemOne from "./ItemOne/ItemOne";
import ItemTwo from "./ItemTwo/ItemTwo";
import ItemThree from "./ItemThree/ItemThree";


const ItemWrapper = styled.div`
    width: 100%;
    height        : 600px;
`

const ItemsTop = styled.div`
    display       : flex;
    height        : 50%;
    width         : 100%;
    margin-bottom: 20px;
`

function Items() {
    return (
        <ItemWrapper>
            <ItemsTop>
                <ItemOne />
                <ItemTwo />
            </ItemsTop>
            <ItemThree />
        </ItemWrapper>
    )
}

export default Items;
