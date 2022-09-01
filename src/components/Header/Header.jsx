import styled from "styled-components"
import StyledTitle from "../Title/Title"
import StyledParagrafo from "../Paragrafo/Paragrafo"


const StyledHeader = styled.header`
  min-height: 600px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

export default function Header(){
  return(
    <StyledHeader img={"praia.jpg"}>
      <StyledTitle color={"white"}>Hotel next</StyledTitle>
      <StyledParagrafo color={"white"}>O seu paraíso na terra</StyledParagrafo>
      <a href="#" target="_blank">
        <button>O seu paraíso na terra</button>
      </a>
    </StyledHeader>
  )
}

