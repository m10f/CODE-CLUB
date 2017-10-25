scale = require("./scale")

function range(min, count) {
    let result = []
    for(let i = 0; i < count; i++) {
        result[i] = min + i
    }
    return result
}

function determineCoinInterval(scale, left, right, excluded) {
    let result = scale.weigh(left, right)
    if(result == "side1")
        return right
    if(result == "side2")
        return left
    return excluded
}

function searchInterval(scale, min, max) {
    // If there is only one coin in this interval
    // then we have found what we're looking for
    if(max === min)
        return min
    
    // If there are two coins, weigh them both
    // and determine which is wrong
    if(max == min + 1) {
        let result = scale.weigh([min], [max])
        if(result == "side1")
            return max
        if(result == "side2")
            return min
        
        throw "Coin is not in this interval!"
    }

    // Divide the coins up into 3 intervals as
    // equally as possible
    let count = 1 + max - min
    let baseSize = Math.floor(count / 3)
    let interval1 = range(min, baseSize + (count % 3 > 0 ? 1 : 0))
    let interval2 = range(interval1[interval1.length - 1] + 1, baseSize + (count % 3 > 1 ? 1 : 0))
    let interval3 = range(interval2[interval2.length - 1] + 1, baseSize)

    // weigh the equally sized intervals
    let next = undefined
    if(interval1.length == interval2.length) {
        next = determineCoinInterval(scale, interval1, interval2, interval3)
    } else {
        next = determineCoinInterval(scale, interval2, interval3, interval1)
    }

    return searchInterval(scale, next[0], next[next.length - 1])
}

function findCoin(scale) {
    return searchInterval(scale, 0, scale.numberOfCoins - 1)
}


scale.testLevel1Solution(findCoin)