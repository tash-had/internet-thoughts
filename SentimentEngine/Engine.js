var words = {};

function addToMap(text, value){
    words[text]=value;
  }
function Engine(){
  //NEEDTODEFINE
  words ={};
  //this.allText;

  //Method to add individual elements to hashmap
  //this.

  this.loadMap = function(){
    //TODO Swtich back
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
  //returns {positive, negative}
  this.analyze=function(text){
    text=text.toLowerCase();
    var word = text.split(' ');
    var negative=0;
    var positive=0;
    var total=0;
    for (var i=0;i< word.length;i++){
      //check if contained
      if (word[i] in words){
        var temp=parseInt(words[word[i]]);
        total+=Math.abs(temp);
        if (temp>0){
          positive+=temp;
        }
        else{
          negative-=temp;
        }
      }
    }
    if(total==0){
      return [0,0];
    }
    else{
      return [positive*1.0/total,negative*1.0/total];
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
