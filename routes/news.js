var express = require('express');
var news = express.Router();
var http = require('http');
var https = require('https');
var apicache = require('apicache').options({ debug: true }).middleware;
var fs = require('fs');
require('sugar');
var mocknews = {
  "posts": [
    {
      "thread": {
        "uuid": "1c4066da8435b971d2f5c466ed620b247826d7ee",
        "url": "http://omgili.com/r/jHIAmI4hxg9M3_9mwps5a_4usKZva2zYpH.UcV8kntWWKK_6Rn5Wjw.1zDh2qQ8uwBV07XlgtMERZ.Q4eUGxIX585ul11ufGYurWXqMu6TZ6IesTL4A.iwms1lexviFA",
        "site_full": "www.islandcricket.lk",
        "site": "islandcricket.lk",
        "site_section": "http://www.islandcricket.lk/rss.xml",
        "section_title": "Island Cricket - Home of the Sri Lanka Cricket Fan",
        "title": "Razzaq to assist Sri Lanka blind cricket team",
        "title_full": "Razzaq to assist Sri Lanka blind cricket team",
        "published": "2016-04-11T22:43:00.000+03:00",
        "replies_count": 0,
        "participants_count": 1,
        "site_type": "news",
        "country": "US",
        "spam_score": 0.0,
        "main_image": "http://www.islandcricket.lk/sites/default/files/newsthumb/l_111893_061825_updates1.jpg",
        "performance_score": 0,
        "domain_rank": null
      },
      "uuid": "1c4066da8435b971d2f5c466ed620b247826d7ee",
      "url": "http://omgili.com/r/jHIAmI4hxg9M3_9mwps5a_4usKZva2zYpH.UcV8kntWWKK_6Rn5Wjw.1zDh2qQ8uwBV07XlgtMERZ.Q4eUGxIX585ul11ufGYurWXqMu6TZ6IesTL4A.iwms1lexviFA",
      "ord_in_thread": 0,
      "author": "Short-Leg",
      "published": "2016-04-11T22:43:00.000+03:00",
      "title": "Razzaq to assist Sri Lanka blind cricket team",
      "text": "Razzaq to assist Sri Lanka blind cricket team Submitted by Short-Leg on April 11, 2016 - 15:43 Former Pakistan Blind Cricket team captain Abdul Razzaq will assist the visually impaired players of Sri Lanka for the T20 World Cup of the Blind, scheduled to be held in India in November. Pakistan Blind Cricket Council Chairman said the Sri Lanka team had asked them to provide the services...",
      "highlightText": "",
      "highlightTitle": "",
      "language": "english",
      "external_links": [],
      "persons": [
        "Abdul Razzaq",
        "Razzaq"
      ],
      "locations": [
        "Pakistan",
        "Sri Lanka",
        "India"
      ],
      "organizations": [
        "Pakistan Blind Cricket Council"
      ],
      "crawled": "2016-04-12T19:57:08.053+03:00"
    },
    {
      "thread": {
        "uuid": "545ce697c85b0adbee118b316135babfdbbb3822",
        "url": "http://omgili.com/r/.0rSU5LtMgzTSd1ewpNe2bALYMp76coxEtbVzc1QYEye4rEA7cLcE.W3IlUkXPAMkIZQCzuHSttDpY7qdI7fvK7ENp1yIQQHgRlsbmE4NCO28qfxye0PIw--",
        "site_full": "forums.e-democracy.org",
        "site": "e-democracy.org",
        "site_section": "http://forums.e-democracy.org/s/search.atom",
        "section_title": "All topics: E-Democracy.org",
        "title": "WBCC Land Use Committe Meeting Tonight",
        "title_full": "WBCC Land Use Committe Meeting Tonight",
        "published": "2016-04-13T01:32:00.000+03:00",
        "replies_count": 0,
        "participants_count": 1,
        "site_type": "discussions",
        "country": "US",
        "spam_score": 0.0,
        "main_image": "",
        "performance_score": 0,
        "domain_rank": null
      },
      "uuid": "545ce697c85b0adbee118b316135babfdbbb3822",
      "url": "http://omgili.com/r/.0rSU5LtMgzTSd1ewpNe2bALYMp76coxEtbVzc1QYEye4rEA7cLcE.W3IlUkXPAMkIZQCzuHSttDpY7qdI7fvK7ENp1yIQQHgRlsbmE4NCO28qfxye0PIw--",
      "ord_in_thread": 0,
      "author": "Nichole Buehler",
      "published": "2016-04-13T01:32:00.000+03:00",
      "title": "WBCC Land Use Committe Meeting Tonight",
      "text": "-MnDot is planning work for 94 (as part of their new 50 year visioning process) -We don't currently know what their plans are. Rumor has it, adding an additional lane has been proposed. (One big possible concern: Could this result in the loss of homes in Riverside Park?) -Need to set up a meeting with MnDot. -Days/times that would work for people interested in attending the meeting? -Seward would like to work together with us on this issue, and would like to see better street connections between our two neighborhoods come out of any possible 94 reconstruction. As you can see, we're confronting some serious land use issues, which are going to require us to get serious about organizing if we hope to guide development toward an outcome favorable to our community. Please, if you have the time, attend the meeting tonight.",
      "highlightText": "",
      "highlightTitle": "",
      "language": "english",
      "external_links": [],
      "persons": [],
      "locations": [],
      "organizations": [],
      "crawled": "2016-04-13T01:41:58.534+03:00"
    },
    {
      "thread": {
        "uuid": "d32937232f72a3324f481d509dd49b54547e32dd",
        "url": "http://omgili.com/r/jHIAmI4hxg8eostYkdHGKIg8zu_gCfaQYabf6JUe1IHWZ85Cb_7xDXrVubg.dUcF9zPEE7aii0Lw8fNMJk5U.o3T1BfVEW1txei2RfPYe9k-",
        "site_full": "www.sunlive.co.nz",
        "site": "sunlive.co.nz",
        "site_section": "",
        "section_title": "",
        "title": "SunLive - Disability games' volunteers sought - The Bay's News First",
        "title_full": "SunLive - Disability games' volunteers sought - The Bay's News First",
        "published": "2016-04-13T03:00:00.000+03:00",
        "replies_count": 0,
        "participants_count": 0,
        "site_type": "news",
        "country": "AU",
        "spam_score": 0.0,
        "main_image": "http://www.sunlive.co.nz/assets/images/site/160411-disability-sport.jpg",
        "performance_score": 0,
        "domain_rank": null
      },
      "uuid": "d32937232f72a3324f481d509dd49b54547e32dd",
      "url": "http://omgili.com/r/jHIAmI4hxg8eostYkdHGKIg8zu_gCfaQYabf6JUe1IHWZ85Cb_7xDXrVubg.dUcF9zPEE7aii0Lw8fNMJk5U.o3T1BfVEW1txei2RfPYe9k-",
      "ord_in_thread": 0,
      "author": "",
      "published": "2016-04-13T03:00:00.000+03:00",
      "title": "SunLive - Disability games' volunteers sought - The Bay's News First",
      "text": "Disability games' volunteers sought Posted at 1:22pm Wednesday 13 Apr, 2016 \nThe Halberg Disability Sport Foundation is looking for volunteers to assist at the Halberg Junior Disability Games - a national, three day sports competition taking place from April 22-24 at St Peter's School in Cambridge. \nThe Halberg Junior Disability Games is open to eight to 21-year-olds with a physical disability or visual impairment. \nDanielle Paul (Team Waikato) competing in a race at the 2015 Halberg Junior Disability Games. Photo: Supplied. \nAthletes compete in regional teams across 19 sports including athletics, blind cricket, rowing, boccia, goalball and wheelchair basketball. \nVolunteers are required at the games for one or all of the three days, assisting with sports events and with co-ordinating the athletes, teams and accommodation. \nMore than 100 athletes are expected to attend the sports festival style event which includes an opening ceremony at the Avantidrome followed by three days of sports, fun and competition. \nFor further information visit www.juniordisabilitygames.org.nz or email to register interest as a volunteer. ",
      "highlightText": "",
      "highlightTitle": "",
      "language": "english",
      "external_links": [],
      "persons": [
        "Danielle Paul"
      ],
      "locations": [
        "Cambridge"
      ],
      "organizations": [
        "St Peter's School",
        "Halberg Disability Sport Foundation",
        "Bay's News First Disability",
        "Team Waikato"
      ],
      "crawled": "2016-04-13T06:03:25.028+03:00"
    },
    {
      "thread": {
        "uuid": "2dd89c306830f30bc619c32826a0ef4ad987724f",
        "url": "http://omgili.com/r/.wHSUbtEfZQ2F8au4ugZad_J4qnGXapSq6wIcdeP6Mli1sB2BGWmcUlxySB7KfPI9TuoMV_QEjiShv31Be3m9kH71ZzsjvQ9pY07ofbvHOUoenj2bXKjLY6VjxE95Ib4",
        "site_full": "www.reddit.com",
        "site": "reddit.com",
        "site_section": "https://www.reddit.com/r/gifs/",
        "section_title": ".gifs - funny, animated gifs for your viewing pleasure",
        "title": "Blind Boy Throws Perfect First Pitch",
        "title_full": "Blind Boy Throws Perfect First Pitch : gifs",
        "published": "2016-04-13T02:19:00.000+03:00",
        "replies_count": 191,
        "participants_count": 191,
        "site_type": "discussions",
        "country": "US",
        "spam_score": 0.0,
        "main_image": "",
        "performance_score": 0,
        "domain_rank": 33
      },
      "uuid": "9eb7c444d0e123c9822d34154f7658b4737846d8",
      "url": "http://omgili.com/r/.wHSUbtEfZQ2F8au4ugZad_J4qnGXapSq6wIcdeP6Mli1sB2BGWmcUlxySB7KfPI9TuoMV_QEjiShv31Be3m9kH71ZzsjvQ9pY07ofbvHOUoenj2bXKjLUApz.1VFdt8jCdxtjlLsoQRu_G6jgzvDA--",
      "ord_in_thread": 136,
      "author": "tragicwasp",
      "published": "2016-04-13T07:30:41.979+03:00",
      "title": "",
      "text": "/u/Ooheythere on Blind Boy Throws Perfect First Pitch Do they have blind baseball, they have blind cricket?",
      "highlightText": "",
      "highlightTitle": "",
      "language": "english",
      "external_links": [],
      "persons": [],
      "locations": [],
      "organizations": [],
      "crawled": "2016-04-13T07:30:41.979+03:00"
    },
    {
      "thread": {
        "uuid": "d700e2dd3dac1614bb1212c1ceafb10aca67fe55",
        "url": "http://omgili.com/r/uBQNNiLKiWZYQAPGrAyje1bup4PLUckvH7Z6xKuNc1Z.u36coCImveOesEIKdVNTI19Et9QuAgJ45ajG8zIjZ.zl2reJNfSXgYsWZCE2Cf0sHL0cW6fHh3yDmpDzZKqD",
        "site_full": "harkhabarparnazar.blogspot.com",
        "site": "blogspot.com",
        "site_section": "http://harkhabarparnazar.blogspot.com/",
        "section_title": "Technology & Telecommunication Latest Updates",
        "title": "[InfoZonePK] Once Daily Digest Email",
        "title_full": "[InfoZonePK] Once Daily Digest Email",
        "published": "2016-04-15T03:00:00.000+03:00",
        "replies_count": 0,
        "participants_count": 1,
        "site_type": "blogs",
        "country": "",
        "spam_score": 0.0,
        "main_image": null,
        "performance_score": 0,
        "domain_rank": null
      },
      "uuid": "d700e2dd3dac1614bb1212c1ceafb10aca67fe55",
      "url": "http://omgili.com/r/uBQNNiLKiWZYQAPGrAyje1bup4PLUckvH7Z6xKuNc1Z.u36coCImveOesEIKdVNTI19Et9QuAgJ45ajG8zIjZ.zl2reJNfSXgYsWZCE2Cf0sHL0cW6fHh3yDmpDzZKqD",
      "ord_in_thread": 0,
      "author": "Impresive Prince (noreply@blogger.com)",
      "published": "2016-04-15T03:00:00.000+03:00",
      "title": "[InfoZonePK] Once Daily Digest Email",
      "text": "InfoZonePK has posted some more new updates which are: \n\nHuawei Opens another Brand Outlet at Fortress Square, Lahore \nhttp://www.infozonepk.com/2016/04/14/huawei-opens-another-brand-outlet-at-fortress-square-lahore/ \n\nHuawei is a world leading technology brand that has a large number of brand \noutlets for its consumers all across the Pakistan, in almost every city. But, \nincredibly high sales of Huawei devices and outstanding smart phones, especially \nits flagship products like Huawei Mate 8, Huawei Honor 5X, Huawei Shot X and the \nrecently announced [...] \n\nMobile App Awards Pakistan 2016 Launched \nhttp://www.infozonepk.com/2016/04/14/mobile-app-awards-pakistan-2016-launched/ \n\nPakistan Telecommunications Authority (PTA) together with Internet Society \n(ISOC) Bureau, Telenor Pakistan, National ICT R&D Fund, Ministry of Information \nTechnology, Special Talent Exchange Program, Pakistan Foundation Fighting \nBlindness, Pakistan Blind Cricket Council and Pakistan Youth Foundation of Deaf \nand Hard of Hearing has launched the 2016 edition of the Pakistan Mobile App \nAwards. \nThe theme for [...] \n\n\nYou may view more updates at: \nhttp://www.infozonepk.com \n\nYou received this e-mail because you have subscribed for new updates when \nposted. \n\n\n\nBest Regards, \n\nAsif Mansoor \nAdmin - InfoZonePK \nhttp://www.infozonepk.com ",
      "highlightText": "",
      "highlightTitle": "",
      "language": "english",
      "external_links": [],
      "persons": [],
      "locations": [],
      "organizations": [],
      "crawled": "2016-04-15T03:00:42.218+03:00"
    }
  ],
  "totalResults": 5,
  "moreResultsAvailable": 0,
  "next": "/search?token=b6222a4f-f70c-4adb-861c-42eb7244ab0b&format=json&ts=1460678442218&q=WBCC+OR+%22blind+cricket%22",
  "requestsLeft": 965
};
//fs.readFileSync('././public/javascripts/mocknews.json', 'utf8');

