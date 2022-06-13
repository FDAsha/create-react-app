import styled from "styled-components";

const SidebarBlock = styled.aside`
  width           : 200px;
  background-color: rgb(255, 242, 53);
  margin-right    : 30px;
`

const SidebarText = styled.p`
  padding: 20px 0px 0 20px;
`

function Aside() {
    return (
        <SidebarBlock>
            <SidebarText>Сайдбар</SidebarText>
        </SidebarBlock>
    )
}

export default Aside;