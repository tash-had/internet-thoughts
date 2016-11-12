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
        total+=words[word[i]];
      }
      //otherwise dont add anything and subtract from total wrods;
      else{
        amount-=1;
      }
    }
    if(amount==0){
      return 0;
    }
    else{
      total/=amount;
      return total;
    }
  }
}

var engine = new Engine();
engine.loadMap();
console.log(engine.analyse("Cool stuff I eat ass and makes me confused"));
