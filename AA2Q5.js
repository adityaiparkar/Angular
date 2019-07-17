function Chkstring(x) {
    var str = "Pune Kothrud Marvellous Infosystems";
    var substr = "Marvellous";
    if (str.indexOf(substr) != -1) {
        console.log(str + " contains " + substr);
    }
    else
        console.log(str + " does not contain " + substr);
}
Chkstring("substr");
