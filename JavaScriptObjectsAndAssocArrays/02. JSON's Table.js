function JSONtoHTML(input) {

    let sb = "<table>\n"

    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i])
        sb += ` <tr>\n  <td>${obj.name}</td>\n`
        sb += `  <td>${obj.position}</td>\n`
        sb += `  <td>${obj.salary}</td>\n<tr>\n`
    }
    sb += "</table>"

    console.log(sb.toString());
}