import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import MovieInformation from './components/MovieInformation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();
