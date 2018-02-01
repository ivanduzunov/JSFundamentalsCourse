function Capitalize(input) {

    let splitted = input.split(" ")
    let result = ""

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i][0].match(/[a-z]/)) {
            result += splitted[i][0].toUpperCase()
        } else {
            result += splitted[i][0]
        }

        for (let j = 1; j < splitted[i].length; j++) {
            if (splitted[i][j].match(/[A-Z]/)) {
                result += splitted[i][j].toLowerCase()
            } else {
                result += splitted[i][j]
            }
        }
        result += " "
    }
    console.log(result)
}