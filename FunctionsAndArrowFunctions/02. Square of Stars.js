function PrintSquare(number) {
    function PrintStars(n) {
        console.log("* ".repeat(n))
    }

    for (let i = 0; i < number; i++) {
        PrintStars(number)
    }
}