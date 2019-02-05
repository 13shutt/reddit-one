import React, { Component } from 'react';
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import Post from '../../components/Post'

const StyledSection = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 89vh;
  margin-top: 40px;
`

class Posts extends Component {
  render() { 
    return (
      <StyledDiv>
      {this.props.loading === true 
        ? <Loader type="Oval" color="orange" height={120} width={120} /> 
        : <StyledSection>
          {this.props.posts.map(item => ( <Post key={item.data.id} data={item.data} /> ))}
        </StyledSection>}
      </StyledDiv>
    )
  }
}

export default Posts