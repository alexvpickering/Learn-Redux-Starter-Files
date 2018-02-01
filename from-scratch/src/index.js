import React from 'react'
import { render } from 'react-dom'
import './styles/style.css'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Main from './components/Main.js'
import Single from './components/Single.js'
import PhotoGrid from './components/PhotoGrid.js'
import store, { history } from './store.js'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path='/' component={Main} />
        <Route exact path='/' component={PhotoGrid} />
        <Route path="/view/:postId" component={Single}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))
