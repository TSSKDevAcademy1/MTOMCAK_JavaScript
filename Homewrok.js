/* JAVASCRIPT */
// 20.7.2015 //

// count volwes from string
function CountVowels(Str){
  var stringLenght = Str.length - 1;
  var index,i, j, numOfVowels = 0;
  var Volwes = ['a', 'e', 'i', 'o', 'u'];
 // console.log(stringLenght);
  for (i = 0; i <= stringLenght; i++ ){ 
    for (j = 0; j <= 4; j++)
      {
        // lover Case
        if (Str[i] === Volwes[j])
          {
            ++numOfVowels;
          }
        // upper Case
        else if (Str[i] === Volwes[j].toUpperCase())
          {
            ++numOfVowels;
          }
      }
  }
  return numOfVowels;  
}

console.log(CountVowels("Hello world"));


function swapcase(myString){
  var i;
  var stringLenght = myString.length-1;
  var char = new Array(stringLenght);
     for (i = 0; i <= stringLenght; i++ ){
      if(myString[i] === myString[i].toUpperCase())  {
         char[i] = myString[i].toLowerCase();
       }  
     else {
    char[i] = myString[i].toUpperCase();
         }
     }
  return char;
}
console.log(swapcase("AhOj"));

// reverse string
function reverse(myString){
  var i;
  var stringLenght = myString.length-1;
  var char = new Array(stringLenght);
     for (i = 0; i <= stringLenght; i++ ){
        char[i] = myString[stringLenght - i ];
     }
  return char;
}
console.log(reverse("Hello world !"));

// Capitalize !
function capitalize(myString){
  var i;
  var stringLenght = myString.length;
  var char = new Array(stringLenght);
  char[0] = myString[0].toUpperCase();
  if (stringLenght > 1){
     for (i = 1; i < stringLenght; i++ ){
        if (myString[i] === " " && i+1 != stringLenght)
          {
            char[i] = myString[i].toUpperCase();
            i++;
            console.log(i);
            char[i] = myString[i].toUpperCase();
          }
       else {
         char[i] = myString[i];
       }
     }
  }
  return char;
}
console.log(capitalize("  This text is capital   "));

/* greatest common divisor */
// noprotect
function gcd(int_1, int_2){
  var h, num_1, num_2;
  num_1 = int_1;
  num_2 = int_2;
do{
  if (num_1 < num_2)
    {
      h = num_1;
      num_1 = num_2;
      num_2 = h;
    }
  num_1 = num_1%num_2;
  } while(num_1 != 0);
    return num_2;
}
console.log(gcd(17,12));

function center(width, text){
  
  var textLength, textNew = [], diff, diff_2, j;
  textLength = text.length;
  diff = width - textLength;
  diff_2 = Math.round(diff/2);
  j = diff_2;
  
  if (width > textLength){
    for (var i = 0; i < width; i++ )
      {
        if(i < diff_2){
          textNew[i] = " ";
        }
        
        if(i > width - diff_2 - 1){
          textNew[i] = " ";
        }
        
        if(i > diff_2 && i <= width - diff_2) 
          {
            console.log(i - diff_2 - 1);
          }
        
      }
  }
   return textNew;
}
console.log(center(10, "caws"));