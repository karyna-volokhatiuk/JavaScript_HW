// METHOD 1
function reverseStringWithSplit(stringToReverse) {
    return stringToReverse.split('').reverse().join('');
}

console.log(reverseStringWithSplit("testReverseString"))
console.log(reverseStringWithSplit("testReverseString1"))


// METHOD 2
function reverseStringWithFor(stringToReverse) {
    let reversedString = '';

    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        reversedString += stringToReverse[i];
    }

    return reversedString;
}

console.log(reverseStringWithFor("testReverseString"))
console.log(reverseStringWithFor("testReverseString1"))


// METHOD 3
function reverseStringWithForIn(stringToReverse) {
    let reversedString = [];

    for (let i in stringToReverse) {
        reversedString[stringToReverse.length - 1 - i] = stringToReverse[i];
    }

    return reversedString.join('');
}

console.log(reverseStringWithForIn("testReverseString"))
console.log(reverseStringWithForIn("testReverseString1"))


// METHOD 4
function reverseStringWithTemp(stringToReverse) {
    let stringArray = stringToReverse.split('')

    for (let i = 0; i < stringArray.length / 2; i++) {
        let temp = stringArray[i];
        stringArray[i] = stringArray[stringArray.length - i - 1];
        stringArray[stringArray.length - i - 1] = temp;

    }

    return stringArray.join('');
}

console.log(reverseStringWithTemp("testReverseString"))
console.log(reverseStringWithTemp("testReverseString1"))


// METHOD 5
function reverseStringWithForOf(stringToReverse) {
    let reversedString = [];
    let i = 0;

    for (let sign of stringToReverse) {
        reversedString[stringToReverse.length - 1 - i] = sign;
        i++;
    }

    return reversedString.join('');
}

console.log(reverseStringWithForOf("testReverseString"))
console.log(reverseStringWithForOf("testReverseString1"))


// METHOD 6
function reverseStringWithCharAt(stringToReverse) {
    let reversedString = ''

    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        reversedString += stringToReverse.charAt(i);
    }

    return reversedString;

}

console.log(reverseStringWithCharAt("testReverseString"))
console.log(reverseStringWithCharAt("testReverseString1"))


// METHOD 7
function reverseStringWithSubstring(stringToReverse) {
    let reversedString = ''

    for (let i = stringToReverse.length; i >= 0; i--) {
        reversedString += stringToReverse.substring(i-1, i)
    }

    return reversedString;
}

console.log(reverseStringWithSubstring("testReverseString"))
console.log(reverseStringWithSubstring("testReverseString1"))
