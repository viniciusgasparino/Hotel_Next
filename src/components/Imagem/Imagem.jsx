import styled from "styled-components"

const StyledImagem = styled.img`
  width: 100%;
  object-fit: cover;
`;

function Imagem({img}){
  return(
    <>
      <StyledImagem src={img}/>  
    </>
  )
}

export default Imagem