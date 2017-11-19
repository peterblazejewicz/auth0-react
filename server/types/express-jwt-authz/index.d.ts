declare module 'express-jwt-authz' {
  import { Response, Request, NextFunction } from 'express';
  import { RequestHandler } from 'express-serve-static-core';
  /**
   *
   *
   * @param {string[]} expectedScopes
   */
  function expressJwtAuthz(
    expectedScopes: string[],
  ): (req: Request, res: Response, next: NextFunction) => RequestHandler;

  export = expressJwtAuthz;
}
