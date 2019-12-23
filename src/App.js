import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Views/Home/index';
import Characters from './Views/Characters/index';

const App = () => (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/characters" component={Characters}></Route>
      </Switch>
    </Router>
)

export default App;
