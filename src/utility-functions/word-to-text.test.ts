
import { wordToText } from './word-to-text'
import { binaryToBraille as b2b } from './cell-to-braille'

it('identifies the basic letters', () => {
    expect(wordToText('⠁')).toEqual('a')
    expect(wordToText('⠃')).toEqual('b')
    expect(wordToText('⠉')).toEqual('c')
    expect(wordToText('⠙')).toEqual('d')
    expect(wordToText('⠑')).toEqual('e')
    expect(wordToText('⠋')).toEqual('f')
    expect(wordToText('⠛')).toEqual('g')
    expect(wordToText('⠓')).toEqual('h')
    expect(wordToText('⠊')).toEqual('i')
    expect(wordToText('⠚')).toEqual('j')
    expect(wordToText('⠅')).toEqual('k')
    expect(wordToText('⠇')).toEqual('l')
    expect(wordToText('⠍')).toEqual('m')
    expect(wordToText('⠝')).toEqual('n')
    expect(wordToText('⠕')).toEqual('o')
    expect(wordToText('⠏')).toEqual('p')
    expect(wordToText('⠟')).toEqual('q')
    expect(wordToText('⠗')).toEqual('r')
    expect(wordToText('⠎')).toEqual('s')
    expect(wordToText('⠞')).toEqual('t')
    expect(wordToText('⠥')).toEqual('u')
    expect(wordToText('⠧')).toEqual('v')
    expect(wordToText('⠺')).toEqual('w')
    expect(wordToText('⠭')).toEqual('x')
    expect(wordToText('⠽')).toEqual('y')
    expect(wordToText('⠵')).toEqual('z')
})

it('identifies number', () => {
    expect(wordToText('⠼⠁')).toEqual('1')
    expect(wordToText('⠼⠃')).toEqual('2')
    expect(wordToText('⠼⠉')).toEqual('3')
    expect(wordToText('⠼⠙')).toEqual('4')
    expect(wordToText('⠼⠑')).toEqual('5')
    expect(wordToText('⠼⠋')).toEqual('6')
    expect(wordToText('⠼⠛')).toEqual('7')
    expect(wordToText('⠼⠓')).toEqual('8')
    expect(wordToText('⠼⠊')).toEqual('9')
    expect(wordToText('⠼⠚')).toEqual('0')
})

it('identifies spelled out words', () => {
    expect(wordToText('⠕⠝⠑')).toEqual('one')
})
it('identifies simple sentences', () => {
    expect(wordToText(`⠠⠓⠑⠇⠇⠕⠂,⠀⠍⠽⠀ ⠝⠁⠍⠑⠀⠊⠎⠀⠠⠚⠕⠓⠝⠲.`)).toEqual('Hello, my name is John.')
})
it('identifies harder sentences', () => {
    expect(wordToText(`⠠⠊⠀⠞⠓⠊⠝⠅⠀⠭⠄⠎⠀⠛⠕⠬⠀⠞⠕⠀⠗⠁⠊⠝⠖`)).toEqual('I think it\'s going to rain!')
})
