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