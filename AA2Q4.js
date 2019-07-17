function ChkArmstrong(n) {
    var remainder;
    var addition = 0;
    var flag;
    var num;
    flag = num;
    while (num > 0) {
        remainder = num % 10;
        addition = addition + remainder * remainder * remainder;
        num = (num / 10);
    }
    if (addition == flag) {
        return 1;
    }
    else
        return 0;
}
console.log(ChkArmstrong(153));
