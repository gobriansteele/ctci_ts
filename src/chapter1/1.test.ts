import {test, expect} from "vitest";
import {isUnique, isPermutation, urlIfy} from "./1.ts";

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