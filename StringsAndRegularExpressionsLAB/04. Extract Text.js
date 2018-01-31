function Extract(input) {
    let result = []

    let startIndex = input.indexOf("(")

    while (startIndex > -1) {

        let endIndex = input.indexOf(")")

        if (endIndex == -1) {
            break;
        }

        let element = input.substring(startIndex + 1, endIndex)

        result.push(element)

        startIndex = input.indexOf("(", endIndex)
    }

    console.log(result.join(", "))
}