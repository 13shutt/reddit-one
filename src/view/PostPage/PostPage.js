import React, { Component } from 'react'

import PostSingle from '../../components/Post/PostSingle'
import Comments from '../../components/Comments'
import PostHeader from '../../components/PostHeader'
import { StyledBody, StyledDiv } from '../../components/PostPageWrappers'

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
      <>
        {this.state === null 
            ? null 
            : <StyledBody>
                <StyledDiv>
                  {console.log(this.props.history)}
                  <PostHeader ups={this.state.post.ups} title={this.state.post.title} goBack={this.props.history.goBack} />
                  <PostSingle data={this.state.post}/>
                  <Comments data={this.state.comments.children} />
                </StyledDiv>
              </StyledBody>
        } 
      </>
    );
  }
}
 
export default PostPage