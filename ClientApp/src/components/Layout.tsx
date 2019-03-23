import React, { Component } from 'react';
import NavMenu  from './NavMenu';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withRoot from '../withRoot';


const styles = (theme:Theme) => createStyles({
    root: {
      display: 'flex',
    },
    
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 6,
      height: '100vh',
      overflow: 'auto',
    },
  
  });

class Layout extends Component<WithStyles<typeof styles>> {
  displayName = Layout.name

  render() {
    const { classes } = this.props;

    return (
            <div className={classes.root}>
                <NavMenu />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </div>
    );
  }
}

export default withRoot(withStyles(styles)(Layout));
