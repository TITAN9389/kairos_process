import React, {Component} from 'react';

import Dashboard from '../dashboard';

// Styles
import SelectField from '../form/selectField';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const items = ['FM-1518808', 'FM-121212', 'FM-123128'];
class VirtualSensor extends Component {
  state = {
    modelName: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    return (
      <Dashboard>
        <div className="d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center">
            <Typography variant="h6" color="primary">
              SENSOR
            </Typography>
            <SelectField items={items} name="sensor" />
          </div>
          <div className="d-flex align-items-center">
            <Typography variant="h6" color="primary">
              TEST PERIOD
            </Typography>
            <SelectField
              label="Start"
              items={items}
              name="train_period_start"
            />
            <SelectField label="End" items={items} name="train_period_end" />
          </div>
          <div className="d-flex align-items-center">
            <Typography variant="h6" color="primary">
              MODEL NAME
            </Typography>
            <TextField
              onChange={this.handleChange('modelName')}
              value={this.state.modelName}
              style={{
                width: 150,
                backgroundColor: '#fff',
                height: '40px',
                margin: '0 5px',
              }}
              variant="outlined"
            />
          </div>
          <div className="d-flex align-items-center">
            <Button variant="contained" color="primary">
              Train
            </Button>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default VirtualSensor;
