function Rooms(availableRooms, guests) {
    let rooms = new Map();
    let guestsMovedToTheTeaHouse = 0

    for (let currentRoom of availableRooms) {
        let roomSpace = currentRoom.type === 'double-bedded' ? 2 : 3;
        rooms.set(currentRoom.number, {type: currentRoom.type, emptyBeds: roomSpace, guests: []});
    }

    for (let couple of guests) {
        let isAccomodated = false

        if (couple.first.gender !== couple.second.gender) {
            for (let [key, value] of rooms) {
                if (value.emptyBeds === 2 && value.type === "double-bedded") {
                    value.guests.push(couple.first)
                    value.guests.push(couple.second)
                    value.emptyBeds = 0
                    isAccomodated = true
                }
                if (isAccomodated === true){
                    break
                }
            }
            if (isAccomodated === false) {
                for (let [key, value] of rooms) {
                    if (value.emptyBeds > 0 && (value.guests.length === 0 || value.guests[0].gender === couple.first.gender)) {
                        value.guests.push(couple.first)
                        isAccomodated = true
                        value.emptyBeds -= 1
                    }
                    if (isAccomodated === true){
                        break
                    }

                }
                if (isAccomodated === false) {
                    guestsMovedToTheTeaHouse++
                }
                isAccomodated = false
                for (let [key, value] of rooms) {
                    if (value.emptyBeds > 0 && value.type === "triple" && (value.guests.length === 0 || value.guests[0].gender === couple.second.gender)) {
                        value.guests.push(couple.second)
                        isAccomodated = true
                        value.emptyBeds -= 1
                    }
                    if (isAccomodated === true){
                        break
                    }

                }

            }

        } else {
            isAccomodated = false
            for (let [key, value] of rooms) {
                if (value.emptyBeds > 0 && value.type === "triple" && (value.guests.length === 0 || value.guests[0].gender === couple.first.gender)) {
                    value.guests.push(couple.first)
                    isAccomodated = true
                    value.emptyBeds -= 1
                }
                if (isAccomodated === true){
                    break
                }
            }
            if (isAccomodated === false) {
                guestsMovedToTheTeaHouse++
            }
            for (let [key, value] of rooms) {
                if (value.emptyBeds > 0 && value.type === "triple" && (value.guests.length === 0 || value.guests[0].gender === couple.second.gender)) {
                    value.guests.push(couple.second)
                    isAccomodated = true
                    value.emptyBeds -= 1
                }
                if (isAccomodated === true){
                    break
                }

            }
            if (isAccomodated === false) {
                guestsMovedToTheTeaHouse++
            }
        }
    }

    for (let [key, value] of [...rooms].sort()) {
        console.log(`Room number: ${key}`);
        if (value.guests !== undefined) {
            for (let guest of value.guests.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })) {
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            }
        }
        console.log(`Empty beds in the room: ${value.emptyBeds}`);
    }

    console.log(`Guests moved to the tea house: ${guestsMovedToTheTeaHouse}`);


}

Rooms([{number: '101A', type: 'double-bedded'},
        {number: '104', type: 'triple'},
        {number: '101B', type: 'double-bedded'},
        {number: '102', type: 'triple'}],
    [{
        first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
        second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
    },
        {
            first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
            second: {name: 'Jeko Snejev', gender: 'male', age: 18}
        },
        {
            first: {name: 'Pesho Goshov', gender: 'male', age: 20},
            second: {name: 'Gosho Peshov', gender: 'male', age: 18}
        },
        {
            first: {name: 'Conor McGregor', gender: 'male', age: 29},
            second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
        }]
);

Rooms([
   {number: '101A', type: 'double-bedded'},
   {number: '104', type: 'triple'},
    {number: '102', type: 'triple'},
   {number: '202', type: 'triple'},
   'Guests',
   {
       first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
        second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
    },
    {first: {name: 'Edno', gender: 'female', age: 15}, second: {name: 'Dve', gender: 'female', age: 25}},
    {
        first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
         second: {name: 'Jeko Snejev', gender: 'male', age: 18}
     },
    {first: {name: 'Pesho Goshov', gender: 'male', age: 20}, second: {name: 'Gosho Peshov', gender: 'male', age: 18}},
     {
        first: {name: 'Conor McGregor', gender: 'male', age: 29},
         second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
     }
 ]);