var request = require("request");
var cheerio = require("cheerio");
request('http://news.163.com/',function(err,result){
    if(err){
        console.log("错误："+err);
    }
    console.log(result.body);
})