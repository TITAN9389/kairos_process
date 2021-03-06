import React, {Component} from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';

import Dashboard from '../index';
import data from '../datamock.js';
// import data2 from '../data_vis.json';

// Styles
import SelectField from '../../form/selectField';
import DateField from '../../form/dateField';
import Typography from '@material-ui/core/Typography';
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
    // dimension: 0,
    // orient: 'horizontal',
    // inverse: true,
    right: 10,
    top: 'center',
    text: ['HIGH', 'LOW'],
    // calculable: true,
    inRange: {
      color: ['#cc342c', '#2735b2'],
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
      data,
    },
  ],
};
class DataVisualization extends Component {
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
              PERIOD
            </Typography>
            <DateField label="Start" name="period_start" />
            <DateField label="End" name="period_end" />
          </div>
        </div>
        <Paper className={this.props.classes.root} elevation={1}>
          <ReactEchartsCore
            echarts={echarts}
            option={options}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '800px'}}
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

export default withStyles(styles)(DataVisualization);
