'use strict';

import React from 'react';
import {
	Col,
	Thumbnail,
	Button,
	OverlayTrigger,
	Popover } from 'react-bootstrap';


const popoverBottom =(movieTitle)=> (
  <Popover id="popover-positioned-bottom" bsClass={'disableArrow popover'}>
    <p>{movieTitle}</p>
  </Popover>
);

const movieList=(movieData,index)=>{
	let isPopoverNeeded=false;
	if((movieData.title).length>10){
		isPopoverNeeded=true;	
	}
	let movieTitle = ((movieData.title).length>10) ? ((movieData.title).substring(0,10)+'...') : movieData.title;
	return (
		<Thumbnail src={'https://image.tmdb.org/t/p/w500/'+movieData.poster_path} alt="242x200" title={(movieData.overview)}>
			{(isPopoverNeeded)? (
				<OverlayTrigger
		          trigger={['click']} rootClose
		          placement='bottom'
		          overlay={popoverBottom(movieData.title)}
		        >
				<p className='movie-title movie-PopOver'>{movieTitle}</p>
				</OverlayTrigger>
			):(<p className='movie-title'>{movieTitle}</p>)}
			<p className='movie-rating'>{movieData.vote_average}</p>
		</Thumbnail>
	);	
}


const MovieList=(props)=>{
	return (
		<Col xs={12}>
			{props && props.firstSection && (
			<Col xs={12}>
				<div className='movieList'>
					{
						props.firstSection.map((value,index)=>{
							return (
								<Col key={index} xs={2} className='movie-card'>{movieList(value,index)}</Col>
							);
						})
					}
				</div>
			</Col>)}
			{props && props.secondSection && (
			<Col xs={12}>
				<div className='movieList'>
					{
						props.secondSection.map((value,index)=>{
							return (
								<Col key={index} xs={2} className='movie-card'>{movieList(value,index)}</Col>
							);
						})
					}
				</div>
			</Col>)}
			{props && props.thirdSection && (
			<Col xs={12}>
				<div className='movieList'>
					{
						props.thirdSection.map((value,index)=>{
							return (
								<Col key={index} xs={2} className='movie-card'>{movieList(value,index)}</Col>
							);
						})
					}
				</div>
			</Col>)}
			{props && props.fourthSection && (
			<Col xs={12}>
				<div className='movieList'>
					{
						props.fourthSection.map((value,index)=>{
							return (
								<Col key={index} xs={2} className='movie-card'>{movieList(value,index)}</Col>
							);
						})
					}
				</div>
			</Col>)}
		</Col>
	);
}

export default MovieList;