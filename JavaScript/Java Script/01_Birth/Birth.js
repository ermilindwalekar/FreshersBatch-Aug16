function calculateYear() {
	var age = document.getElementById('age').value;
	var obj = new Date();
	var year = obj.getFullYear();   
	var result= year-age;
	alert("Birth Year is:" + result);
}
