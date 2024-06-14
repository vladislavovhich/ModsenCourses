function repeat(func, time) {
    setInterval(func, time)
}

let operation = () => {
    console.log("some operation")
}

repeat(operation, 1000)