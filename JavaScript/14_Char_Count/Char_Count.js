function count(){
	var myString = document.getElementById("input").value;
	var withoutSpace = myString.replace(/ /g,"");
	var length = withoutSpace.length
	alert("No of Characrets are "+ length);
}