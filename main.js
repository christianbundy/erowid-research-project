var fs  = require("graceful-fs");
var zlib = require('zlib');
var async = require('async');

var Erowid = function (main, compress) {
	var Erowid = {
		config: {
			input:    '/erowid.json',
			output:   '/sample.json',
			gz:       '/erowid.json.gz',
			compress: compress || false
		},
		data: []
	};

	// Data input handler
	Erowid.in = function (str, fn) {
		console.log('> output:   ' + Erowid.config.output);
		if (Erowid.config.compress) console.log('> compress: ' + Erowid.config.gz);
		console.log();
		async.series([

			function(seriesCb) {
				async.each(JSON.parse(str), function (obj, eachCb) {
					if (obj.id < 500 || Erowid.config.compress) {
						Erowid.data.push(fn(obj) || obj);
					}
					eachCb(null);
				}, function (err) {
					seriesCb(err);
				})
			},

			function (cb) {
				var str = JSON.stringify(Erowid.data, null, 2);
				var both = false;
				fs.writeFile(__dirname + Erowid.config.output, str, function (err) {
					if (both || !Erowid.config.compress) {
						cb(err);
					} else {
						both = true;
					}
				});

				zlib.gzip(JSON.stringify(Erowid.data), function (error, result) {
					if (error) throw error;
					fs.writeFile(__dirname + Erowid.config.gz, result, function (err) {
						if (both) {
							cb(err);
						} else {
							both = true;
						}
					})
				});
			}
			]);
	};


	console.log('> input:    ' + Erowid.config.input);
	fs.readFile(__dirname + Erowid.config.input, function(inputError, data){
		if (!inputError) {
			Erowid.in(data, main);
		} else {
			throw "No file at " + __dirname + Erowid.config.input;
		}
	});
}

///////////////////////////////////////////////////////////////

var i = 0;

Erowid( function (item) {
	return item;
}, true);