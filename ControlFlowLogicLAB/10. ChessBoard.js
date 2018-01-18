function ChessBoard(num) {
    let counter = 1;
    //1 - black , 2 - white

    let result = `<div class="chessboard">\n`;

    for (let i = 1; i <= num; i++) {

        result += ` <div>\n`

        for (let i = 1; i <= num; i++) {
            let color = counter % 2 === 0 ? "white" : "black"
            result += `  <span class="${color}"></span>\n`
            counter++
        }

        result += `</div>\n`
    }

    result += ` </div>`

    return result
}