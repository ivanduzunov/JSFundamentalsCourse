function RepeatString(input, n) {
    let toAdd = input
    for (let i = 0; i < n - 1; i++) {
        input += toAdd
    }
    console.log(input);
}