import React, { Component } from 'react';
import Auth from '../auth/Auth';

class Callback extends Component<{location:any, auth:Auth}> {

  componentDidMount = () => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };

  render() {
  
    return (
      <>
        <h3> Loading... </h3>
      </>
    );
  }
}

export default Callback;