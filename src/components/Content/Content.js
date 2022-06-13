import styled from "styled-components";
import Aside from "./Aside/Aside";
import Items from "./Items/Items";

const Section = styled.section`
    padding: 20px 0 35px 0;
`

const ContentWrapper = styled.div`
    width: 100%;
    height               : 600px;
    display: flex;

`

const Content = () => {
    return (
        <Section>
            <ContentWrapper>
                <Aside />
                <Items />
            </ContentWrapper>
        </Section>

    )
}

export default Content;