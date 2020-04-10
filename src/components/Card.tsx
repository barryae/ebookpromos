import * as React from "react";

export default function Card(props: { name: string; key: number; description: string; projectNumber: number; url: string; book: string }) {
    function repoNameFormat(name: string) {
        let noDash = name.split("-").join(" ")
        let caseCorrect = ((noDash.split(''))[0].toUpperCase()) + noDash.slice(1)
        return caseCorrect;
    }

    let cardClass = "project" + props.projectNumber
    return (
        <div className={"card project" + cardClass}>
            <div>
                <div className={"card-header " + cardClass + "-header"}>
                    <a className="card-link" href={props.url} target="_blank" rel="noopener noreferrer">{repoNameFormat(props.name)}</a>
                </div>
            </div> <div className={"card-header " + cardClass + "-header"}>
                <a className="card-link" href={props.url} target="_blank" rel="noopener noreferrer">{repoNameFormat(props.book)}</a>
            </div>
            <img className="card-img" src={require('../images/project' + props.projectNumber + ".png")} alt="project" />
            <div className={"card-text " + cardClass + "-text"}>
                {props.description}
            </div>
        </div>

    )
}