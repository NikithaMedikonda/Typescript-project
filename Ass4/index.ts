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

type ToChange = Pick<Student,"name" | "email">

const toUpdate: ToChange = {
    name : "Nikitha",
    email:"nikitha@gmail.com"
}

function updateStudent(studOne: Student,toUpdate: ToChange){
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

const employees: Employee[] = [
    {
        name: "Nikitha",
        e_id: 1,
        lead: {
            name: "Mamatha",
            e_id: 2,
        }
    },
    {
        name: "Usha",
        e_id: 3,
        lead: {
            name: "Varun",
            e_id: 4,
            lead: {
                name: "Chinni",
                e_id: 5,
            }
        }
    }
];

function isLeadRecursive(employee: Employee, employees: Employee[]): boolean {
    for (let emp of employees) {
        if (emp.lead === employee) {
            return true;
        }
        if (emp.lead && isLeadRecursive(employee, [emp.lead])) {
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
