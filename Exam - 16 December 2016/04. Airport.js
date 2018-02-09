function PrintAeroplanes(input) {
    let planesLanded = []
    let citiesWithPlanes = new Map()

    for (let row of input) {
        let tokens = row.split(" ")
        let planeId = tokens[0]
        let town = tokens[1]
        let passangers = Number(tokens[2])
        let action = tokens[3]

        if (action === "land") {
            if (!planesLanded.includes(planeId)) {

                planesLanded.push(planeId)

                if (!citiesWithPlanes.has(town)) {
                    citiesWithPlanes.set(town, {planes: new Set(), arrivals: passangers, departures: 0})
                    citiesWithPlanes.get(town)["planes"].add(planeId)
                } else {
                    citiesWithPlanes.get(town)["planes"].add(planeId)
                    let currArrivals = citiesWithPlanes.get(town)["arrivals"]
                    citiesWithPlanes.get(town)["arrivals"] = currArrivals + passangers
                }
            }
        } else {

            if (planesLanded.includes(planeId)) {
                planesLanded = planesLanded.filter(p => p !== planeId)

                if (!citiesWithPlanes.has(town)) {
                    citiesWithPlanes.set(town, {planes: new Set(), arrivals: 0, departures: passangers})
                    citiesWithPlanes.get(town)["planes"].add(planeId)
                } else {
                    let currDepartures = citiesWithPlanes.get(town)["departures"]
                    citiesWithPlanes.get(town)["departures"] = passangers + currDepartures
                    citiesWithPlanes.get(town)["planes"].add(planeId)
                }
            }
        }
    }

    console.log("Planes left:")
    planesLanded = Array.from(planesLanded).sort((a, b) => a.localeCompare(b))
    for (let plane of planesLanded) {
        console.log(`- ${plane}`)
    }

    let townsKeysSorted = [...citiesWithPlanes.keys()].sort((a, b) => {
        if (citiesWithPlanes.get(a)["arrivals"] > citiesWithPlanes.get(b)["arrivals"]) return -1;
        if (citiesWithPlanes.get(a)["arrivals"] < citiesWithPlanes.get(b)["arrivals"]) return 1;
        return a.localeCompare(b);
    });

    for (let key of townsKeysSorted) {
        console.log(key)
        console.log(`Arrivals: ${citiesWithPlanes.get(key)["arrivals"]}`)
        console.log(`Departures: ${citiesWithPlanes.get(key)["departures"]}`)

        let planes = Array.from(citiesWithPlanes.get(key)["planes"].keys()).sort((a, b) => a.localeCompare(b))

        console.log("Planes:")
        for (let plane of planes) {
            console.log(`-- ${plane}`)
        }
    }
}