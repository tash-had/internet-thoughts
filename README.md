# Internet Thoughts

![alt text](https://github.com/tash-had/YHack_2016/blob/master/views/photos/logoInnerShadow.png?raw=true "Oh my.... what a beautiful Readme")

#[internetthoughts.net](http://internetthoughts.net/)

Ever wonder what the internet thinks about a certain topic, issue, or person? Well, what better way to gauge the internet's popular opinion than by mass analyzing things said about that topic? Just enter a search query and a sentiment analysis of tons of data in relation to that topic will be returned to you. Find out where you stand amongst the internet! Internet-thoughts was built for YHack 2016 at Yale University by [Tash-had Saqif](https://tash-had.com), [Robert Xu](http://robxu.me) and [Jonathan Sun](http://jonathan.solar).

# Screenshots 
### Query Screen
![Query Screen](/img/query_screen.jpg?raw=true "Query Screen")

### Positive Query Example
![Positive Query](/img/pos_query_screen.jpg?&raw=true "Positive Query") 

### Negative Query Example
![Negative Query](/img/neg_query_screen.jpg?raw=true "Negative Query")


# The magic behind it all

### A custom sentiment analysis engine   
* We built our own engine to analyze sentiment in the data we fetched
* Data is analyzed using a Corpus
* Engine accounts for slang, emoji's, compound words  

### Twitter, Reddit & Tumblr API's   
* Fetched the most popular tweets, reddit comments and Tumblr posts matching the query, from the last 7 days.   
* Parsed the data from the respective platforms for use with sentiment analysis engine
* Platforms chosen specifically to ensure diverse demographic (age groups)

### Technologies   
* NodeJs
* JavaScript
  * jQuery
  * Embedded JavaScript (EJS) 
  * PaperScript
  * Apiheap.js
* HTMl, CSS
* Heroku

# TODO  
- [ ] Save data to database for analysis of change over time
- [ ] Frequent words Wordmap
- [ ] Context
  - [ ] Count exclamation marks
  - [ ] Count consecutively repeated letters
  - [ ] Compare with long term data from database
  - [ ] Use data from movie reviews, other sources
  - [ ] Use data from surely positive/surely negative sources (positive news, etc)
  - [ ] Use letter cases before converting to lowercase
- [ ] Markov chains to predict search queries

# TODOs not related to Dev
- [ ] Add travis build buttons to documentation
- [ ] Include screenshots of usability

# License
Internet-thoughts is licensed under [MIT](https://opensource.org/licenses/MIT)
