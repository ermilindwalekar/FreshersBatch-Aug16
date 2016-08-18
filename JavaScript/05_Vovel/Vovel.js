
function checkVovel(){
  var str = document.getElementById('input').value;
  if(str.length!=1){
    alert("Please enter single letter");
    window.document("Vovel.html");
  }
  else{
  var patt = new RegExp("[AEIOUaeiou]");
  var res = patt.test(str);
    if(res)
    alert("It is a vovel");
    else
    alert("Not a vovel");
  }
}