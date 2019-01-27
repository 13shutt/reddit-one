import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  font-size: 20px;
`

export const PostTitle = ({ title }) => (
  <StyledDiv>
    <h2>{title}</h2>
  </StyledDiv>
)