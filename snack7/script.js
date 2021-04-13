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