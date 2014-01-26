var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var obj = JSON.parse(contents);
		obj.dose = [];

		if (typeof obj.header[0] !== 'undefined') {
			for (var i = 0; i < obj.dose[0].length; i++) {
				x = 4 * i;
				obj.dose[0+i] = {
					time: obj.header[0][0+x],
					amount: obj.header[0][1+x],
					administration: obj.header[0][2+x],
					substance: obj.header[0][3+x],
					form: obj.header[0][4+x] 
				};
			};
		}

		fs.writeFile(file, JSON.stringify(obj, null, 1) + "\r\n", function(err) {
			if (err) throw err;
		});
	})
});
