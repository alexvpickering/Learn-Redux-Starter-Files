import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore , routerReducer} from 'react-router-redux'
import { browserHistory } from 'react-router'

// import root reducer
import rootReducer from './reducers/index'

import comments from './src/data/comments.js'
import posts from './src/data/posts.js'


// create an object for the default data
const defaultState = {
  posts,
  comments
}

const store = createStore(
  combineReducers({
    rootReducer,
    routing: routerReducer
  }),
  defaultState
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
