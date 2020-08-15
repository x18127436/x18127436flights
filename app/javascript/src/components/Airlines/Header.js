import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding:100px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = () => {
  return(
    <Wrapper>
    <h1>Flights</h1>

    
    <Subheader>Airline Reviews.    </Subheader>

    
    </Wrapper>
  )
}


export default Header