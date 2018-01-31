function DatesExtractor(arr) {

    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;
    for (let obj of arr) {
        while (match = regex.exec(obj)){
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }

    console.log(dates.join('\n'));
}
