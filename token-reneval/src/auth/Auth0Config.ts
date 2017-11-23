/**
 * Contract for Auth0 configuration file
 * @export
 * @interface Auth0Config
 */
export interface Auth0Config {
  /**
   * @property
   * @type {string}
   * @memberof Auth0Config
   */
  apiUrl: string;
  /**
   * @property
   * @type {string}
   * @memberof Auth0Config
   */
  domain: string;
  /**
   * @property
   * @type {string}
   * @memberof Auth0Config
   */
  clientId: string;
  /**
   * @property
   * @type {string}
   * @memberof Auth0Config
   */
  callbackUrl: string;
  /**
   * @property url that the Auth0 will redirect after
   * Auth with the Authorization Response
   * @type {string}
   * @memberof Auth0Config
   */
  silentAuthRedirect?: string;
}
