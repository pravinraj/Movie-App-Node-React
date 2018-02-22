'use strict';

import React from 'react';
import {
	Col } from 'react-bootstrap';
//import  '../css/index.css';
import Trending from './dashboard/Trending.jsx';
import Upcoming from './dashboard/Upcoming.jsx';
import Recommended from './dashboard/Recommended.jsx';

class Dashboard extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Col xs={12}>
				<Col xs={12} id='trending'>
					<h3>Trending Movies</h3>
					<Trending/>
				</Col>
				<Col xs={12} id='forthcoming'>
					<h3>Forthcoming Movies</h3>
					<Upcoming/>
				</Col>
				<Col xs={12} id='dashboardHead'>
					<h3>Recommendations Movies</h3>
					<Recommended/>
				</Col>
			</Col>
		);
	}

}

export default Dashboard;