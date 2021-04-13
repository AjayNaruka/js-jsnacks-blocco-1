var s8_request = false;
while(!s8_request){
  var s8_num = prompt("Inserisci un numero a 4 cifre");
  var s8_nC=0;
  for( var s8_i=0; s8_i<s8_num.length;s8_i++){
    s8_nC++  
  }
  if(s8_nC==4){
    s8_request=true;
  }
}
console.log("Numero inserito: "+s8_num);

// SEPARAZIONE CARATTERI

var s8_splitArray=[];
//console.log(s8_splitArray)
s8_num.toString();
for(s8_i=0;s8_i<4;s8_i++){
  s8_splitArray[s8_i]= s8_num.charAt(s8_i);
}
console.log(s8_splitArray)
//STAMPA SINGOLI DIGITS
console.log("Digits:\n")
for(s8_i=0;s8_i<4;s8_i++){
  console.log(s8_splitArray[s8_i]);
}

// SOMMA DIGITS
var s8_sum=0;
for(s8_i=0;s8_i<s8_splitArray.length;s8_i++) s8_sum +=parseInt(s8_splitArray[s8_i]);
console.log("La somma dei caratteri e': "+s8_sum);