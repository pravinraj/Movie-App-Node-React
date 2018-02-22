'use strict';

import React from 'react';
import {
	Col,
	Pagination } from 'react-bootstrap';
import {getRequest} from '../../lib/request';
import {getSectionsData} from '../../lib/sectionBuilder';
import MovieList from '../../component/MovieList.jsx';	


class Trending extends React.Component{
	constructor(props){
		super(props);
		this.state={
			page: 1,
			section:{},
			isDataAvailable: false,
			lastPage:1,
			isError: false
		};
		this.handleSelect = this.handleSelect.bind(this);
		this.getServiceData = this.getServiceData.bind(this);
	}

	handleSelect(eventKey) {
	    this.setState({
	    	isDataAvailable: false
	    });
	    let queryData = {
			page: eventKey
		}
		this.getServiceData(queryData,eventKey);
  	}

  	getServiceData(queryData,page){
  		getRequest('/movie-app/trending-movies',queryData,(err,response)=>{
			if(err){
				this.setState({
					isError:true
				});
			} else {
				let trendingMovies = response.data.result,
					trendingSection = getSectionsData(trendingMovies);
				this.setState({
					page: page,
					section: trendingSection,
					isDataAvailable: true,
					lastPage: trendingMovies.total_pages
				});
			}
		});
  	}

	componentDidMount(){
		let queryData = {
			page: this.state.page
		}
		this.getServiceData(queryData, this.state.page);
	}

	render(){
		let maxButtons = 5;
		if((this.state.page+5)> this.state.lastPage){
			let pageDiff = this.state.lastPage -this.state.page;
			maxButtons = ((pageDiff>5) || (pageDiff===0)) ? 5 : pageDiff;
		}
		return (
			<Col xs={12}>
				{this.state.isError ? (<div>Unable to load data</div>) :
					(this.state.isDataAvailable ? (
					<div>
						<MovieList {...this.state.section}/>
						<Col xs={12}>
						<Pagination
					        prev={true}
					        next={true}
					        first={true}
					        last={true}
					        ellipsis={true}
					        boundaryLinks={true}
					        items={this.state.lastPage}
					        maxButtons={maxButtons}
					        activePage={this.state.page}
					        onSelect={this.handleSelect}
					        className = 'moviePagination'					        
					      />
					      </Col>
				     </div>
				):(<div className='loadingPage'><img src='../../img/loader.gif'/></div>))}	
			</Col>
		);
	}
}

export default Trending;