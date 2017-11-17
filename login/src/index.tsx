import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { WebAuthentication } from './auth/WebAuthentication';
import './index.css';

const auth = new WebAuthentication();

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" render={props => <App auth={auth} {...props} />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
