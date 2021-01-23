import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parse from 'parse';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log('process.env.NODE_ENV:',process.env.NODE_ENV)
Parse.initialize('myAppId');
Parse.serverURL =process.env.NODE_ENV==='production'?'http://23.95.222.176:1338/parse':'http://localhost:1338/parse';


//Here we create our store
//A store holds the whole state tree of the application

ReactDOM.render(
 
    <App />,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
