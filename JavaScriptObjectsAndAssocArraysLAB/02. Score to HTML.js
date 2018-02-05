function scoreToHTMLTable(scoreJSON) {

    let arr = JSON.parse(scoreJSON);

    let html = '<table>\n';
    html += '   <tr><th>name</th><th>score</th></tr>\n';

    for (let obj of arr) {
        html+= '   <tr>';
        html += `<td>${escapeHTML(obj.name)}</td><td>${Number(obj.score)}</td>`;
        html += '</tr>\n';
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