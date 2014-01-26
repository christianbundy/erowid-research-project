var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var obj = JSON.parse(contents);
		
		obj.dose = {};

		if (typeof obj.header !== 'undefined') {
			if (typeof obj.header[4] !== 'undefined' && obj.header[4][0] === '(') {
				columns = 5
			} else {
				columns = 4
			}
			for (var i = 0; i < Math.floor(obj.header.length / columns); i++) {
				round = i * columns;
				obj.dose[i] = {
					time: obj.header[0 + round],
					amount: obj.header[1 + round],
					administration: obj.header[2 + round],
					substance: obj.header[3 + round],
				};
				if (columns > 4) {
					obj.dose[i].form = obj.header[4 + round];
				}
			};
		}

		fs.writeFile(file, JSON.stringify(obj, null, 1) + "\r\n", function(err) {
			if (err) throw err;
		});
	})
});
