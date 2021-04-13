var s6_n = parseInt(prompt("Inserisci un numero: "));
var s6_sum =0;

for( var s6_index = 0; s6_index<=s6_n ; s6_index++){
  s6_sum += Math.pow(s6_index,3);
}
console.log("La somma dei cubi e' : "+s6_sum);