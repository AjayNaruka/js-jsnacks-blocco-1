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