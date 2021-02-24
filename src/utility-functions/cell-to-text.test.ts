import { cellToText } from './cell-to-text'
import { binaryToBraille as b2b } from './cell-to-braille'

it('identifies the basic letters', () => {
    expect(cellToText(b2b["1"])).toEqual('a')
    expect(cellToText(b2b["1"], '⠀')).toEqual('a')
    expect(cellToText(b2b["12"])).toEqual('b')
    expect(cellToText(b2b["14"])).toEqual('c')
    expect(cellToText(b2b["145"])).toEqual('d')
    expect(cellToText(b2b["15"])).toEqual('e')
    expect(cellToText(b2b["124"])).toEqual('f')
    expect(cellToText(b2b["1245"])).toEqual('g')
    expect(cellToText(b2b["125"])).toEqual('h')
    expect(cellToText(b2b["24"])).toEqual('i')
    expect(cellToText(b2b["245"])).toEqual('j')
    expect(cellToText(b2b["13"])).toEqual('k')
    expect(cellToText(b2b["123"])).toEqual('l')
    expect(cellToText(b2b["134"])).toEqual('m')
    expect(cellToText(b2b["1345"])).toEqual('n')
    expect(cellToText(b2b["135"])).toEqual('o')
    expect(cellToText(b2b["1234"])).toEqual('p')
    expect(cellToText(b2b["12345"])).toEqual('q')
    expect(cellToText(b2b["1235"])).toEqual('r')
    expect(cellToText(b2b["234"])).toEqual('s')
    expect(cellToText(b2b["2345"])).toEqual('t')
    expect(cellToText(b2b["136"])).toEqual('u')
    expect(cellToText(b2b["1236"])).toEqual('v')
    expect(cellToText(b2b["2456"])).toEqual('w')
    expect(cellToText(b2b["1346"])).toEqual('x')
    expect(cellToText(b2b["13456"])).toEqual('y')
    expect(cellToText(b2b["1356"])).toEqual('z')

    expect(cellToText(b2b["1"], b2b["6"])).toEqual('A')
    expect(cellToText(b2b["12"], b2b["6"])).toEqual('B')
    expect(cellToText(b2b["14"], b2b["6"])).toEqual('C')
    expect(cellToText(b2b["145"], b2b["6"])).toEqual('D')
    expect(cellToText(b2b["15"], b2b["6"])).toEqual('E')
    expect(cellToText(b2b["124"], b2b["6"])).toEqual('F')
    expect(cellToText(b2b["1245"], b2b["6"])).toEqual('G')
    expect(cellToText(b2b["125"], b2b["6"])).toEqual('H')
    expect(cellToText(b2b["24"], b2b["6"])).toEqual('I')
    expect(cellToText(b2b["245"], b2b["6"])).toEqual('J')
    expect(cellToText(b2b["13"], b2b["6"])).toEqual('K')
    expect(cellToText(b2b["123"], b2b["6"])).toEqual('L')
    expect(cellToText(b2b["134"], b2b["6"])).toEqual('M')
    expect(cellToText(b2b["1345"], b2b["6"])).toEqual('N')
    expect(cellToText(b2b["135"], b2b["6"])).toEqual('O')
    expect(cellToText(b2b["1234"], b2b["6"])).toEqual('P')
    expect(cellToText(b2b["12345"], b2b["6"])).toEqual('Q')
    expect(cellToText(b2b["1235"], b2b["6"])).toEqual('R')
    expect(cellToText(b2b["234"], b2b["6"])).toEqual('S')
    expect(cellToText(b2b["2345"], b2b["6"])).toEqual('T')
    expect(cellToText(b2b["136"], b2b["6"])).toEqual('U')
    expect(cellToText(b2b["1236"], b2b["6"])).toEqual('V')
    expect(cellToText(b2b["2456"], b2b["6"])).toEqual('W')
    expect(cellToText(b2b["1346"], b2b["6"])).toEqual('X')
    expect(cellToText(b2b["13456"], b2b["6"])).toEqual('Y')
    expect(cellToText(b2b["1356"], b2b["6"])).toEqual('Z')
})

