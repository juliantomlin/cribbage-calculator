const nobChecker = function (face, suit) {
  for (let i = 0; i < face.length -1; i++){
    if (face[i] === 11) {
      if (suit[i] === suit[4]) {
        return 1
      }
    }
  }
  return 0
}

module.exports = nobChecker