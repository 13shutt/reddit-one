import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

function postsReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_POSTS_BEGIN:
    return {
      loading: true
    }

    case FETCH_POSTS_SUCCESS:
    console.log('success', action.payload.data.children)
    return {
      posts: action.payload.data.children,
      loading: false
    };

    case FETCH_POSTS_FAILURE:
    return {
      loading: false,
      error: '404 Posts Not Found'
    }

    default:
    return state;

  }
}

export default postsReducer;