import Posts from './Posts'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
})

export default connect(mapStateToProps)(Posts)