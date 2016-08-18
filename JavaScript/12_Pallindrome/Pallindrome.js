var count=0;
  
function isPallindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function consonants_count(str){
 var consonant_list = ' bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
 var c_count = 0;
 
 for(var x = 0; x <str.length ; x++){
    if (consonant_list.indexOf(str[x]) !== -1){
        c_count += 1;
        }
    }
 return c_count;
}
function checkpallindrome(){
    var str=document.getElementById('input').value;
    var check=isPallindrome(str);
    var result= consonants_count(str);
    document.write("Number is Pallindrome? "+check+"  ");
    document.write("Number of Consonant? "+result);

}