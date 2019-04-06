var cardList = require('./card-list')
var fifteen = require('./fifteen-counter')
var pair = require('./pair-counter')
var run = require('./run-counter')
var flush = require('./flush-checker')
var hand = ['5h', '2s', 'ad', 'kc', '3h']

var handValue = function(arr){
  output =[]
  arr.forEach(function(card){
    output.push(cardList[card].value)
  })
  return output
}

var handFace = function(arr){
  output =[]
  arr.forEach(function(card){
    output.push(cardList[card].face)
  })
  return output
}

var handSuit = function(arr){
  output =[]
  arr.forEach(function(card){
    output.push(cardList[card].suit)
  })
  return output
}


console.log(handValue(hand))

var score = fifteen(handValue(hand)) + pair(handFace(hand)) + run(handFace(hand)) + flush(handSuit(hand))

console.log(score)