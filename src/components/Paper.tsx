import React, { ReactChildren } from 'react';
import { cellToText } from '../utility-functions/cell-to-text'
import './Paper.css'

type paperProps = {
    braille: string
}

function renderBraille(braille: string) {
    return braille.split("").map((char: string) => {
        {
            if (char === "\n") {
                return <hr />
            } else {
                return (<span className="cell">
                    <span>{char}</span>
                    <span>{cellToText(char)}</span>
                </span>)
            }
        }

    })
}

export function Paper(props: paperProps) {
    return (
        <output className="Paper">
            {renderBraille(props.braille)}
            <span className="placeholder active">&nbsp;</span>
        </output>
    )
}