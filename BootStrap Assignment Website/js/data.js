/*cities*/

var city = ['Select City','Indore','Bhopal','Pune','Jaipur','Bombay','Delhi'];
function showCities()
{
	var cityList = document.getElementById("city");
	var i;
    for(i=0;i<city.length;i++)
	{
		var  opt = document.createElement("option");
		opt.text= city[i];
		cityList.add(opt);
	}

}
var categories = ['Select Category','Furniture','Electronics','Mobiles & Tablets','Pets','Automobile','Real Estate'];
function showCategory()
{
	var categoryList = document.getElementById("cat");
	var i;
    for(i=0;i<categories.length;i++)
	{
		var  opt = document.createElement("option");
		opt.text= categories[i];
		categoryList.add(opt);
	}

}


/*====================================js for product category==============================*/
/* var p_category = ['Select Category','Mobiles','Cars And Bikes','Electronics','Pets','Furnitures'];
function showPCategory()
{
	var proList = document.getElementById("pro_category");
	var i;
    for(i=0;i<proList.length;i++)
	{
		var  opt = document.createElement("option");
		opt.text= p_category[i];
		proList.add(opt);
	}
}*/
/*====================================js for product category Ends==============================*/


  var categories = [{capt:"AllCategories" ,srcs: "images/category.png"},{capt:"Mobiles" ,srcs: "images/mobile.png"},{capt:"Cars and Bikes" ,srcs: "images/car.png"},{capt:"Electronics" ,srcs: "images/tv.png"},{capt:"Pats" ,srcs: "images/pets.png"},{capt:"Furnitures" ,srcs: "images/sofa.png"}];
function addCategories()
{
	var i;
	
    
    

          var sel=document.getElementById("ulLink");
		//document.getElementById("ulLink").innerHtml="<li><a href='#'><figure><img src='"+categories[i].srcs+"' width='50px' height='50px'><figcaption></figcaption></figure></a></li>";
		for(var i = 0; i < categories.length; i++) {
	    var opt = document.createElement("li");
	    opt.className = "listing";
	    opt.innerHTML = "<a href='#'><figure><img src='"+categories[i].srcs+"' width='50px' height='50px'><figcaption>"+categories[i].capt+"</figcaption></figure></a>";
	    //opt.value = categories[i];
	    sel.appendChild(opt);
		}
  
 //    var fig = document.createElement("figure");
 //    fig
 //    var capt = document.createElement("capt");
	// for(i=0;i<categories.length;i++)
	// {
	// 	ulList.add("<figure>"+);
	// }

}




function Mobile(mId,mName,mImage,mBattery,mPrice)
{
	this.mId = mId;
	this.mName =mName;
	this.mImage =mImage;
	this.mBattery =mBattery;
	this.mPrice =mPrice;
}
function MobileArray()
{
	var m1 = new Mobile('m01','Lenovo Note K3','#','3000mah','10000');
	var m1 = new Mobile('m02','Lenovo Note K3','#','3000mah','10000');
    var m1 = new Mobile('m03','Lenovo Note K3','#','3000mah','10000');
    var m1 = new Mobile('m04','Lenovo Note K3','#','3000mah','10000');
    var m1 = new Mobile('m05','Lenovo Note K3','#','3000mah','10000');
}


/*var uname = document.getElementById("name");
var uemail = document.getElementById("email");
var uname = document.getElementById("contact_no");
var uname = document.getElementById("password");


var user = [{id:}];
 */
