import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes"
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
