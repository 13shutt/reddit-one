import React from 'react'
import styled from 'styled-components'
import redditLogo from '../../../assets/images/reddit-logo-full.png'

const StyledDiv = styled.div`
  width: 140px;
  a img {
    width: 110px;
  }
`

export const Logo = ({ link, click }) => (
  <StyledDiv>
    <a href={link} onClick={click}>
      <img src={redditLogo} alt="reddit-logo"/>
    </a>
  </StyledDiv>
)