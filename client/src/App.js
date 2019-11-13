import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import NavContainer from './containers/NavContainer';
// import Home from './components/Home';
// import { FromContainer } from './containers/FormContainer';
// import { ItemsListContainer } from './containers/ItemsListContainer';

class App extends Component {
  
  render() {
  
    return (
      <Router>
        {/* <NavContainer /> */}
        <div className="container">
          <Switch>
            {/* <Route exact path="/" component={ Home } />
            <Route exact path="/items/new" component={ FromContainer } />
            <Route exact path="/items" component={ ItemsListContainer } /> */}
            {/* <Route path="/lists" component={ ListsHistory } */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
