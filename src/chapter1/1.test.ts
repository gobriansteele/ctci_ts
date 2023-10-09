import {test, expect} from "vitest";
import {isUnique, isPermutation, urlIfy, isPalindromePermutation, isOneAway, compressString} from "./1.ts";

test('isUnique', ()=>{
    expect(isUnique('abc')).toBe(true);
    expect(isUnique('abca')).toBe(false);
    expect(isUnique('bananan')).toBe(false);
})

test('isPermutation', ()=>{
    expect(isPermutation('abc', 'cba')).toBe(true);
    expect(isPermutation('abc', 'cbad')).toBe(false);
    expect(isPermutation('bananan', 'banana')).toBe(false);
})

test('urlIfy', ()=>{
    expect(urlIfy('Mr John Smith    ')).toBe('Mr%20John%20Smith')
})

test('isPalindromePermutation', ()=>{
    expect(isPalindromePermutation('taco cat')).toBe(true);
    expect(isPalindromePermutation('   taCo cAt')).toBe(true);
    expect(isPalindromePermutation('brian steele')).toBe(false);
})

test('isOneAway', ()=>{
    expect(isOneAway('pale', 'ple')).toBe(true);
    expect(isOneAway('pales', 'pale')).toBe(true);
    expect(isOneAway('pale', 'bale')).toBe(true);
    expect(isOneAway('pale', 'bake')).toBe(false);
})

test('compressString', ()=>{
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
    expect(compressString('abc')).toBe('abc');
    expect(compressString('aaabbbccc')).toBe('a3b3c3');

})