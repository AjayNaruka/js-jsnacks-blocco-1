console.log("SNACK 1\n---------------")

var num1 = parseInt(prompt("Inserisci numero"))
var num2 = parseInt(prompt("Inserisci numero"))

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

///////////////////////////
console.log("SNACK 6\n---------------");
var s6_n = parseInt(prompt("Inserisci un numero: "));
var s6_sum =0;

for( var s6_index = 0; s6_index<=s6_n ; s6_index++){
  s6_sum += Math.pow(s6_index,3);
}
console.log("La somma dei cubi e' : "+s6_sum);

//////////////////////////
console.log("SNACK 7\n---------------");
var s7_numero=2;
var s7_boolean = false;
var s7_power =1;
var s7_numpow;

while(!s7_boolean){
  s7_numpow =Math.pow(s7_numero,s7_power);
  if(s7_numpow<1000){
    s7_power++;
    console.log(s7_numpow)
  }else{
    s7_boolean=true;
  }
}

/////////////////////////////
console.log("SNACK 8\n---------------");
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

/////////////////////////////////////
console.log("SNACK 9\n---------------");
var s9_counter =0;
var s9_array= [];

for(s9_index=0; s9_index<10;s9_index++){
  var s9_numInput =parseInt(prompt("Inserisci un numero: "))
  if(!isNaN(s9_numInput)){ /* CONTROLLO NUMERO */
    s9_array[s9_index]= s9_numInput;
  } else{
    s9_index--;
  }
}
console.log(s9_array);

//CALCOLO SOMMA
var s9_sum =0;
for(s9_index =0;s9_index<s9_array.length;s9_index++) s9_sum += s9_array[s9_index];
console.log("La SOMMA dei numeri e' : \n"+s9_sum);

//CALCOLO MEDIA
var s9_media = s9_sum/s9_array.length;
console.log("La MEDIA dei numeri e' : \n"+s9_media);