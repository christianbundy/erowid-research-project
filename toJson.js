var cheerio = require('cheerio');
var fs = require('graceful-fs');


var config = {
  input:  './private/',
  output: './output/'
};

var Experience = {};

console.log("Let's get started!");

var files = fs.readdirSync(config.input);

for (var i in files) {
  if (files[i][0] !== '.') {
    (function (current) {
      fs.readFile(config.input + files[current], function (err, html) {
        if (err) {
          throw err;
        } else {
          // Configuration
          var doc = html.toString();
          var $ = cheerio.load(doc);
          var id = files[current].slice(0, -5);

          Experience[id] = {};

          Experience[id].author = $('.author a').text();
          // console.log(Experience[id]);
          fs.writeFile(config.output + id + '.json', JSON.stringify(Experience[id]), function(err) {
            if(err) {
              console.log(err);
            }
          }); 
        }
      });
    })(i);
  }
}
