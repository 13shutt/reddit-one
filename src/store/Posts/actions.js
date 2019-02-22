import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';
import { fetchPostsURL, fetchOriginalPostsURL } from '../../api/reddit-api'
import { Fetcher } from 'api/Fetcher'

// const fetchPosts = (type, limit) => dispatch => {
//   dispatch(fetchPostsBegin());
//   return fetch(fetchPostsURL(type, limit))
//   .then(handleErrors)
//   .then(res => res.json())
//   .then(json => {
//     dispatch(fetchPostsSuccess(json.data));
//     return json;
//   })
//   .catch(error => dispatch(fetchPostsFailure(error)));
// }

const fetchPosts = (type, limit) => dispatch => {
  dispatch(fetchPostsBegin());
  return Fetcher.get(fetchPostsURL(type, limit))
  .then(json => dispatch(fetchPostsSuccess(json.data)))
  .catch(error => dispatch(fetchPostsFailure(error)));
}

// const fetchOriginalPosts = (limit) => dispatch => {
//   dispatch(fetchPostsBegin());
//   return fetch(fetchOriginalPostsURL(limit))
//   .then(handleErrors)
//   .then(res => res.json())
//   .then(json => {
//     dispatch(fetchPostsSuccess(json.data));
//     return json;
//   })
//   .catch(error => dispatch(fetchPostsFailure(error)));
// }

const fetchOriginalPosts = (limit) => dispatch => {
  dispatch(fetchPostsBegin());
  return Fetcher.get(fetchOriginalPostsURL(limit))
  .then(json => dispatch(fetchPostsSuccess(json.data)))
  .catch(error => dispatch(fetchPostsFailure(error)));
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

export { fetchPosts, fetchOriginalPosts }