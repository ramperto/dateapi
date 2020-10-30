'use strict';

const express = require('express');
const app = new express();
var host = process.env.host || '0.0.0.0';
var port = process.env.port || 3000;

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
var request = require('request');

app.listen(port, host, () => {
	            var datetime = new Date();
	            var message = "Server running on Port:- " + port + " and host " + host + " Started at :- " + datetime;
	            console.log(message);
});

// Set the headers
var headers = {
    	'User-Agent':       'Super Agent/0.0.1',
	'Content-Type':     'application/x-www-form-urlencoded'
}
        // Configure the request
var options = {
   	url: 'http://numbersapi.com/'+ month + '/'+ date +'/date',
        method: 'GET'
}
// Start the request
request(options, function (error, response, body) {
	if (!error && response.statusCode == 200) {
	// console.log(body)
		app.get('/', (req, res) => {
	        	res.send('Fakta hari ini adalah  ' + body );
		});	    
		}
  	})

