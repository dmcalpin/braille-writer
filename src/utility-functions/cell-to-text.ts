import { Cell } from '../types/cell'

export function cellToText(cell: Cell): string {
    let binaryString = "0b"
    for (let i = 5; i >= 0; i--) {
        binaryString += Number(cell[i])
    }
    // eslint-disable-next-line
    let binaryNumber = eval(binaryString)

    return binaryToLetter[binaryNumber] || binaryNumber
}

const binaryToLetter: { [key: number]: string } = {
    1: 'a',
    2: ',',
    3: 'b',
    4: '’',
    5: 'k',
    6: '',
    7: 'l',
    8: '',
    9: 'c',
    10: 'i',
    11: 'f',
    12: 'st',
    13: 'm',
    14: 's',
    15: 'p',
    16: '',
    17: 'e',
    18: ':',
    19: 'h',
    20: '',
    21: 'o',
    22: '!',
    23: 'r',
    24: '',
    25: 'd',
    26: 'j',
    27: 'g',
    28: 'ar',
    29: 'n',
    30: 't',
    31: 'q',
    32: 'CAP_LETTER:',
    33: 'ch',
    34: '',
    35: 'gh',
    36: '‐',
    37: 'u',
    38: '?',
    39: 'v',
    40: '',
    41: 'sh',
    42: 'ow',
    43: 'ed',
    44: 'ing',
    45: 'x',
    46: 'the',
    47: 'and',
    48: '',
    49: 'wh',
    50: '.',
    51: 'ou',
    52: '',
    53: 'z',
    54: '',
    55: 'of',
    56: '',
    57: 'th',
    58: 'w',
    59: 'er',
    60: '',
    61: 'y',
    62: 'with',
    63: 'for',
}
