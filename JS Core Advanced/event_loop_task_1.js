function printUserFunction(user, callback) {
    console.log(`user: ${user.name}`)

    setTimeout(() => {
        callback(user)
    }, 2000)
}

let user = {name: "kirill"}

printUserFunction(user, (user) => {
    console.log(`callback user: ${user.name}`)
})