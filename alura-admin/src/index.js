import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as request from './service/RestApi.js';



ReactDOM.render(<App />, document.getElementById('root'));


// request.setAuthor('Bruno Teste Post', 'am.bruno@live.com', 'x');
request.getAuthor();