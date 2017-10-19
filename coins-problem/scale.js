
var scaleProto;

// wonky coin always light
function makeScale(numberOfCoins, wonkyCoin)  {
    let scale = {
        weighCount: 0
    }
    
    weight = function(side1, side2) {
        let side1weight = 0
        let side2weight = 0
        scale.weighCount++

        side1.forEach(function(element) {
            if(element == wonkyCoin)
                side1weight += .5
            else
                side1weight += 1
        });

        side2.forEach(function(element) {
            if(element == wonkyCoin)
                side2weight += .5
            else
                side2weight += 1
        })

        if(side1weight > side2weight)
            return "side1"
        else if(side1weight < side2weight)
            return "side2"

        return "equal"
    }

    scale.weigh = weight
    scale.numberOfCoins = numberOfCoins

    return scale
}

function test1LCSolutionsForN(numberOfCoins, solution) {
    let result = 0
    for(let i = 0; i < numberOfCoins; i++) {
        let scale = makeScale(numberOfCoins, i)
        let coin = solution(scale)
        let score = scale.weighCount
        if(coin !== i) {
            return { correct: false, score: undefined}
        } else {
            if(score > result)
                result = score
        }
    }
    return { correct: true, score: result}
}

function testLevel1Solution(solution) {
    let ns = [2, 3, 4, 5, 8, 9, 16, 17, 25, 36, 100]

    ns.forEach(function(i) {
        let result = test1LCSolutionsForN(i, solution)
        if(result.correct) {
            console.log(`${i}: CORRECT - MAX: ${result.score}`)
        } else {
            console.log(`${i}: INCORRECT`)
        }
    });
}

function findFake(scale) {
    return 7
}



// function rev2(originalString) {
//     //return all of the permutations of a string
//     if(originalString.length === 1){
//       return originalString  
//     }
//     else{
//         rev2(originalString.splice(1, originalString.length))
//     }
// }

// //console.log(testSolutionsForN(16, findFake))
// //console.log(testSolutionsForN(16, weighAllPairs))
// let originalString = ["onetwothreefour"];

// console.log(stringAdder(originalStrings));

module.exports = {
    testLevel1Solution: testLevel1Solution
}