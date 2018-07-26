import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import './assets/css/styles.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
