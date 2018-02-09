function Clean(arr) {
    let text = arr[0]
    let regEx = /\s*([.,!?:;])\s*/g

    text.replace(regEx, (match, gl) => {gl + " "})


    console.log(text)

}

Clean(["Terribly formatted text      .  With chaotic spacings. Terrible quoting   ! Also this date is pretty confusing : 20   .   12.  16 .", ""])