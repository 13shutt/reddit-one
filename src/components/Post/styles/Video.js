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

export const Video = ({ preview }) => (
  <StyledDiv>
    <ReactPlayer 
      url={preview.reddit_video_preview.fallback_url} 
      controls={preview.reddit_video_preview.is_gif === true ? false : true}
      playing={preview.reddit_video_preview.is_gif === true ? true : false}
      loop={preview.reddit_video_preview.is_gif === true ? true : false}
    />
  </StyledDiv>
)