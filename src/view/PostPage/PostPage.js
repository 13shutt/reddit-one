import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

class PostPage extends Component {    
  render() { 
    return (
      <StyledDiv>
        this is post page
      </StyledDiv>
    );
  }
}
 
export default PostPage;