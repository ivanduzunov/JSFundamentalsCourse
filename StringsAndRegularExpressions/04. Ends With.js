function IsEndsWith(input, part) {

    let inputPart =
        input.substring(input.length - part.length)

    console.log(inputPart === part)
}