// Physical Keyboard

import { cellToBraille } from './cell-to-braille'
import { Cell } from '../types/cell'

type realKeyboardProps = {
    // output is a string hook
    onType: (str: string) => void
}

let cellBuffer = newCell()
let brailleCount = 0
const keyToDot: { [key: string]: number } = {
    'f': 0,
    'd': 1,
    's': 2,
    'j': 3,
    'k': 4,
    'l': 5,
}

function newCell(): Cell {
    return [false, false, false, false, false, false]
}

export function initRealKeyboard(props: realKeyboardProps) {
    console.log('INIT')

    function brailleTypeStart(evt: KeyboardEvent): void {
        let dot: number
        if (typeof (dot = keyToDot[evt.key]) != "undefined") {
            brailleCount++
            cellBuffer[dot] = true
        }

        console.log("Keydown", evt.key, cellBuffer)
    }

    function brailleTypeStop(evt: KeyboardEvent): void {
        if (brailleCount > 0) {
            brailleCount--
        }

        console.log("Keyup", evt.key, brailleCount)
        if (brailleCount <= 0) {
            if (evt.key === "Backspace") {
                props.onType("\b")
            } else if (evt.key === "Enter") {
                props.onType("\n")
            } else if ((typeof keyToDot[evt.key] != "undefined") || (evt.key === " ")) {
                props.onType(cellToBraille(cellBuffer))
            }

            // reset the writer
            brailleCount = 0
            cellBuffer = newCell()

            // only reset if the key caused a rerender
            if (evt.key === "Backspace" || evt.key === "Enter" || evt.key === " " || typeof keyToDot[evt.key] != "undefined") {
                // cuz App.tsx re-renders every key stroke... ugh
                document.removeEventListener("keydown", brailleTypeStart)
                document.removeEventListener("keyup", brailleTypeStop)
            }
        }
    }

    document.addEventListener("keydown", brailleTypeStart)
    document.addEventListener("keyup", brailleTypeStop)
}