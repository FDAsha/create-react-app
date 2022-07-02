import styled from "styled-components";

const AsideWrapper = styled.aside`
  width           : 200px;
  background-color: rgb(255, 242, 53);
  margin-right: 20px;
`

const AsideText = styled.p`
  padding: 20px 0px 0 20px;
`

const Aside = () => {
  return (
    <AsideWrapper>
      <AsideText>сайдбар</AsideText>
    </AsideWrapper>
  )
}

export default Aside;