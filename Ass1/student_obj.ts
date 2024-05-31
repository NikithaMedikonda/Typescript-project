type CourseList = "HTML" | "CSS" | "Javascript" | "TypeScript"

type address_type = {
    city: string;
    state: string;
    pincode: number;
}

interface student_interface {
    name: string;
    age: number;
    email: string;
    interested_courses: CourseList[]
    address: address_type;
}

type student_type = {
    name: string;
    age: number;
    email: string;
    interested_courses: CourseList[]
    address: address_type;
}

let StudentList: student_interface = {
    name: "nikki",
    age: 20,
    email: "nikitha@gmail.com",
    interested_courses: ["HTML" ,"TypeScript",],
    address: {
        city: "hyd",
        state: "telangana",
        pincode: 500062
    }
}

let StudentListType: student_type = {
    name: "nikki",
    age: 20,
    email: "nikitha@gmail.com",
    interested_courses: ["HTML","CSS"],
    address: {
        city: "hyd",
        state: "telangana",
        pincode: 500062
    }
}


console.log(StudentList)