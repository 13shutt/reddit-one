import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 140px;
  a img {
    width: 110px;
  }
`

const Logo = ({ link }) => (
  <StyledDiv>
    <a href={link}>
      <img src={require('../../../assets/images/reddit-logo-full.png')} alt="reddit-logo"/>
    </a>
  </StyledDiv>
)

export default Logo