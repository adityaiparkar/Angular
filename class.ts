class student
{
    name : string;

    constructor(value:string)
    {
        this.name=value;
    }

    display():void
    {
        console.log("name of student is : "+this.name);
    }
}
var obj = new student("Aditya Iparkar");

obj.display();



