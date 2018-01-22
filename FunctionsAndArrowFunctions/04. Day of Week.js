function DayNumber(day) {
    let week =
        {
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6,
            Sunday: 7
        }

    let result = day in week ? week[day] : "error"

    console.log(result)
}
