import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPosts, fetchOriginalPosts } from '../../store/Posts/actions'

import Routers from './Routers'

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading,
  error: state.postsReducer.error
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchPosts,
    fetchOriginalPosts
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Routers)