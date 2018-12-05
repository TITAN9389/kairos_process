import React, {Component} from 'react';

// Styles
import Grid from '@material-ui/core/Grid';

import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item sm={6} style={{textAlign: 'center'}}>
          <h1>[KAIROS]</h1>
          <h2>process</h2>
        </Grid>
        <LoginForm />
      </Grid>
    );
  }
}

export default Login;
