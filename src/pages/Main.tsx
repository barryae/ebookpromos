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
                    Your eBook may be great. Your eBook may be exactly what your audience is looking for. But what if they can’t find it?
                </p>
                <p className="bio-text">
                    More awareness about your eBook means more people who get the chance to read your eBook.
                </p>
                <p className="bio-text">
                    We live in an era of choice. Too much choice, according to some. It’s harder than ever to cut through the noise and showcase your work. Great writers like you go unnoticed every day.
                </p>
                <p className="bio-text">
                    But your eBook deserves to be read. And those of us here at eBook Promos are going to help.
                </p>
            </div>
            <div className="content">
                <p className="bio-text">
                    Visual storytelling has become a crucial part of our fast-paced digital world.
                </p>
                <p className="bio-text">
                    According to Facebook, shorter videos lead to better conversions. They recommend making your video length 15 seconds or less so that people are more likely to watch until the end.
                </p>
                <p className="bio-text">
                    But in reality, many viewers will click away after the first one and a half seconds of your video.
                </p>
                <p className="bio-text">
                    This means that the very first image has to be eye-catching, jaw-dropping, and outstanding. If you want people to read your eBook, you need to engage them immediately or risk losing the most valuable commodity of all: attention.
                </p>
                <p className="bio-text">
                    We at eBook Promos pride ourselves on selecting the finest quality images to use in your videos. We use exciting visuals to showcase the mood and story of your eBook for future readers.
                </p>
                <p className="bio-text">
                    Just take a look at this sample video that we made:
                </p>
            </div>
            <iframe className="video" src="https://player.vimeo.com/video/407318655" frameBorder="0" allow="accelerometer; autoplay; gyroscope;" allowFullScreen={true}></iframe>
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

