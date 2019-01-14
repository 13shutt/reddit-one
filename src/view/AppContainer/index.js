import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPostsData } from '../../store/Posts/actions'

import AppContainer from './AppContainer'

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchPostsData
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)