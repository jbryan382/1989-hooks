import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './components/MovieList'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={MovieList} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
