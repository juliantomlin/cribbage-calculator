var calculator = require('./score-calculator')

var hand = process.argv.slice(2)

console.log(calculator(hand))