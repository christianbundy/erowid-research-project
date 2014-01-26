var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

collection = {};

var main = function(e) {
	if (typeof e.dose !== 'undefined') {
		for (var i = 0; i < e.dose.length; i++) {
			if (typeof e.dose[i].amount !== 'undefined') {
				if (e.dose[i].amount.number !== 'undefined') {
					e.dose[i].amount.quantity = e.dose[i].amount.number;
					delete e.dose[i].amount.number;
				}
			}
		};
	}
	return e;
}

dive(__dirname + '/json', { all: false }, function (err, file) {
	fs.readFile(file, function (err, contents) {
		if (err) throw err;
		var value = main(JSON.parse(contents));
		if (typeof value === 'object') {
			fs.writeFile(file, JSON.stringify(value, null, 1) + "\r\n", function(err) {
				if (err) throw err;
			});
		}
	})
}, function () {
	fs.writeFile('./log', JSON.stringify(collection, null, 1) + "\r\n", function(err) {
				if (err) throw err;
			});
});
