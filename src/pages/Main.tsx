import * as React from "react";
import Testimonial from "../components/Testimonial"
import Bio from "../components/Bio"


let testimonialItems = [{ name: "Michael Alvear", book: "Revenge of the Hatless", url: "https://www.amazon.com/Revenge-Hatless-MAGA-Meets-Karma/dp/1795202858/ref=sr_1_1?dchild=1&keywords=revenge+of+the+hatless&qid=1586538158&sr=8-1", quote: 'eBook Promos produces videos that cut through the clutter to deliver winning messages and stellar sales.' }]

export default function Main() {
    return (
        <div className="main">
            <Bio />
            <Testimonial testimonials={testimonialItems} />
        </div>
    )
}