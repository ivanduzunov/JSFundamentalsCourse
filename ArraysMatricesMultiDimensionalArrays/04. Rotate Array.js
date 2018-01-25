function Rotate(input) {
    let count = input[input.length-1]
    input.pop()

    for (let i = 0; i < count; i++) {
        let num = input.pop()
        input.unshift(num)
    }

    console.log(input.join(" "))
}