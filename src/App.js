import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/MainNavbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
