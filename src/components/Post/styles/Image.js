import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: ${props => props.post_hint === "image" ? "block" : "none"};
  img {
    max-height: 500px;
    max-width: 400px;
    margin: 20px 10px 0px 10px;
  }
`

export const Image = ({ post_hint, url }) => (
  <StyledDiv post_hint={post_hint}>
    <img src={url} />
  </StyledDiv>
)