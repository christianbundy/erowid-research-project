var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var obj = JSON.parse(contents);
		var original = obj;

		if (obj !== original) {
			fs.writeFile(file, JSON.stringify(obj, null, 1) + "\r\n", function(err) {
				if (err) throw err;
			});
			console.log('Change!')
		}
	})
});
