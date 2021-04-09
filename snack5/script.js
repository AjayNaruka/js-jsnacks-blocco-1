var s5_numbers = [];
var s5_num_i=0;
for( var s5_i = 0; s5_i<6;s5_i++){
  var s5_num  = parseInt(prompt("Inserisci un numero"));
  if(s5_num%2 != 0){
    s5_numbers[s5_num_i]= s5_num;
    s5_num_i++;
  }
}
if(s5_numbers.length !=0){
  for(s5_i=0; s5_i<s5_numbers.length;s5_i++){
    console.log(s5_numbers[s5_i]);
  }
} else {
  console.log("Il vettore è vuoto")
}
