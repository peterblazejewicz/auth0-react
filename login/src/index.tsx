import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './Routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<Routes />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
