import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div className="jh-app">
        <div className="jh-views">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );}

export default App;

// import awsconfig from './aws-exports';

/*
          <Switch>
            <Route exact path="/signout" component={Signout} />
          </Switch>
*/

