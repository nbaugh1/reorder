import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBarContainer from './containers/NavBarContainer';
import Home from './components/Home';
import NewItemContainer from './containers/NewItemContainer';
import ItemsContainer from './containers/ItemsContainer';
import ReviewOrderContainer from './containers/ReviewOrderContainer'
import OrderHistory from './components/OrderHistory'


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
            <Route exact path="/items/new" component={ NewItemContainer } />
            <Route exact path="/items" component={ ItemsContainer } />
            <Route exact path="/orders/new" component={ ReviewOrderContainer } />
            <Route exact path="/orders" component={ OrderHistory } />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
