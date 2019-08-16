import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './app.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();