import React from 'react'
import { render } from 'react-dom'
import './styles/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './components/Main.js'
import Single from './components/Single.js'
import PhotoGrid from './components/PhotoGrid.js'

render(
  <Router>
    <div>
      <Route path='/' component={Main} />
      <Route exact path='/' component={PhotoGrid} />
      <Route path="/view/:postId" component={Single}/>
    </div>
  </Router>,
  document.getElementById('root'))
