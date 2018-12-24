import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';

import LoginPage from './components/registration/LoginPage';
import DataVisualizationTab from './components/dashboard/dataVisualization';
import VirtualSensorTab from './components/dashboard/virtualSensor';
import PerformanceTab from './components/dashboard/performance';
import NotFound from './components/NotFound';
import theme from './components/styles/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <>
            <Switch>
              <Route path="/login" exact component={LoginPage} />
              {/* <Route path="/register" exact component={RegisterPage} /> */}
              <Route
                path="/dashboard/data_visualization"
                exact
                component={DataVisualizationTab}
              />
              <Route
                path="/dashboard/virtual_sensor"
                exact
                component={VirtualSensorTab}
              />
              <Route
                path="/dashboard/performance"
                exact
                component={PerformanceTab}
              />
              <Redirect exact from="/" to="/dashboard/data_visualization" />
              <Redirect from="/dashboard" to="/dashboard/data_visualization" />
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
