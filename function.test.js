import { capitalize } from "./function.js";

// empty string
test('empty string', () => {
    expect(capitalize('')).toBe('')
})

// already capitalized
test('already capitalized', () => {
    expect(capitalize('ABBA')).toBe('ABBA')
})

// all lowercase
test('all lowercase', () => {
    expect(capitalize('asdf')).toBe('ASDF')
})

// healthy mix
test('healthy mix', () => {
    expect(capitalize('aOPe')).toBe('AOPE')
})

// includes digits
test('includes digits', () => {
    expect(capitalize('99ix')).toBe('99IX')
})