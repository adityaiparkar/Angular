function Chkstring(x : string)
{
    var str : string = "Pune Kothrud Marvellous Infosystems";
	var substr : string= "Marvellous";
    if(str.indexOf(substr) != -1)
    {
		console.log(str + " contains " + substr);
	}
	else
		console.log(str + " does not contain " + substr);

}
Chkstring("substr");