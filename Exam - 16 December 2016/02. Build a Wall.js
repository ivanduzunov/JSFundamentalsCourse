function Build(input) {
    let sections = []
    for (let stringNum of input) {
        sections.push(Number(stringNum))
    }

    let concretePerDay = []
    let totalConcrete = 0
    let isCompleted = false

    while (!isCompleted) {

        let concreteCurrDay = 0
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] === 30) {
                continue
            } else {
                sections[i] += 1
                concreteCurrDay += 195
            }
        }
        concretePerDay.push(concreteCurrDay)
        totalConcrete += concreteCurrDay

        let thereAreNotCompleteSection = false

        for (let number of sections) {
            if (number < 30) {
                thereAreNotCompleteSection = true
            }
        }

        thereAreNotCompleteSection === true ? isCompleted = false : isCompleted = true
    }

    console.log(concretePerDay.join(", "))
    console.log(`${totalConcrete * 1900} pesos`)
}