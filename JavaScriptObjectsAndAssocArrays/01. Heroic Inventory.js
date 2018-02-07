function Heroes(input) {
    //80 / 100

    let heroes = []

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' / ')
        let heroName = tokens[0]
        let heroLevel = Number(tokens[1])
        let heroItems = tokens[2].toString().split(', ')

        let hero = {}
        hero["name"] = heroName
        hero["level"] = heroLevel
        hero["items"] = heroItems

        heroes.push(hero)
    }

    console.log(JSON.stringify(heroes))
}


Heroes(["Isacc / 25 / Apple, GravityGun"])