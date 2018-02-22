'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 

import './css/index.scss';

import App from './App.jsx';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';



ReactDOM.render(
	<App/>,
	document.getElementById('app')
);