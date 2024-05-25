//task1
type Person = {
    name : string;
    id : number;
    role : string;
    age? : number
    isMarried? : boolean;  
    address? : {
        city : string;
        state : string;
    };
}

type PersonRequired  = {
  [K in keyof Person]-?: Person[K];
};

const personOptionalDetails: Person = {
    name: "Nikki",
    id: 1,
    role: "intern"
  };
  
const personDetails: PersonRequired = {
    name: "Nikki",
    id : 1,
    role: "intern",
    age: 20,
    isMarried: false,
    address : {
        city : "Hyderabad",
        state : "telangana"
    } 
};
console.log("task1");
console.log(personOptionalDetails);
console.log(personDetails);

//task2
function concatValues(obj: Person) {
    let result ='';
    for (const key in obj) {
        const studentKey = key as keyof Person;
        result += `${studentKey}: ${obj[studentKey]}, `;
    }
    result = result.slice(0, -2);
    console.log(result)
}
console.log("task2");
concatValues(personOptionalDetails);

//task3 
namespace ObjectUtil {
    export type ObjectOfObject = {
      [key: string]: any;
    };
    export function concatValues(objs: any): string {
        let result = '';
        function objectCheck(obj: any) {
          for(const key in obj) {
              const value = obj[key];
              if (typeof value === 'object' && value !== null) {
                objectCheck(value);
              } else {
                result += `${key}: ${value}, `;
              }
            }
          }
        objectCheck(objs);
        return result.slice(0, -2); 
    }
}
console.log("task3");
console.log(ObjectUtil.concatValues(personDetails)); 