function ChkArmstrong (n : number) : number
{
    var remainder;
    var addition=0;
    var flag;
    var num;

    flag=num;
    while(num > 0)
		{
			remainder = num%10;
			addition = addition + remainder*remainder*remainder;
			num = (num/10);
		}

        if(addition == flag)
        {
            return 1;
        }
        else		
}   
ChkArmstrong(153);

