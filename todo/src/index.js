import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import './scss/form.scss';
import './scss/table.scss';
import './scss/icons.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
