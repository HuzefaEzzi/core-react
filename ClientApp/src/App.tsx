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
import Auth from './auth/Auth';
import history from './history';
import Callback from './components/Callback';

const styles = (theme:Theme) => createStyles({ });//todo remove

const auth = new Auth();

const handleAuthentication = (prop: any) => {
  
  if (/access_token|id_token|error/.test(prop.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component<WithStyles<typeof styles>>  {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(App));
