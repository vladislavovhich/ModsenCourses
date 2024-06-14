function test() {
    {
        var x = "var"
        console.log("inside", x)
    }

    console.log("outside", x)

    {
        let x = "let"
        console.log("inside", x)
    }

    console.log("inside", x)

    {
        const x = "const"
        console.log("inside", x)
    }

    console.log("inside", x)
}

/*
За пределами блока кода виден будет только х объявленный через var.
х, который объявили через let и const, будет виден только внутри блока ввиду того,
что let и const имеет блочную область видимости
*/

test()
