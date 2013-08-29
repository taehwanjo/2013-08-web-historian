// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.
var x = function(){
  var filePath = '/Users/hackreactor/Desktop/2013-08-web-historian/data/sites.txt';
  var htmlFetcherHelpers = require('./lib/html-fetcher-helpers.js');



  var log = htmlFetcherHelpers.downloadUrls(htmlFetcherHelpers.readUrls(filePath, function(urls){
    return urls; //urls is definitely an array;
  }));

  //console.log('typeof log: ' + typeof log);//log.join('\n');
  return log.join('\n');
};

x();