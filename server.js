var express = require('express');
var app = express();
var path = require("path");
var request = require('request');
var parser = require('xml2json');
//app.use(express.static(__dirname + 'public'));
app.use(express.static('public'));
app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/sensor', function(req, res){
	request({
		url: 'http://52.27.146.185:1026/v1/contextEntities/type/ThinkingThing/id/default',
		headers: {
				'fiware-service': 'smartGondor',
				'fiware-servicepath': '/gardens',
				'Accept': 'application/json'
			}
		}, function(error,response, xml) {
			if (!error && response.statusCode == 200) {
				res.json(xml);
				//console.log(xml)
				//res.json(parser.toJson(xml));
			}
		}
	);
});

	 //response.sendFile(path.join(__dirname+'/index.html'));

app.listen(3000, function(){
	console.log("running server");
});