function capitalize(text) {
    return text.toUpperCase();
}

function reverseString(text) {
    return text.split('').reverse().join('');
}

function analyzeArray(arr) {
    if (arr.length === 0) {
        return {
            average: 0,
            max: 0,
            min: 0,
            length: 0
        }
    }

    const arrLength = arr.length;
    const arrMin = Math.min.apply(Math, arr);
    const arrMax = Math.max.apply(Math, arr);
    const arrSum = arr.reduce((prev, curr) => curr = curr + prev, 0);
    const avg = arrSum/arrLength;
    return {
        average: avg,
        max: arrMax,
        min: arrMin,
        length: arrLength,
    }
}

class Calculator {
    constructor() {

    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    divide(a, b) {
        if (b === 0) {
            return "invalid";
        } else {
            return a / b;
        }
    }
    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(text, k) {
    // helper function to help determine if a character needs to be mapped or not
    function isLetter(char) {
        return char.toUpperCase() != char.toLowerCase();
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let len = alphabet.length;
    let res = ''; // output string
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // if the character is not a letter, we can directly append it to the output string
        if (!isLetter(char)) {
            res += char;
        } else {
            let isUpperCase = char.toUpperCase() === char ? true: false;
            console.log(isUpperCase)
            const index = alphabet.indexOf(char.toLowerCase());
            let newChar = alphabet[(index + k) % len];
            newChar = isUpperCase ? newChar.toUpperCase() : newChar;
            res += newChar;
        }
    }
    return res;
}

export { capitalize, reverseString, analyzeArray, Calculator, caesarCipher };
