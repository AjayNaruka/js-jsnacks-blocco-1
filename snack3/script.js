var s3_somma =0;
var s3_number;
for(var s3_counter = 0; s3_counter<10;s3_counter++){
  s3_number=parseInt(prompt("Inserisci un numero (" +(s3_counter+1)
   +")"));
  s3_somma =s3_somma+s3_number;
}
console.log(s3_somma);