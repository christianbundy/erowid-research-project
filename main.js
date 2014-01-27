var fs  = require("fs");

var config = {
	index:  0,               // <= Item number
	input:  './erowid.json', // <= File to read
	output: './sample.json', // <= File to write
	every:  false             // <= Need all 20,533?
}

// HEY, OVER HERE!
// The main function is what you'll be editing.
var main = function (item) {
	console.log("This item's ID is " + item.id + '!')
	return item;
}

// PROCEED WITH CAUTION:
// You shouldn't need to edit anything below this line.
fs.openSync(config.output, 'w');
fs.readFileSync(config.input).toString().split("\n").forEach(function (line) {
	if (line.length && (config.every || config.index < 1000)) {
		result = JSON.stringify(main(JSON.parse(line))) + "\n";
		fs.appendFileSync(config.output, result);
		config.index++;
	}
});
