function ElectionResults(input) {

    //Storing the election results

    let systemsResultsPerCandidate = new Map()

    for (let ballot of input) {
        let system = ballot.system
        let candidate = ballot.candidate
        let votes = Number(ballot.votes)

        if (!systemsResultsPerCandidate.has(system)) {
            systemsResultsPerCandidate.set(system, new Map())
        }
        if (!systemsResultsPerCandidate.get(system).has(candidate)) {
            systemsResultsPerCandidate.get(system).set(candidate, 0)
        }

        let currVotes = systemsResultsPerCandidate.get(system).get(candidate)
        systemsResultsPerCandidate.get(system).set(candidate, currVotes + votes)
    }

    //Extract and store the final results in each star system

    let systemsFinalResults = new Map()
    let systemsWonByCandidate = new Map()
    let totalElectionVotes = 0

    for (let [system, results] of systemsResultsPerCandidate) {

        //Sort the system results
        let systemCandidatesKeysSorted = [...results.keys()].sort((a, b) => {
            if (results.get(a) > results.get(b)) return -1;
            if (results.get(a) < results.get(b)) return 1;
        });
        let totalSystemVotes = 0

        for (let [k, v] of results) {
            totalSystemVotes += v
        }

        totalElectionVotes += totalSystemVotes
        let winner = systemCandidatesKeysSorted[0]

        if (!systemsFinalResults.has(winner)) {
            systemsFinalResults.set(winner, totalSystemVotes)
        } else {
            let currVotes = systemsFinalResults.get(winner)
            systemsFinalResults.set(winner, totalSystemVotes + currVotes)
        }

        if (!systemsWonByCandidate.has(winner)) {
            systemsWonByCandidate.set(winner, new Map())
        }

        systemsWonByCandidate.get(winner).set(system, totalSystemVotes)
    }

    let finalResultsKeysSorted = [...systemsFinalResults.keys()].sort((a, b) => {
        if (systemsFinalResults.get(a) > systemsFinalResults.get(b)) return -1;
        if (systemsFinalResults.get(a) < systemsFinalResults.get(b)) return 1;
    });

    if (systemsFinalResults.get(finalResultsKeysSorted[0]) === totalElectionVotes) {
        console.log(`${finalResultsKeysSorted[0]} wins with ${totalElectionVotes} votes`)
        console.log(`${finalResultsKeysSorted[0]} wins unopposed!`)
    } else if (systemsFinalResults.get(finalResultsKeysSorted[0]) > totalElectionVotes / 2) {
        console.log(`${finalResultsKeysSorted[0]} wins with ${systemsFinalResults.get(finalResultsKeysSorted[0])} votes`)
        console.log(`Runner up: ${finalResultsKeysSorted[1]}`)

        let runnerUpSystemsKeysSorted = [...systemsWonByCandidate.get(finalResultsKeysSorted[1]).keys()].sort((a, b) => {
            if (systemsWonByCandidate.get(finalResultsKeysSorted[1]).get(a) > systemsWonByCandidate.get(finalResultsKeysSorted[1]).get(b)) return -1;
            if (systemsWonByCandidate.get(finalResultsKeysSorted[1]).get(a) < systemsWonByCandidate.get(finalResultsKeysSorted[1]).get(b)) return 1;
        });

        for (let key of runnerUpSystemsKeysSorted) {
            console.log(`${key}: ${systemsWonByCandidate.get(finalResultsKeysSorted[1]).get(key)}`)
        }
    } else {
        let firstName = finalResultsKeysSorted[0]
        let firstpercent = Math.floor((systemsFinalResults.get(finalResultsKeysSorted[0]) / totalElectionVotes) * 100)
        let secondName = finalResultsKeysSorted[1]
        let secondpercent = Math.floor((systemsFinalResults.get(finalResultsKeysSorted[1]) / totalElectionVotes) * 100)

        console.log(`Runoff between ${firstName} with ${firstpercent}% and ${secondName} with ${secondpercent}%`)
    }
}
