import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

// Styles
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
    backgroundColor: theme.palette.secondary.dark,
    '& $itemTextPrimary': {
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: `${theme.palette.secondary.dark} !important`,
    },
  },
  listItemSelected: {
    backgroundColor: theme.palette.primary.main,
  },
  itemTextRoot: {
    padding: '0 0',
  },
  itemTextPrimary: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '0.9rem',
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
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
            to="/dashboard/data_visualization"
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            {/* <ListItemIcon>-</ListItemIcon> */}
            <ListItemText
              classes={{
                root: classes.itemTextRoot,
                primary: classes.itemTextPrimary,
              }}
            >
              Data Visualization
            </ListItemText>
          </ListItem>
          <ListItem
            button
            key="2"
            component={NavLink}
            to="/dashboard/virtual_sensor"
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            {/* <ListItemIcon>-</ListItemIcon> */}
            <ListItemText
              classes={{
                root: classes.itemTextRoot,
                primary: classes.itemTextPrimary,
              }}
            >
              Virtual Sensor
            </ListItemText>
          </ListItem>
          <ListItem
            button
            key="3"
            component={NavLink}
            to="/dashboard/performance"
            classes={{
              root: classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
          >
            {/* <ListItemIcon>-</ListItemIcon> */}
            <ListItemText
              classes={{
                root: classes.itemTextRoot,
                primary: classes.itemTextPrimary,
              }}
            >
              Performance
            </ListItemText>
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
