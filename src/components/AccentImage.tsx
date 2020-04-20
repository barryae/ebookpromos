import * as React from 'react';

export default function AccentImage(props: { src: string, alt: string }) {
    const srcUrl = props.src
    return (
        <div className="accent-image">
            <img src={require(srcUrl)} alt={props.alt} />
        </div>
    )
}