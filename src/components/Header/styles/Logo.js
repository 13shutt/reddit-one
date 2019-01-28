import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 140px;
  a img {
    width: 110px;
  }
`

export const Logo = ({ link, click }) => (
  <StyledDiv>
    <a href={link} onClick={click}>
      <img src={require('../../../assets/images/reddit-logo-full.png')} alt="reddit-logo"/>
    </a>
  </StyledDiv>
)