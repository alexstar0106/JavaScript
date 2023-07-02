const isAdult = (birthYear, currentYear) => {
    const getAge = currentYear - birthYear;
    return getAge >= 18 ? true : false
}

console.log(isAdult(2000,2023))



const presentDay = (month, day) => 'Today is ' + `${month} ${day}`

console.log(presentDay('april',19))