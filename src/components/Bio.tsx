import * as React from "react";
import BigWord from "../components/BigWord"

export default function Bio() {
    return (
        <div className="bio theme accent">
            <div className="top-spacer"></div>
            <BigWord word="eBook Promos" />
            <div className="content">
                <p className="bio-text">
                    Sharing your work with readers around the world shouldn’t be complicated.
                </p>
            </div>
        </div >
    )
} 