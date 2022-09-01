import styled from "styled-components"


const StyledHeader = styled.div`
  min-height: 600px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

export default function Header(){
  return(
    <StyledHeader/>
  )
}