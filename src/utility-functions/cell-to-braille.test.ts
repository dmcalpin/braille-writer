import { cellToBraille } from './cell-to-braille'

// See: https://www.compart.com/en/unicode for unicode characters

it('identifies the basic letters', () => {
    expect(cellToBraille([true, false, false, false, false, false])).toEqual('⠁')   // a
    expect(cellToBraille([true, true, false, false, false, false])).toEqual('⠃')    // b
    expect(cellToBraille([true, false, false, true, false, false])).toEqual('⠉')    // c
    expect(cellToBraille([true, false, false, true, true, false])).toEqual('⠙')     // d
    expect(cellToBraille([true, false, false, false, true, false])).toEqual('⠑')    // e
    expect(cellToBraille([true, true, false, true, false, false])).toEqual('⠋')     // f
    expect(cellToBraille([true, true, false, true, true, false])).toEqual('⠛')      // g
    expect(cellToBraille([true, true, false, false, true, false])).toEqual('⠓')     // h
    expect(cellToBraille([false, true, false, true, false, false])).toEqual('⠊')    // i
    expect(cellToBraille([false, true, false, true, true, false])).toEqual('⠚')     // j
    expect(cellToBraille([true, false, true, false, false, false])).toEqual('⠅')    // k
    expect(cellToBraille([true, true, true, false, false, false])).toEqual('⠇')     // l
    expect(cellToBraille([true, false, true, true, false, false])).toEqual('⠍')     // m
    expect(cellToBraille([true, false, true, true, true, false])).toEqual('⠝')      // n
    expect(cellToBraille([true, false, true, false, true, false])).toEqual('⠕')     // o
    expect(cellToBraille([true, true, true, true, false, false])).toEqual('⠏')      // p
    expect(cellToBraille([true, true, true, true, true, false])).toEqual('⠟')       // q
    expect(cellToBraille([true, true, true, false, true, false])).toEqual('⠗')      // r
    expect(cellToBraille([false, true, true, true, false, false])).toEqual('⠎')     // s
    expect(cellToBraille([false, true, true, true, true, false])).toEqual('⠞')      // t
    expect(cellToBraille([true, false, true, false, false, true])).toEqual('⠥')     // u
    expect(cellToBraille([true, true, true, false, false, true])).toEqual('⠧')      // v
    expect(cellToBraille([false, true, false, true, true, true])).toEqual('⠺')      // w
    expect(cellToBraille([true, false, true, true, false, true])).toEqual('⠭')      // x
    expect(cellToBraille([true, false, true, true, true, true])).toEqual('⠽')       // y
    expect(cellToBraille([true, false, true, false, true, true])).toEqual('⠵')      // z
})

it('identifies strong contractions', () => {
    expect(cellToBraille([true, true, true, true, false, true])).toEqual('⠯')  // and
    expect(cellToBraille([true, true, true, true, true, true])).toEqual('⠿')   // for
    expect(cellToBraille([true, true, true, false, true, true])).toEqual('⠷')  // of
    expect(cellToBraille([false, true, true, true, false, true])).toEqual('⠮') // the
    expect(cellToBraille([false, true, true, true, true, true])).toEqual('⠾')  // with
})

it('identifies strong wordsigns', () => {
    expect(cellToBraille([true, false, false, false, false, true])).toEqual('⠡') // child
    expect(cellToBraille([true, false, false, true, false, true])).toEqual('⠩') // shall
    expect(cellToBraille([true, false, false, true, true, true])).toEqual('⠹') // this
    expect(cellToBraille([true, false, false, false, true, true])).toEqual('⠱') // which
    expect(cellToBraille([true, true, false, false, true, true])).toEqual('⠳') // out
    expect(cellToBraille([false, false, true, true, false, false])).toEqual('⠌') // still
})

it('identifies strong groupsigns', () => {
    expect(cellToBraille([true, false, false, false, false, true])).toEqual('⠡') // ch
    expect(cellToBraille([true, false, false, true, false, true])).toEqual('⠩')  // sh
    expect(cellToBraille([true, false, false, true, true, true])).toEqual('⠹')   // th
    expect(cellToBraille([true, false, false, false, true, true])).toEqual('⠱')  // wh
    expect(cellToBraille([true, true, false, false, true, true])).toEqual('⠳')   // ou
    expect(cellToBraille([false, false, true, true, false, false])).toEqual('⠌') // st
    expect(cellToBraille([true, true, false, false, false, true])).toEqual('⠣')  // gh
    expect(cellToBraille([true, true, false, true, false, true])).toEqual('⠫')   // ed
    expect(cellToBraille([true, true, false, true, true, true])).toEqual('⠻')    // er
    expect(cellToBraille([false, true, false, true, false, true])).toEqual('⠪')  // ow
    expect(cellToBraille([false, false, true, true, true, false])).toEqual('⠜')  // ar
    expect(cellToBraille([false, false, true, true, false, true])).toEqual('⠬')  // ing
})



it('identifies empty cells', () => {
    expect(cellToBraille([false, false, false, false, false, false])).toEqual('⠀') // braille space
})