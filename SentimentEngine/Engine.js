<<<<<<< HEAD


function Engine(){
  //NEEDTODEFINE
  this.words ={};
  this.allText;

  //Method to add individual elements to hashmap
  this.addToMap=function(text, value){
    this.words[text]=value;
  }

  this.loadMap = function(){
    var file="Corpus.txt";
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function (){
          if(rawFile.readyState === 4){
              if(rawFile.status === 200 || rawFile.status == 0){
                  var lines = rawFile.responseText.split('\n');
                  for(var line = 0; line < lines.length; line++){
                      //add
                      var tokens=lines[line].split(" ");
                      this.addToMap(tokens[0],tokens[1]);
                  }
              }
          }
      }
      rawFile.send(null);
  }


  //feed in twitter as text
  this.analyse=function(text){
    var word = this.result.split(' ');
    var total;
    var amount = word.length;
    for (var i=0;i< word.length;i++){

      //check if contained
      if (this.word[i] in words){
        total+=this.words[word[i]];
      }
      //otherwise dont add anything and subtract from total wrods;
      else{
        amount-=0;
      }
    }
    total/=amount;
    return total;
  }
}

var engine = new Engine();
engine.loadMap();
=======
function Engine(){
  //NEEDTODEFINE
  readTextFile("file:///C:/your/path/to/file.txt");
  this.words ={};
  this.allText;
  this.loadMap(file);

  //Method to add individual elements to hashmap
  this.addToMap(text, value){
    this.words[text]=value;
  }

  //Method to load hashmap from words
  //TODO Checksyntax and if file i/o works
  this.loadMap(file){
    document.getElementById(file).onchange = function(){

      var file = this.files[0];

      var reader = new FileReader();
      reader.onload = function(progressEvent){

        // By lines
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            //add
            var tokens=lines[line].split(" ");
            this.addToMap(tokens[0],tokens[1]);
        }
      }
      reader.readAsText(file);
    }
  }

  //feed in twitter as text
  this.analyse(text){
    var word = this.result.split(' ');
    var total;
    var amount = word.length;
    for (var i=0;i< word.length;i++){

      //check if contained
      if (this.word[i] in words){
        total+=this.words[word[i]];
      }
      //otherwise dont add anything and subtract from total wrods;
      else{
        amount-=0;
      }
    }
    total/=amount;
    return total;
  }
}
>>>>>>> 6c27fb5b8a29d04e9e02aac08ccfc5045976326c
