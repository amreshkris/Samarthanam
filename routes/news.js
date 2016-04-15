var express = require('express');
var news = express.Router();
var http = require('http');
var https = require('https');
var apicache = require('apicache').options({ debug: true }).middleware;
var fs = require('fs');
require('sugar');
var mocknews = fs.readFileSync('././public/javascripts/mocknews.json', 'utf8');

var newsData = [];
var finalMockNews = {};
var mocknewsarticles = [];

news.get('/api/v1/news', apicache('24 hour'), function(req,res,next){
	//http://jsonplaceholder.typicode.com/posts/1
	//https://webhose.io/search?token=b6222a4f-f70c-4adb-861c-42eb7244ab0b&format=json&q=WBCC%20OR%20%22blind%20cricket%22	
	http.get('http://jsonplaceholder.typicode.com/posts/1',function(newsResult){
		
		console.log('calling news');
		newsResult.on('data',function (data){			
			newsData += data;
		});
		newsResult.on('end',function (data){
			var finalnews = mockNewsParser(mocknews);
			//res.json(JSON.parse(mocknews));
			res.json(finalnews);
		});
		newsResult.on('error',function (data){z
			console.log(data.message);
		});
	});	
	
});


function mockNewsParser(mocknews){
	var mocknews = JSON.parse(mocknews);
	var mockposts = mocknews.posts;
	for (var index = 0; index < mocknews.posts.length; index++) {
		var element = mockposts[index].text;
		mocknewsarticles.push({
			"news" : mockposts[index].text.truncateOnWord(250),
			"author" :  mockposts[index].author				
		});		
		console.log(element);
	}
	finalMockNews.news = mocknewsarticles;
	return finalMockNews;
}

module.exports = news;