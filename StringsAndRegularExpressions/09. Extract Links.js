function ExtractAdresses(input) {
    let result = []

    for (let i = 0; i < input.length; i++) {
        let matches = input[i].match(/w{3}\.[a-zA-Z0-9-]+(\.[a-z]+)+/gm)

        if (matches != null) {
            matches.forEach(m => {
                result.push(m)
            })
        }
    }
    console.log(result.join("\n"))
}