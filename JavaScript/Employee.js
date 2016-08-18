function EmployeeList(id,name,salary,dept_id)
{
	
this.id=id;
this.name=name;
this.salary=salary;
this.dept_id=dept_id;


	this.sortByEmpId=function(args){
		args.sort(function(a, b){return a.id-b.id});
		for(var i=0;i<4;i++){
		document.write("Id: "+args[i].id+" Name: "+args[i].name+" Salary: "+args[i].salary+"Dept_Id: "+args[i].dept_id);
		document.write("\n");
		}
	}
	
	this.sortByDeptId=function(args){
		args.sort(function(a, b){return a.dept_id-b.dept_id});
		for(var i=0;i<4;i++)
		document.write("Id: "+args[i].id+" Name: "+args[i].name+" Salary: "+args[i].salary+"Dept_Id: "+args[i].dept_id);
	}
	
	this.sortBySalary=function(args){
			args.sort(function(a, b){return a.salary-b.salary});
		for(var i=0;i<4;i++)
		document.write("Id: "+args[i].id+" Name: "+args[i].name+" Salary: "+args[i].salary+"Dept_Id: "+args[i].dept_id);
	}
}

function sortEmployee(){
	var obj1=new EmployeeList(101,"asd",1000,550);
	var obj2=new EmployeeList(401,"as",100100,661);
	var obj3=new EmployeeList(1232,"xyz",801000,123);
	var obj4=new EmployeeList(345,"abc",90150,789);
	var obj=[obj1,obj2,obj3,obj4];
	
	
	var operation=document.getElementById("operation").value;
	
	if(operation=='emp_id'){obj1.sortByEmpId(obj);}
	else if(operation=="dept_id"){obj1.sortByDeptId(obj);}
	else{obj1.sortBySalary(obj);}
}

