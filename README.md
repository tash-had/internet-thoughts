# Internet Thoughts

![alt text](https://github.com/tash-had/YHack_2016/blob/master/views/photos/logoInnerShadow.png?raw=true "Oh my.... what a beautiful Readme")

[LIVE DEMO: http://internetthoughts.net/](http://internetthoughts.net/)

Ever wonder what the internet thinks about a certain topic, issue, or person? Well, what better way to gauge the internet's popular opinion than through the viral forces of Twitter! Just enter a search query you are curious about on our site and a sentiment analysis of hundreds of tweets in relation to that topic will be returned to you. Find out where you stand amongst the rest of the world!

##The magic behind it all:
###A custom sentiment analysis engine   
&nbsp;&nbsp;&nbsp;->We used a custom corpus with support for emojis and slang   
&nbsp;&nbsp;&nbsp;->Written in JS
###Twitter API   
&nbsp;&nbsp;&nbsp;-> Fetched hundreds of tweets from a search query   
&nbsp;&nbsp;&nbsp;-> Parsed the tweets for use with sentiment analysis engine
&nbsp;&nbsp;&nbsp;->Written in NodeJS
###Backend   
&nbsp;&nbsp;&nbsp;->Infrastructure in NodeJs, Js   
###Frontend   
&nbsp;&nbsp;&nbsp;->CSS   
&nbsp;&nbsp;&nbsp;->HTML   

##Features
###Multi-source data fetching   
&nbsp;&nbsp;&nbsp;->Sources infomation from reddit, twitter and tumblr   
###Custom sentiment analysis engine
&nbsp;&nbsp;&nbsp;->Cross checks input sources against individual word's sentiment values as well as contexual words' sentiment values   
###Runable and deployed   
&nbsp;&nbsp;&nbsp;->Fully runable via Heroku   
&nbsp;&nbsp;&nbsp;->Custom domain points to Heroku instance via CNAME alias   
###Scalable
&nbsp;&nbsp;&nbsp;->Engine can process any length of text and uses 0(1) space to store corpus   


##TODO  
#Different Platform Info 
--do for monthly data after
[]finish bar (results page) 
[]frequent words  wordmap 

[]graphs 
- requires info through different platforms


[x]hosting 
 - domain + host 

[]presentation 


[]main page - decide about navbar 
[]database  
- long term data analysis, store in database, different platforms 


[]context
- couont emojiis (results.Ejs) 
- count explanation marks
- count cases (before converting to lowercase for corpus) - engine.Jst here to convert case
