// type courses = "javascript" | "typescript" 
let age:number = 20;

let sentence: "random";
let isDone = false;
let isworking: boolean;

function add1(num1 :number, num2:number): string{
    return "num1+num2"
}

function add(num1 :number, num2:number) {
    return num1 + num2
}

// interface ShoppingItem {
//     name: string;
//     isMarked: boolean;
//     isDeleted?: boolean; //optional parameter
// }

let shoppingListItem: ShoppingItem = {
    name: "item1",
    isDeleted: true,
    isMarked: true
}

type ShoppingItem = {
    name: string | number;
    isMarked: boolean;
    isDeleted?: boolean; //optional parameter
}

add(1,2); //3
// add("fn","ln"); //fnln

enum Status {
    Success = "success",
    Error = "deleted"
}
type CreateString<Type> = {
    [P in keyof Type]: string;
}
type ShoppingItemString = CreateString<ShoppingItem>

  