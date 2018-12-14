import React, {Component} from 'react';

import Appbar from './Appbar';
import Sidebar from './Sidebar';

// Styles
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class Dashboard extends Component {
  render() {
    const {classes, children} = this.props;
    return (
      <div className={classes.root}>
        <Appbar />
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
