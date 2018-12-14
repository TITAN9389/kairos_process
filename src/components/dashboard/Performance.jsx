import React, {Component} from 'react';

import Dashboard from '../dashboard';

// Styles
import SelectField from '../form/selectField';
import Typography from '@material-ui/core/Typography';

const items = ['FM-1518808', 'FM-121212', 'FM-123128'];
class Performance extends Component {
  render() {
    return (
      <Dashboard>
        <div className="d-flex align-items-center">
          <Typography variant="h6" color="primary">
            REFERANCE MODEL
          </Typography>
          <SelectField items={items} name="ref_model" />
          <div style={{width: '150px'}} />
          <Typography variant="h6" color="primary">
            RPM
          </Typography>
          <SelectField items={items} name="rpm" />
          <div style={{width: '150px'}} />
          <Typography variant="h6" color="primary">
            PERIOD
          </Typography>
          <SelectField label="Start" items={items} name="period_start" />
          <SelectField label="End" items={items} name="period_end" />
        </div>
      </Dashboard>
    );
  }
}

export default Performance;
