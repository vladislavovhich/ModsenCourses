let num = 1

function operation(num, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Promise №${num}: ${num}`);
            num++
            resolve(num);
        }, delay);
    });
}

operation(1, 100)

.then((num) => {
    return operation(num, 100);
})

.then((num) => {
    return operation(num, 100);
})

.then((num) => {
    console.log(`Operations is over: ${num}`);
});

