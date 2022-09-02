import styled from "styled-components"

const StyledImagem = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px){
    object-fit: cover;
    max-height: 250px;
  }
`;

function Imagem({img}){
  return(
    <>
      <StyledImagem src={img}/>  
    </>
  )
}

export default Imagem