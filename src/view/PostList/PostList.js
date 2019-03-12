import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

import Post from 'components/PostList/Post'
import { StyledDiv, StyledSection } from 'components/PostList/Wrappers'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.props.history.listen(async () => {
      await console.log('history changed')
      // тут трабл, без верхнього рядку втикається на один пункт в історії
      await this.fetchReddit(this.props.match.url)
    })
  }

  fetchReddit(url) {
    console.log('fetch posts from posts', this.props)
    const fetchPosts = {
      '/': () => this.props.actions.fetchPosts('popular', 10),
      '/r/popular': () => this.props.actions.fetchPosts('popular', 10),
      '/r/all': () => this.props.actions.fetchPosts('all', 10),
      '/r/original': () => this.props.actions.fetchOriginalPosts(10)
    }

    return fetchPosts[url] ? fetchPosts[url]() : this.props.actions.fetchPosts('popular', 10)
  }

  async componentDidMount () {
    await this.fetchReddit(this.props.match.url)
    await console.log('Posts component did mount')
  }

  
  render() {
    return (
      <StyledDiv>
      {this.props.loading
        ? <Loader type="Oval" color="orange" height={120} width={120} /> 
        : <StyledSection>
            {this.props.posts.map(item => ( <Post key={item.data.id} data={item.data} /> ))}
          </StyledSection>}
      </StyledDiv>
    )
  }
}

export default PostList