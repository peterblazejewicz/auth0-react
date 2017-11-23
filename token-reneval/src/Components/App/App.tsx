import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import { Auth0Authentication } from '../../auth/Auth0Authentication';
import { NavLink } from 'react-router-dom';
import './App.css';

export interface AppProps {
  auth: Auth0Authentication;
}
class App extends Component<AppProps, {}> {
  @autobind
  login() {
    this.props.auth.login();
  }

  @autobind
  logout() {
    this.props.auth.logout();
  }

  @autobind
  renewToken() {
    this.props.auth.renewToken();
  }

  render() {
    const { authenticated, userHasScopes } = this.props.auth;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Auth0 - React
        </NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          {authenticated && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/profile"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
          )}
          {authenticated && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/ping" activeClassName="active">
                Ping
              </NavLink>
            </li>
          )}
          {authenticated &&
            userHasScopes(['write:messages']) && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin"
                  activeClassName="active"
                >
                  Admin
                </NavLink>
              </li>
            )}
        </ul>
        <ul className="navbar-nav ml-auto">
          {!authenticated && (
            <li className="nav-item">
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
                onClick={this.login}
              >
                Log In
              </button>
            </li>
          )}
          {authenticated && (
            <li className="nav-item">
              <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
                onClick={this.renewToken}
              >
                Renew Token
              </button>
            </li>
          )}
          {authenticated && (
            <li className="nav-item">
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
                onClick={this.logout}
              >
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default App;
