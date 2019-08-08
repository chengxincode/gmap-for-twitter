const Twitter = require('twitter');
const fs = require('fs');
const config = require('./config.js');
const T = new Twitter(config);
var NodeGeocoder = require('node-geocoder');
const https = require('https');

var express = require('express'),
	request = require('request'),
	isbot = require('is-bot');

const geoCodingApiKey = 'AIzaSyDtn4zCvJ-dSDwhC4R9s_zrMRNqogE4hWU';
let query = 'ebola OR tick AND borne AND disease OR tetanus OR mosquito OR zika OR natural OR pneumonia OR mumps';
const params = {
	//q: 'zika ebola',
	q: query,  // OR tick borne disease OR mosquito borne disease OR natural disaster OR common cold OR pneumonia OR tetanus OR mumps OR legionnaires OR meningitis
	lang: 'en',
	count: 100
}
const jsonData = [
	{
		"created_at": "Thu Aug 08 11:11:34 +0000 2019",
		"id": 1159421892157223000,
		"id_str": "1159421892157222912",
		"text": "RT @lohud: No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/FYdT3FNKDk",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "lohud",
					"name": "lohud.com",
					"id": 18198403,
					"id_str": "18198403",
					"indices": [
						3,
						9
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/FYdT3FNKDk",
					"expanded_url": "https://www.lohud.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1952621001/",
					"display_url": "lohud.com/story/news/hea…",
					"indices": [
						104,
						127
					]
				}
			]
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 20571449,
			"id_str": "20571449",
			"name": "Matt Spillane",
			"screen_name": "MattSpillane",
			"location": "Westchester County, NY",
			"description": "Breaking news reporter at The Journal News/lohud.com.\n\n@Marist alum. Freshmen coach @ionafootball.",
			"url": "https://t.co/w4ERWlCGSD",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/w4ERWlCGSD",
							"expanded_url": "https://www.facebook.com/Matt-Spillane-328697437507796/?ref=aymt_homepage_panel",
							"display_url": "facebook.com/Matt-Spillane-…",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 1374,
			"friends_count": 374,
			"listed_count": 38,
			"created_at": "Wed Feb 11 04:37:21 +0000 2009",
			"favourites_count": 24,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 11239,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1067759617319460864/1VgwN477_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1067759617319460864/1VgwN477_normal.jpg",
			"profile_link_color": "1DA1F2",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 35.1220, longitude: 70.7949},
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Aug 08 11:09:03 +0000 2019",
			"id": 1159421256342675500,
			"id_str": "1159421256342675459",
			"text": "No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/FYdT3FNKDk",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [
					{
						"url": "https://t.co/FYdT3FNKDk",
						"expanded_url": "https://www.lohud.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1952621001/",
						"display_url": "lohud.com/story/news/hea…",
						"indices": [
							93,
							116
						]
					}
				]
			},
			"metadata": {
				"iso_language_code": "en",
				"result_type": "recent"
			},
			"source": "<a href=\"http://www.socialnewsdesk.com\" rel=\"nofollow\">SocialNewsDesk</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 18198403,
				"id_str": "18198403",
				"name": "lohud.com",
				"screen_name": "lohud",
				"location": "New York's Lower Hudson Valley",
				"description": "https://t.co/JQkMNJY7Zm is the primary source for news and information in Rockland, Westchester and Putnam counties. We're on Twitter, Facebook and Instagram.",
				"url": "http://t.co/e7244XhWbk",
				"entities": {
					"url": {
						"urls": [
							{
								"url": "http://t.co/e7244XhWbk",
								"expanded_url": "http://lohud.com",
								"display_url": "lohud.com",
								"indices": [
									0,
									22
								]
							}
						]
					},
					"description": {
						"urls": [
							{
								"url": "https://t.co/JQkMNJY7Zm",
								"expanded_url": "http://lohud.com",
								"display_url": "lohud.com",
								"indices": [
									0,
									23
								]
							}
						]
					}
				},
				"protected": false,
				"followers_count": 95008,
				"friends_count": 2323,
				"listed_count": 921,
				"created_at": "Wed Dec 17 20:17:21 +0000 2008",
				"favourites_count": 1592,
				"utc_offset": null,
				"time_zone": null,
				"geo_enabled": true,
				"verified": true,
				"statuses_count": 140440,
				"lang": null,
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "131516",
				"profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
				"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/879369202209107968/Nkva54tV_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/879369202209107968/Nkva54tV_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/18198403/1546528720",
				"profile_link_color": "ABB8C2",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "EFEFEF",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": false,
				"follow_request_sent": false,
				"notifications": false,
				"translator_type": "regular"
			},
			"geo": null,
			"coordinates": {latitude: 41.1220, longitude: 73.7949},
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 3,
			"favorite_count": 0,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 3,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Aug 08 11:09:03 +0000 2019",
		"id": 1159421256342675500,
		"id_str": "1159421256342675459",
		"text": "No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/FYdT3FNKDk",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/FYdT3FNKDk",
					"expanded_url": "https://www.lohud.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1952621001/",
					"display_url": "lohud.com/story/news/hea…",
					"indices": [
						93,
						116
					]
				}
			]
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.socialnewsdesk.com\" rel=\"nofollow\">SocialNewsDesk</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 18198403,
			"id_str": "18198403",
			"name": "lohud.com",
			"screen_name": "lohud",
			"location": "New York's Lower Hudson Valley",
			"description": "https://t.co/JQkMNJY7Zm is the primary source for news and information in Rockland, Westchester and Putnam counties. We're on Twitter, Facebook and Instagram.",
			"url": "http://t.co/e7244XhWbk",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "http://t.co/e7244XhWbk",
							"expanded_url": "http://lohud.com",
							"display_url": "lohud.com",
							"indices": [
								0,
								22
							]
						}
					]
				},
				"description": {
					"urls": [
						{
							"url": "https://t.co/JQkMNJY7Zm",
							"expanded_url": "http://lohud.com",
							"display_url": "lohud.com",
							"indices": [
								0,
								23
							]
						}
					]
				}
			},
			"protected": false,
			"followers_count": 95008,
			"friends_count": 2323,
			"listed_count": 921,
			"created_at": "Wed Dec 17 20:17:21 +0000 2008",
			"favourites_count": 1592,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 140440,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "131516",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/879369202209107968/Nkva54tV_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/879369202209107968/Nkva54tV_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/18198403/1546528720",
			"profile_link_color": "ABB8C2",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "EFEFEF",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": {latitude: 20.7128, longitude: 74.0060},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 3,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:34:10 +0000 2019",
		"id": 1159155788293652500,
		"id_str": "1159155788293652480",
		"text": "don't they still have ebola up in leeds? what are we playing at sending eddie up there #lufc",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "lufc",
					"indices": [
						87,
						92
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 1566943351,
			"id_str": "1566943351",
			"name": "GoonAFC",
			"screen_name": "GunnerLDN3",
			"location": "London",
			"description": "Arsenal. Hate to Bet. Sports Obsessed. Golden State Warriors.",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 871,
			"friends_count": 804,
			"listed_count": 34,
			"created_at": "Wed Jul 03 23:43:10 +0000 2013",
			"favourites_count": 5752,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 117245,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/1566943351/1493671389",
			"profile_link_color": "1DA1F2",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 51.5074, longitude: 0.1278},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:30:15 +0000 2019",
		"id": 1159154803139928000,
		"id_str": "1159154803139928065",
		"text": "@EmeryEra he's going to leeds, he's gonna come back with ebola",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "EmeryEra",
					"name": "#SANLLEHISZN",
					"id": 1092323141387542500,
					"id_str": "1092323141387542529",
					"indices": [
						0,
						9
					]
				}
			],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
		"in_reply_to_status_id": 1159153206976557000,
		"in_reply_to_status_id_str": "1159153206976557056",
		"in_reply_to_user_id": 1092323141387542500,
		"in_reply_to_user_id_str": "1092323141387542529",
		"in_reply_to_screen_name": "EmeryEra",
		"user": {
			"id": 1566943351,
			"id_str": "1566943351",
			"name": "GoonAFC",
			"screen_name": "GunnerLDN3",
			"location": "London",
			"description": "Arsenal. Hate to Bet. Sports Obsessed. Golden State Warriors.",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 871,
			"friends_count": 804,
			"listed_count": 34,
			"created_at": "Wed Jul 03 23:43:10 +0000 2013",
			"favourites_count": 5752,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 117245,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/1566943351/1493671389",
			"profile_link_color": "1DA1F2",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 51.5074, longitude: 0.1278},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:18:55 +0000 2019",
		"id": 1159151950157496300,
		"id_str": "1159151950157496320",
		"text": "RT @fshields: Photojournalist @finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the current ebola…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "fshields",
					"name": "Fiona Shields",
					"id": 41328650,
					"id_str": "41328650",
					"indices": [
						3,
						12
					]
				},
				{
					"screen_name": "finbarroreilly",
					"name": "Finbarr O'Reilly",
					"id": 18936230,
					"id_str": "18936230",
					"indices": [
						30,
						45
					]
				}
			],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 68772425,
			"id_str": "68772425",
			"name": "Omar Havana",
			"screen_name": "OmarHavana",
			"location": "París, Francia",
			"description": "Spanish Photojournalist and NGO photographer based in Paris, previously in Cambodia and Nepal. Photos in Getty Images, NYT, AJE, FT, The Guardian...",
			"url": "https://t.co/zaTvtSvhDR",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/zaTvtSvhDR",
							"expanded_url": "http://omarhavana.com",
							"display_url": "omarhavana.com",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 3009,
			"friends_count": 2482,
			"listed_count": 228,
			"created_at": "Tue Aug 25 18:48:57 +0000 2009",
			"favourites_count": 247,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 17623,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "000505",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1090206143622901760/Zznn7rTU_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1090206143622901760/Zznn7rTU_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/68772425/1564920120",
			"profile_link_color": "ABB8C2",
			"profile_sidebar_border_color": "4A7831",
			"profile_sidebar_fill_color": "171C14",
			"profile_text_color": "7C0707",
			"profile_use_background_image": true,
			"has_extended_profile": true,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 48.8566, longitude: 2.3522},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 3,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:17:45 +0000 2019",
		"id": 1159151657026052000,
		"id_str": "1159151657026052096",
		"text": "RT fshields: Photojournalist finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the current ebola…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.powerapps.com\" rel=\"nofollow\">Microsoft PowerApps and Flow</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 569998953,
			"id_str": "569998953",
			"name": "Axelle Nguz Kabuika",
			"screen_name": "NguzKabuika",
			"location": "Goma",
			"description": "Je suis une sorte de Maï-Maï non violent. Et c’est un choix. L’indifférence de @Fatshi13 sur le #Kivu me donne chaque jour envie de renoncer à la non-violence.",
			"url": "https://t.co/324Pe5Yvto",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/324Pe5Yvto",
							"expanded_url": "http://luchacongo.org",
							"display_url": "luchacongo.org",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 1855,
			"friends_count": 1640,
			"listed_count": 75,
			"created_at": "Thu May 03 12:01:08 +0000 2012",
			"favourites_count": 10923,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 111483,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "3B94D9",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme13/bg.gif",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme13/bg.gif",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1158337084504940545/EAU4gf4n_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1158337084504940545/EAU4gf4n_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/569998953/1563786387",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "FFFFFF",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": true,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 1.6585, longitude: 29.2205},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:16:49 +0000 2019",
		"id": 1159151422702858200,
		"id_str": "1159151422702858242",
		"text": "RT @fshields: Photojournalist @finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the current ebola…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "fshields",
					"name": "Fiona Shields",
					"id": 41328650,
					"id_str": "41328650",
					"indices": [
						3,
						12
					]
				},
				{
					"screen_name": "finbarroreilly",
					"name": "Finbarr O'Reilly",
					"id": 18936230,
					"id_str": "18936230",
					"indices": [
						30,
						45
					]
				}
			],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 91388801,
			"id_str": "91388801",
			"name": "Guardian photos",
			"screen_name": "guardianphotos",
			"location": "London",
			"description": "All the best photography and images recommended by the @Guardian's picture desk",
			"url": "http://t.co/ocKQ55hWOr",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "http://t.co/ocKQ55hWOr",
							"expanded_url": "http://www.theguardian.com/inpictures",
							"display_url": "theguardian.com/inpictures",
							"indices": [
								0,
								22
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 20041,
			"friends_count": 170,
			"listed_count": 958,
			"created_at": "Fri Nov 20 17:47:19 +0000 2009",
			"favourites_count": 68,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": false,
			"statuses_count": 14990,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "FFFFFF",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1061947758226104320/t2EEgtNn_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1061947758226104320/t2EEgtNn_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/91388801/1542023062",
			"profile_link_color": "005689",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": false,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 51.5074, longitude: 0.1234},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 3,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Aug 08 11:40:04 +0000 2019",
		"id": 1159429064903602200,
		"id_str": "1159429064903602176",
		"text": "No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/wlbd0jGq1w",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/wlbd0jGq1w",
					"expanded_url": "https://www.northjersey.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1944312001/",
					"display_url": "northjersey.com/story/news/hea…",
					"indices": [
						93,
						116
					]
				}
			]
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.socialnewsdesk.com\" rel=\"nofollow\">SocialNewsDesk</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 34677788,
			"id_str": "34677788",
			"name": "NorthJersey.com",
			"screen_name": "northjersey",
			"location": "New Jersey",
			"description": "The Record and https://t.co/4QSEPbCXpZ, part of the @USAToday Network. Your primary source for North Jersey news. For sports: @TheRecordSports and @VarsityAces",
			"url": "http://t.co/lGTIfMmMgM",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "http://t.co/lGTIfMmMgM",
							"expanded_url": "http://www.NorthJersey.com",
							"display_url": "NorthJersey.com",
							"indices": [
								0,
								22
							]
						}
					]
				},
				"description": {
					"urls": [
						{
							"url": "https://t.co/4QSEPbCXpZ",
							"expanded_url": "http://NorthJersey.com",
							"display_url": "NorthJersey.com",
							"indices": [
								15,
								38
							]
						}
					]
				}
			},
			"protected": false,
			"followers_count": 64080,
			"friends_count": 1087,
			"listed_count": 1004,
			"created_at": "Thu Apr 23 17:51:51 +0000 2009",
			"favourites_count": 2065,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 129777,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/938056352827609090/vfVlfI9r_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/938056352827609090/vfVlfI9r_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/34677788/1544816217",
			"profile_link_color": "0084B4",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": true,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 40.0583, longitude: 74.4057},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 2,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Aug 08 11:11:34 +0000 2019",
		"id": 1159421892157223000,
		"id_str": "1159421892157222912",
		"text": "RT @lohud: No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/FYdT3FNKDk",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "lohud",
					"name": "lohud.com",
					"id": 18198403,
					"id_str": "18198403",
					"indices": [
						3,
						9
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/FYdT3FNKDk",
					"expanded_url": "https://www.lohud.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1952621001/",
					"display_url": "lohud.com/story/news/hea…",
					"indices": [
						104,
						127
					]
				}
			]
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 20571449,
			"id_str": "20571449",
			"name": "Matt Spillane",
			"screen_name": "MattSpillane",
			"location": "Westchester County, NY",
			"description": "Breaking news reporter at The Journal News/lohud.com.\n\n@Marist alum. Freshmen coach @ionafootball.",
			"url": "https://t.co/w4ERWlCGSD",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/w4ERWlCGSD",
							"expanded_url": "https://www.facebook.com/Matt-Spillane-328697437507796/?ref=aymt_homepage_panel",
							"display_url": "facebook.com/Matt-Spillane-…",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 1374,
			"friends_count": 374,
			"listed_count": 38,
			"created_at": "Wed Feb 11 04:37:21 +0000 2009",
			"favourites_count": 24,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 11239,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1067759617319460864/1VgwN477_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1067759617319460864/1VgwN477_normal.jpg",
			"profile_link_color": "1DA1F2",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 25.1220, longitude: 58.7949},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Aug 08 11:09:03 +0000 2019",
		"id": 1159421256342675500,
		"id_str": "1159421256342675459",
		"text": "No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/FYdT3FNKDk",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/FYdT3FNKDk",
					"expanded_url": "https://www.lohud.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1952621001/",
					"display_url": "lohud.com/story/news/hea…",
					"indices": [
						93,
						116
					]
				}
			]
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.socialnewsdesk.com\" rel=\"nofollow\">SocialNewsDesk</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 18198403,
			"id_str": "18198403",
			"name": "lohud.com",
			"screen_name": "lohud",
			"location": "New York's Lower Hudson Valley",
			"description": "https://t.co/JQkMNJY7Zm is the primary source for news and information in Rockland, Westchester and Putnam counties. We're on Twitter, Facebook and Instagram.",
			"url": "http://t.co/e7244XhWbk",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "http://t.co/e7244XhWbk",
							"expanded_url": "http://lohud.com",
							"display_url": "lohud.com",
							"indices": [
								0,
								22
							]
						}
					]
				},
				"description": {
					"urls": [
						{
							"url": "https://t.co/JQkMNJY7Zm",
							"expanded_url": "http://lohud.com",
							"display_url": "lohud.com",
							"indices": [
								0,
								23
							]
						}
					]
				}
			},
			"protected": false,
			"followers_count": 95008,
			"friends_count": 2323,
			"listed_count": 921,
			"created_at": "Wed Dec 17 20:17:21 +0000 2008",
			"favourites_count": 1592,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 140440,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "131516",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/879369202209107968/Nkva54tV_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/879369202209107968/Nkva54tV_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/18198403/1546528720",
			"profile_link_color": "ABB8C2",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "EFEFEF",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": {latitude: 25.7128, longitude: 70.0060},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 3,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:34:10 +0000 2019",
		"id": 1159155788293652500,
		"id_str": "1159155788293652480",
		"text": "don't they still have ebola up in leeds? what are we playing at sending eddie up there #lufc",
		"truncated": false,
		"entities": {
			"hashtags": [
				{
					"text": "lufc",
					"indices": [
						87,
						92
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 1566943351,
			"id_str": "1566943351",
			"name": "GoonAFC",
			"screen_name": "GunnerLDN3",
			"location": "London",
			"description": "Arsenal. Hate to Bet. Sports Obsessed. Golden State Warriors.",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 871,
			"friends_count": 804,
			"listed_count": 34,
			"created_at": "Wed Jul 03 23:43:10 +0000 2013",
			"favourites_count": 5752,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 117245,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/1566943351/1493671389",
			"profile_link_color": "1DA1F2",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 41.5074, longitude: 30.1278},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:30:15 +0000 2019",
		"id": 1159154803139928000,
		"id_str": "1159154803139928065",
		"text": "@EmeryEra he's going to leeds, he's gonna come back with ebola",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "EmeryEra",
					"name": "#SANLLEHISZN",
					"id": 1092323141387542500,
					"id_str": "1092323141387542529",
					"indices": [
						0,
						9
					]
				}
			],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
		"in_reply_to_status_id": 1159153206976557000,
		"in_reply_to_status_id_str": "1159153206976557056",
		"in_reply_to_user_id": 1092323141387542500,
		"in_reply_to_user_id_str": "1092323141387542529",
		"in_reply_to_screen_name": "EmeryEra",
		"user": {
			"id": 1566943351,
			"id_str": "1566943351",
			"name": "GoonAFC",
			"screen_name": "GunnerLDN3",
			"location": "London",
			"description": "Arsenal. Hate to Bet. Sports Obsessed. Golden State Warriors.",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 871,
			"friends_count": 804,
			"listed_count": 34,
			"created_at": "Wed Jul 03 23:43:10 +0000 2013",
			"favourites_count": 5752,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 117245,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1156984971954937862/FWRPHCKa_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/1566943351/1493671389",
			"profile_link_color": "1DA1F2",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 51.5074, longitude: 0.1278},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:18:55 +0000 2019",
		"id": 1159151950157496300,
		"id_str": "1159151950157496320",
		"text": "RT @fshields: Photojournalist @finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the current ebola…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "fshields",
					"name": "Fiona Shields",
					"id": 41328650,
					"id_str": "41328650",
					"indices": [
						3,
						12
					]
				},
				{
					"screen_name": "finbarroreilly",
					"name": "Finbarr O'Reilly",
					"id": 18936230,
					"id_str": "18936230",
					"indices": [
						30,
						45
					]
				}
			],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 68772425,
			"id_str": "68772425",
			"name": "Omar Havana",
			"screen_name": "OmarHavana",
			"location": "París, Francia",
			"description": "Spanish Photojournalist and NGO photographer based in Paris, previously in Cambodia and Nepal. Photos in Getty Images, NYT, AJE, FT, The Guardian...",
			"url": "https://t.co/zaTvtSvhDR",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/zaTvtSvhDR",
							"expanded_url": "http://omarhavana.com",
							"display_url": "omarhavana.com",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 3009,
			"friends_count": 2482,
			"listed_count": 228,
			"created_at": "Tue Aug 25 18:48:57 +0000 2009",
			"favourites_count": 247,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 17623,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "000505",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1090206143622901760/Zznn7rTU_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1090206143622901760/Zznn7rTU_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/68772425/1564920120",
			"profile_link_color": "ABB8C2",
			"profile_sidebar_border_color": "4A7831",
			"profile_sidebar_fill_color": "171C14",
			"profile_text_color": "7C0707",
			"profile_use_background_image": true,
			"has_extended_profile": true,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 45.8566, longitude: 9.3522},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:17:45 +0000 2019",
		"id": 1159151657026052000,
		"id_str": "1159151657026052096",
		"text": "RT fshields: Photojournalist finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the current ebola…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.powerapps.com\" rel=\"nofollow\">Microsoft PowerApps and Flow</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 569998953,
			"id_str": "569998953",
			"name": "Axelle Nguz Kabuika",
			"screen_name": "NguzKabuika",
			"location": "Goma",
			"description": "Je suis une sorte de Maï-Maï non violent. Et c’est un choix. L’indifférence de @Fatshi13 sur le #Kivu me donne chaque jour envie de renoncer à la non-violence.",
			"url": "https://t.co/324Pe5Yvto",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/324Pe5Yvto",
							"expanded_url": "http://luchacongo.org",
							"display_url": "luchacongo.org",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 1855,
			"friends_count": 1640,
			"listed_count": 75,
			"created_at": "Thu May 03 12:01:08 +0000 2012",
			"favourites_count": 10923,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 111483,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "3B94D9",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme13/bg.gif",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme13/bg.gif",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1158337084504940545/EAU4gf4n_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1158337084504940545/EAU4gf4n_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/569998953/1563786387",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "FFFFFF",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": true,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 16.6585, longitude: 29.2205},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Wed Aug 07 17:16:49 +0000 2019",
		"id": 1159151422702858200,
		"id_str": "1159151422702858242",
		"text": "RT @fshields: Photojournalist @finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the current ebola…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "fshields",
					"name": "Fiona Shields",
					"id": 41328650,
					"id_str": "41328650",
					"indices": [
						3,
						12
					]
				},
				{
					"screen_name": "finbarroreilly",
					"name": "Finbarr O'Reilly",
					"id": 18936230,
					"id_str": "18936230",
					"indices": [
						30,
						45
					]
				}
			],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 91388801,
			"id_str": "91388801",
			"name": "Guardian photos",
			"screen_name": "guardianphotos",
			"location": "London",
			"description": "All the best photography and images recommended by the @Guardian's picture desk",
			"url": "http://t.co/ocKQ55hWOr",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "http://t.co/ocKQ55hWOr",
							"expanded_url": "http://www.theguardian.com/inpictures",
							"display_url": "theguardian.com/inpictures",
							"indices": [
								0,
								22
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 20041,
			"friends_count": 170,
			"listed_count": 958,
			"created_at": "Fri Nov 20 17:47:19 +0000 2009",
			"favourites_count": 68,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": false,
			"statuses_count": 14990,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "FFFFFF",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/1061947758226104320/t2EEgtNn_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/1061947758226104320/t2EEgtNn_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/91388801/1542023062",
			"profile_link_color": "005689",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": false,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 42.5074, longitude: 10.1234},
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Wed Aug 07 17:16:28 +0000 2019",
			"id": 1159151333632544800,
			"id_str": "1159151333632544769",
			"text": "Photojournalist @finbarroreilly has been in the bustling Congolese trade hub Butembo pondering its part in the curr… https://t.co/8mAzdHbPr8",
			"truncated": true,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [
					{
						"screen_name": "finbarroreilly",
						"name": "Finbarr O'Reilly",
						"id": 18936230,
						"id_str": "18936230",
						"indices": [
							16,
							31
						]
					}
				],
				"urls": [
					{
						"url": "https://t.co/8mAzdHbPr8",
						"expanded_url": "https://twitter.com/i/web/status/1159151333632544769",
						"display_url": "twitter.com/i/web/status/1…",
						"indices": [
							117,
							140
						]
					}
				]
			},
			"metadata": {
				"iso_language_code": "en",
				"result_type": "recent"
			},
			"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 41328650,
				"id_str": "41328650",
				"name": "Fiona Shields",
				"screen_name": "fshields",
				"location": "London",
				"description": "Head of Photography at The Guardian",
				"url": null,
				"entities": {
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 6882,
				"friends_count": 524,
				"listed_count": 260,
				"created_at": "Wed May 20 09:47:19 +0000 2009",
				"favourites_count": 1695,
				"utc_offset": null,
				"time_zone": null,
				"geo_enabled": false,
				"verified": true,
				"statuses_count": 12302,
				"lang": null,
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "C0DEED",
				"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/1129343460031569920/ZFke0zSI_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/1129343460031569920/ZFke0zSI_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/41328650/1400605606",
				"profile_link_color": "0084B4",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": false,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": false,
				"follow_request_sent": false,
				"notifications": false,
				"translator_type": "regular"
			},
			"geo": null,
			"coordinates": {latitude: 42.5074, longitude: 10.1234},
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 3,
			"favorite_count": 6,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "en"
		},
		"is_quote_status": false,
		"retweet_count": 3,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Thu Aug 08 11:40:04 +0000 2019",
		"id": 1159429064903602200,
		"id_str": "1159429064903602176",
		"text": "No vaccine. No treatment. And this rare tick-borne disease can be transmitted within minutes https://t.co/wlbd0jGq1w",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/wlbd0jGq1w",
					"expanded_url": "https://www.northjersey.com/story/news/health/2019/08/08/tick-bite-red-meat-allergy-powassan-virus-nj-ny/1944312001/",
					"display_url": "northjersey.com/story/news/hea…",
					"indices": [
						93,
						116
					]
				}
			]
		},
		"metadata": {
			"iso_language_code": "en",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.socialnewsdesk.com\" rel=\"nofollow\">SocialNewsDesk</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 34677788,
			"id_str": "34677788",
			"name": "NorthJersey.com",
			"screen_name": "northjersey",
			"location": "New Jersey",
			"description": "The Record and https://t.co/4QSEPbCXpZ, part of the @USAToday Network. Your primary source for North Jersey news. For sports: @TheRecordSports and @VarsityAces",
			"url": "http://t.co/lGTIfMmMgM",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "http://t.co/lGTIfMmMgM",
							"expanded_url": "http://www.NorthJersey.com",
							"display_url": "NorthJersey.com",
							"indices": [
								0,
								22
							]
						}
					]
				},
				"description": {
					"urls": [
						{
							"url": "https://t.co/4QSEPbCXpZ",
							"expanded_url": "http://NorthJersey.com",
							"display_url": "NorthJersey.com",
							"indices": [
								15,
								38
							]
						}
					]
				}
			},
			"protected": false,
			"followers_count": 64080,
			"friends_count": 1087,
			"listed_count": 1004,
			"created_at": "Thu Apr 23 17:51:51 +0000 2009",
			"favourites_count": 2065,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 129777,
			"lang": null,
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DEED",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/938056352827609090/vfVlfI9r_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/938056352827609090/vfVlfI9r_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/34677788/1544816217",
			"profile_link_color": "0084B4",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": true,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false,
			"translator_type": "none"
		},
		"geo": null,
		"coordinates": {latitude: 30.0583, longitude: 64.4057},
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 1,
		"favorite_count": 2,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
];
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

