import * as React from "react";
import Testimonial from "../components/Testimonial"
import CallToAction from "../components/CallToAction"
import { useState, useEffect } from 'react';



export default function Main() {
    const initialCookieAuth = window.localStorage.getItem('cookieAuth') || "false"
    const [cookiesConfirmed, setCookiesConfirmed] = useState(initialCookieAuth)

    let testimonialItems = [{ name: "Michael Alvear", book: "Revenge of the Hatless", url: "https://www.amazon.com/Revenge-Hatless-MAGA-Meets-Karma/dp/1795202858/ref=sr_1_1?dchild=1&keywords=revenge+of+the+hatless&qid=1586538158&sr=8-1", quote: 'eBook Promos produces videos that cut through the clutter to deliver winning messages and stellar sales.' }]

    function handleClick() {
        setCookiesConfirmed("true");
    }

    useEffect(() => {
        window.localStorage.setItem('cookieAuth', cookiesConfirmed)
    })

    return (
        <div className="container">
            <img className="paypal-badge" src={require("../images/paypal badge.jpg")} alt="Paypal Badge" />
            <div className="main">
                <div className="logo-container">
                    <img className="logo" src={require("../images/logo 03.png")} alt="logo" />
                </div>
                <div className="content">
                    <p className="bio-text bold emphasized">
                        Your eBook may be great.
                </p>
                    <p className="bio-text bold emphasized">
                        Your eBook may be exactly what your audience is looking for.
                </p>
                    <p className="bio-text bold emphasized">
                        . . . but what if they can’t find it?
                </p>
                    <img className="accent-image" src={require("../images/accentImage1.jpg")} alt="eReader" />
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
                <CallToAction text="Get your video promo here!" />
                <div className="content">
                    <img className="accent-image" src={require("../images/accentImage2.jpg")} alt="eReader" />
                    <p className="bio-text bold emphasized">
                        Visual storytelling has become a crucial part of our fast-paced digital world.
                </p>
                    <p className="bio-text">
                        According to Facebook, shorter videos lead to better conversions. They recommend making your video length <strong>15 seconds</strong> or less so that people are more likely to watch until the end.
                </p>
                    <p className="bio-text">
                        But in reality, many viewers will click away after the first <strong>one and a half seconds</strong> of your video.
                </p>
                    <p className="bio-text">
                        This means that the very first image has to be eye-catching, jaw-dropping, and outstanding. If you want people to read your eBook, you need to engage them immediately or risk losing the most valuable commodity of all: <strong>attention</strong>.
                </p>
                    <p className="bio-text">
                        We at eBook Promos pride ourselves on selecting the finest quality images to use in your videos. We use exciting visuals to showcase the mood and story of your eBook for future readers.
                </p>
                    <p className="bio-text bold emphasized">
                        Just take a look at this sample video that we made:
                </p>
                </div>
                <iframe className="video" src="https://player.vimeo.com/video/407318655" title="eBook Promos Sample"></iframe>
                <CallToAction text="Get your video now!" />
                <div className="content">
                    <p className="bio-text bold emphasized">
                        This eBook is part of the horror genre, but eBook Promos are appropriate for any type of work:
                </p>
                    <ul>
                        <li>Drama</li>
                        <li>Self-help</li>
                        <li>Thriller</li>
                        <li>Sci-Fi</li>
                        <li>Humor</li>
                        <li>Spiritual</li>
                        <li>Educational</li>
                    </ul>
                    <p className="bio-text bold emphasized">
                        And so many more!
                </p>
                    <p className="bio-text">
                        You wrote a great story. Now let us help you tell people where they can read it.
                </p>
                    <p className="bio-text">
                        Our videos have been proven to work. Take a look at this screenshot from a successful use of one of our eBook Promos:
                </p>
                </div>
                <img className='stats' alt="Stats Example" src={require("../images/stats.png")} />
                <div className="content">
                    <p className="bio-text bold emphasized">
                        As you can see, the video received over <strong>40,000 views</strong> and <strong>4,000 website clicks</strong> in a short period of time.
                </p>
                    <p className="bio-text">
                        An eBook Promo sets you apart. An eBook Promo is a brilliant way to <strong>bring your story to life and provide a taste of what readers will experience.</strong> An eBook Promo is a simple way to show the mood of your story to future readers.
                </p>
                    <p className="bio-text bold emphasized">
                        What your eBook Promo will include:
                </p>
                    <ul>
                        <li>High-quality images</li>
                        <li>Great music</li>
                        <li>Engaging description of your eBook</li>
                    </ul>
                    <p className="bio-text">
                        We take these elements and create <strong>unique and high-quality 15-second eBook Promos</strong>. Whether used to promote on Facebook, or as a calling card on your personal website, our videos will make a positive impact on your promotional efforts.
                </p>
                    <p className="bio-text bold emphasized">
                        What you'll need to provide:
                </p>
                    <ul>
                        <li>A one-sentence description of the story</li>
                        <li>Three words describing the mood of your eBook</li>
                        <li>A link to where your eBook is for sale (on Amazon or elsewhere)</li>
                    </ul>
                    <p className="bio-text bold emphasized">
                        That's it.
                </p>
                    <p className="bio-text">
                        Then sit back, wait 24 hours, and a <strong>15-second eBook promo will be delivered to your inbox.</strong>
                    </p>
                    <p className="bio-text">
                        All of our videos are delivered as full 720p MP4’s, as recommended by Facebook for optimal performance.
                </p>
                    <p className="bio-text">
                        We guarantee a speedy delivery of our eBook Promos. If your video isn’t in your inbox within a day of placing the order, <strong>you will be refunded 110% of your payment</strong>.
                </p>
                    <p className="bio-text bold ">
                        Bring your story to life with eBook Promos.
                </p>
                </div>
                <CallToAction text="Get your video promo here!" />
                <Testimonial testimonials={testimonialItems} />
                <CallToAction text="Get your video promo here!" />
            </div>
            {cookiesConfirmed === "true" ? <div></div> :
                <div className="cookies-confirm">
                    <div className='cookies-description'>
                        We use cookies and similar technologies to run this website and to help us understand how you use it.
                <a href={require("../images/Privacy Policy.pdf")} rel="noopener noreferrer" target="_blank"> See our Privacy Policy here.</a>
                    </div>
                    <div className='cookies-button' onClick={handleClick}>
                        I accept.
                    </div>
                </div>
            }
            <footer>
                <div>Copyright 2020 eBook Promos</div>
                <div><a href={require("../images/Terms of Use.pdf")} rel="noopener noreferrer" target="_blank">Terms of Use</a></div>
                <div><a href={require("../images/Privacy Policy.pdf")} rel="noopener noreferrer" target="_blank">Privacy Policy</a></div>
            </footer>
        </div>
    )
}

