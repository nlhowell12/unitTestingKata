// 1. Reverse a string
function reverseString(string) {
    let stringSplit = string.split("");
    let output = '';

    for (let i = stringSplit.length - 1; i >= 0; i--) {
        output += stringSplit[i];
    }
    
    return output;
}
console.assert(reverseString("abc") === "cba", "badReverse");
console.assert(reverseString("fresh") === "hserf", "badReverse");


// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseSentence(sentence) {
    let sentenceSplit = sentence.split(" ");
    let output = '';

    for (let i = sentenceSplit.length - 1; i >= 0; i--) {
        output += sentenceSplit[i] + " ";
    }
    return output;
}
console.assert(reverseSentence("do re me fa") === "fa me re do ", "badReverse")
console.assert(reverseSentence("My life got flipped, turned upside down!") === "down! upside turned flipped, got life My ", "badReverse");

// 3. Find the minimum value in an array
function compare(a, b) {
    return a - b;
};

function minArray(array) {
    let sortedArray = array.sort(compare);
    let minValue = array[0];
    return minValue;
}
console.assert(typeof minArray([1, 2]) === "number", "returning NaN");
console.assert(minArray([47, 234, 76, 3, 8345]) === 3, "minArray busted");

// 4. Find the maximum value in an array
function maxArray(array) {
    let sortedArray = array.sort(compare);
    let maxValue = array[array.length - 1];
    return maxValue;
}
console.assert(typeof maxArray([1, 2]) === "number", "returning NaN");
console.assert(maxArray([47, 234, 76, 3, 8345]) === 8345, "maxArray busted");

// 5. Calculate a remainder (given a numerator and denominator)
function remainder(a, b) {
    let remainder = a / b;
    return remainder;
}

console.assert(typeof remainder(5, 3) === "number");
console.assert(remainder(15, 3) === 5, "remainderBusted");

// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
function distinctValues(list) {
    let sortedList = list.split("");
    let outputObject = {};
    let output = "";
    for (let i = 0; i < sortedList.length; i++) {
        if (!outputObject[sortedList[i]]) {
            outputObject[sortedList[i]] = 0;
            output += sortedList[i];
        }
        
        outputObject[sortedList[i]]++;
    }
    return output;
}
console.assert(distinctValues("13356678") != "", "There is no output");
console.assert(distinctValues("13356678") === "135678", "distinctValues busted");

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
function countedValues(list) {
    let sortedList = list.split("");
    let countedObject = {};
    let output = "";
    for (let i = 0; i < sortedList.length; i++) {
        if (!countedObject[sortedList[i]]) {
            countedObject[sortedList[i]] = 0;
        }
        countedObject[sortedList[i]]++;
    }
    for(number in countedObject) {
            output += number + "(" + countedObject[number] + ")" + " ";
    }
    return output;
}
console.assert(countedValues("17725384756") != "", "There is no output");
console.assert(countedValues("17725384756") === "1(1) 2(1) 3(1) 4(1) 5(2) 6(1) 7(3) 8(1) ", "countedValues busted");

// 8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).

function evalExpr(expression, object) {
    let innerExp = expression;
    for (v in object) {
        expression = expression.replace(new RegExp(v, "g"), object[v]);
    }

    return eval(expression);
}

console.assert(evalExpr("a+a+b+b", {a:1, b:3, c:7, d:13}) === 8, "evalExpr.replace broken")
console.assert(evalExpr("a+b+c-d", {a:1, b:3, c:7, d:13}) === -2, "evalExpr broken");










