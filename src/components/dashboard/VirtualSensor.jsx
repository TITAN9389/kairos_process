import React, {Component} from 'react';

import Dashboard from '../dashboard';

// Styles
import SelectField from '../form/selectField';
import Typography from '@material-ui/core/Typography';

const items = ['FM-1518808', 'FM-121212', 'FM-123128'];
class VirtualSensor extends Component {
  render() {
    return (
      <Dashboard>
        <div className="d-flex align-items-center">
          <Typography variant="h6" color="primary">
            SENSOR
          </Typography>
          <SelectField items={items} name="sensor" />
          <div style={{width: '150px'}} />
          <Typography variant="h6" color="primary">
            TRAINING PERIOD
          </Typography>
          <SelectField label="Start" items={items} name="train_period_start" />
          <SelectField label="End" items={items} name="train_period_end" />
          <div style={{width: '150px'}} />
          <Typography variant="h6" color="primary">
            TEST PERIOD
          </Typography>
          <SelectField label="Start" items={items} name="test_period_start" />
          <SelectField label="End" items={items} name="test_period_end" />
        </div>
      </Dashboard>
    );
  }
}

export default VirtualSensor;
