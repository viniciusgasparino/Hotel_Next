import styled from "styled-components"
import Imagem from "../Imagem/Imagem"
import Subtitle from "../Subtitle/Subtitle"
import Content from "../Content/Content"

const StyledSection = styled.div`
  display: flex;
  width: 100%;
`;

const StyledW50 = styled.div`
  flex-basis: 50%;
`;

const StyledText = styled.p`
  padding: 40px 0;
`;

const StyledButton = styled.button`
   padding: 10px 40px;
   background-color: transparent;
   border: 2px solid #00a7ef;
   color: #00a7ef;
   font-weight: bold;
   font-size: 14px;
   cursor: pointer;
   border-radius: 5px;
   transition: all 0.25s ease-out;
   margin-top: 40px;

 :hover{
   background-color: rgba(0,167,139,0.2);
  }
`;
      
function Section(){
  return(
    <StyledSection>
      <StyledW50>
        <Imagem img={"imagem-cidade.jpg"}/>
      </StyledW50>
      <StyledW50>
        <Content>
          <Subtitle>Aqui vai um titulo</Subtitle>
          <StyledText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi sed mauris lacus. Donec metus nisi, accumsan ut nulla sit amet, 
            molestie cursus nisl.Integer enim augue, sollicitudin vel tristique eget, 
            euismod a sapien
          </StyledText>
          <StyledButton>Reservar Agora</StyledButton>
        </Content>
      </StyledW50>
    </StyledSection>
  )
}

export default Section

