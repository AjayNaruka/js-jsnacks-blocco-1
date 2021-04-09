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