var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

var i = -1;

var main = function(o) {
	for (var i = 0; i < o.report.length; i++) {
		o.report[i] = o.report[i].replace('<p>', '');
		o.report[i] = o.report[i].replace('</p>', '');
	};
	return n;
}

dive(__dirname + '/json', function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var value = main(JSON.parse(contents));
		if (typeof value === 'object') {
			fs.writeFile('./output/' + value.id + '.json', JSON.stringify(value, null, 1) + "\r\n", function(err) {
				if (err) throw err;
			});
		}
	})
});
