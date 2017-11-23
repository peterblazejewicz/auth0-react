import autobind from 'autobind-decorator';
import axios from 'axios';
import React, { Component } from 'react';
import { API_URL } from '../../Model/constants';
import { Auth0Authentication } from '../../auth/Auth0Authentication';

export interface AdminProps {
  /**
   * @property
   * @type {Auth0Authentication}
   * @memberof AdminProps
   */
  auth: Auth0Authentication;
}

/**
 * State
 * @export
 * @interface AdminState
 */
export interface AdminState {
  /**
   * @propety
   * @type {string}
   * @memberof AdminState
   */
  message: string;
}

class Admin extends Component<AdminProps, AdminState> {
  state: AdminState = {
    message: '',
  };

  render() {
    const { message } = this.state;
    return (
      <div className="container">
        <h2>You are an Admin!</h2>
        <p>
          Only users who have a <code>scope</code> of{' '}
          <code>write:messages</code> in their <code>access_token</code> can see
          this area.
        </p>
        <hr />

        <h3>Call an Admin endpoint</h3>
        <button className="btn btn-primary" onClick={this.adminPing}>
          Post a Message
        </button>
        <h2>{message}</h2>
      </div>
    );
  }

  /**
   * @private
   * @memberof Admin
   */
  @autobind
  private adminPing() {
    const { accessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${accessToken}` };
    axios
      .post(`${API_URL}/admin`, {}, { headers })
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }
}

export default Admin;
