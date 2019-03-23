import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import  FetchData  from './components/FetchData';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withRoot from './withRoot';

const styles = (theme:Theme) => createStyles({
  
  
  });
class App extends Component<WithStyles<typeof styles>>  {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(App));
