import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 150,
    maxWidth: 175,
    height: '40px',
    backgroundColor: '#fff',
  },
  labelRoot: {
    color: theme.palette.secondary.main,
  },
  label: {
    position: 'absolute',
    top: '-15px',
    left: '-15px',
    fontSize: '18px',
  },
});

const DatePickers = ({classes, label, name}) => (
  <TextField
    id={name}
    label={<span className={classes.label}>{label}</span>}
    name={name}
    type="date"
    variant="outlined"
    defaultValue="2018-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
      classes: {root: classes.labelRoot},
    }}
  />
);

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
