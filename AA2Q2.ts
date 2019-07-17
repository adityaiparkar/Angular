function summation(arr : number) : number
{
    var arr1 : number[] = [23,6, 7, 4, 5, 7] 
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) 
    {
            console.log(arr1[i]);
            sum =sum + arr1[i];
    }
    return sum;
}
var iret : number
iret = summation(iret);
console.log("summation is : "+iret);
