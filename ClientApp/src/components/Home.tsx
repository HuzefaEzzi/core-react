import React, { Component } from 'react';
import Auth from '../auth/Auth';
import { Button } from '@material-ui/core';

export class Home extends Component<{auth:Auth}> {
  displayName = Home.name
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in! 
                <br />
                <Button 
                  variant="contained" color="primary" 
                  onClick={this.logout.bind(this)}
                >Log out</Button>
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <Button 
                  variant="contained" color="primary" 
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button >
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}