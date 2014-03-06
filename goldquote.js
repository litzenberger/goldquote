/* Copyright (c) 2014 Ron Litzenberger, MIT License */
"use strict";

function goldquote(done){
  	var request = require('request');
  	var cheerio = require('cheerio');
	request('http://www.goldpriceoz.com/', function (error, response, html) {
  	if (!error && response.statusCode == 200) {
     	var $ = cheerio.load(html);
    	var a=$('div.gold_rate').each(function(i, element){
    	//if (i===18)
    	 return this.nodeType == 3;
		}).text();
		done(a);
		}
	});
}
module.exports = goldquote;