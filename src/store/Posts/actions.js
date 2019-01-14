import { FETCH_POSTS_DATA } from './constants';
import { fetchPostsArray } from '../../api/reddit-api'

const fetchPostsData = (type, limit) => async dispatch => {
  dispatch({
    type: FETCH_POSTS_DATA,
    payload: await fetchPostsArray(type, limit)
  })
}

export { fetchPostsData }