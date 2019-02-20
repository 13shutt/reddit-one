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

export const Video = ({ url, is_video }) => (
  <StyledDiv>
    <ReactPlayer 
      url={url} 
      controls={!is_video}
      playing={is_video}
      loop={!is_video}
    />
  </StyledDiv>
)