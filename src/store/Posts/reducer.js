import { FETCH_POSTS_DATA } from './constants';

const initialState = {
  posts: []
};

function postsReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_POSTS_DATA:
    console.log('success', action.payload.data.children)
    return {
      posts: action.payload.data.children
    };

    default:
    return state;

  }
}

export default postsReducer;