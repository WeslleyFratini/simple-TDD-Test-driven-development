import getFactorial from './factorial'; 

teste('getFactorial should be a function', () => {    
    expect(getFactorial).toBeInstanceOf(Function)
})

test('getFactorial(3) should return 6', () =>{
    const actual = getFactorial(3)
    const expected = 6

    expect(actual).toBe(expected)
})

test('getFactorial(3) should return 24', () =>{
    const actual = getFactorial(4)
    const expected = 24

    expect(actual).toBe(expected)
})