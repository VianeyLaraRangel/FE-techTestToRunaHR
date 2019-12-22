import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Views/Home/index';
import Characters from './Views/Characters/index';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/characters" component={Characters}></Route>
    </Switch>
  </Router>
)

export default App;
