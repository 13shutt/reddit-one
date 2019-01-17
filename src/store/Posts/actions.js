import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';
import { fetchPostsURL } from '../../api/reddit-api'

const fetchPosts = (type, limit) => dispatch => {
  dispatch(fetchPostsBegin());
  return fetch(fetchPostsURL(type, limit))
  .then(handleErrors)
  .then(res => res.json())
  .then(json => {
    dispatch(fetchPostsSuccess(json.data));
    return json;
  })
  .catch(error => dispatch(fetchPostsFailure(error)));
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
})

const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { data }
})

const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE
})

export { fetchPosts }