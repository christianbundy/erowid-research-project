var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

var main = function(e) {
	for (var a in e) {
		if( Object.prototype.toString.call( e[a] ) === '[object Array]' ) {
			for (var b = 0; b < e[a].length; b++) {
				if (e[a][b] === '') {
					e[a].splice(b, 1);
				}
			};
		} else {
			for (var b in e[a]) {
				if (e[a][b] === '') {
					delete e[a][b];
				}
			}
		}
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
