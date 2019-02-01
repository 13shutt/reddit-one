import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  cursor: pointer;
  a {
    color: #000;
    text-decoration: none;
    :hover, :active {
      text-decoration: none;
    }
  }
  i {
    padding: 8px;
    border-radius: 3px;
    :hover {
      background-color: #dddcdc;
    }
  } 
`

export const Icon = ({classname, click, type}) => (
  <StyledDiv onClick={click}>
    <Link to={`/r/${type}`}>
      <i className={`fa ${classname}`} aria-hidden="true"></i>   
    </Link>
  </StyledDiv>
)