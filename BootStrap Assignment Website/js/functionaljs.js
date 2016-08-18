/*=========================js for registration  and login block==============================*/


// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup

function div_show() {
   document.getElementById('popupContact').style.display = "block";
  
   document.getElementById('container').style.opacity = "0.5";
}

function div_showRegister() {
   document.getElementById('popupContactRegister').style.display = "block";
}
//Function to Hide Popup

function div_hide(){
    document.getElementById('popupContact').style.display = "none";
    document.getElementById("container").style.opacity = "initial";
}
function divreg_hide(){
    document.getElementById('popupContactRegister').style.display = "none";

}

/*=========================js for registration  and login block   Ends==============================*/



/*=========================js for side navigation bar==============================*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "130px";
    document.getElementById("logo2").style.width = "0px";
    document.getElementById("logo2").style.height = "0px";
    document.getElementById("logo1").style.width = "50px";
    document.getElementById("logo1").style.height = "50px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("logo2").style.width = "50px";
    document.getElementById("logo2").style.height = "50px";
    document.getElementById("logo1").style.width = "0px";
    document.getElementById("logo1").style.height = "0px";

}
//var usercount=0;

/*=========================js for side navigation bar Ends Here==============================*/



 /*===============================user registraiton js starts ==============================*/
function userReg()
{
	
	  var uemail = document.getElementById("mail").value;
    var a = JSON.parse(localStorage.getItem(uemail));

    if(a==null)
    {
    	
          var uname = document.getElementById("name").value;
          var ucontact = document.getElementById("contact").value;
          var upassword = document.getElementById("pwd").value;
          var repassword = document.getElementById("con_pwd").value;

          var user = {username:uname,usercontact:ucontact,userpassword:upassword,userrepassword:repassword};  
          localStorage.setItem(uemail,JSON.stringify(user));

          
          $("#myModal").modal();
    }

    else
    {
           $("#myModal1").modal();
           document.getElementById("mail").value = "sorry u r already registered"+a.username; 
              	
    }
}
/*===============================user registraiton js Ends ==============================*/


/*===========================user login js starts===========================*/
var name='-';
function userLogin()
{
   var uemail = document.getElementById("lusr").value;
   var upassword = document.getElementById("pswd").value;
   
   var a =  JSON.parse(localStorage.getItem(uemail));
    name = a.username;
   if(a==null)
   {
       document.getElementById("lusr").value = "sorry You are not registerd user";
   }
   else if(a.userpassword != upassword)
   {
     document.getElementById("pswd").value = "incorrect password";
   }
   else
   {
          
           var cur = localStorage.getItem('currentUser');
           if(cur==null)
           {

                localStorage.setItem('currentUser',uemail);         
           }
           else if(cur=='0')
           {
               localStorage.setItem('currentUser',uemail);
           }

           window.location="logged.html"   


   }

}
function loggedModal()
{

     $("#lSucessModal").modal();
     $("#loginModal").modal("hide");
     $("#usertitle").html("hello "+name);
  
}
function logout()
{
    localStorage.setItem('currentUser','0');
    $("#usertitle").html("-");
}
/*
$("#inputFile").change(function () {
      readURL(this);
  });


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


*/




function post()
{
  if(name=='-')
      {
        $("#loginModal").modal();
        

      }
      else
      {
        $("#postAdModal").modal("hide");
      }

}



var count;
function storeAd()
{
    
      
     
       
      var temp = localStorage.getItem("count");
      if(temp==null)
      {
        count =0;
      }
      else {
        count = temp;
        count++;
      }


 //    bannerImage = document.getElementById('image_upload_preview');
   //  imgData = getBase64Image(bannerImage);
     





      var type = 'product';
     // var urlImage = new Image();
      //urlImage.src = document.getElementById("inputFile").value; 
      var urlImage = $('#inputFile').val();
      var email = document.getElementById("seller_mail").value;
      var email = document.getElementById("seller_name").value;
      var productName =  document.getElementById("p_name").value;
      var price = document.getElementById("p_price").value;
      var category = document.getElementById("p_category").value;
      var temp = JSON.parse(localStorage.getItem(count));
      
      var product = {type:type,email:email,productName:productName,price:price,category:category,image:urlImage};

      localStorage.setItem(count,JSON.stringify(product));
      localStorage.setItem("count",count);
      
      
      console.log(urlImage);
      
           

}
var  k="";

function adPostShow()
{
      
      var str="";
      var postAdOne =  document.getElementById("postAdOne");
     // var postAddTwo = document.getElementById("postTwo");
      var c = localStorage.getItem("count");
      if(c==null)
      {
        postAdOne.innerHTML = "-";
      }
      
      else
      {
        var k = c;
        k = k-3;
        var three=1;
        while(k!=c)
        {
               
               var o1 =  JSON.parse(localStorage.getItem(c));
               if(o1.type=="product")
               {

                    //var dataImage = o1.image;
                     
                  //var im = "data:image/png;base64," + dataImage;
     

                      var pat = " "+o1.image;
                      var len = pat.length;

                      var ind = pat.indexOf("fakepath");
                      var sr =  pat.substring(12,len);
                      var sr = "images"+sr;

                    str = str +"<div class='col-md-2'><div class='row'><a href='#' class='postlink'><img src='"+sr+"' width='150px' height='150px'></a></div><div class='row'>Item Name   "+o1.productName+"<br>Cost "+o1.price+"<br></div></div><div class='col-md-2'></div>";               
                   if(three==3)
                   {
                       str = "<div class='col-md-1'></div>"+str;
                       three=0;
                   } 
                   three++;
               }
               c--;
        }
        postAdOne.innerHTML = str;
      }


} 





function loadBooks()
{

  /*data-toggle="modal" data-target="#booksModal"*/
      var str="";
      var i;
     var bid = document.getElementById("booksBody");
     var c = localStorage.getItem("count");
    if(c==null){

     }
    else{
      var two =1;
       for(i=7 ;i<c;i++)
       {
               var o1 =  JSON.parse(localStorage.getItem(i));
               if(o1.type=="product" &&o1.category=='Books')
               {

                    str = str +"<div class='col-md-2'><a href='#' class='postlink'><img src='"+o1.url+"' width='150px' height='200px'></a></div><div class='col-md-1'>Item Name   "+o1.productName+"<br>Cost "+o1.price+"<br></div>";               
                   if(two==2)
                   {
                       str = "<div class='col-md-1'></div>"+str+"<div class='col-md-1'></div>";
                       three=0;
                   } 
                   two++;
               }
               
        }
        bid.innerHTML = str;
        $("#booksModal").modal();           
       }

     }


           


















