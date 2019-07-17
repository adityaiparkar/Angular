function Fibonacci(n : number)
{
    var t1=1,t2=1,next=2;
    while(t1<=n)
    {
        console.log(" "+t1);
        next=t1+t2;
        t1=t2;
        t2=next;
    }
}
Fibonacci(21);
