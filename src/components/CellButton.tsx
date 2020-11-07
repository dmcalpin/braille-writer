import React from 'react'
import './CellButton.css'

type CellButtonProps = {
    onMouseDown: () => void
    onMouseUp: () => void
    children: any
}

export function CellButton(props: CellButtonProps) {
    return (
        <button className="CellButton key" onTouchStart={props.onMouseDown} onTouchEnd={props.onMouseUp}>{props.children}</button>
    )
}