import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/index.js'
import comments from './data/comments.js'
import posts from './data/posts.js'


// create an object for the default data
const defaultState = {
  posts,
  comments
}

// browser history
export const history = createHistory()

// middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
 )

export default store
