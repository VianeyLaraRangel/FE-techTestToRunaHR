import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Home, Characters} from './Views';

const App = () => {
  <Router>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/characters"><Characters/></Route>
    </Switch>
  </Router>
}

export default App;
