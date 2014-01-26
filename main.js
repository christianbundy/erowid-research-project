var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

var main = function(e) {
	if (typeof e.dose !== 'undefined') {
		for (var i = 0; i < e.dose.length; i++) {
			if (typeof e.dose[i].form !== 'undefined') {
				e.dose[i].form = e.dose[i].form.replace(' - ', '-')
			}
		};
	}
	return e;
}

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var value = main(JSON.parse(contents));
		if (typeof value === 'object') {
			fs.writeFile(file, JSON.stringify(value, null, 1) + "\r\n", function(err) {
				if (err) throw err;
			});
		}
	})
});
