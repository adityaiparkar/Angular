function maximum(a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else
        return c;
}
var iret;
iret = maximum(26, 6, 89);
console.log("maximum is : " + iret);