var newsData = [];
var finalMockNews = {};
var mocknewsarticles = [];
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
news.get('/api/v1/news', apicache('24 hour'), function(req,res,next){
	//http://jsonplaceholder.typicode.com/posts/1
	//https://webhose.io/search?token=b6222a4f-f70c-4adb-861c-42eb7244ab0b&format=json&q=WBCC%20OR%20%22blind%20cricket%22	
	http.get('http://jsonplaceholder.typicode.com/posts/1',function(newsResult){
		newsResult.on('data',function (data){			
			newsData += data;
		});
		newsResult.on('end',function (data){
			var finalnews = mockNewsParser(mocknews);
			//res.json(JSON.parse(finalnews));
			res.json(finalnews);
			//res.json(JSON.parse(newsData));
		});
		newsResult.on('error',function (data){
			console.log(data.message);
		});
	});
	
});


function mockNewsParser(mocknews){
	//var mocknews = JSON.parse(mocknews);
	var mockposts = mocknews.posts;
	for (var index = 0; index < mocknews.posts.length; index++) {
		var element = mockposts[index].text;
		mocknewsarticles.push({
			"news" : mockposts[index].text.truncateOnWord(250),
			"author" :  mockposts[index].author				
		});			
	};
	finalMockNews.news = mocknewsarticles;
	return finalMockNews;
}






module.exports = news;