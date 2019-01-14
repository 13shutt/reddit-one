import { combineReducers } from 'redux'

import postsReducer from './Posts/reducer'

export default function createReducer() {
  return combineReducers({
    postsReducer
  })
}