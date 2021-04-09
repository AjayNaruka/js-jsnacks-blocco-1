console.log("SNACK 1\n---------------")

var num1 = prompt("Inserisci numero")
var num2 = prompt("Inserisci numero")

if(num1>num2){
  console.log("Il PRIMO numero è maggiore")
} else if(num1<num2){
  console.log("Il SECONDO numero è maggiore")
} else{
  console.log("I numeri sono uguali")
}

/////////////////////////////////////////
console.log("SNACK 2\n---------------");
var s1_str1 = prompt("Inserisci una parola");
var s1_str2 = prompt("Inserisci una parola");

if(s1_str1.length >s1_str2.length){
  console.log(s1_str2);
  console.log(s1_str1);
} else if(s1_str1.length < s1_str2.length){
  console.log(s1_str1);
  console.log(s1_str2);
}else{
  alert("Parole lunghe uguali")
}

/////////////////////////////////
console.log("SNACK 3\n---------------");
var s3_somma =0;
var s3_number;
for(var s3_counter = 0; s3_counter<10;s3_counter++){
  s3_number=parseInt(prompt("Inserisci un numero (" +(s3_counter+1)
   +")"));
  s3_somma =s3_somma+s3_number;
}
console.log(s3_somma);

///////////////////////////////////
console.log("SNACK 4\n---------------");
var s4_list = ["Ajay", "Paolo", "Luca", "Davide","Ettore"];
var s4_name = prompt("Inserisci il tuo nome ( Case sensitive )");
var s4_flag =false;

for(var s4_i=0;s4_i<s4_list.length;s4_i++){
  if(s4_list[s4_i] === s4_name){
    s4_flag = true;
    break;
  }
}
if(s4_flag){
  console.log("Sei stato invitato");
} else{
  console.log("Non sei stato invitato")
}

////////////////////////////
console.log("SNACK 5\n---------------");
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
