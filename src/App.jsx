import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import LoginPage from './components/registration/LoginPage';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          {/* <Route path="/register" exact component={RegisterPage} /> */}
          <Redirect exact from="/" to="/dashboard/datavisualization" />
          <Redirect from="/dashboard" to="/dashboard/datavisualization" />
          <Route
            path="/dashboard/datavisualization"
            exact
            component={NotFound}
          />
          {/* <Route path="/dashboard/virtualsensor" exact component={VirtualSensorTab} /> */}
          {/* <Route path="/dashboard/performance" exact component={PerformanceTab} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
