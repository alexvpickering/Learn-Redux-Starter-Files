import React from 'react'
import { render } from 'react-dom'
import './styles/style.css'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/App.js'
import store, { history } from './store.js'


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path='/' component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))
