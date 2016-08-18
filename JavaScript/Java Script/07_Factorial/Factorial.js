function factorial(){
var input=document.getElementById('input1').value;  
var result=input;
for(var i=input-1;i >0;i--){
    result = i * result;
  }
  document.write("Factorial of "+input+" is "+result);
}