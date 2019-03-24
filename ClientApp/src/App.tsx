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
import Callback from './components/Callback';
import SecretFetchData from './components/SecretFetchData';

const styles = (theme:Theme) => createStyles({ });//todo remove



class App extends Component<{history:History}>  {
  auth: Auth;
  constructor(prop: Readonly<{history:History}>){
    super(prop);  
    this.auth = new Auth(this.props.history);//todo fix
          
  }
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route exact path="/" render={(props) => <Home auth={this.auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          return <Callback auth = {this.auth} {...props} /> 
        }}/>

        <Route path="/secretfetchdata" render={(props) => {
          if  (this.auth.isAuthenticated())
            return <SecretFetchData auth = {this.auth} {...props} /> 
          else
            this.auth.login()
        }}/>

       
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(App));
