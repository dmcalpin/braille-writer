import React from 'react';
import './Paper.css'

type paperProps = {
    children: any
}

export function Paper(props: paperProps) {
    return (
        <textarea className="Paper" value={props.children} />
    )
}