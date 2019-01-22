import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 15px;
  * {
    margin-right: 6px;
  }
  h5 {
    font-size: 14px;
    :hover {
      text-decoration: underline;
    }
  }
  p {
    font-size: 11px;
    color: grey;
    span:hover {
      text-decoration: underline;
    }
  }
`

const PostHeader = ({ subreddit, author }) => (
  <StyledDiv>
    <h5>{subreddit}</h5>
    <p>- Posted by <span>{author}</span></p>
  </StyledDiv>
)

export default PostHeader