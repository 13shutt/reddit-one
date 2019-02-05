import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-size: 20px;
  h2 a {
    text-decoration: none;
    color: black;
  }
`

export const PostTitle = ({ title, permalink }) => (
  <StyledDiv>
    <h2>
      <Link to={`${permalink}`}>{title}</Link>
    </h2>
  </StyledDiv>
)