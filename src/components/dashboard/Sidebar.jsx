import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

// Styles
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ReactComponent as DataVisLogo} from '../../assets/dv.svg';
import {ReactComponent as VirtualSensorLogo} from '../../assets/vs.svg';
import {ReactComponent as PerformanceLogo} from '../../assets/perf.svg';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
  },
  toolbar: theme.mixins.toolbar,
  listItemRoot: {
    margin: '5px 0',
    height: '50px',
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 7,
    backgroundColor: theme.palette.secondary.dark,
    color: '#ffffff',
    fill: '#ffffff',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: `${theme.palette.secondary.dark} !important`,
      fill: `${theme.palette.secondary.dark} !important`,
    },
  },
  itemTextRoot: {
    padding: '0 0',
  },
  itemTextPrimary: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '0.9rem',
  },
});

class Sidebar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            key="1"
            component={NavLink}
            activeClassName="active"
            activeStyle={{
              color: '#2d2e30',
              backgroundColor: '#35afaf',
              fill: '#2d2e30',
            }}
            to="/dashboard/data_visualization"
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            <DataVisLogo
              style={{
                height: '22px',
                margin: '0 8px',
                color: 'inherit',
                fill: 'inherit',
              }}
            />
            Data Visualization
          </ListItem>
          <ListItem
            button
            key="2"
            component={NavLink}
            activeClassName="active"
            activeStyle={{
              color: '#2d2e30',
              backgroundColor: '#35afaf',
              fill: '#2d2e30',
            }}
            to="/dashboard/virtual_sensor"
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            <VirtualSensorLogo
              style={{
                height: '20px',
                margin: '0 4px',
                color: 'inherit',
                fill: 'inherit',
              }}
            />
            Virtual Sensor
          </ListItem>
          <ListItem
            button
            key="3"
            component={NavLink}
            activeClassName="active"
            activeStyle={{
              color: '#2d2e30',
              backgroundColor: '#35afaf',
              fill: '#2d2e30',
            }}
            to="/dashboard/performance"
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            <PerformanceLogo
              style={{
                height: '22px',
                margin: '0 8px',
                color: 'inherit',
                fill: 'inherit',
              }}
            />
            Performance
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
