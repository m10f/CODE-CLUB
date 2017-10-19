scale = require("./scale")

function badSolution(scale) {
    return 7
}

function weighAllPairs(scale) {
    let c = 0
    for(let i = 1;i < scale.numberOfCoins; i++){
        var result = scale.weigh([c],[i])
        if (result == "side2") {
            return c
        } 
        else if (result == "side1")
        {
            return i
        }
    }
}

console.log("badSolution")
scale.testLevel1Solution(badSolution)
console.log("")
console.log("weighAllPairs")
scale.testLevel1Solution(weighAllPairs)
