import data from '../data_vis.json';

export const opt_measurement = {
  title: {
    text: 'Measurement',
  },
  visualMap: {
    min: 15202,
    max: 159980,
    dimension: 1,
    orient: 'vertical',
    right: 10,
    top: 'center',
    // text: ['HIGH', 'LOW'],
    // calculable: true,
    inRange: {
      color: ['#1f6023'],
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

export const opt_prediction = {
  title: {
    text: 'Model prediction',
  },
  visualMap: {
    min: 15202,
    max: 159980,
    dimension: 1,
    orient: 'vertical',
    right: 10,
    top: 'center',
    // text: ['HIGH', 'LOW'],
    // calculable: true,
    inRange: {
      color: ['#2735b2'],
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

export const opt_error = {
  title: {
    text: 'Model error',
  },
  visualMap: {
    min: 15202,
    max: 159980,
    dimension: 1,
    orient: 'vertical',
    right: 10,
    top: 'center',
    // text: ['HIGH', 'LOW'],
    // calculable: true,
    inRange: {
      color: ['#cc342c'],
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

export const opt_bar = {
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
