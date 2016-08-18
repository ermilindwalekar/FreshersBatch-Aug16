function Remove_Spaces(){
	alert("Hello");
	var str = document.getElementById('input').value;
	document.write("    Before Removal String is: "+ str+" Length is"+ str.length);
	str = str.replace(/ +/g, ' ');
	document.write("    After Removal String is: "+ str+" Length is"+ str.length);
	
}