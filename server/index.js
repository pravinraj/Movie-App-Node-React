'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const request = require('request');
const session = require('express-session')

const config = require('../config/config.json');
var recommendedData;

const app = express();
app.use(express.static(path.join(__dirname, '../app')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/movie-app/trending-movies', (req, res)=> {
	let urlPath = config.moviedbHost+''+config.popularMovieURL,
	  queryData = req.query;
	  queryData.api_key=config.apiKey;
	  queryData.language = config.language;
	getMoviesList(urlPath,queryData,(err,body)=>{
		let result = {
			result: body
		};
		res.json(result);
	});  
});

app.get('/movie-app/upcoming-movies', (req, res)=> {
	let urlPath = config.moviedbHost+''+config.upcomingMovieURL,
	  queryData = req.query;
	  queryData.api_key=config.apiKey;
	  queryData.language = config.language;
	getMoviesList(urlPath,queryData,(err,body)=>{
		let result = {
			result: body
		};
		res.json(result);
	});  
});

app.get('/movie-app/recommended-movies', (req, res)=> {
	let urlPath = config.moviedbHost+''+config.recommendationMovieURL,
	  queryData = req.query;
	  queryData.api_key=config.apiKey;
	  queryData.language = config.language;
	getMoviesList(urlPath,queryData,(err,body)=>{
		let result = {
			result: body
		};
		req.session.recommendedMovies=result;
		recommendedData = result;
		res.json(result);
	});  
});

app.get('/movie-app/recommendedSearch', (req,res)=>{
	let movieData =[];
	let movieIndex=0, movieLength=recommendedData.result.results.length;
	let recommendedDataList = recommendedData.result.results;
	let regexStr = new RegExp(req.query.movieName,'i');
	for(movieIndex=0;movieIndex<movieLength;movieIndex++){
		let searchResult = (recommendedDataList[movieIndex].title).search(regexStr);
		if(searchResult !== -1){
			movieData.push(recommendedDataList[movieIndex]);
		}
	}
	let result = {
		result: {
			page: recommendedData.result.page,
			total_pages:recommendedData.result.total_pages,
			results: movieData
		}
	};
	res.json(result);
});
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

app.listen(process.env.PORT || 3000);

let getMoviesList=(path, queryData,callback)=>{
	let options = {
		url: path,
		qs: queryData
	};
	request.get(options,(err, response, body)=> {
		if(err){
			callback(err,null);
		} else {
			callback(null,JSON.parse(body));
		}
	})
}