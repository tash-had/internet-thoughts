var words = {}

function addToMap(text, value){
    words[text]=value;
  }
function Engine(){
  //NEEDTODEFINE
  words ={};
  this.allText;

  //Method to add individual elements to hashmap
  //this.

  this.loadMap = function(){
    var file="https://raw.githubusercontent.com/tash-had/YHack_2016/master/SentimentEngine/Corpus.txt";
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function (){
          if(rawFile.readyState === 4){
              if(rawFile.status === 200 || rawFile.status == 0){
                  var lines = rawFile.responseText.trim().split('\n'), line;
                  for(line = 0; line < lines.length; line++){
                      var tokens = [lines[line].substring(0, lines[line].lastIndexOf(" ")),
                      lines[line].substring(lines[line].lastIndexOf(" "), lines[line].length-1).trim()];
                      addToMap(tokens[0],tokens[1]);
                  }
              }
          }
      }
      rawFile.send(null);
  }


  //feed in twitter as text
  this.analyse=function(text){
    text=text.toLowerCase();
    var word = text.split(' ');
    var total=0;
    var amount = word.length;
    for (var i=0;i< word.length;i++){

      //check if contained
      if (word[i] in words){
        total+=parseInt(words[word[i]]);
      }
      //otherwise dont add anything and subtract from total wrods;
      else{
        amount-=1;
      }
    }
    if(amount===0){
      return 0;
    }
    else{
      total/=amount;
      return total;
    }
  }

  //return the top n most used words
  this.getTopWords=function(text,numberOfWords){
    //count each occurance
    text=text.toLowerCase();
    var word = text.split(' ');

    //count occurances of each word
    var occurances ={};
    for (var i=0;i<word.length;i++){
      if (word[i] in occurances){
        occurances[word[i]] ++;
      }
      else{
        occurances [word[i]]=1;
      }
    }
    //sort
    var keySorted = Object.keys(occurances).sort(function(a,b){return occurances[b]-occurances[a]});
    //returns a list of the most used words
    return keySorted.slice(0,Math.min(numberOfWords, keySorted.length));

  }
}

var engine = new Engine();
engine.loadMap();
var test = "Memes are good memes";
console.log(engine.analyse(test));
console.log(engine.getTopWords(test,3));
