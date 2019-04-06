var flushChecker = function (arr){
  var score = 0
  var flush = 0
  arr.sort()
  if (arr[0] === arr[3]){
    flush += 1
  }
  if (arr[4] === arr[1]){
    flush += 1
  }
  if (flush > 0){
    score = 3 + flush
  }
  return score
}

module.exports = flushChecker