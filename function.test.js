import { capitalize, reverseString } from "./function.js";

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