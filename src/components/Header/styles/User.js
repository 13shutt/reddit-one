import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
`

export const User = () => (
  <StyledDiv>
    <i className="fa fa-user-circle" aria-hidden="true"></i>
  </StyledDiv>
)