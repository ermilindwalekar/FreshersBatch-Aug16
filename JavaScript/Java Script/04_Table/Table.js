function table() {
	
	var first_no = document.getElementById('first_no').value;
	var i;
	for(i=1;i<=10;i++){
		document.write(i*first_no+" ");
	}
	myFunction();
}
function myFunction(){
  	var txt;
   	var r = confirm("Want to generate another table?");
   	if (r == true) {
    	   txt = "You pressed OK!";
    	   window.location="Table.html";
   	} else {
    	   txt = "Thanks !";
   	}
 }

