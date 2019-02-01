import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const StyledDiv = styled.div`
  padding: 15px;
  * { 
  height: 200px !important;
  width: 320px !important;
  } 
`

export const Video = ({ secure_media }) => (
  <StyledDiv>
    <ReactPlayer url={secure_media.reddit_video.fallback_url} controls="true" />
  </StyledDiv>
)