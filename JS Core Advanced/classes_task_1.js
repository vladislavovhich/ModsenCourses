class Human {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }

    printInfo() {
        console.log(`Human(name = "${this.name}", age = ${this.age}, country = "${this.country}")`)
    }
}

let human1 = new Human("Stalin", 94, "USSR")
let human2 = new Human("Duval'", 34, "France")

human1.printInfo()
human2.printInfo()