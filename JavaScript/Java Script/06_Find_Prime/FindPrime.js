function printPrime(){
   var val1 = document.getElementById('input1').value;
   var val2 = document.getElementById('input2').value;
   for(var i=val1;i<=val2;i++){
     if(isPrime(i)){
       document.write(i+" ");
     }
   }
}

function isPrime(n) {

   if (n < 2) {return false}
   if (n != Math.round(n)) {
    return false
  }
  var isPrime = true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
     if (n % i == 0) {isPrime = false}
  }
  return isPrime;

}