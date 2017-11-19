import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './utils/Routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

render(<Routes />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
