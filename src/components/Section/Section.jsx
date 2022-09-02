import styled from "styled-components"
import Imagem from "../Imagem/Imagem"
import Subtitle from "../Subtitle/Subtitle"


const StyledSection = styled.div`
  display: flex;
  width: 100%;
`;

const StyledW50 = styled.div`
  flex-basis: 50%;
`;
      
function Section(){
  return(
    <StyledSection>
      <StyledW50>
        <Imagem img={"imagem-cidade.jpg"}/>
      </StyledW50>
      <StyledW50>
        <Subtitle>Aqui vai um titulo</Subtitle>
      </StyledW50>
    </StyledSection>
  )
}

export default Section

