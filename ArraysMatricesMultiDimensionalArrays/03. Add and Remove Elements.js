function result(input) {

    let arr = []
    let initialNum = 0
    let isOver = false

    for (let i = 0; i < input.length; i++) {

        let command = input[i]
        initialNum++

        if (command.toString().toLowerCase() === "add") {
            arr.push(initialNum)
        } else if (command.toString().toLowerCase() === "remove") {
            arr.pop()
        }
    }

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
    } else {
        console.log("Empty")
    }
}


