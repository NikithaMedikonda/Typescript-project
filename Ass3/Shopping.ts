class shopping {
    description : string;
    isDone : boolean;
    isDeleted : boolean;

    constructor(description: string = "null", isDone: boolean = false, isDeleted: boolean = false){
        this.description = description;
        this.isDone = isDone;
        this.isDeleted = isDeleted;
    }
    setDescrption(description: string)  {
        this.description = description;
    }
    setDone(status: boolean) {
        this.isDone = status;
    }
    setDelete(status: boolean) {
        this.isDeleted = status;
    }
    getdescription() {
        return this.description;
    }
}

const keyEvent: HTMLInputElement = document.getElementById("item") as HTMLInputElement;

const itemList : shopping[]= [];

keyEvent.addEventListener('keydown', function(event: KeyboardEvent) {
    if (event.key === 'Enter'){
        const description: string = (document.getElementById("item") as HTMLInputElement).value.trim() ;
        console.log(description);
        (document.getElementById("item") as HTMLInputElement).value ="";
        (document.getElementById("item") as HTMLInputElement).placeholder ="Enter item";
        if (description == "") {
            alert("Please enter an item!");}
        else {
            const a: string = description.toLowerCase();
            for (var i =0; i<itemList.length; i++) {
                var b: string = itemList[i].description.toLowerCase();
                if (a == b && itemList[i].isDeleted == false) {
                    alert("Item already exists in the list");
                }
            }
            const newItem =  new shopping(description);
            itemList.push(newItem);
            console.log(itemList);
            render(newItem);
        }
        }
    }
);

function addItem(): void { 
    const description: string = (document.getElementById("item") as HTMLInputElement) .value;
    if (description === "") {
        alert("Please enter an item!");
    }
    else {
        const newItem = new shopping(description);
        itemList.push(newItem);
        console.log(itemList);
        render(newItem);
    }
  }

  function render(item: shopping): void {
    if (!item.isDeleted) {
        const listItem: HTMLLIElement = document.createElement("li");
        listItem.classList.add("list");  
        const deleteButton: HTMLSpanElement = document.createElement("span");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener('click', function() {
            item.setDelete(true); 
            listItem.remove(); 
            count();
        });
        listItem.addEventListener('click', function(){
            const status: boolean=item.isDone;
            item.setDone(!status);
            listItem.classList.toggle("marked");
            count();
            const btn: HTMLElement = (document.getElementById("btn") as HTMLElement);
            if(btn.textContent == "Show All" && listItem.classList.contains("marked")) 
            {
                hidden();
            }
        })
        const ulList: HTMLElement = (document.getElementById("list") as HTMLElement);
        listItem.textContent = item.getdescription();
        listItem.appendChild(deleteButton);
        ulList.appendChild(listItem);
        console.log(listItem);
        count();
    }
}


function count() {
    let markCount: number= 0;
    let unmarkCount: number = 0;
    const list = (document.getElementById("list") as HTMLLIElement).getElementsByTagName("li");
    for (let index = 0; index < list.length; index++) {
        if(list[index].classList.contains("marked")) {
            markCount++;
        }
        else {
            unmarkCount++;
        }
    }
    console.log(markCount);
    console.log(unmarkCount);
    (document.getElementById("mark") as HTMLElement).innerHTML = markCount.toString();
    (document.getElementById("unmark") as HTMLElement).innerHTML = unmarkCount.toString();
}

let hide: boolean = false;
const btn: HTMLElement = document.getElementById("btn") as HTMLElement;
btn.addEventListener('click', function() {
    hide ? show_all() : hidden();
});
    
function hidden():void { 
    const list = (document.getElementById("list") as HTMLElement).getElementsByTagName("li");
    (document.getElementById("btn") as HTMLElement).textContent = "Show All";
    for(let i =0; i<list.length;i++) {
        if(list[i].classList.contains("marked")) {
            list[i].style.display = "none";
        }
        else {
            list[i].style.display = "block";
        }
    }
    hide = true;
}

function show_all() {
    let list = (document.getElementById("list") as HTMLElement).getElementsByTagName("li");
    (document.getElementById("btn") as HTMLElement).textContent = "Hide Marked";
    for(let i =0; i<list.length;i++) {
            list[i].style.display = "block";
        }
    hide = false;
}           

