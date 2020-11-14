import React from 'react';
import { CellButton } from './CellButton'
import { cellToBraille } from '../utility-functions/cell-to-braille'
import { Cell } from '../types/cell'
import './Keyboard.css'

type keyboardProps = {
    // output is a string hook
    onType: (str: string) => void
}

// newCell creates a new empty cell
function newCell(): Cell {
    return [false, false, false, false, false, false]
}

// eraseCell sets every dot to false
function eraseCell(cell: Cell) {
    for (let i = 0; i < 6; i++) {
        cell[i] = false
    }
}

let keyCount = 0

// addDot adds a dot to a cell
function addDot(dot: number, cell: Cell) {
    console.log("add dot")
    let cellIndex = dot - 1
    cell[cellIndex] = true
    keyCount++
}

// printCell converts the cell to text and alerts
function printCell(cell: Cell, write: (str: string) => void) {
    keyCount--
    if (keyCount <= 0) {
        console.log("printing")
        write(cellToBraille(cell))
        eraseCell(cell)
        keyCount = 0
    }
}

// Keyboard is the primary input device for typing braille
export function Keyboard(props: keyboardProps) {
    const cell = newCell()

    return (
        <div className="Keyboard" data-testid="keyboard">
            <div className="row">
                <button className="wide-key key" onClick={() => { props.onType("\n") }}>Carriage Return</button>
            </div>
            <div className="cell-button-row">
                <button className="circular-key key" onClick={() => { props.onType("\n") }}>New Line</button>
                <CellButton onMouseDown={() => { addDot(3, cell) }} onMouseUp={() => { printCell(cell, props.onType) }}>3</CellButton>
                <CellButton onMouseDown={() => { addDot(2, cell) }} onMouseUp={() => { printCell(cell, props.onType) }}>2</CellButton>
                <CellButton onMouseDown={() => { addDot(1, cell) }} onMouseUp={() => { printCell(cell, props.onType) }}>1</CellButton>
                <CellButton onMouseDown={() => { addDot(4, cell) }} onMouseUp={() => { printCell(cell, props.onType) }}>4</CellButton>
                <CellButton onMouseDown={() => { addDot(5, cell) }} onMouseUp={() => { printCell(cell, props.onType) }}>5</CellButton>
                <CellButton onMouseDown={() => { addDot(6, cell) }} onMouseUp={() => { printCell(cell, props.onType) }}>6</CellButton>
                <button className="circular-key key" onClick={() => { props.onType("\b") }}>Back space</button>
            </div>
            <div className="row">
                <button className="wide-key key" onClick={() => { printCell(newCell(), props.onType) }}>Space</button>
            </div>
        </div>
    )
}