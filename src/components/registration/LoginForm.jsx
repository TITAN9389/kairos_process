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
import Typography from '@material-ui/core/Typography';

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
        <h1
          style={{
            textAlign: 'center',
            fontWeight: '300',
            fontSize: '90px',
            color: '#9e9e9e',
            transform: 'scale(0.9,1.7)',
            marginBottom: '17px',
          }}
        >
          R<span style={{color: '#35afaf'}}>[IO]</span>
        </h1>
        <i />
        <h2
          style={{
            textAlign: 'center',
            fontWeight: '300',
            marginBottom: '150px',
            color: '#9e9e9e',
            fontSize: '40px',
          }}
        >
          analytics
        </h2>
        <form onSubmit={this.handleSubmit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Typography variant="body1" color="textSecondary">
              Welcome back! Please login to your account
            </Typography>
            <TextField
              id="username"
              label="Username"
              className={classes.textField}
              onChange={this.handleChange('username')}
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
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
              <Grid item xs={5}>
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
              <Grid item xs={5}>
                Forgot password ?
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  className={classes.button}
                  component={Link}
                  to="/dashboard"
                >
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
