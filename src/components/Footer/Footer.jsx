import styled from "styled-components"

const StyledFooter = styled.div`
  background-color: #c4c4c4;
  text-align: center;
  padding: 20px 0;
`;

const StyledTexto = styled.p`
  font-size: 21px;
`;


function Footer(){
  return(
    <StyledFooter>
      <StyledTexto>HotelDev - Todos os direitos reservados.</StyledTexto>
      <StyledTexto>Rua XXX, numero: 000, São Paulo - SP</StyledTexto>
    </StyledFooter>
  )
}

export default Footer