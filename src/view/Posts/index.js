import Posts from './Posts'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading
})

export default connect(mapStateToProps)(Posts)