var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var obj = JSON.parse(contents);
		obj.year = obj.footer[0][0];
		obj.id = obj.footer[0][1]
		obj.gender = obj.footer[0][2];
		obj.age = obj.footer[0][4];
		obj.timestamp = new Date(obj.footer[0][5]);
		obj.views = obj.footer[0][6];
		delete obj.footer;
		var output = __dirname + '/output/' + obj.id + '.json'
		fs.writeFile(output, JSON.stringify(obj, null, 1), function(err) {
			if (err) throw err;
		}); 
	})
});
