var str = "Quick Brown Fox jumps Over a Lazy Dog";

function countVovel(){
     var a=0,e=0,i=0,o=0,u=0;
     for(var x=0;x<str.length;x++){
        switch (str[x]){
        case'a':
        case'A':
        a++;
        break;

        case 'e':
        case 'E':
        e++;
        break;

        case 'i':
        case 'I':
        i++;
        break;

        case 'o':
        case 'O':
        o++;
        break;

        case 'u':
        case 'U':
        u++;
        break;
      }
    }
  document.write("a="+a+" e="+e+" i="+i+" o="+o+" u="+u);  
  }