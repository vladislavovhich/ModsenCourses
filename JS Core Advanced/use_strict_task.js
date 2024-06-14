"use strict"

function factorial(n) {
    if (n == 1) {
        return n
    }

    return factorial(n - 1) * n
}

console.log(factorial(5)) // 120
console.log(factorial(3)) // 6