var fs = require("fs");
var httpget = require('http-get');

exports.readUrls = function(filePath, cb){
  console.log('!filePath: ' + filePath);

  var dataString = fs.readFileSync(filePath, 'utf8');
  console.log('dataString: ' + dataString);

  var dataArray = dataString.split('\n');
  console.log('dataArray[0]: ' + dataArray[0]);
  return cb(dataArray);
};

exports.downloadUrls = function(urls){
  if (urls === undefined) return 1;
  // fixme
  var newFilePath = '/Users/hackreactor/Desktop/2013-08-web-historian/data/sites/';
  var logArray = [];

var cb = function(error, result){
      if (error) {
        console.error("Error while writing: "+error);
        logArray.push("Error while writing: " + error);
      } else {
        console.log('File was downloaded at: ' + result.file);
        logArray.push('File was downloaded at: ' + result.file);
      }
    };

  for(var i=0; i<urls.length; i++) {
    httpget.get('http://' + urls[i], newFilePath + urls[i], cb); //what in tarnations?
  }

  return logArray;


};
