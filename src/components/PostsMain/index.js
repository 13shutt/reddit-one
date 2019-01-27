import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import PostsList from '../../view/PostsList'

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 89vh;
`

const PostsMain = (props) => (
  <StyledDiv>
    {props.loading === true 
    ? <Loader type="Oval" color="orange" height={120} width={120} /> 
    : <PostsList />}
  </StyledDiv>
)

export default PostsMain