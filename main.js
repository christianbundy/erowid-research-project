var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var obj = JSON.parse(contents);
		var str = JSON.stringify(obj);
		obj = JSON.parse(str.replace('\\n', ''));
		fs.writeFile(file, JSON.stringify(obj, null, 1) + "\r\n", function(err) {
			if (err) throw err;
		}); 
	})
});
