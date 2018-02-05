function fromJSONToHTMLTable(str) {
    let objs = JSON.parse(str);
    let html = '<table>\n';

    html += '   <tr>';

    for (let key of Object.keys(objs[0])) {
        html += `<th>${key}</th>`;
    }

    html += '</tr>\n';

    for (let obj of objs) {

        html += '   <tr>';

        let keys = Object.keys(obj);

        for (let key of keys) {

            if (Number(obj[key])){
                html += `<td>${Number(obj[key])}</td>`;
            }else {
                html += `<td>${escapeHTML(obj[key])}</td>`;
            }
        }

        html += '</tr>\n'
    }

    html += '</table>';

    console.log(html);

    function escapeHTML(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;',
        };

        return text.replace(/[\\"&'<>]/g, c => map[c]);
    }
}