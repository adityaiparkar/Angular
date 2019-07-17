var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var stud = /** @class */ (function () {
    function stud(value) {
        this.name = value;
    }
    stud.prototype.displaystud = function () {
        console.log("Name is : " + this.name);
    };
    return stud;
}());
var emp = /** @class */ (function (_super) {
    __extends(emp, _super);
    function emp(value, name) {
        var _this = _super.call(this, name) || this;
        _this.eid = value;
        return _this;
    }
    emp.prototype.displaye = function () {
        console.log("Eid is : " + this.eid);
    };
    return emp;
}(stud));
var obj = new emp(101, "Aditya");
obj.displaystud();
obj.displaye();
