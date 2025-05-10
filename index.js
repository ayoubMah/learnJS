console.log('Happy developing ✨')

function multiply(x,y){
  console.log("the product of "+x+"and "+y+" is: ");
  return x*y;
}

console.log(multiply(3,3));

function yell(lowerCase){
  return lowerCase.toUpperCase();
}

console.log(yell("ji"));

function longer(str1, str2){
  if(str1.longer > str2.longer){
    return str1 + " is longer than"+ str2;
  }
  return str2 + " is longer than"+ str1;
}

console.log(longer("Ayoub is the best programer in the world " , "wefrgrewadfsv"));
