import * as React from "react";
import Testimonial from "../components/Testimonial"
import CallToAction from "../components/CallToAction"


let testimonialItems = [{ name: "Michael Alvear", book: "Revenge of the Hatless", url: "https://www.amazon.com/Revenge-Hatless-MAGA-Meets-Karma/dp/1795202858/ref=sr_1_1?dchild=1&keywords=revenge+of+the+hatless&qid=1586538158&sr=8-1", quote: 'eBook Promos produces videos that cut through the clutter to deliver winning messages and stellar sales.' }]

export default function Main() {
    return (
        <div className="main">
            <img className="logo" src={require("../images/logo 03.jpg")} alt="" />
            <div className="content">
                <p className="bio-text">
                    Sharing your work with readers around the world shouldn’t be complicated.
                </p>
            </div>
            <div className="content">
                <p className="bio-text">
                    For $300, our service will create two different versions of a 15-second promotional video based on your eBook. You can pick your favorite to use in a promotional campaign, or utilize both for A/B testing with your audience.
                </p>
            </div>
            <iframe className="video" src="https://player.vimeo.com/video/407318655" frameBorder="0" allow="accelerometer; autoplay; gyroscope;" allowFullScreen={true}></iframe>
            <div className="content">
                <p className="bio-text">
                    According to Facebook, shorter videos lead to better conversions. They recommend making your video length 15 seconds or less so that people are more likely to watch until the end. Videos attract a larger audience and widen the reach.
                </p>
            </div>
            <CallToAction text="Get your video now!" />
            <div className="content">
                <p className="bio-text">
                    Check out the stats on the eBook Promo we did for Jody:
                </p>
            </div>
            <img className='stats' src={require("../images/stats.png")} />
            <div className="content">
                <p className="bio-text">
                    Testimonies:
                </p>
            </div>
            <Testimonial testimonials={testimonialItems} />
            <CallToAction text="Get your video promo here!" />
        </div>
    )
}

