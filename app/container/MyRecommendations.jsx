'use strict';

import React from 'react';
import {
	Col,
	FormGroup,
	FormControl,
	Button} from 'react-bootstrap';

import Recommended from './dashboard/Recommended.jsx';

class MyRecommendations extends React.Component {
	constructor(props){
		super(props);
		this.state={
			searchParameter:'',
			searchedMovie:'',
			movieList:{},
			isSearch: false
		};
		this.onHandleChange = this.onHandleChange.bind(this);
		this.getSearchedMovieList = this.getSearchedMovieList.bind(this);
	}

	onHandleChange(searchData){
		this.setState({
			searchParameter: searchData.target.value,
			isSearch: false
		});
	}

	getSearchedMovieList(searchedMovie){
		this.setState({
			searchedMovie: searchedMovie,
			isSearch: true
		});
	}

	render(){
		return (
			<Col xs={12}>
				<Col xs={12} id='dashboardHead'>
					<h3>Recommendations Movies</h3>
					<div>
			          Movie Search: <input type="search" value={this.state.searchParameter} placeholder="movie search"  onChange={(event)=>this.onHandleChange(event)}/>
			        <Button type="submit" onClick={this.getSearchedMovieList.bind(this, this.state.searchParameter)}>Submit</Button>
			        </div>
					<Recommended searchedMovie={this.state.searchedMovie} isSearch={this.state.isSearch}/>
				</Col>
			</Col>
		);
	}

}

export default MyRecommendations;