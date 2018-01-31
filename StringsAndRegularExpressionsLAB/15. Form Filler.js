function FormFill(username, email, phoneNumber, form) {
    form.forEach(row => {
        row = row.replace(/<![a-zA-Z]+!>/gm, username)
        row = row.replace(/<@[a-zA-Z]+@>/gm, email)
        row = row.replace(/<\+[a-zA-Z]+\+>/gm, phoneNumber)
        console.log(row)
    })
}