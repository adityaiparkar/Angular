class stud
{
    name : string;

    constructor(value : string)
    {
        this.name=value;
    }

    displaystud():void
    {
        console.log("Name is : "+this.name);
    }
}

class emp extends stud
{
    eid : number;
    
    constructor(value : number, name : string)
    {
        super(name);
        this.eid=value;
    }

    displaye():void
    {
        console.log("Eid is : "+this.eid);
    }
}

var obj=new emp(101,"Aditya");
obj.displaystud();
obj.displaye();
