import { cellToText } from './cell-to-text'

it('identifies the basic letters', () => {
    expect(cellToText('⠁')).toEqual('a')
    expect(cellToText('⠃')).toEqual('b')
    expect(cellToText('⠉')).toEqual('c')
    expect(cellToText('⠙')).toEqual('d')
    expect(cellToText('⠑')).toEqual('e')
    expect(cellToText('⠋')).toEqual('f')
    expect(cellToText('⠛')).toEqual('g')
    expect(cellToText('⠓')).toEqual('h')
    expect(cellToText('⠊')).toEqual('i')
    expect(cellToText('⠚')).toEqual('j')
    expect(cellToText('⠅')).toEqual('k')
    expect(cellToText('⠇')).toEqual('l')
    expect(cellToText('⠍')).toEqual('m')
    expect(cellToText('⠝')).toEqual('n')
    expect(cellToText('⠕')).toEqual('o')
    expect(cellToText('⠏')).toEqual('p')
    expect(cellToText('⠟')).toEqual('q')
    expect(cellToText('⠗')).toEqual('r')
    expect(cellToText('⠎')).toEqual('s')
    expect(cellToText('⠞')).toEqual('t')
    expect(cellToText('⠥')).toEqual('u')
    expect(cellToText('⠧')).toEqual('v')
    expect(cellToText('⠺')).toEqual('w')
    expect(cellToText('⠭')).toEqual('x')
    expect(cellToText('⠽')).toEqual('y')
    expect(cellToText('⠵')).toEqual('z')

    expect(cellToText('⠁', '⠠')).toEqual('A')
    expect(cellToText('⠃', '⠠')).toEqual('B')
    expect(cellToText('⠉', '⠠')).toEqual('C')
    expect(cellToText('⠙', '⠠')).toEqual('D')
    expect(cellToText('⠑', '⠠')).toEqual('E')
    expect(cellToText('⠋', '⠠')).toEqual('F')
    expect(cellToText('⠛', '⠠')).toEqual('G')
    expect(cellToText('⠓', '⠠')).toEqual('H')
    expect(cellToText('⠊', '⠠')).toEqual('I')
    expect(cellToText('⠚', '⠠')).toEqual('J')
    expect(cellToText('⠅', '⠠')).toEqual('K')
    expect(cellToText('⠇', '⠠')).toEqual('L')
    expect(cellToText('⠍', '⠠')).toEqual('M')
    expect(cellToText('⠝', '⠠')).toEqual('N')
    expect(cellToText('⠕', '⠠')).toEqual('O')
    expect(cellToText('⠏', '⠠')).toEqual('P')
    expect(cellToText('⠟', '⠠')).toEqual('Q')
    expect(cellToText('⠗', '⠠')).toEqual('R')
    expect(cellToText('⠎', '⠠')).toEqual('S')
    expect(cellToText('⠞', '⠠')).toEqual('T')
    expect(cellToText('⠥', '⠠')).toEqual('U')
    expect(cellToText('⠧', '⠠')).toEqual('V')
    expect(cellToText('⠺', '⠠')).toEqual('W')
    expect(cellToText('⠭', '⠠')).toEqual('X')
    expect(cellToText('⠽', '⠠')).toEqual('Y')
    expect(cellToText('⠵', '⠠')).toEqual('Z')
})

it('identifies number', () => {
    expect(cellToText('⠁', '⠼')).toEqual('1')
    expect(cellToText('⠃', '⠼')).toEqual('2')
    expect(cellToText('⠉', '⠼')).toEqual('3')
    expect(cellToText('⠙', '⠼')).toEqual('4')
    expect(cellToText('⠑', '⠼')).toEqual('5')
    expect(cellToText('⠋', '⠼')).toEqual('6')
    expect(cellToText('⠛', '⠼')).toEqual('7')
    expect(cellToText('⠓', '⠼')).toEqual('8')
    expect(cellToText('⠊', '⠼')).toEqual('9')
    expect(cellToText('⠚', '⠼')).toEqual('0')
})

it('hides indicators', () => {
    expect(cellToText('⠼', undefined, '⠵')).toEqual('#') // non-number
    expect(cellToText('⠼', undefined, '⠁')).toEqual('')
    expect(cellToText('⠼', undefined, '⠃')).toEqual('')
    expect(cellToText('⠼', undefined, '⠉')).toEqual('')
    expect(cellToText('⠼', undefined, '⠙')).toEqual('')
    expect(cellToText('⠼', undefined, '⠑')).toEqual('')
    expect(cellToText('⠼', undefined, '⠋')).toEqual('')
    expect(cellToText('⠼', undefined, '⠛')).toEqual('')
    expect(cellToText('⠼', undefined, '⠓')).toEqual('')
    expect(cellToText('⠼', undefined, '⠊')).toEqual('')
    expect(cellToText('⠼', undefined, '⠚')).toEqual('')
    expect(cellToText('⠼', '⠼', '⠁')).toEqual('') // sequential #s
})

it('does punctuation', () => {
    expect(cellToText('⠂')).toEqual(',')  // Comma
    expect(cellToText('⠆')).toEqual(";")  // Semi-Colon
    expect(cellToText('⠒')).toEqual(":")  // Colon
    expect(cellToText('⠲')).toEqual('.')  // Period
    expect(cellToText('⠖')).toEqual('!')  // Exlamation
    expect(cellToText('⠄')).toEqual('\'') // Apostrophe
    expect(cellToText('⠀')).toEqual(' ')  // Braille space
    expect(cellToText('⠼')).toEqual('#')  // Number sign
})
