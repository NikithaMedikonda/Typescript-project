"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Student = /** @class */ (function () {
    function Student(name, age, email, courseList, city, state, pincode) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseList = courseList;
        this.address = {
            city: city,
            state: state,
            pincode: pincode
        };
    }
    Student.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Email: ".concat(this.email));
        console.log("Courses: ".concat(this.courseList.join(', ')));
        console.log("Address:");
        console.log("City: ".concat(this.address.city));
        console.log("State: ".concat(this.address.state));
        console.log("Pincode: ".concat(this.address.pincode));
    };
    return Student;
}());
var student = new Student("Nikki", 20, "nikitha@gmail.com", ["HTML", "CSS"], "hyderabad", "telangana", 500062);
student.getDetails();
console.log((0, utils_1.value)(7));
console.log((0, utils_1.value)("nikki"));
var student1 = {
    name: "nikki",
    age: 20,
    address: "hyd"
};
//student1.age = 21; raises error
var studentPartial = {
    name: "Nikki"
};
var studentRequired = {
    name: "nikki",
    age: 20,
    address: "hyderabad"
};
var studentOmit = {
    name: "nikki"
};
var studentpick = {
    name: "Alice",
    age: 25
};
var courserecord = {
    HTML: 1,
    CSS: 2,
    Javascript: 3,
    TypeScript: 4
};
