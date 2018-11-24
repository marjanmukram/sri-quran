import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/MainNavbar';
import Home from './components/Home';
import Results from './components/Results';
import Chapters from './components/Chapters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:ln/:sw" component={Results} />
          <Route exact path="/chapters" component={Chapters} />
          <Route exact path="/chapters/:name/:id" component={Results} />
        </Switch>
      </div>
    );
  }
}

export default App;
