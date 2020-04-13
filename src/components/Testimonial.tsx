import * as React from "react";
import Card from "./Card"

export default function Testimonial(props: { testimonials: any[] }) {

    let testimonialCards = props.testimonials
        .map((testimonial: any, i: number) => {
            return (
                <Card name={testimonial.name}
                    book={testimonial.book}
                    url={testimonial.url}
                    description={testimonial.quote}
                    cardNumber={i}
                    key={i} />
            )
        });

    return (
        <div>
            <div>
                <div className="projectsContainer content">
                    {testimonialCards}
                </div>
            </div>
        </div>
    )
}
