import styled from "styled-components"


const StyledSection = styled.div`
  display: ${props => props.flex};
  width: ${props => props.width};
`;

const StyledW50 = styled.div`
  flex-basis: 50%;
`;
      
function Section(){
  return(
    <StyledSection>
      <StyledW50>

      </StyledW50>
      <StyledW50>
        
      </StyledW50>
    </StyledSection>
  )
}

export default Section

