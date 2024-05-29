var Shopping = /** @class */ (function () {
    function Shopping(description, isDone, isDeleted) {
        if (description === void 0) { description = "null"; }
        if (isDone === void 0) { isDone = false; }
        if (isDeleted === void 0) { isDeleted = false; }
        this.description = description;
        this.isDone = isDone;
        this.isDeleted = isDeleted;
    }
    Shopping.prototype.setDescription = function (description) {
        this.description = description;
    };
    Shopping.prototype.setDone = function (status) {
        this.isDone = status;
    };
    Shopping.prototype.setDelete = function (status) {
        this.isDeleted = status;
    };
    Shopping.prototype.getDescription = function () {
        return this.description;
    };
    return Shopping;
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
            return;
        }
        var a = description.toLowerCase();
        for (var i = 0; i < itemList.length; i++) {
            var b = itemList[i].description.toLowerCase();
            if (a == b && itemList[i].isDeleted == false) {
                alert("Item already exists in the list");
                return;
            }
        }
        var newItem = new Shopping(description);
        itemList.push(newItem);
        console.log(itemList);
        render(newItem);
    }
});
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
            toggleHideCheckbox();
        });
        listItem_1.addEventListener('click', function () {
            var status = item.isDone;
            item.setDone(!status);
            listItem_1.classList.toggle("marked");
            count();
            toggleHideCheckbox();
            var hideCheckbox = document.getElementById("hideCheckbox");
            if (hideCheckbox.checked && listItem_1.classList.contains("marked")) {
                listItem_1.style.display = "none";
            }
        });
        var ulList = document.getElementById("list");
        listItem_1.textContent = item.getDescription();
        listItem_1.appendChild(deleteButton);
        ulList.appendChild(listItem_1);
        console.log(listItem_1);
        count();
        toggleHideCheckbox();
    }
}
function count() {
    var markCount = 0;
    var unmarkCount = 0;
    for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
        var item = itemList_1[_i];
        if (!item.isDeleted) {
            if (item.isDone) {
                markCount++;
            }
            else {
                unmarkCount++;
            }
        }
    }
    console.log(markCount);
    console.log(unmarkCount);
    document.getElementById("mark").innerHTML = markCount.toString();
    document.getElementById("unmark").innerHTML = unmarkCount.toString();
    toggleHideCheckbox();
}
var hideCheckbox = document.getElementById("hideCheckbox");
hideCheckbox.addEventListener('change', function () {
    if (hideCheckbox.checked) {
        hidden();
    }
    else {
        show_all();
    }
});
function toggleHideCheckbox() {
    var hideCheckbox = document.getElementById("hideCheckbox");
    var markedItems = itemList.filter(function (item) { return item.isDone && !item.isDeleted; });
    hideCheckbox.disabled = markedItems.length === 0;
}
function hidden() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains("marked")) {
            items[i].style.display = "none";
        }
    }
}
function show_all() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
    }
}
