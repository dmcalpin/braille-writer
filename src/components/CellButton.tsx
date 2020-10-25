import React from 'react'
import './CellButton.css'

type CellButtonProps = {
    click: () => void
    children: any
 }

export function CellButton(props: CellButtonProps){
    return (
        <button className="CellButton" onClick={props.click}>{props.children}</button>
    )
}