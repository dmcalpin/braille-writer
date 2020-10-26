import React, { useState } from 'react';
import { CellButton } from './CellButton'
// eslint-disable-next-line
import { cellToText } from '../utility-functions/cell-to-text'
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

// addDot adds a dot to a cell
function addDot(dot: number, cell: Cell) {
    let cellIndex = dot - 1
    cell[cellIndex] = true
}

// printCell converts the cell to text and alerts
function printCell(cell: Cell, write: (str: string) => void) {
    write(cellToBraille(cell))
    eraseCell(cell)
}

// Keyboard is the primary input device for typing braille
export function Keyboard(props: keyboardProps) {
    const [cell] = useState(newCell())

    return (
        <div className="Keyboard" data-testid="keyboard">
            <button className="wide-key key" onClick={() => { props.onType("\n") }}>Carriage Return</button>
            <br />
            <button className="circular-key key" onClick={() => { props.onType("\n") }}>New Line</button>
            <CellButton click={() => { addDot(3, cell) }}>3</CellButton>
            <CellButton click={() => { addDot(2, cell) }}>2</CellButton>
            <CellButton click={() => { addDot(1, cell) }}>1</CellButton>
            <CellButton click={() => { addDot(4, cell) }}>4</CellButton>
            <CellButton click={() => { addDot(5, cell) }}>5</CellButton>
            <CellButton click={() => { addDot(6, cell) }}>6</CellButton>
            <button className="circular-key key" onClick={() => { props.onType("\b") }}>Backspace</button>
            <br />
            <button className="wide-key key" onClick={() => { printCell(cell, props.onType) }}>Space</button>
        </div>
    )
}