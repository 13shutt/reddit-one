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
  state = {
    post: [],
    comments: []
  }

  async componentDidMount() {
    const postURL = `https://www.reddit.com${this.props.history.location.pathname}.json`
    await fetch(postURL)
      .then(res => res.json())
      .then(data => this.setState({
        post: data[0].data.children[0].data,
        comments: data[1].data
      }))
    await console.log(this.state)
  }

  render() { 
    return (
      <StyledDiv>
        this is post page
      </StyledDiv>
    );
  }
}
 
export default PostPage