async function getCoordinateFromLocation(location) {	
	var request = await https.request('https://maps.googleapis.com/maps/api/geocode/json?address='+ location +'&key=AIzaSyB_8WU5oX1cDgb5JyfjuLYU_O2_lp_lumI', function (res) {
		var data = '';
		res.on('data', function (chunk) {
			// console.log("chunk ==> " + chunk);
			data += chunk;
		});
		res.on('end', function () {
			var value = JSON.parse(data);
			console.log("status ======> " + value.status);
			if (value.status !== "ok") {
				return {
					"lat": 0,
					"lng": 0
				}
			} else {
				return value.results[0].geometry.location;
			}
		});
	});
	request.end();
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
	let flag = false;

	T.get('search/tweets', params, (error, tweets, response) => {
		if (error) {
		  console.log('error has occurred. Check log file =>' + JSON.stringify(error))
		  return [];
		} else {
			var resData = tweets.statuses;
			var dataList = classifySearchedData(query, resData);
			resultData = (dataList.length == 0) ? "no result" : JSON.stringify(dataList, null, 4);

			// write result
			fs.writeFile('./results.json', resultData, function(err) {
				if(err) {
				  	return console.log(err);
				}  
				console.log("The file was saved!");
			}); 
			// dataList[0]['data'].forEach(element => {
			// 	var NodeGeocoder = require('node-geocoder');
			// 	var options = {
			// 		provider: 'google',
			// 		httpAdapter: 'https', // Default
			// 		apiKey: 'AIzaSyB_8WU5oX1cDgb5JyfjuLYU_O2_lp_lumI', // for Mapquest, OpenCage, Google Premier
			// 	};

			// 	var geocoder = NodeGeocoder(options);
				
			// 	// Using callback
			// 	geocoder.geocode(element.user.location, function(err, res) {
			// 		console.log('data ==> ' + JSON.stringify(res));
			// 		if (res === undefined || res.length === 0)
			// 			console.log("error === error");
			// 		else {
			// 			latitude = res[0].latitude;
			// 			longitude = res[0].longitude;
			// 			console.log("success ===== success " + latitude + "," + longitude);
			// 			list.push({
			// 				latitude: element.coordinates ? element.coordinates[0] : latitude ,
			// 				longitude: element.coordinates ? element.coordinates[1] : longitude ,
			// 				countryName: element.user.location,
			// 				usersOnline: 1,
			// 				username: element.user.name,
			// 				text: element.text,
			// 			});
			// 			data.push({
			// 				latitude: element.coordinates ? element.coordinates[0] : latitude ,
			// 				longitude: element.coordinates ? element.coordinates[1] : longitude ,
			// 				country: element.user.location,
			// 				username: element.user.name,
			// 				text: element.text,
			// 			})
			// 		}
			// 	});
			// 	flag = true
			// });			
		}  
	})

	jsonData.forEach(element => {
		list.push({
			latitude: element.coordinates ? element.coordinates.latitude : 0 ,
			longitude: element.coordinates ? element.coordinates.longitude : 0 ,
			countryName: element.user.location,
			usersOnline: 1,
			username: element.user.name,
			text: element.text,
		});
		data.push({
			latitude: element.coordinates ? element.coordinates.latitude : 0 ,
			longitude: element.coordinates ? element.coordinates.longitude : 0 ,
			country: element.user.location,
			username: element.user.name,
			text: element.text,
		})
	})
	console.log("lists ====> " + JSON.stringify(list));  
	console.log("datas ====> " + JSON.stringify(data)); 

	res.send({
		coordinates: data,
		countriesList: list
	});
});

app.listen(process.env.PORT || 8888, function(){
	console.log('server is up');
});