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