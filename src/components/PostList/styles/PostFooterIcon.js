import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: #8a8888;
  align-items: baseline;
  width: min-content;
  padding: 2px 4px;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 5px;
  :hover {
    background-color: #e2e0e0;
  }
  p {
    margin-right: 4px;
  }
  i {
    font-size: 16px;
    margin-right: 4px;
  }
`

export const PostFooterIcon = ({ faClass, children, text }) => (
  <StyledDiv>
    <i className={`fa ${faClass}`} aria-hidden="true"></i>
    <p>{children}</p>
    <span>{text}</span>
  </StyledDiv>
)