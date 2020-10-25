import React from 'react';

type paperProps = {
    children: any
}

export function Paper(props: paperProps) {
    return (
        <output>{props.children}</output>
    )
}