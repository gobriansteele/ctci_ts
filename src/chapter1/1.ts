export function isUnique(str: string): boolean {
    const charArray: boolean[] = new Array(128).fill(false)

    for (let i = 0; i < str.length; i++) {
        const charChode = str.charCodeAt(i)
        if (charArray[charChode]) {
            return false
        }
        charArray[charChode] = true
    }

    return true
}

export function isPermutation(strA: string, strB: string): boolean {
    if(strA.length !== strB.length) {
        return false
    }

    const charArray: number[] = new Array(128).fill(0)

    for(let i = 0; i < strA.length; i++) {
        const charCode = strA.charCodeAt(i)
        charArray[charCode]++
    }

    for(let i = 0; i < strB.length; i++) {
        const charCode = strB.charCodeAt(i)
        charArray[charCode]--
        if(charArray[charCode] < 0) {
            return false
        }
    }

    return true
}

export function urlIfy(str: string): string {
    let isEndTrimSpace = false
    let newStr: string[] = []

    for(let i = str.length -1; i >= 0; i--) {
        if(str[i] !== ' ' || !isEndTrimSpace) {
            if(str[i] !==' ') isEndTrimSpace = true
            newStr[i] = str[i]
        } else {
            newStr[i] = '%20'
        }
    }

    return newStr.join('').trim()

}

export function isPalindromePermutation(str: string): boolean {
    const charMap = new Map<string, number>()
    let charCount = 0

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            charCount++
            charMap.set(str[i].toLowerCase(), (charMap.get(str[i].toLowerCase()) || 0) + 1)
        }
    }
    if(charCount %2 ===0) {
        for(let [_key, value] of charMap) {
            if(value %2 !== 0) {
                return false
            }
        }
    } else {
        let oddCount = 0
        for(let [_key, value] of charMap) {
            if(value %2 !== 0) {
                oddCount++
            }
        }
        if(oddCount !== 1) {
            return false
        }
    }
    return true

}

export function isOneAway(strA: string, strB: string): boolean {
    const lengthDifference = Math.abs(strA.length - strB.length)
    const shorterString = strA.length <= strB.length ? strA : strB
    const longerString = strA.length > strB.length ? strA : strB

    if(lengthDifference > 1) {
        return false
    }
    if(lengthDifference === 1) {
        // all characters in shorter string must be in longer string
        const charMap = new Map<string, boolean>()
        for(let i = 0; i < longerString.length; i++) {
            charMap.set(longerString[i], true)
        }
        for(let i = 0; i < shorterString.length; i++) {
            if(!charMap.get(shorterString[i])) {
                return false
            }
        }
        return true

    } else {
        // all characters in both strings must be the same except for one
        const charArray = new Array(128).fill(0)
        let diffCount = 0
        for(let i = 0; i < strA.length; i++) {
            const charCode = strA.charCodeAt(i)
            charArray[charCode]++
        }
        for(let i = 0; i < strB.length; i++) {
            const charCode = strB.charCodeAt(i)
            charArray[charCode]--
            if(charArray[charCode] < 0) {
                diffCount++
            }
            if(diffCount > 1) {
                return false
            }
        }
        return true
    }
}

export function compressString(str: string): string {
    let compressedString = ''
    let currentChar = str[0]
    let currentCharCount = 1
    let didCompress = false


    for(let i = 0; i < str.length; i++) {
        const nextChar = str[i + 1]
        if(nextChar === currentChar) {
            currentCharCount++
            didCompress = true
        }

        if(nextChar !== currentChar || i === str.length -1) {
            compressedString = `${compressedString}${currentChar}${currentCharCount}`
            currentChar = nextChar
            currentCharCount = 1
        }
    }

        if(!didCompress) {
            return str
        }
        return compressedString

}