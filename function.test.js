import { analyzeArray, capitalize, reverseString } from "./function.js";

// CAPITALIZE
test('empty string', () => {
    expect(capitalize('')).toBe('')
})

test('already capitalized', () => {
    expect(capitalize('ABBA')).toBe('ABBA')
})

test('all lowercase', () => {
    expect(capitalize('asdf')).toBe('ASDF')
})

test('healthy mix', () => {
    expect(capitalize('aOPe')).toBe('AOPE')
})

test('includes digits', () => {
    expect(capitalize('99ix')).toBe('99IX')
})

// REVERSE STRING
test('empty string', () => {
    expect(reverseString('')).toBe('')
})

test('palindrome', () => {
    expect(reverseString('abba')).toBe('abba')
})

test('general case', () => {
    expect(reverseString('Akb90e')).toBe('e09bkA')
})

test('same character', () => {
    expect(reverseString('mmmm')).toBe('mmmm')
})

test('length 1', () => {
    expect(reverseString('k')).toBe('k')
})

// ANALYZE ARRAY
test('empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: 0,
        max: 0,
        min: 0,
        length: 0
    })
})

test('length 1 array', () => {
    expect(analyzeArray([2])).toEqual({
        average: 2,
        max: 2,
        min: 2,
        length: 1
    })
})

test('all same number', () => {
    expect(analyzeArray([8,8,8,8,8])).toEqual({
        average: 8,
        max: 8,
        min: 8,
        length: 5
    })
})

test('includes negatives', () => {
    expect(analyzeArray([-1, 3, 3, -10, 0])).toEqual({
        average: -1,
        max: 3,
        min: -10,
        length: 5
    })
})