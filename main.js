var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var obj = JSON.parse(contents);
		
		obj.dose = {};

		/*for (var i = 0; i < Math.floor(obj.header.length / 4); i++) {
			round = i * 4;
			obj.dose[i] = {
				time: obj.header[0 + round],
				amount: obj.header[1 + round],
				administration: obj.header[2 + round],
				substance: obj.header[3 + round],
				form: obj.header[4 + round]
			};
		};
*/
		obj.header = obj.header[0]

		fs.writeFile(file, JSON.stringify(obj, null, 1) + "\r\n", function(err) {
			if (err) throw err;
		});
	})
});
