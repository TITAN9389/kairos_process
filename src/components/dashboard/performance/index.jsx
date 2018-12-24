import React, {Component} from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';

import Dashboard from '../index';
import data from '../perf.json';

// Styles
import SelectField from '../../form/selectField';
import DateField from '../../form/dateField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 35,
  },
});

const ref_items = ['FAT'];
const rpm_items = ['1500', '1900', '3000'];
const optionsScatter = {
  title: {
    text: '> Curva da bomba',
    left: 90,
    top: 0,
  },
  visualMap: {
    min: 152020000000,
    max: 1500000000000000,
    dimension: 1,
    orient: 'vertical',
    right: 5,
    top: 'center',
    text: ['HIGH', 'LOW'],
    // calculable: true,
    inRange: {
      color: ['cyan', 'purple'],
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
      data: JSON.parse(data.other_data),
    },
  ],
};

const optionsLine = {
  title: {
    text: '> Distancia ao FAT',
    left: 90,
    top: 0,
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [0, 230, 1000, 820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
};

class Performance extends Component {
  render() {
    return (
      <Dashboard>
        <div className="d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center">
            <Typography variant="h6" color="primary">
              REFERANCE MODEL
            </Typography>
            <SelectField items={ref_items} name="ref_model" />
          </div>
          <div className="d-flex align-items-center">
            <Typography variant="h6" color="primary">
              RPM
            </Typography>
            <SelectField items={rpm_items} name="rpm" />
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
            option={optionsScatter}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '450px'}}
            theme={'default'}
            onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
          <ReactEchartsCore
            echarts={echarts}
            option={optionsLine}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '450px'}}
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

export default withStyles(styles)(Performance);
