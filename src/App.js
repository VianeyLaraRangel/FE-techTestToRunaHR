import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  <Router>
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/characters"></Route>
    </Switch>
  </Router>
}

export default App;
