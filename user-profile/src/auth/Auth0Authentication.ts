import { UserProfile } from './../Model/UserProfile';
import { Auth0DecodedHash } from 'auth0-js';

/**
 * Auth0 authentication contract
 * @export
 * @interface Auth0Authentication
 */
export interface Auth0Authentication {
  /**
   * @property readonly
   * @type {boolean}
   * @memberof Auth0Authentication
   */
  readonly authenticated: boolean;

  /**
   * @property readonly
   * @type {string}
   * @memberof Auth0Authentication
   */
  readonly accessToken: string;

  /**
   * @property User profile
   * @type {UserProfile}
   * @memberof Auth0Authentication
   */
  readonly userProfile: UserProfile | null;
  /**
   * Start authentication session
   * @memberof Auth0Authentication
   */
  login(): void;
  /**
   * Consume authentication results
   * @memberof Auth0Authentication
   */
  handleAuthentication(): void;
  /**
   * Get user profile
   * @returns {Promise<UserProfile>}
   * @memberof Auth0Authentication
   */
  getProfile(): Promise<UserProfile>;
  /**
   * Callback for authentication session
   * @param {Auth0DecodedHash} authResult
   * @memberof AuthenticationManager
   */
  setSession(authResult: Auth0DecodedHash): void;
  /**
   * Destroy session
   * @memberof AuthenticationManager
   */
  logout(): void;
}
