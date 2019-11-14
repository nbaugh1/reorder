import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBarContainer from './containers/NavBarContainer';
import Home from './components/Home';
import Form from './components/NewItemForm';
import ItemsListContainer from './containers/ItemsListContainer';
import ReviewOrder from './components/ReviewOrder'

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
            <Route exact path="/items/new" component={ Form } />
            <Route exact path="/items" component={ ItemsListContainer } />
            <Route exact path="/orders/new" component={ ReviewOrder } />
            {/* <Route path="/orders" component={ ListsHistory } /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
