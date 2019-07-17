function Chkprime(a : number) : number
{
    for (var c = 2 ; c <= a - 1 ; c++ )
    { 
       if ( a%c == 0 )
      return 0;
    }
    return 1;
    
}
var iret : number
iret=Chkprime(11);
if(iret==1)
    console.log("PRIME");
else
    console.log("NOT prime");

