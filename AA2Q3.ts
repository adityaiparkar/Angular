function Maximum(arr : number) : number
{
    var second=0;
    var first=0;
    var arr1 : number[] = [23,89,6,29,56,45,77,32];
    for (var i = 0; i < arr1.length; i++) 
    {
            
            console.log(arr1[i]);
            if(first < arr1[i])
            {
                second=first;
                first=arr1[i];
            }
            else if(second < arr1[i])
            second=arr1[i];
    }
    return second;
}
var iret : number
iret = Maximum(iret);
console.log("second maximum is :"+iret);