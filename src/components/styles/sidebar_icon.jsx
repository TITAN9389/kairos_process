import styled from 'styled-components';

import dv from '../../assets/data_branco.png';
import vs from '../../assets/virtual_sensor_branco.png';
import perf from '../../assets/performance_branco.png';

export default styled.i`
  display: block;
  height: 45px;
  width: 45px;
  color: #fff;
  background: ${props => {
    switch (props.icon) {
      case 'dv':
        return `url(${dv})`;
      case 'vs':
        return `url(${vs})`;
      case 'perf':
        return `url(${perf})`;
      default:
        return '';
    }
  }};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
