### Cribbage calculator

Cribbage calculator will caculate the score of any cribbage hand.

## How to use

```

npm install cribbage-calculator

````
- function takes an array of cards as the argument
- the first 4 cards in the array will be the hand, the 5th will be the knob
- cards should be entered in for format 'value-suit',
- a = ace, j = jack, q = queen, and k = king
- h = hearts, d = dimonds, c = clubs, and s = spades

## Example:

``` js

  const calculator = require('cribbage-calculator')

  console.log(calculator(['2h', '10c', '3s', 'qd', 'ah']))

  // returns 7

```