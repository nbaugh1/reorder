import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBarContainer from './containers/NavBarContainer';
import Home from './components/Home';
import NewItemFormContainer from './containers/NewItemFormContainer';
import ItemsListContainer from './containers/ItemsListContainer';
import ReviewOrderContainer from './containers/ReviewOrderContainer'
class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <NavBarContainer />
          <br />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/items/new" component={ NewItemFormContainer } />
            <Route exact path="/items" component={ ItemsListContainer } />
            <Route exact path="/orders/new" component={ ReviewOrderContainer } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
