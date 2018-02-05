function ElectionsResults(input) {

    let voteResults = new Map()
    let systemWinners = new Map()
    let winnersTotalVotes = new Map()
    let totalVotes = 0

    for (let ballot of input) {

        let starSystem = ballot.system
        let candidate = ballot.candidate
        let votes = Number(ballot.votes)

        if (!voteResults.has(starSystem)) {
            voteResults.set(starSystem, new Map())
        }

        if (!voteResults.get(starSystem).has(candidate)) {
            voteResults.get(starSystem).set(candidate, 0)
        }

        let currentVotes = voteResults.get(starSystem).get(candidate)
        voteResults.get(starSystem).set(candidate, currentVotes + votes)
        totalVotes += votes
    }

    for (const [system, candidates] of voteResults) {
        voteResults.set(system, new Map([...candidates].sort((c1, c2) => c2[1] - c1[1])))
    }

    for (const [system, candidates] of voteResults) {
        let winner = [...candidates.keys()][0]
        if (!systemWinners.has(winner)) {
            systemWinners.set(winner, new Map())
        }

        systemWinners.get(winner).set(system, [...candidates.values()].reduce((x, y) => x + y))
    }

    for (const [winner, systems] of systemWinners) {
        systemWinners.set(winner, new Map([...systems].sort((x, y) => y[1] - x[1])))
    }

    for (const [winner, systems] of systemWinners) {
        winnersTotalVotes.set(winner, [...systems.values()].reduce((x, y) => x + y))
    }


}
