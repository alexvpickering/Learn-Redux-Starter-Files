import React from 'react'
import { Link, Route } from 'react-router-dom'
import PhotoGrid from './PhotoGrid.js'
import Single from './Single.js'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store.js'

class Main extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
          <Route
            exact
            path='/'
            render={(routeProps) => (
              <PhotoGrid {...routeProps} {...this.props} />
            )}
          />
          <Route
            exact
            path='/view/:postId'
            render={(routeProps) => (
              <Single {...routeProps} {...this.props} />
            )}
          />
      </div>
    </ConnectedRouter>
    )

  }
}

export default Main
