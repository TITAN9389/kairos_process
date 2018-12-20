import React, {Component} from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';

import Dashboard from '../dashboard';
import data from './data_vis.json';

// Styles
import SelectField from '../form/selectField';
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
const options = {
  title: {
    text: 'PLOT',
  },
  visualMap: {
    min: 15202,
    max: 159980,
    dimension: 1,
    orient: 'vertical',
    right: 10,
    top: 'center',
    text: ['HIGH', 'LOW'],
    calculable: true,
    inRange: {
      color: ['#f2c31a', '#24b7f2'],
    },
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'cross',
    },
  },
  xAxis: [
    {
      type: 'value',
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'plot area',
      type: 'scatter',
      symbolSize: 5,
      // itemStyle: {
      //     normal: {
      //         borderWidth: 0.2,
      //         borderColor: '#fff'
      //     }
      // },
      data: JSON.parse(data.data),
    },
  ],
};

const optionsBar = {
  title: {
    text: '> Feature Importance',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['2011年'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: 'category',
    data: [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ],
  },
  series: [
    {
      name: 'c',
      type: 'bar',
      data: [
        18203,
        23489,
        29034,
        104970,
        131744,
        18203,
        23489,
        29034,
        104970,
        131744,
        630230,
        18203,
        18203,
        23489,
        29034,
        104970,
        131744,
        630230,
        18203,
        630230,
        18203,
      ],
    },
  ],
};

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
        <Paper className={this.props.classes.root} elevation={1}>
          <ReactEchartsCore
            echarts={echarts}
            option={options}
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
            option={options}
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
            option={options}
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
            option={optionsBar}
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
