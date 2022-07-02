import React from "react";
import styled from "styled-components";

const Section = styled.section`
padding         : 20px 0px 0px 100px;
background-color: rgb(119, 63, 116);
max-width: 100%;
height   : 80px;
`

const SectionText = styled.p`
padding: 10px 0 0 30px;
`

const Footer = () => {
    return (
        <Section>
            <SectionText>
                Футер
            </SectionText>
        </Section>
    )
}

export default Footer;