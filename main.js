var fs  = require("fs");
var cheerio = require("cheerio");
var request = require('request');

var erp = {
	config: {
		index:  0,
		input:  './erowid.json',
		output: './sample.json',
		every:  false
	},
	main: function (item) {
		item.author.name = 'John Dose'
		this.write(item);
	},
	write: function (obj) {
		fs.appendFileSync(erp.config.output, JSON.stringify(obj) + "\n");
	},
	each: function (obj) {
		this.config.index++;
		this.main(obj);
	}
}

fs.openSync(erp.config.output, 'w');
fs.readFileSync(erp.config.input).toString().split("\n").forEach(function (line) {
	if (erp.config.index < 20534 && (erp.config.every || erp.config.index < 100))
		erp.each(JSON.parse(line));
});
