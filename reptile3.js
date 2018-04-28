var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
request.get({
    url : 'http://temp.163.com/special/00804KVA/cm_yaowen.js?callback=data_callback',
    encoding : null //让body 直接是buffer
}, function (err, response, body) {
    //返回的body 直接就是buffer 了...
    var buf =  iconv.decode(body, 'gb2312');
    console.log(buf);
});