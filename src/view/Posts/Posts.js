import React, { Component } from 'react';
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import Post from '../../components/Post/Post'

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
  constructor(props) {
    super(props)

    this.props.history.listen(() => {
      this.fetchReddit(this.props.match.url)
    })
  }

  fetchReddit(url) {
    switch (url) {
      case '/':
      this.props.actions.fetchPosts('popular', 10)
        break;
      case '/r/popular':
      this.props.actions.fetchPosts('popular', 10)
        break;
      case '/r/all':
      this.props.actions.fetchPosts('all', 10)
        break;
      case '/r/original':
      this.props.actions.fetchOriginalPosts('original', 10)
        break;
      default:
      this.props.actions.fetchPosts('popular', 10)
    }
  }

  componentDidMount() {
    this.fetchReddit(this.props.match.url)
    console.log('Posts component did mount')
  }

  
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