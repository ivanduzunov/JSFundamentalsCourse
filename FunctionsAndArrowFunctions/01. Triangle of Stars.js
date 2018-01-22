function PrintTriangle(number){
    function PrintStars(n){
        console.log("*".repeat(n))
    }

    for (let i = 1; i <= number; i++) {
        PrintStars(i)
    }

    for (let i = number - 1; i > 0; i--) {
        PrintStars(i)
    }
}