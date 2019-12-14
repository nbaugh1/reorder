import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NavBarContainer from './containers/NavBarContainer';
import Home from './components/Home';
import NewItemContainer from './containers/NewItemContainer';
import ItemsContainer from './containers/ItemsContainer';
import ReviewOrderContainer from './containers/ReviewOrderContainer'
import OrderHistoryContainer from './containers/OrderHistoryContainer'
import OrderShow from './components/OrderShow'
import './style/App.css'

class App extends Component {
  render() {
    
    return (
      <Router>
        <Container>
          <NavBarContainer />
          <br />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/items/new" component={ NewItemContainer } />
            <Route exact path="/items" component={ ItemsContainer } />
            <Route exact path="/orders/new" component={ ReviewOrderContainer } />
            <Route exact path="/orders" component={ OrderHistoryContainer } />
            <Route exact path="/orders/:id" component={ OrderShow } />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
