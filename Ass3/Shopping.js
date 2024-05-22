var shopping = /** @class */ (function () {
    function shopping(description, isDone, isDeleted) {
        if (description === void 0) { description = "null"; }
        if (isDone === void 0) { isDone = false; }
        if (isDeleted === void 0) { isDeleted = false; }
        this.description = description;
        this.isDone = isDone;
        this.isDeleted = isDeleted;
    }
    shopping.prototype.setDescrption = function (description) {
        this.description = description;
    };
    shopping.prototype.setDone = function (status) {
        this.isDone = status;
    };
    shopping.prototype.setDelete = function (status) {
        this.isDeleted = status;
    };
    shopping.prototype.getdescription = function () {
        return this.description;
    };
    return shopping;
}());
var keyEvent = document.getElementById("item");
var itemList = [];
keyEvent.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        var description = document.getElementById("item").value.trim();
        console.log(description);
        document.getElementById("item").value = "";
        document.getElementById("item").placeholder = "Enter item";
        if (description == "") {
            alert("Please enter an item!");
        }
        else {
            var a = description.toLowerCase();
            for (var i = 0; i < itemList.length; i++) {
                var b = itemList[i].description.toLowerCase();
                if (a == b && itemList[i].isDeleted == false) {
                    alert("Item already exists in the list");
                }
            }
            var newItem = new shopping(description);
            itemList.push(newItem);
            console.log(itemList);
            render(newItem);
        }
    }
});
function addItem() {
    var description = document.getElementById("item").value;
    if (description === "") {
        alert("Please enter an item!");
    }
    else {
        var newItem = new shopping(description);
        itemList.push(newItem);
        console.log(itemList);
        render(newItem);
    }
}
function render(item) {
    if (!item.isDeleted) {
        var listItem_1 = document.createElement("li");
        listItem_1.classList.add("list");
        var deleteButton = document.createElement("span");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener('click', function () {
            item.setDelete(true);
            listItem_1.remove();
            count();
        });
        listItem_1.addEventListener('click', function () {
            var status = item.isDone;
            item.setDone(!status);
            listItem_1.classList.toggle("marked");
            count();
            var btn = document.getElementById("btn");
            if (btn.textContent == "Show All" && listItem_1.classList.contains("marked")) {
                hidden();
            }
        });
        var ulList = document.getElementById("list");
        listItem_1.textContent = item.getdescription();
        listItem_1.appendChild(deleteButton);
        ulList.appendChild(listItem_1);
        console.log(listItem_1);
        count();
    }
}
function count() {
    var markCount = 0;
    var unmarkCount = 0;
    var list = document.getElementById("list").getElementsByTagName("li");
    for (var index = 0; index < list.length; index++) {
        if (list[index].classList.contains("marked")) {
            markCount++;
        }
        else {
            unmarkCount++;
        }
    }
    console.log(markCount);
    console.log(unmarkCount);
    document.getElementById("mark").innerHTML = markCount.toString();
    document.getElementById("unmark").innerHTML = unmarkCount.toString();
}
var hide = false;
var btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    hide ? show_all() : hidden();
});
function hidden() {
    var list = document.getElementById("list").getElementsByTagName("li");
    document.getElementById("btn").textContent = "Show All";
    for (var i = 0; i < list.length; i++) {
        if (list[i].classList.contains("marked")) {
            list[i].style.display = "none";
        }
        else {
            list[i].style.display = "block";
        }
    }
    hide = true;
}
function show_all() {
    var list = document.getElementById("list").getElementsByTagName("li");
    document.getElementById("btn").textContent = "Hide Marked";
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "block";
    }
    hide = false;
}
