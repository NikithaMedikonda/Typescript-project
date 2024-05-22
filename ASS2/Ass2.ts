import { value } from './utils';

type course = "HTML" | "CSS" | "Javascript" | "TypeScript" ;

class Student {
    name: string; 
    age: number;
    email: string;
    courseList: course[];
    address: {
        city: string;
        state: string;
        pincode: number;
    }
    constructor(name: string, age: number, email: string, 
        courseList: course[], city: string, state: string, pincode: number)
      {
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

    getDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Courses: ${this.courseList.join(', ')}`);
        console.log(`Address:`);
        console.log(`City: ${this.address.city}`);
        console.log(`State: ${this.address.state}`);
        console.log(`Pincode: ${this.address.pincode}`);
    }
}

    const student = new Student ("Nikki", 20, "nikitha@gmail.com", ["HTML", "CSS"], 
        "hyderabad", "telangana", 500062
     )
    student.getDetails();


console.log(value<number>(7));
console.log(value<string>("nikki"));

interface Student1 {
    name: string;
    age: number;
    address?: string;
  }
  
  type CreateReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type ReadonlyStudent1 = CreateReadonly<Student1>;

  const student1: ReadonlyStudent1= {
      name: "nikki",
      age: 20,
      address: "hyd"
  }
  //student1.age = 21; raises error

  const studentPartial: Partial<Student1> = {
    name: "Nikki"
};

  const studentRequired: Required<Student1> = {
    name: "nikki",
    age: 20,
    address: "hyderabad"
  };

  const studentOmit: Omit<Student1, "age"> = {
    name: "nikki"
};

const studentpick: Pick<Student1, "name" | "age"> = {
    name: "Alice",
    age: 25
};

const courserecord: Record<course, number> = {
    HTML: 1,
    CSS: 2,
    Javascript:3,
    TypeScript: 4
}
  
type T = 1 | 2 | 3 | 4;
type U = 1 | "c"| 3;

type V = Exclude<T, U>;
type W = Extract<T, U>;