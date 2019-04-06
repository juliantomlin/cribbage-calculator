var pairChecker = function(arr){
  var score = 0
  for (var i = 0; i < arr.length; i++){
    for (var k = (i + 1); k < arr.length; k++){
      if (arr[i] === arr[k]){
        score += 2
      }
    }
  }
  return score
}

module.exports = pairChecker