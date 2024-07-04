import { analyzeArray, capitalize, reverseString, Calculator, caesarCipher } from "./function.js";

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

const calc = new Calculator();
test('divide by 0', () => {
    expect(calc.divide(1,0)).toEqual('invalid')
})

test('regular divide', () => {
    expect(calc.divide(2, 4)).toBeCloseTo(0.5)
})

test('floating point division', () => {
    expect(calc.divide(0.4, 0.5)).toBeCloseTo(0.8)
})

test('normal addition', () => {
    expect(calc.add(10, -2)).toBe(8)
})

test('floating point addition', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3)
})

test('normal subtraction', () => {
    expect(calc.subtract(4, 7)).toBe(-3)
})

test('floating point subtraction', () => {
    expect(calc.subtract(0.3, 1.6)).toBeCloseTo(-1.3)
})

test('normal multiplication', () => {
    expect(calc.multiply(6, 6)).toBe(36)
})

test('floating point multiplication', () => {
    expect(calc.multiply(0.1, 0.4)).toBeCloseTo(0.04);
})

test('empty string caesar shift', () => {
    expect(caesarCipher('', 5)).toBe('')
})

test('single character', () => {
    expect(caesarCipher('K', 1)).toBe('L')
})

test('only digits (stays the same)', () => {
    expect(caesarCipher('2388', 9)).toBe('2388')
})

test('shift of 0', () => {
    expect(caesarCipher('lol', 0)).toBe('lol')
})

test('general case', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
