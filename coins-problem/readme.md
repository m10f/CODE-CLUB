# Coins Problem

A series of fun puzzles involving coins and scales.

## API
These problems deal with a set of `n` coins distinctly labelled with `0` through `n - 1`.  Solutions should take a `scale` as a parameter and return
a integer or array of integers (depending on the problem) which is the label
of the fake coin(s).

The `scale` object has two methods:
* `weigh()` takes two arrays of integers (representing the labels of the coins)
          and returns `"side1"` if the coins identified by the first argument
          are heavier, `"side2"` if the coins identified by the second argument
          are heavier, and `"equal"` if both sides are equal.
* `numberOfCoins` returns the total number of coins in the problem.

Scoring will depend on the number of times `weigh()` is called

## Level 1
You are given `n` coins and a balance scale.  One of the coins is fake - detectable by the fact that it weighs less than the other `n - 1` coins.  What is the minimum number of weighings needed to determine which coin is fake?  Express this as a function in javascript.

You can use the `scale.js` library to test your solution.

```Javascript
scaleTest = require("./scale")

function mySolution(scale) {
    // .. solution omitted
}

scaleTest.testLevel1Solution(mySolution)
```

See the `example-level1.js` file for examples.