type Student = {
    name : string;
    age : number;
    email : string;
    address : {
        city : string;
        state : string;
        pincode : number;
    }
}

const studOne: Student = {
    name : "nikki",
    age : 20,
    email : "nikki@gmail.com",
    address : {
        city :" hyderabad",
        state: "telangana",
        pincode: 500062
    }
}

type toChange = Pick<Student,"name" | "email">

const toUpdate: toChange = {
    name : "Nikitha",
    email:"nikitha@gmail.com"
}

function updateStudent(studOne: Student,toUpdate: toChange){
    return { ...studOne, ...toUpdate };
    console.log("pick")
    console.log(studOne)
}

updateStudent(studOne,toUpdate)

type Example<T> = T extends string ? "YES" : "NO" ;
function checkType<T>(value: T): Example<T> {
    return (typeof value === "string" ? "YES" : "NO") as Example<T>;
}
console.log(checkType("hello")); 
console.log(checkType(123)); 

type Employee = {
    name : string;
    e_id : number;
    lead?: Employee;
}

const emp1: Employee = {
    name : "nikki",
    e_id : 1 
}

const emp2: Employee =  {
    name : "usha",
    e_id : 2,
    lead : emp1
}

const emp3: Employee =  {
    name : "mamatha",
    e_id : 3,
    lead : emp2
}

console.log(emp3);

const employees: Employee[] = [emp1, emp2, emp3];

function isLeadRecursive(employee: Employee, employees: Employee[]): boolean {
    for (let emp of employees) {
        if (emp.lead === employee || (emp.lead && isLeadRecursive(employee, [emp.lead]))) {
            return true;
        }
    }
    return false;
}

function printLeadStatus(employees: Employee[]): void {
    employees.forEach(employee => {
        if (isLeadRecursive(employee, employees)) {
            console.log(`${employee.name} is Lead`);
        } else {
            console.log(`${employee.name} is not Lead`);
        }
    });
}

printLeadStatus(employees);
