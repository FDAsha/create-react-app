import styled from "styled-components";
import Aside from "./Aside/Aside";
import Items from "./Items/Items";

const ContentS = styled.section`
    padding: 20px 0 35px 0;
`

const ContentWrapper = styled.div`
    width: 100%;
    height               : 600px;
    display: flex;

`

function Content() {
    return (
        <ContentS>
            <ContentWrapper>
                <Aside />
                <Items />
            </ContentWrapper>
        </ContentS>

    )
}

export default Content;