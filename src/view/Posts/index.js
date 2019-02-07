import Posts from './Posts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading
})

export default withRouter(connect(mapStateToProps)(Posts))