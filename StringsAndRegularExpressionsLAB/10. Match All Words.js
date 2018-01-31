function DatesExtrator(text) {
    let Regex = /\w+/g;
    let matches = text.match(Regex)
    console.log(matches.join("|"))

}