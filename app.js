const Twitter = require('twitter');
const fs = require('fs');
const config = require('./config.js');
const T = new Twitter(config);

var express = require('express'),
	request = require('request'),
	isbot = require('is-bot');

let query = 'zika ebola';
const params = {
	//q: 'zika ebola',
	q: query,  // OR tick borne disease OR mosquito borne disease OR natural disaster OR common cold OR pneumonia OR tetanus OR mumps OR legionnaires OR meningitis
	lang: 'en',
	count: 100
}
const classifySearchedData = (query, searchedTweets) => {
	// define variables
	let queryList = query.split(' OR ');      // get array of each word in query with string ' OR ' 
	let resultDataList = [];
	queryList.forEach(word => {               // search tweets by each word in query
		// define variables
		var i = 0;
		var resultData = [];
		word = word.replace( / AND /gi, ' ');   // replace from " AND " to " ". exp: tick AND borne AND disease => tick borne disease
		searchedTweets.forEach( data => {
			// define variables
			var search_word = word.split(' ');
			var flag_search = true;
			search_word.forEach (each => {
				flag_search = flag_search & (data['text'].indexOf(each) > 0);     // determine whether the word is in the data['text']
			});
			if (flag_search) {
				resultData.push(data);
				i++;
			}
		});
		// push data to array
		resultDataList.push({'key': word, "data": resultData, "count": i});
	});
	return resultDataList;
}


app = express();
app.use(express.static(__dirname + '/public'));
var users = {};
app.enable('trust proxy');

app.get('/ping', function (req, res) {

    // The /ping url has been requested by a web scanning bot.
    // We don't want to count it as a visitor so we will ignore it

    if(isbot(req.headers['user-agent'])){
        return res.send('Bad robot!');
    }

    var ip = req.ip;

    // FreeGeoIP has a very simple api

	request('http://www.geoplugin.net/json.gp?ip=' + ip, function (e, r, body) {

		try {
			var data = JSON.parse(body);
		}
		catch(e){
			return;
		}

		if (!e && r.statusCode == 200) {
			if(data.geoplugin_countryName){

				// Store the users in an object with their ip as a unique key

				users[ip]={
					timestamp : new Date(),
					latitude : data.geoplugin_latitude,
					longitude: data.geoplugin_longitude,
					country: data.geoplugin_countryName
				};

			}
		}
		if(e){
			console.error(e);
		}
	});

	res.send('Done');

});

app.get('/online', function (req, res) {
	var data = [],
		list = [];

	T.get('search/tweets', params, (error, tweets, response) => {
		if (error) {
		  console.log('error has occurred. Check log file =>' + JSON.stringify(error))
		  return [];
		} else {
			var resultData = '';
			var resData = tweets.statuses;
			var dataList = classifySearchedData(query, resData);
			// resultData = (dataList.length == 0) ? "no result" : objectList2str(dataList);
			resultData = (dataList.length == 0) ? "no result" : JSON.stringify(dataList, null, 4);
		
			// // write result
			// fs.writeFile('./results.json', resultData, function(err) {
			// 	if(err) {
			// 	return console.log(err);
			// 	}  
			// 	console.log("The file was saved!");
			// });
			// console.log("data from twitter ==> " + JSON.stringify(dataList[0]['data']));

			dataList[0]['data'].forEach(element => {
				console.log()
				list.push({
					latitude: element.coordinates ? element.coordinates[0] : 0,
					longitude: element.coordinates ? element.coordinates[1] : 0,
					countryName: element.user.location,
					usersOnline: 1,
					username: element.user.name,
					text: element.text,
				});
				data.push({
					latitude: element.coordinates ? element.coordinates[0] : 0,
					longitude: element.coordinates ? element.coordinates[1] : 0,
					country: element.user.location,
					username: element.user.name,
					text: element.text,
				})
			});
			console.log("lists ====> " + JSON.stringify(list));  
			console.log("datas ====> " + JSON.stringify(data));  
			res.send({
				coordinates: data,
				countriesList: list
			});
		}  
	})


});

app.listen(process.env.PORT || 8888, function(){
	console.log('server is up');
});