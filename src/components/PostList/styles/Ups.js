import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-right: 10px;
  min-width: 45px;
  i {
    font-size: 22px;
    color: #6e6e6e;
    padding: 3px 6px;
  }
  p {
    font-size: 18px;
  }
  .fa-caret-up:hover {
    color: red;
  }
  .fa-caret-down:hover {
    color: blue;
  }
`

export const Ups = ({ children }) => (
  <StyledDiv>
    <i className="fa fa-caret-up" aria-hidden="true"></i>
      <p>{children}</p>
    <i className="fa fa-caret-down" aria-hidden="true"></i>
  </StyledDiv>
)