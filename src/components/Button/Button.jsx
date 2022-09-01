import styled from "styled-components"

const StyledButton = styled.button`
   padding: 10px 40px;
   background-color: transparent;
   border: 2px solid white;
   color: white;
   font-weight: bold;
   font-size: 14px;
   cursor: pointer;
   border-radius: 5px;
   transition: all 0.25s ease-out;
   margin-top: 40px;

   :hover{
    background-color: rgba(255,255,255,0.2);
  }

`;


function Button({children}){
  return(
    <StyledButton>{children}</StyledButton>
  )
}


export default Button

