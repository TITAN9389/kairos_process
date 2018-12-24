import React, {Component} from 'react';

// Styles
import {withStyles} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
    backgroundColor: '#fff',
    height: '40px',
  },
  label: {
    position: 'absolute',
    top: '-20px',
    left: '5px',
    fontSize: '14px',
  },
});

class SelectField extends Component {
  state = {
    sensor: 'FM-1518808',
    ref_model: 'FAT',
    rpm: '1500',
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {classes, items, name, label} = this.props;

    return (
      <FormControl variant="filled" className={classes.formControl}>
        {label && <span className={classes.label}>{label}</span>}
        <Select
          value={this.state[name]}
          onChange={this.handleChange}
          variant="filled"
          input={<OutlinedInput name={name} />}
        >
          {items.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectField);
