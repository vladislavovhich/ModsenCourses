class NotNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotNumberError";
    }
}

function square(number) {
    if (!!!+number) {
        throw new NotNumberError(`${number} is not a number!`)
    }

    console.log(number ** 2)
}

try {
    square(25)
    square("2sdf5sf4334sd")
} catch (error) {
    console.log(error.message)
}
