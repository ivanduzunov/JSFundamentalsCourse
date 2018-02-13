function Solve(text) {
    //What a stupid code, but still 44/100

    let survayRegEx = new RegExp(/<svg>\n*.+\n*.+<\/svg>/g);
    let surveyDataUnclean = text.match(survayRegEx)

    if (surveyDataUnclean.length === 0) {
        console.log("Invalid format")
    } else {
        let categoriesUncleanSplitted = surveyDataUnclean[0].split("<\/cat>")

        let survayLabelUnclean = categoriesUncleanSplitted[0].split("[")
        let almostThereWithTheLabel = survayLabelUnclean[1].split("]")

        let label = almostThereWithTheLabel[0]

        let valuePairsUnclean = categoriesUncleanSplitted[1].split("<val>")
        let totalVotes = 0
        let sumOfAllRatings = 0
        for (let i = 1; i < valuePairsUnclean.length; i++) {
            let tokens = valuePairsUnclean[i].split("<\/val>")
            let value = Number(tokens[0])
            let almostThereTokens = tokens[1].split("<\/g>")
            let votes = Number(almostThereTokens[0])

            totalVotes += votes
            sumOfAllRatings += value * votes

        }

        let result = sumOfAllRatings / totalVotes
        console.log(`${label.trim()}: ${Math.round(Number((result * 10).toFixed(2)/ 10))}`)
    }
}