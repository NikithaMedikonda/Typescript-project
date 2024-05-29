class Shopping {
    description: string;
    isDone: boolean;
    isDeleted: boolean;

    constructor(description: string = "null", isDone: boolean = false, isDeleted: boolean = false) {
        this.description = description;
        this.isDone = isDone;
        this.isDeleted = isDeleted;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setDone(status: boolean) {
        this.isDone = status;
    }

    setDelete(status: boolean) {
        this.isDeleted = status;
    }

    getDescription() {
        return this.description;
    }
}

const keyEvent: HTMLInputElement = document.getElementById("item") as HTMLInputElement;
const itemList: Shopping[] = [];

keyEvent.addEventListener('keydown', function (event: KeyboardEvent) {
    if (event.key === 'Enter') {
        const description: string = (document.getElementById("item") as HTMLInputElement).value.trim();
        console.log(description);
        (document.getElementById("item") as HTMLInputElement).value = "";
        (document.getElementById("item") as HTMLInputElement).placeholder = "Enter item";
        if (description == "") {
            alert("Please enter an item!");
            return;
        }

        const a: string = description.toLowerCase();
        for (var i = 0; i < itemList.length; i++) {
            var b: string = itemList[i].description.toLowerCase();
            if (a == b && itemList[i].isDeleted == false) {
                alert("Item already exists in the list");
                return;
            }
        }
        const newItem = new Shopping(description);
        itemList.push(newItem);
        console.log(itemList);
        render(newItem);
    }
});

function render(item: Shopping): void {
    if (!item.isDeleted) {
        const listItem: HTMLLIElement = document.createElement("li");
        listItem.classList.add("list");
        const deleteButton: HTMLSpanElement = document.createElement("span");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener('click', function () {
            item.setDelete(true);
            listItem.remove();
            count();
            toggleHideCheckbox();
        });
        listItem.addEventListener('click', function () {
            const status: boolean = item.isDone;
            item.setDone(!status);
            listItem.classList.toggle("marked");
            count();
            toggleHideCheckbox();
            const hideCheckbox: HTMLInputElement = document.getElementById("hideCheckbox") as HTMLInputElement;
            if (hideCheckbox.checked && listItem.classList.contains("marked")) {
                listItem.style.display = "none";
            }
        });
        const ulList: HTMLElement = document.getElementById("list") as HTMLElement;
        listItem.textContent = item.getDescription();
        listItem.appendChild(deleteButton);
        ulList.appendChild(listItem);
        console.log(listItem);
        count();
        toggleHideCheckbox();
    }
}

function count() {
    let markCount: number = 0;
    let unmarkCount: number = 0;
    for (let item of itemList) {
        if (!item.isDeleted) {
            if (item.isDone) {
                markCount++;
            } else {
                unmarkCount++;
            }
        }
    }
    console.log(markCount);
    console.log(unmarkCount);
    (document.getElementById("mark") as HTMLElement).innerHTML = markCount.toString();
    (document.getElementById("unmark") as HTMLElement).innerHTML = unmarkCount.toString();
    toggleHideCheckbox();
}

const hideCheckbox: HTMLInputElement = document.getElementById("hideCheckbox") as HTMLInputElement;
hideCheckbox.addEventListener('change', function () {
    if (hideCheckbox.checked) {
        hidden();
    } else {
        show_all();
    }
});


function toggleHideCheckbox() {
    const hideCheckbox: HTMLInputElement = document.getElementById("hideCheckbox") as HTMLInputElement;
    const markedItems = itemList.filter(item => item.isDone && !item.isDeleted);
    hideCheckbox.disabled = markedItems.length === 0;
}
function hidden(): void {
    const list = document.getElementById("list") as HTMLElement;
    const items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("marked")) {
            items[i].style.display = "none";
        }
    }
}

function show_all() {
    const list = document.getElementById("list") as HTMLElement;
    const items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "block";
    }
}
