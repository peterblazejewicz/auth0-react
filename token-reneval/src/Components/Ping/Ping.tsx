import autobind from 'autobind-decorator';
import axios from 'axios';
import React, { Component } from 'react';
import { API_URL } from '../../Model/constants';
import { Auth0Authentication } from '../../auth/Auth0Authentication';

export interface PingProps {
  auth: Auth0Authentication;
}

/**
 * Contract for state
 * @export
 * @interface PingState
 */
export interface PingState {
  message: string;
}

/**
 * @public
 * @export
 * @class Ping
 * @extends {Component<PingProps, PingState>}
 */
export default class Ping extends Component<PingProps, PingState> {
  state: PingState = {
    message: '',
  };

  /**
   * @memberof Ping
   */
  @autobind
  ping() {
    axios
      .get(`${API_URL}/public`)
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  /**
   * @memberof Ping
   */
  @autobind
  securedPing() {
    const { accessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${accessToken}` };
    axios
      .get(`${API_URL}/private`, { headers })
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    const { authenticated } = this.props.auth;
    const { message } = this.state;
    return (
      <div className="container">
        <h1>Make a Call to the Server</h1>
        {!authenticated && (
          <p>Log in to call a private (secured) server endpoint.</p>
        )}
        <button className="btn btn-primary" onClick={this.ping}>
          Ping
        </button>{' '}
        {authenticated && (
          <button className="btn btn-primary" onClick={this.securedPing}>
            Call Private
          </button>
        )}
        <p>{message}</p>
      </div>
    );
  }
}
