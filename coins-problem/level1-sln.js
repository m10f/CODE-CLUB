scale = require("./scale")

function range(min, count) {
    let result = []
    for(let i = 0; i < count; i++) {
        result[i] = min + i
    }
    return result
}

function determineCoinBag(scale, left, right, excluded) {
    let result = scale.weigh(left, right)
    if(result == "side1")
        return right
    if(result == "side2")
        return left
    return excluded
}

function searchInterval(scale, coins) {
    // If there is just one coin, we've foind it
    if(coins.length == 1)
        return coins[0]
    
    // Divide the coins up into 3 bags as equally as possible
    let cns = coins.slice()
    let bag1 = cns.splice(0, Math.floor(cns.length / 3))
    let bag2 = cns.splice(0, Math.floor(cns.length / 2))
    let bag3 = cns

    // find which bag the coin is in and continue the search
    let next = undefined
    if(bag1.length == bag2.length) {
        next = determineCoinBag(scale, bag1, bag2, bag3)
    } else {
        next = determineCoinBag(scale, bag2, bag3, bag1)
    }

    return searchInterval(scale, next)
}

function findCoin(scale) {
    return searchInterval(scale, range(0, scale.numberOfCoins))
}

scale.testLevel1Solution(findCoin)