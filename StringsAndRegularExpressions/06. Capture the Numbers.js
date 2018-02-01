function Numbers(input) {

    let result = []


    input.forEach(l => {
        let matches = l.match(/[0-9]+/g)
        if (matches !== null) {
            matches.forEach(m => result.push(m))
        }
    })

    console.log(result.join(" "));
}