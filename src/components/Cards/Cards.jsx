import styled from "styled-components"
import Imagem from "../Imagem/Imagem"

const StyledCards = styled.div`
  background-color: #00a7ef;
`;

const StyledText = styled.div`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  padding: 10px 20px;
`;


function Cards({img}){
  return(
    <StyledCards>
      <Imagem img={img}/>
      <StyledText>Translados Gratuitos</StyledText>
    </StyledCards>
  )
}


export default Cards