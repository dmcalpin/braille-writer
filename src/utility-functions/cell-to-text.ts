import { binaryToBraille as b2b } from './cell-to-braille'

export const NUMBER_INDICATOR = b2b["3456"]
export const EMPTY_CELL = b2b[""];

export function cellToText(cell: string, previousCell?: string, nextCell?: string): string {
    if (previousCell === b2b["4"]) {
        return fourPrefix[cell]
    }
    if (previousCell === b2b["46"]) {
        return fourSixPrefix[cell]
    }
    if (previousCell === b2b["5"]) {
        return fivePrefix[cell]
    }
    if (cell === b2b["236"] && (!previousCell || previousCell === EMPTY_CELL)) {
        return blankOrNoPrefix[cell]
    }
    if (previousCell === b2b["456"]) {
        return fourFiveSixPrefix[cell]
    }
    if (cell === NUMBER_INDICATOR) {
        if (nextCell && threeFourFiveSixPrefix[nextCell]) {
            return ''
        }
    }
    if (previousCell === NUMBER_INDICATOR) {
        return threeFourFiveSixPrefix[cell] || unprefixed[cell]
    }
    if (previousCell === b2b["6"]) {
        return sixPrefix[cell]
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
    '⠂': ',',  // Comma
    '⠆': ";",  // Semi-Colon
    '⠒': ":",  // Colon
    '⠲': '.',  // Period
    '⠖': '!',  // Exlamation
    '⠄': '\'', // Apostrophe
    '⠤': '‐',  // Hyphen
    '⠦': '?', // Question Mark
    '⠀': ' ',  // Braille space
    '⠴': '”',  // Right Double Quote
    '⠼': '#',   // Number Indicator

    // Strong contractions
    '⠯': 'and',
    '⠿': 'for',
    '⠷': 'of',
    '⠮': 'the',
    '⠾': 'with',
}

const blankOrNoPrefix: { [key: string]: string } = {
    [b2b["236"]]: '“' // Left Double Quote
}

const fourPrefix: { [key: string]: string } = {
    [b2b["126"]]: "〈",
    [b2b["345"]]: "〉"
}

const fivePrefix: { [key: string]: string } = {
    [b2b["126"]]: "(",
    [b2b["345"]]: ")"
}


const sixPrefix: { [key: string]: string } = {
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
    '⠵': 'Z',

    '⠤': '–',
    '⠦': '‘',
    '⠴': '’'
}

const threeFourFiveSixPrefix: { [key: string]: string } = {
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

const fourSixPrefix: { [key: string]: string } = {
    [b2b["126"]]: "[",
    [b2b["345"]]: "]"
}


const fourFiveSixPrefix: { [key: string]: string } = {
    [b2b["34"]]: '/', // Forward Slash
    [b2b["16"]]: '\\', // Backward Slash
    [b2b["126"]]: "{",
    [b2b["345"]]: "}"
}
