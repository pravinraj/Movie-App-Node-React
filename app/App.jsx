'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'react-bootstrap';
import {
	Grid,
	Row,
	Col,
	ButtonToolbar,
	ButtonGroup,
	Button } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Dashboard from './container/Dashboard.jsx';
import MyRecommendations from './container/MyRecommendations.jsx';




class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeClass:'',
			navTab:{
				dashboardTab: true,
				myRecommendationsTab: false
			},
			currentTabView: 'DASHBOARD'
		};
		this.routePath = this.routePath.bind(this);
	}

	routePath(path){
		this.setState({
			activeClass: path
		});
		//browserHistory.push('/my-path');
	}

	tabNav(tab){
		if(tab === 'DASHBOARD'){
			this.setState({
				navTab: {
					dashboardTab: true,
					myRecommendationsTab: false
				}
			});
		} else if(tab === 'MYRECOMMENDATIONS'){
			this.setState({
				navTab: {
					dashboardTab: false,
					myRecommendationsTab: true
				}
			});
		}
	}

	render() {
		return (
			<div>
				<Grid fluid={true}>
					<Row>
						<Col xs={12} className='movieAppContainer'>
							<div className='appHeader'>Movie App</div>
							<div>
								<Router>
									<div>
										<Col xs={7} xsOffset={4}>
											<ButtonToolbar>
												<ButtonGroup bsSize="medium" bsClass='movieAppRouting'>
													<Link to='/'>
														<Button 
															bsStyle={this.state.navTab.dashboardTab ? 'primary':'default'}
															onClick = {this.tabNav.bind(this,'DASHBOARD')}
															active={this.state.navTab.dashboardTab}>
															Dashboard
														</Button>
													</Link>
													<Link to='/my-recommendations'>
														<Button 
															bsStyle={this.state.navTab.myRecommendationsTab ? 'primary':'default'}
															onClick = {this.tabNav.bind(this,'MYRECOMMENDATIONS')}
															active={this.state.navTab.myRecommendationsTab}>
															MyRecommendation
														</Button>
													</Link>
												</ButtonGroup>
											</ButtonToolbar>
										</Col>
										<div>
											<Switch>
												<Route exact path='/'>
													<Dashboard/>
												</Route>
												<Route exact path='/my-recommendations'>
													<MyRecommendations/>
												</Route>
											</Switch>
										</div>
									</div>
								</Router>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;