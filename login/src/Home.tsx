import React, { Component } from 'react';
import { Auth0Authentication } from './auth/Auth0Authentication';
import autobind from 'autobind-decorator';

export interface HomeProps {
  auth: Auth0Authentication;
}
export class Home extends Component<HomeProps, {}> {
  @autobind
  login() {
    this.props.auth.login();
  }
  render() {
    const { authenticated } = this.props.auth;
    return (
      <div className="container">
        {authenticated && <h4>You are logged in!</h4>}
        {!authenticated && (
          <h4>
            You are not logged in! Please{' '}
            <a style={{ cursor: 'pointer' }} onClick={this.login}>
              Log In
            </a>{' '}
            to continue.
          </h4>
        )}
      </div>
    );
  }
}
