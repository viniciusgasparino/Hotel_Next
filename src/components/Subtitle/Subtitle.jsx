import styled from "styled-components"


const StyledH2 = styled.h2`
   font-size: ${props => props.size};
   font-weight: bold;

   @media (max-width: 768px){
      text-align: center;
   }
`;


export default StyledH2