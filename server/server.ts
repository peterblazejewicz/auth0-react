import expressJwtAuthz = require('express-jwt-authz');
import jwt = require('express-jwt');
import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import jwksRsa = require('jwks-rsa');
import cors = require('cors');
const express = require('express');
import morgan = require('morgan');

require('dotenv').config({
  path: '.env.local',
});
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

const app = express();

app.use(cors());
app.use(
  morgan(
    'API Request (port 3001): :method :url :status :response-time ms - :res[content-length]',
  ),
);
const checkJwt: RequestHandler = jwt({
  // Dynamically provide a signing key based
  // on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});
const checkScopes: RequestHandler = expressJwtAuthz(['read:messages']);

app.get('/api/public', function(req: Request, res: Response) {
  res.json({
    message:
      // tslint:disable-next-line:quotemark
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

app.get('/api/private', checkJwt, checkScopes, function(
  req: Request,
  res: Response,
) {
  res.json({
    message:
      'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.',
  });
});

app.listen(3001);
// tslint:disable-next-line:no-console
console.log(
  'Server listening on http://localhost:3001. The React app will be built and served at http://localhost:3000.',
);
