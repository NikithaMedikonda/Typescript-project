var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var studOne = {
    name: "nikki",
    age: 20,
    email: "nikki@gmail.com",
    address: {
        city: " hyderabad",
        state: "telangana",
        pincode: 500062
    }
};
var toUpdate = {
    name: "Nikitha",
    email: "nikitha@gmail.com"
};
function updateStudent(studOne, toUpdate) {
    return __assign(__assign({}, studOne), toUpdate);
    console.log("pick");
    console.log(studOne);
}
updateStudent(studOne, toUpdate);
function checkType(value) {
    return (typeof value === "string" ? "YES" : "NO");
}
console.log(checkType("hello"));
console.log(checkType(123));
var emp1 = {
    name: "nikki",
    e_id: 1
};
var emp2 = {
    name: "usha",
    e_id: 2,
    lead: emp1
};
var emp3 = {
    name: "mamatha",
    e_id: 3,
    lead: emp2
};
console.log(emp3);
var employees = [emp1, emp2, emp3];
function isLeadRecursive(employee, employees) {
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var emp = employees_1[_i];
        if (emp.lead === employee || (emp.lead && isLeadRecursive(employee, [emp.lead]))) {
            return true;
        }
    }
    return false;
}
function printLeadStatus(employees) {
    employees.forEach(function (employee) {
        if (isLeadRecursive(employee, employees)) {
            console.log("".concat(employee.name, " is Lead"));
        }
        else {
            console.log("".concat(employee.name, " is not Lead"));
        }
    });
}
printLeadStatus(employees);
