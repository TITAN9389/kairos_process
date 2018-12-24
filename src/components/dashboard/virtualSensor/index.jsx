import React, {Component} from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';

import Dashboard from '../index';
import {
  opt_measurement,
  opt_prediction,
  opt_error,
  opt_bar,
} from './plotOptions';

// Styles
import SelectField from '../../form/selectField';
import DateField from '../../form/dateField';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 35,
  },
});

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
            <DateField label="Start" name="train_period_start" />
            <DateField label="End" name="train_period_end" />
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
        <Paper className={this.props.classes.root} elevation={1}>
          <ReactEchartsCore
            echarts={echarts}
            option={opt_measurement}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '300px'}}
            theme={'default'}
            onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
          <ReactEchartsCore
            echarts={echarts}
            option={opt_prediction}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '300px'}}
            theme={'default'}
            onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
          <ReactEchartsCore
            echarts={echarts}
            option={opt_error}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '300px'}}
            theme={'default'}
            onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
        </Paper>
        <Paper className={this.props.classes.root} elevation={1}>
          <ReactEchartsCore
            echarts={echarts}
            option={opt_bar}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '600px'}}
            theme={'default'}
            onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
        </Paper>
      </Dashboard>
    );
  }
}

export default withStyles(styles)(VirtualSensor);
