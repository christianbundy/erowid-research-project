var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

var main = function(e) {
	for (var i = 0; i < e.dose.length; i++) {
		for (key in e.dose[i]) {
			console.log(e.dose[i][key])
			if (e.dose[i][key][0] == ' ') {

				e.dose[i][key] = e.dose[i][key].substring(1)
			}
		}
		e.dose[i].time = e.dose[i].time.replace(' T+ ', '');
	};
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
