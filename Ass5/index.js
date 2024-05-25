var personOptionalDetails = {
    name: "Nikki",
    id: 1,
    role: "intern"
};
var personDetails = {
    name: "Nikki",
    id: 1,
    role: "intern",
    age: 20,
    isMarried: false,
    address: {
        city: "Hyderabad",
        state: "telangana"
    }
};
console.log("task1");
console.log(personOptionalDetails);
console.log(personDetails);
//task2
function concatValues(obj) {
    var result = '';
    for (var key in obj) {
        var studentKey = key;
        result += "".concat(studentKey, ": ").concat(obj[studentKey], ", ");
    }
    result = result.slice(0, -2);
    console.log(result);
}
console.log("task2");
concatValues(personOptionalDetails);
//task3 
var ObjectUtil;
(function (ObjectUtil) {
    function concatValues(objs) {
        var result = '';
        function objectCheck(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    if (typeof value === 'object' && value !== null) {
                        objectCheck(value);
                    }
                    else {
                        result += "".concat(key, ": ").concat(value, ", ");
                    }
                }
            }
        }
        objectCheck(objs);
        return result.slice(0, -2);
    }
    ObjectUtil.concatValues = concatValues;
})(ObjectUtil || (ObjectUtil = {}));
console.log("task3");
console.log(ObjectUtil.concatValues(personDetails));
