import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: ${props => props.post_hint === "link" ? "block" : "none"};
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 440px;
  font-size: 12px;
  font-family: 'Courier New', Courier, monospace;
`

export const UrlLink = ({ post_hint, url }) => (
  <StyledDiv post_hint={post_hint}>
    <a href={url}>
      <span className="link">{url}</span>
    </a>
  </StyledDiv>
)