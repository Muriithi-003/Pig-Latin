var word;
var index;
var condition=false;
var conditionQ=false;
var vowels=[];

//UI logic
$(document).ready(function(){
   placeVowels();
   word=prompt("Enter a word");
   findQU(word);
  if(conditionQ){
    word+=word.slice(0,index+2);
    word=word.slice(index+2,word.length) + 'ay';
    alert(word);
  }
  else{
    condition=findVowel(word.charAt(0));
    reason();
  }
});

//Business Logic
function placeVowels(){
  vowels=["a","e","i","o","u"];
}
function findVowel(character){
  for(var i=0;i<vowels.length;i++){
    if(character==vowels[i]){
      return true;
    }
  }
}
function reason(){
  if(condition){
     alert(word + "ay");
  }
  else{
     condition=findVowel(word.charAt(1));
     if(condition){
       word+=word.charAt(0) + 'ay';
       word=word.slice(1,word.length);
       alert(word);
     }
     else{
       word+=word.charAt(0) + word.charAt(1) + 'ay';
       word=word.slice(2,word.length);
       alert(word);
     }
  }
}
function findQU(words){
  for(var i=0;i<words.length;i++){
     if(words[i]=='q'){
        if(words[i+1]=='u'){
            index=i;
          conditionQ = true;
          return  null;
        }
        else{
          conditionQ=false;
        }
     }
     else{
      conditionQ=false;
     }
  }
}
