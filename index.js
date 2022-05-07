// Code your solutions in this file
const array = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(array, eventName) {
    let arrayReturn = []
    for (let i = 0; i < array.length; i++) {
        arrayReturn.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return arrayReturn
}

console.log(writeCards(array, "surprise"))

function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num)
        num -= 1
    }
}

countDown(10)