it('identifies number', () => {
    expect(cellToText(b2b["1"], b2b["3456"])).toEqual('1')
    expect(cellToText(b2b["12"], b2b["3456"])).toEqual('2')
    expect(cellToText(b2b["14"], b2b["3456"])).toEqual('3')
    expect(cellToText(b2b["145"], b2b["3456"])).toEqual('4')
    expect(cellToText(b2b["15"], b2b["3456"])).toEqual('5')
    expect(cellToText(b2b["124"], b2b["3456"])).toEqual('6')
    expect(cellToText(b2b["1245"], b2b["3456"])).toEqual('7')
    expect(cellToText(b2b["125"], b2b["3456"])).toEqual('8')
    expect(cellToText(b2b["24"], b2b["3456"])).toEqual('9')
    expect(cellToText(b2b["245"], b2b["3456"])).toEqual('0')
})

it('hides indicators', () => {
    expect(cellToText(b2b["3456"], undefined, b2b["1356"])).toEqual('#') // non-number
    expect(cellToText(b2b["3456"], undefined, b2b["1"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["12"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["14"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["145"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["15"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["124"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["1245"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["125"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["24"])).toEqual('')
    expect(cellToText(b2b["3456"], undefined, b2b["245"])).toEqual('')
    expect(cellToText(b2b["3456"], b2b["3456"], b2b["1"])).toEqual('') // sequential #s
})

it('does punctuation', () => {
    expect(cellToText(b2b["2"])).toEqual(',')  // Comma
    expect(cellToText(b2b["256"])).toEqual('.')  // Period
    expect(cellToText(b2b["3"])).toEqual('\'') // Apostrophe
    expect(cellToText(b2b["25"])).toEqual(":")  // Colon
    expect(cellToText(b2b["36"], b2b["6"])).toEqual("–") // Dash
    // TODO: expect(cellToText('⠤', '⠐⠠')).toEqual("—") // Long Dash
    expect(cellToText(b2b["235"])).toEqual('!')  // Exlamation
    expect(cellToText(b2b["36"])).toEqual('‐')  // Hyphen
    expect(cellToText(b2b["236"], b2b["1"])).toEqual('?')  // Question Mark (preceded by non-blank)
    expect(cellToText(b2b["23"])).toEqual(";")  // Semi-Colon
    // TODO: expect(cellToText('⠲', '⠲⠲')).toEqual("…") // Ellipsis
    expect(cellToText(b2b["34"], b2b["456"])).toEqual("/") // Forward Slash
    expect(cellToText(b2b["16"], b2b["456"])).toEqual("\\") // Backward Slash
    expect(cellToText(b2b["236"], b2b[""])).toEqual("“") // Opening Double Quote
    expect(cellToText(b2b["356"])).toEqual("”") // Closing Double Quote
    expect(cellToText(b2b["236"], b2b["6"])).toEqual("‘")// Opening Single Quote
    expect(cellToText(b2b["356"], b2b["6"])).toEqual("’") // Closing Single Quote

    expect(cellToText(b2b[""])).toEqual(' ')  // Braille space
    expect(cellToText(b2b["3456"])).toEqual('#')  // Number sign
})

it('does grouping punctuation', () => {
    expect(cellToText(b2b["126"], b2b["5"])).toEqual('(') // Opening Parenthesis
    expect(cellToText(b2b["345"], b2b["5"])).toEqual(')') // Closing Parenthesis
    expect(cellToText(b2b["126"], b2b["46"])).toEqual('[') // Opening Square Bracket
    expect(cellToText(b2b["345"], b2b["46"])).toEqual(']') // Closing Square Bracket
    expect(cellToText(b2b["126"], b2b["456"])).toEqual('{') // Opening Curly Bracket
    expect(cellToText(b2b["345"], b2b["456"])).toEqual('}') // Closing Curly Bracket
    expect(cellToText(b2b["126"], b2b["4"])).toEqual('〈') // Opening Angle Bracket
    expect(cellToText(b2b["345"], b2b["4"])).toEqual('〉') // Closing Angle Bracket

})

it('identifies strong contractions', () => {
    expect(cellToText('⠯')).toEqual('and')  // and
    expect(cellToText('⠿')).toEqual('for')  // for
    expect(cellToText('⠷')).toEqual('of')  // of
    expect(cellToText('⠮')).toEqual('the')  // the
    expect(cellToText('⠾')).toEqual('with')  // with
})

