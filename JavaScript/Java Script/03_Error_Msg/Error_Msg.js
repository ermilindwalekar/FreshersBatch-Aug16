function error() {
	
	var first_no = document.getElementById('first_no').value;
	var second_no = document.getElementById('second_no').value;
	if(second_no==0)
	alert("Cannot Divide!");
	else
	{
		var result=first_no/second_no;
		document.write("Division is "+result);
	}
}
