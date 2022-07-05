import styled from "styled-components";
import Aside from "./Aside/Aside.js";
import Boxs from "./Boxs/Boxs";

const Wrapper = styled.div`
display: flex;
padding: 40px 0;
`

const Content = () => {
    return (
        <Wrapper>
            <Aside></Aside>
            <Boxs></Boxs>
        </Wrapper>
    )
};

export default Content;