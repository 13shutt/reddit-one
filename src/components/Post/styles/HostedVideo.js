import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const StyledDiv = styled.div`
  * {
    margin: 10px 0px;
    max-height: 480px;
    max-width: 480px;
  }
`

export const HostedVideo = ({ media }) => (
  <StyledDiv>
    <ReactPlayer 
      url={media.reddit_video.fallback_url} 
      playing="true"
      loop="true"
    />
  </StyledDiv>
)