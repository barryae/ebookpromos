import * as React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction(props: { text: string }) {
    return (
        <Link to='/info'>
            <div className={"call-to-action-container"}>
                <div className="call-to-action-button second-color">
                    {props.text}
                </div>
            </div>
        </Link>
    )
}