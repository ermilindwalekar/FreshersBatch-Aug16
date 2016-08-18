function BankAccount(accno,accbal,accname,amount)
{
	this.accno=accno;
	this.accbal=accbal;
	this.accname=accname;
	this.amount=amount;
	
	this.withdraw=function(accbal,amount){
		accbal=accbal-amount;
		document.getElementById('bal').value = accbal;
		document.getElementById('amt').value = 0;
	}
	this.deposit=function(accbal,amount){
		accbal=parseInt(accbal)+parseInt(amount);
		document.getElementById('bal').value = accbal;
		document.getElementById('amt').value = 0;
		
	}


}


function withdraw()
{
	var accno=accbal=accname=amount=0;
	var accno =document.getElementById("num").value;
	var accname =document.getElementById("name").value;
	var accbal =document.getElementById("bal").value;
	var amount =document.getElementById("amt").value;
	var myobj = new BankAccount(accno,accbal,accname,amount);
	myobj.withdraw(accbal,amount);
	
}




function deposit()
{
	var accno=accbal=accname=amount=0;
	var accno =document.getElementById("num").value;
	var accname =document.getElementById("name").value;
	var accbal =document.getElementById("bal").value;
	var amount =document.getElementById("amt").value;
	var myobj = new BankAccount(accno,accbal,accname,amount);
	myobj.deposit(accbal,amount);
	
}