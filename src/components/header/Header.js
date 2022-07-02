import React from "react";
import styled from "styled-components";

const Section = styled.section`
widht: 100px 
`

const Nav = styled.nav`
max-width       : 100%;
height          : 80px;
background-color: brown;
`

const Text = styled.p`
padding: 20px 0 0 40px;

`

const Header = () => {
    return (
        <Section>
            <Nav>
                <Text>
                    Навигация
                </Text>
            </Nav>
        </Section>
    )
}

export default Header;