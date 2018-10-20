var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setData = function (getname, getrollno) {
        this.name = getname;
        this.rollno = getrollno;
    };
    return Student;
}());
var s = new Student();
s.setData("Anish", 24);
console.log(s);
