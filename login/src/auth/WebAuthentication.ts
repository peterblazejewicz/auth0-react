import { Auth0Authentication } from './Auth0Authentication';
import { Auth0DecodedHash, WebAuth } from 'auth0-js';

/**
 * Web based Auth0 authentication
 *
 * @export
 * @class WebAuthentication
 * @implements {Auth0Authentication}
 */
export class WebAuthentication implements Auth0Authentication {
  /**
   * @property
   * @private
   * @type {WebAuth}
   * @memberof WebAuthenticationManager
   */
  auth0: WebAuth;
  authenticated: boolean;
  login(): void {
    throw new Error('Method not implemented.');
  }
  handleAuthentication(): void {
    throw new Error('Method not implemented.');
  }
  setSession(authResult: Auth0DecodedHash): void {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
}
