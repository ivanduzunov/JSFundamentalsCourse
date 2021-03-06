function solve(arr) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let person of arr) {
        let match = person.match(pattern);

        if (match === null) continue;

        console.log(`Name: ${match[1]}`);
        console.log(`Position: ${match[3]}`);
        console.log(`Salary: ${match[2]}`);
    }
}