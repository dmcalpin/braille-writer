export const NUMBER_INDICATOR = '⠼'
export const CAPITAL_LETTER_INDICATOR = '⠠'
export const EMPTY_CELL = '⠀';

export function cellToText(cell: string, previousCell?: string, nextCell?: string): string {
    if (cell === NUMBER_INDICATOR) {
        if (nextCell && numbers[nextCell]) {
            return ''
        }
    } else if (previousCell === NUMBER_INDICATOR) {
        return numbers[cell] || unprefixed[cell]
    } else if (previousCell === CAPITAL_LETTER_INDICATOR) {
        return capital[cell]
    }

    return unprefixed[cell]
}

const unprefixed: { [key: string]: string } = {
    // Letters
    '⠁': 'a',
    '⠃': 'b',
    '⠉': 'c',
    '⠙': 'd',
    '⠑': 'e',
    '⠋': 'f',
    '⠛': 'g',
    '⠓': 'h',
    '⠊': 'i',
    '⠚': 'j',
    '⠅': 'k',
    '⠇': 'l',
    '⠍': 'm',
    '⠝': 'n',
    '⠕': 'o',
    '⠏': 'p',
    '⠟': 'q',
    '⠗': 'r',
    '⠎': 's',
    '⠞': 't',
    '⠥': 'u',
    '⠧': 'v',
    '⠺': 'w',
    '⠭': 'x',
    '⠽': 'y',
    '⠵': 'z',

    // Other
    '⠂': ',', // Comma
    '⠆': ";", // Semi-Colon
    '⠒': ":", // Colon
    '⠲': '.', // Period
    '⠖': '!', // Exlamation
    '⠀': ' ', // Braille space

    '⠼': '#' // Number Indicator
}

const capital: { [key: string]: string } = {
    // Letters
    '⠁': 'A',
    '⠃': 'B',
    '⠉': 'C',
    '⠙': 'D',
    '⠑': 'E',
    '⠋': 'F',
    '⠛': 'G',
    '⠓': 'H',
    '⠊': 'I',
    '⠚': 'J',
    '⠅': 'K',
    '⠇': 'L',
    '⠍': 'M',
    '⠝': 'N',
    '⠕': 'O',
    '⠏': 'P',
    '⠟': 'Q',
    '⠗': 'R',
    '⠎': 'S',
    '⠞': 'T',
    '⠥': 'U',
    '⠧': 'V',
    '⠺': 'W',
    '⠭': 'X',
    '⠽': 'Y',
    '⠵': 'Z'
}

const numbers: { [key: string]: string } = {
    // Numbers
    '⠁': '1',
    '⠃': '2',
    '⠉': '3',
    '⠙': '4',
    '⠑': '5',
    '⠋': '6',
    '⠛': '7',
    '⠓': '8',
    '⠊': '9',
    '⠚': '0'
}
