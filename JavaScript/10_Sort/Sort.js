this. array = [4, 1, 3, 7, 9, 1];

function display(){
		document.write("Array is ")	;
    
	for(var i=0;i<array.length;i++){
    	document.write(array[i]+" ");	
    }
}
function sortArray() {
   	var a = document.getElementById("mySelect").selectedIndex;
   	  display();
   	  if(a==0)
   	  array.sort(function(a,b){return a-b});
   	  else
   	  array.sort(function(a,b){return b-a});
   	  display();
}


