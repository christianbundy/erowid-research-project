var cheerio = require('cheerio');
var fs = require('graceful-fs');


var config = {
  path: './test/' // Experiences
};

var Experience = {};

console.log("Let's get started!");

var files = fs.readdirSync(config.path);

for (var i in files) {
  if (files[i][0] !== '.') {
    (function (current) {
      fs.readFile(config.path + files[current], function (err, html) {
        if (err) {
          throw err; 
        } else {
          var doc = html.toString();
          var $ = cheerio.load(doc);
          console.log($('.author').text());
        }
      });
    })(i);
  }
}
