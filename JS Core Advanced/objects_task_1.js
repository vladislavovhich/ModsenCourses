function compareObject(obj1, obj2) {
    for (let prop1 in obj1) {
        if (!(prop1 in obj2)) {
            continue
        }

        if (typeof obj1[prop1] != typeof obj2[prop1]) {
            return false
        } else if (typeof obj1[prop1] == "object" && typeof obj2[prop1] == "object") {
            return compareObject(obj1[prop1], obj2[prop1])
        } else if ((typeof obj1[prop1] == typeof obj2[prop1]) != "object" && obj1[prop1] != obj2[prop1]){
            return false
        } 

    }

    return true
}

let obj1 = {
    name: "John",
    data: {
        year: 2015
    },
}
let obj2 = {
    name: "John",
    data: {
        year: 2012
    }
}

console.log(compareObject(obj1, obj2)) // false

obj2.data.year = 2015

console.log(compareObject(obj1, obj2)) // true

obj2.data = "wrong"

console.log(compareObject(obj1, obj2)) // false