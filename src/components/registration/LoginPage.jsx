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
        <Grid
          item
          sm={6}
          style={{textAlign: 'center'}}
          className="aqua-bg text-white"
          container
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <h1 style={{fontSize: '70px'}}>[KAIROS]</h1>
          <h2
            style={{fontSize: '60px', letterSpacing: '7px', fontWeight: '300'}}
          >
            process
          </h2>
        </Grid>
        <LoginForm />
      </Grid>
    );
  }
}

export default Login;
