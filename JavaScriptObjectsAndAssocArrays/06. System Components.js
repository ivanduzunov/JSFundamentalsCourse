function PrintComponents(input) {
    let result = new Map()

    for (let row of input) {
        let [system, component, subcomponent] = row.split(" | ")

        if (!result.has(system)) {
            result.set(system, new Map())
        }
        if (!result.get(system).has(component)) {
            result.get(system).set(component, [subcomponent])
        } else {
            result.get(system).get(component).push(subcomponent)
        }
    }

    let systems = [...result.keys()].sort((a, b) => {
        if (result.get(a).size > result.get(b).size) return -1;
        if (result.get(a).size < result.get(b).size) return 1;

        return b.toLowerCase().localeCompare(b.toLocaleLowerCase());
    });
    for (let system of systems) {
        console.log(system);
        let components = [...result.get(system).keys()].sort((s1, s2) => result.get(system).get(s2).length - result.get(system).get(s1).length);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of result.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }

}