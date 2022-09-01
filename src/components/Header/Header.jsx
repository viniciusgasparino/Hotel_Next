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
    <StyledHeader>
      <h1>Hotel next</h1>
      <p>O seu paraíso na terra</p>
      <a href="#" target="_blank">
        <button>O seu paraíso na terra</button>
      </a>
    </StyledHeader>
  )
}

Header.defaultProps = {
  image: "../public/praia.jpg"
}