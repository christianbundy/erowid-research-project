var cheerio = require('cheerio');
var fs = require('graceful-fs');
var config = require('./config.js');


var Experience = {};

var files = fs.readdirSync(config.input);

for (var i in files) {
  if (files[i][0] !== '.') {
    (function (current) {
      fs.readFile(config.input + files[current], function (err, html) {
        if (err) {
          throw err;
        } else {
          var doc = html.toString();
          var $ = cheerio.load(doc);
          var id = files[current].slice(0, -5);

          Experience[id] = {
            title: $('.title').text(),
            author: $('.author a').text(),
            citation: $('.ts-citation').text(),
            substance: $('.substance').text(),
            bodyweight: $('.bodyweight-amount').text(),
            header: [],
            footer: []
          };

          $(".dosechart").each(function() {
            var arrayOfThisRow = [];
            var tableData = $(this).find('td');
            if (tableData.length > 0) {
              tableData.each(function() { arrayOfThisRow.push($(this).text()); });
              Experience[id].header.push(arrayOfThisRow);
            }
          });

          $(".footdata").each(function() {
            var arrayOfThisRow = [];
            var tableData = $(this).find('td');
            if (tableData.length > 0) {
              tableData.each(function() { arrayOfThisRow.push($(this).text()); });
              Experience[id].footer.push(arrayOfThisRow);
            }
          });


          reportio = cheerio.load(doc)
          reportio('.report-text-surround table').empty();
          report = reportio('.report-text-surround').text();
          Experience[id].report = report; 

          //todo report
          fs.writeFile(config.output + id + '.json', JSON.stringify(Experience[id], null, 1), function(err) {
            if(err) {
              console.log(err);
            }
          }); 
        }
      });
})(i);
}
}
