import Posts from './Posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { fetchPosts, fetchOriginalPosts } from '../../store/Posts/actions'

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchPosts,
    fetchOriginalPosts
  }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))