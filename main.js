var fs = require('graceful-fs'); // Queues fs.readFile()
var dive = require('dive');      // Recursive dir walking

var Collection = {};

dive(__dirname + '/json', function (err, file) {
  fs.readFile(file, function (err, contents) {
    if (err) throw err
    obj = JSON.parse(contents);
    if (typeof obj.footer[0] === 'undefined') {
      console.log(file);
    }
  })
});
