import styled from "styled-components"


const StyledSection = styled.div`
  display: ${props => props.flex};
  width: ${props => props.width};
`;

function Section(){
  return(
    <StyledSection>
      sssssss
    </StyledSection>
  )
}

export default Section

