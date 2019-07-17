function DisplayFactors(a) {
    var i;
    for (i = 0; i < a; i++) {
        if (a % i == 0) {
            console.log(+i);
        }
    }
}
var result;
result = DisplayFactors(20);
console.log("factors are : " + result);
