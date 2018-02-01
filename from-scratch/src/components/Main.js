import React from 'react'
import { Link, Route } from 'react-router-dom'
import PhotoGrid from './PhotoGrid.js'
import Single from './Single.js'

class Main extends React.Component {
  render() {
    return (
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
        <Route path="/view/:postId" component={Single}/>
      </div>
    )

  }
}

export default Main
