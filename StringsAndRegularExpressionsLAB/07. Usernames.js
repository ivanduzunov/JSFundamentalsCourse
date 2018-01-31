function ExtractUsernames(input) {

    let names = []

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split('@')

        let name = tokens[0]

        let dotSplitted = tokens[1].split('.')

        let secondPart = ""

        for (let j = 0; j < dotSplitted.length; j++) {
            secondPart += dotSplitted[j][0]
        }




        names.push(name + "." + secondPart)
    }

    console.log(names.join(", "))
}