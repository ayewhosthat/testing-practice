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

export { capitalize, reverseString, analyzeArray };