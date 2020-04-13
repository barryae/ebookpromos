import * as React from "react";

export default function Card(props: { name: string; key: number; description: string; cardNumber: number; url: string; book: string }) {
    function repoNameFormat(name: string) {
        let noDash = name.split("-").join(" ")
        let caseCorrect = ((noDash.split(''))[0].toUpperCase()) + noDash.slice(1)
        return caseCorrect;
    }

    let cardClass = "project" + props.cardNumber
    return (
        <div className={"card " + cardClass}>
            <div className="testimonial-profile">
                <img className="card-img" src={require('../images/project' + props.cardNumber + ".png")} alt="project" />
                <div className={"card-header " + cardClass + "-header"}>
                    <a className="card-link" href={props.url} target="_blank" rel="noopener noreferrer">{repoNameFormat(props.name)}</a>
                </div>
                <div className={"book-name card-header " + cardClass + "-header"}>
                    <a className="card-link" href={props.url} target="_blank" rel="noopener noreferrer">{repoNameFormat(props.book)}</a>
                </div>
            </div>
            <div className={"card-text " + cardClass + "-text"}>
                "{props.description}"
            </div>
        </div>

    )
}