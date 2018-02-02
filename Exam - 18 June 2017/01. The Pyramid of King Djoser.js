function Calc(base, increment) {
    //80/100

    let resourses =
        {
            "stone": 0,
            "marble": 0,
            "lapis": 0,
            "gold": 0
        }

    let height = 0
    let step = 0

    while (true) {
        step++
        height += increment
        let isLastStep = base <= 2

        if (isLastStep) {
            resourses["gold"] = (base * base) * increment
            break;
        } else {

            let outerLayersBricksCount = 0
            let innerLayersBricksCount = 0

            for (let i = 1; i <= base; i++) {
                for (let j = 1; j <= base; j++) {
                    if (i === 1 || j === 1 || i === base || j === base) {
                        outerLayersBricksCount += increment
                    }
                    else {
                        innerLayersBricksCount += increment
                    }
                }
            }

            if (step % 5 === 0) {
                resourses["stone"] += innerLayersBricksCount
                resourses["lapis"] += outerLayersBricksCount
            }
            else {
                resourses["stone"] += innerLayersBricksCount
                resourses["marble"] += outerLayersBricksCount
            }
        }
        base -= 2
    }

    console.log(`Stone required: ${Math.ceil(resourses["stone"])}`)
    console.log(`Marble required: ${Math.ceil(resourses["marble"])}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(resourses["lapis"])}`)
    console.log(`Gold required: ${Math.ceil(resourses["gold"])}`)
    console.log(`Final pyramid height: ${Math.floor(height)}`)

}


Calc(22, 0.25)