import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Styles
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  button: {
    marginTop: theme.spacing.unit,
    width: 175,
  },
});

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: true,
  };

  handleSubmit = () => alert('Submited');

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleCheckbox = name => event => {
    this.setState({[name]: event.target.checked});
  };

  handleShowPassword = () => {
    this.setState(state => ({showPassword: !state.showPassword}));
  };

  render() {
    const {classes} = this.props;
    return (
      <Grid item xs={12} sm={6}>
        <h1 style={{textAlign: 'center'}}>R[IO]</h1>
        <h2 style={{textAlign: 'center'}}>analytics</h2>
        <form onSubmit={this.handleSubmit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <p>Welcome back! Please login to your account</p>
            <TextField
              id="username"
              label="Username"
              //   defaultValue="Default Value"
              className={classes.textField}
              //   helperText="Some important text"
              onChange={this.handleChange('username')}
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              //   autoComplete="current-password"
              onChange={this.handleChange('password')}
              margin="normal"
            />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              alignContent="center"
              style={{maxWidth: 400}}
            >
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.rembember}
                      onChange={this.handleCheckbox('rememberMe')}
                      value="rememberMe"
                      color="default"
                    />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid item xs={6}>
                Forgot password ?
              </Grid>
              <Grid item xs={5}>
                <Button variant="contained" className={classes.button}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/register"
                  className={classes.button}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
