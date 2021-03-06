import React from 'react';
import { cellToText } from '../utility-functions/cell-to-text'
import './Paper.css'

type paperProps = {
    braille: string
}

function renderBraille(braille: string) {
    let previous: string
    return (<span className="word" key={braille}>
        {braille.split("").map((char: string, index: number, elems: string[]) => {
            if (char === "\n") {
                return <hr key={index} />
            } else {
                let cell = (<span className="cell" key={index}>
                    <span>{char}</span>
                    <span>{cellToText(char, previous, elems[index + 1])}</span>
                </span>)
                previous = char
                return cell
            }
        })}
    </span>)
}

export function Paper(props: paperProps) {
    return (
        <output className="Paper" ref={(el) => { if (el && el.scrollTo) { el?.scrollTo(0, 1000000000) } }}>
            {renderBraille(props.braille)}
            <span className="placeholder active">&nbsp;</span>
        </output>
    )
}