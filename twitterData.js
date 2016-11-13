var Twitter = require('twitter');
var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

var client = new Twitter({
  consumer_key: 'XtnuVdCfdD9Ys3nD8DaragTNS',
  consumer_secret: 'XKJwmxcurpBT8TJPKwcZAVsXnvE8qTu2FTD5WAF9fOezi5iwjL',
  access_token_key: '2181207784-qlewvivtrePya4boXrGexzTfBnX7MmkT8CwPISq',
  access_token_secret: 'hlIpItCXae7tUfT6UmIR9eOz5lzksz5tLzdzTR2mCD8Ui'
});

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    var inputText = req.query.input;
    client.get('search/tweets', { q:inputText , count: 100, lang: "en", resultType: "popular", exclude:"links"}, function(error, tweets, response) {
        res.render("results", {resultsData: tweets, search:inputText});

    });
})

app.listen(8000, 'localhost', function(){
    console.log("server started");

});
