function findFromArray(){
	var array = [1,3,2,7,4,0,8,5];
	document.write("Elements of array are ");
	var sum=0;
	for(var i=0;i<array.length;i++)
	{
		document.write(array[i]+" ");
		sum=sum+i;	
	}
	document.write("Max Element is \n"+Math.max.apply(Math,array)+" ");
	
	document.write("Min Element is \n"+Math.min.apply(Math,array)+" ");
	
	document.write("Average Element is \n"+ sum/array.length +" ");
}