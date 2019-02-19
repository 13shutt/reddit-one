import React, { Component } from 'react'
import styled from 'styled-components'
import PostSingle from '../../components/Post/PostSingle'
import Comments from '../../components/Comments'

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 15vw 0 15vw;
`

class PostPage extends Component {

  async componentDidMount() {
    await fetch(`https://www.reddit.com${this.props.history.location.pathname}.json`)
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
        {/* SIDEBAR: subreddit title, rules, filter, footer */}

        {console.log(this.state)}

        {this.state === null 
          ? null 
          : <>
              <PostSingle data={this.state.post}/>
              <Comments data={this.state.comments.children} />
            </>
        }

      </StyledDiv>
    );
  }
}
 
export default PostPage