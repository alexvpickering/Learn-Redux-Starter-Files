import React from 'react'
import { render } from 'react-dom'
import './styles/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './components/Main.js'

render(
  <Router>
    <Switch>
      <Route exact path='/' component={Main}/>
    </Switch>
  </Router>,
  document.getElementById('root'))
