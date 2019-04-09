var runChecker = function (arr) {
  var score = 0
  var run = 1
  var multiple = 1
  arr.sort(function(a,b){
    return a - b
  })
  for (var i = 0; i < arr.length - 1; i++){
    if (arr[i+1] - arr[i] === 1){
      run += 1
    }
    else if (arr[i] === arr [i+1]){
      multiple += 1
    }
    else {
      run = 1
      multiple = 1
    }
    if (run > 2){
      if((multiple == 3) && ((arr[1] != arr[3])) && (arr[0] != arr[2]) && (arr[2] != arr[4])){
        multiple = 4
      }
      score = run * multiple
    }
  }
  return score
}

module.exports = runChecker