var student = /** @class */ (function () {
    function student(value) {
        this.name = value;
    }
    student.prototype.display = function () {
        console.log("name of student is : " + this.name);
    };
    return student;
}());
var obj = new student("Aditya Iparkar");
obj.display();
