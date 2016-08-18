function isChar(){
     flag=1;
	   var name=document.getElementById("name").value;
	
	if(name=="")
	{
        document.getElementsByTagName('input')[0].style.border = "1px solid red";
         document.getElementById("name").focus();
		 flag=0;
	}
	for(var i=0;i<name.length;i++)
	{   var w=name.charAt(i);
		if(w<(65)||w>(90)||w<(97)||w>122)
		{ 
		   //document.getElementsById("l_name").setAttribute("class", "label label-warning");
		   document.getElementById("l_name").innerHTML = "Please enter a valid name";
		   document.getElementById("name").focus();
		    document.getElementById("name").value="";
		    document.getElementsByTagName('input')[0].style.border = "1px solid red";
		    flag=0;
		    //document.getElementsByTagName('input')[0].style.borderWidth = "1px";
		  break;
        }
    }

    if(flag==1)
         { 
           document.getElementById("l_name").innerHTML = "Name:";
           document.getElementsByTagName('input')[0].style.border = "1px solid green";
           
         } 
         

}

function isCharseller(){
     flag=1;
     var name=document.getElementById("seller_name").value;
  
  if(name=="")
  {
        document.getElementsByTagName('input')[0].style.border = "1px solid red";
         document.getElementById("seller_name").focus();
     flag=0;
  }
  for(var i=0;i<name.length;i++)
  {   var w=name.charAt(i);
    if(w<(65)||w>(90)||w<(97)||w>122)
    { 
       //document.getElementsById("l_name").setAttribute("class", "label label-warning");
       document.getElementById("l_seller_name").innerHTML = "Please enter a valid name";
       document.getElementById("eller_name").focus();
        document.getElementById("seller_name").value="";
        document.getElementsByTagName('input')[2].style.border = "1px solid red";
        flag=0;
        //document.getElementsByTagName('input')[0].style.borderWidth = "1px";
      break;
        }
    }

    if(flag==1)
         { 
           document.getElementById("l_seller_name").innerHTML = "Name:";
           document.getElementsByTagName('input')[2].style.border = "1px solid green";
           
         } 
         

}

function checkPwd()
{
  var pwd = document.getElementById("pwd").value;
   var con_pwd = document.getElementById("con_pwd").value;
  if(pwd != con_pwd)
  {
        document.getElementById("l_pwd").innerHTML = "The two values must be same";
        document.getElementById("l_pwd").focus();
        document.getElementById("l_pwd").value="";
        document.getElementById("l_c_pwd").value="";
        document.getElementsByTagName('input')[3].style.border = "1px solid red";
        document.getElementsByTagName('input')[4].style.border = "1px solid red";
  }
  else if(pwd == "")
  {
  	   document.getElementById("l_pwd").innerHTML = "*Compulsory field";
       document.getElementById("l_pwd").focus();
       document.getElementsByTagName('input')[3].style.border = "1px solid red";
  }
  else if(con_pwd == "")
  {
  	   document.getElementById("l_c_pwd").innerHTML = "*Compulsory field";
       document.getElementById("l_c_pwd").focus();
       document.getElementsByTagName('input')[4].style.border = "1px solid red";
  }
  else
  {
     document.getElementById("l_pwd").innerHTML = "Password";
     document.getElementById("l_c_pwd").innerHTML = "ConfirmPassword";
     document.getElementsByTagName('input')[3].style.border = "1px solid green";
      document.getElementsByTagName('input')[4].style.border = "1px solid green";
    
  }
}
function ismail()   
{
	var email=document.getElementById("mail").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.match(mailformat))  
	{ 
      document.getElementById("mail").innerHTML = "Mail:";
	  document.getElementsByTagName('input')[2].style.border = "1px solid green";	
	   
	}  
	else  
	{  
	   document.getElementById("l_mail").innerHTML = "Please enter a valid mail";
	   document.getElementById("mail").focus();
	   document.getElementById("mail").value="";
	   document.getElementsByTagName('input')[2].style.border = "1px solid red";
		  
    }
}



function ismailseller()   
{
  var email=document.getElementById("seller_mail").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if(email.match(mailformat))  
  { 
      document.getElementById("seller_mail").innerHTML = "Mail:";
    document.getElementsByTagName('input')[3].style.border = "1px solid green"; 
     
  }  
  else  
  {  
     document.getElementById("l_seller_mail").innerHTML = "Please enter a valid mail";
     document.getElementById("seller_mail").focus();
     document.getElementById("seller_mail").value="";
     document.getElementsByTagName('input')[3].style.border = "1px solid red";
      
    }
} 


