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
    for (var key in toUpdate) {
        studOne["".concat(key)] = toUpdate[key];
    }
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
function isLead(employee, employees) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].lead === employee) {
            return true;
        }
    }
    return false;
}
function printLeadStatus(employees) {
    employees.forEach(function (employee) {
        if (isLead(employee, employees)) {
            console.log("".concat(employee.name, " is Lead"));
        }
        else {
            console.log("".concat(employee.name, " is not Lead"));
        }
    });
}
printLeadStatus(employees);
