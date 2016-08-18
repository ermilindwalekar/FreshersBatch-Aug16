
this.numOfTries = 0;

function authenticate() {

var userid=document.getElementById('input1').value;  
var password=document.getElementById('input2').value;  

 if(++this.numOfTries > 2) {
   alert('You have reached the maximum number of tries!');
   location.replace("Error.html"); 
 }
 if (userid == "Milind" || password == "Xoriant") {
   document.write("Logged In");
 }
 else{
 	alert("Wrong Credentials");	
}
}