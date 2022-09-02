import Content from "../Content/Content"
import Subtitle from "../Subtitle/Subtitle"
import Paragrafo from "../Paragrafo/Paragrafo"
import styled from "styled-components"
import Imagem from "../Imagem/Imagem"

const StyledContact = styled.div`
  display: flex;
  font-size: 20pt;
`;

const StyledW50 = styled.div`
  flex-basis: 50%;
`;

const StyledH2 = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`;

function Contact(){
  return(
    <StyledContact>
      <StyledW50>
        <Content>
          <Subtitle>Alguma dúvida</Subtitle>
          <StyledH2>Entre em contato</StyledH2>
        </Content>  
      </StyledW50>
      <StyledW50>
         <Imagem img={"imagem-duvida.jpg"}/> 
      </StyledW50>
    </StyledContact>  
  )
}


export default Contact