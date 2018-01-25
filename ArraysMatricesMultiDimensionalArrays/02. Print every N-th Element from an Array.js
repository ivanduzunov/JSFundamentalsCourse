function PrintElement(input) {
    let number  = Number(input[input.length - 1])
    input.pop()
    for (let i = 0; i < input.length; i += number) {
        console.log(input[i])
    }
}