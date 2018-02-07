function FilterUsernames(input) {
    let usernames = new Set()

    input.forEach(u => usernames.add(u))

    let sortedUsernames = Array.from(usernames).sort((a, b) => {
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        }

        return a.localeCompare(b)
    })

    sortedUsernames.forEach(u => console.log(u))
}