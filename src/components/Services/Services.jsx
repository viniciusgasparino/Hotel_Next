import styled from "styled-components"
import Subtitle from "../Subtitle/Subtitle"

const StyledServices = styled.div`
  padding: 40px 0;
`;

const StyledContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const StyledContent = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 20px;
`;



function Services(){
  return(
    <StyledServices>
      <StyledContainer>
      <Subtitle size={"30px"}>Serviços</Subtitle>
      <StyledContent>
        
      </StyledContent>
      </StyledContainer>
    </StyledServices>
  )
}


export default Services