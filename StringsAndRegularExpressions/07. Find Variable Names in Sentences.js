function ExtractUsernames(input) {
    let result = []
    let matches = input.match(/_([a-zA-Z0-9]+)/g)

    for (let i = 0; i < matches.length; i++) {
        result.push(matches[i].substring(1))
    }

    console.log(result.join(","));
}