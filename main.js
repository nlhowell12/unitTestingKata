function compare(a, b) {
    return a - b;
};

function reverseString(string) {
    let stringSplit = string.split("");
    let output = '';

    for (let i = stringSplit.length - 1; i >= 0; i--) {
        output += stringSplit[i];
    }
    console.assert(stringSplit[0] === "f", "splitFail");
    console.assert(output === "hserf", "badReverse");
    return output;
}
reverseString("fresh");

function reverseSentence(sentence) {
    let sentenceSplit = sentence.split(" ");
    let output = '';

    for (let i = sentenceSplit.length - 1; i >= 0; i--) {
        output += sentenceSplit[i] + " ";
    }
    console.assert(sentenceSplit[0] === "My", "splitFail");
    return output;
}
console.assert(reverseSentence("My life got flipped, turned upside down!") === "down! upside turned flipped, got life My ", "badReverse");

function minArray(array) {
    let sortedArray = array.sort(compare);
    let minValue = array[0];
    console.assert(array[0] < array[1] < array[2], "Array not sorted");
    return minValue;
}

console.assert(minArray([47, 234, 76, 3, 8345]) === 3, "minArray busted");

function maxArray(array) {
    let sortedArray = array.sort(compare);
    let maxValue = array[array.length - 1];
    console.assert(array[0] < array[1] < array[2], "Array not sorted");
    return maxValue;
}

console.assert(maxArray([47, 234, 76, 3, 8345]) === 8345, "maxArray busted");

function remainder(a, b) {
    let remainder = a / b;
    return remainder;
}

console.assert(typeof remainder(5, 3) === "number");
console.assert(remainder(15, 3) === 5, "remainderBusted");

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

console.assert(distinctValues("13356678") === "135678", "distinctValues busted");

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
console.assert(countedValues("17725384756") === "1(1) 2(1) 3(1) 4(1) 5(2) 6(1) 7(3) 8(1) ", "countedValues busted");

function evalExpr(a, b, c, d, object) {
    
}