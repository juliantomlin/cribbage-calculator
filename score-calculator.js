var cardList = require('./card-list')
var fifteen = require('./fifteen-counter')
var pair = require('./pair-counter')
var run = require('./run-counter')
var flush = require('./flush-checker')
var nob = require('./nob-checker')

var handValue = function(arr){
  output =[]
  arr.forEach(function(card){
    output.push(cardList[card.toLowerCase()].value)
  })
  return output
}

var handFace = function(arr){
  output =[]
  arr.forEach(function(card){
    output.push(cardList[card.toLowerCase()].face)
  })
  return output
}

var handSuit = function(arr){
  output =[]
  arr.forEach(function(card){
    output.push(cardList[card.toLowerCase()].suit)
  })
  return output
}



module.exports = function (hand) {
  return fifteen(handValue(hand)) + pair(handFace(hand)) + run(handFace(hand)) + flush(handSuit(hand)) + nob(handFace(hand), handSuit(hand))
}