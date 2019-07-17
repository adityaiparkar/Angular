function maximum(arr : number) : number
{
    var biggestnum = 0;
	var arr1 :number[] = [23, 89, 6 ,29 ,56, 45, 77, 32];
    for(var i=1; i<arr1[i]; i++) 
    {
        console.log(arr1[i]);
        if(arr1[i] > biggestnum) 
        {
			biggestnum = arr1[i];
		}
	}
	return biggestnum;
}

var iret : number
iret = maximum(iret);
console.log("maximum is : "+iret); 