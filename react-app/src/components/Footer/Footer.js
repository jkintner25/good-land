import styled from "styled-components";

const FooterDiv = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
  height: 85px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 2000;
  & p {
    margin: 0;
    padding: 0;
  }
`

const Footer = () => {


  return (
    <FooterDiv>
      <p>&#169;Good Land Coffee Roasters 2022</p>
    </FooterDiv>
  )
};

export default Footer;
