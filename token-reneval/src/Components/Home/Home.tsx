import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import { Auth0Authentication } from '../../auth/Auth0Authentication';

export interface HomeProps {
  auth: Auth0Authentication;
}
export default class Home extends Component<HomeProps, {}> {
  @autobind
  login() {
    this.props.auth.login();
  }

  @autobind
  logout() {
    this.props.auth.logout();
  }

  render() {
    const { authenticated } = this.props.auth;
    return (
      <div className="jumbotron">
        {authenticated && (
          <div className="container">
            <h1 className="display-3">You are logged in!</h1>
            <p>
              <button className="btn btn-primary btn-lg" onClick={this.logout}>
                Log Out
              </button>
            </p>
            <h3>About Your Access Token</h3>
            <p>
              Your <code>access_token</code> has an expiry date of:{' '}
              {this.getExpiryDate()}
            </p>
            <p>
              The token has been scheduled for renewal using silent
              authentication, but you can also renew it manually from the navbar
              if you don't want to wait. This manual renewal button is really
              just for demonstration and you probably won't want such a control
              in your actual application.
            </p>
          </div>
        )}
        {!authenticated && (
          <div className="container">
            <h1 className="display-3">You are not logged in!</h1>
            <p>Please log in to continue.</p>
            <p>
              <button className="btn btn-primary btn-lg" onClick={this.login}>
                Log In
              </button>
            </p>
          </div>
        )}
      </div>
    );
  }

  /**
   * @returns stringified information about expiration date
   * @memberof Home
   */
  private getExpiryDate() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at')!);
    return JSON.stringify(new Date(expiresAt));
  }
}
