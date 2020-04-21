import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



export default function InfoForm(this: any) {
    const [toCheckout, setToCheckout] = useState(false)
    const [ebookUrl, setUrl] = useState('')
    const [tone, setTone] = useState('')
    const [story, setStory] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleChange(e: any) {
        switch (e.target.name) {
            case "ebookUrl":
                setUrl(e.target.value)
                break
            case "tone":
                setTone(e.target.value)
                break
            case "story":
                setStory(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "name":
                setName(e.target.value)
                break
        }
    }

    const handleSubmit = (e: any) => {
        if (e) { e.preventDefault(); }
        axios.post("https://submit-form.com/V3O5LOXxFB8gGpNGF0fRk", {
            name: name,
            email: email,
            tone: tone,
            story: story,
            ebookUrl: ebookUrl,
        }).then(res => { setToCheckout(true) })
    }

    return (
        <div>
            <div className='main info-form'>
                <div className="header">Tell us about your eBook</div>
                {toCheckout ? <Redirect to="/checkout" /> : null}
                <form onSubmit={handleSubmit}>
                    <div className="prompt">What is your name?</div>
                    <textarea value={name} name="name" onChange={handleChange}></textarea>
                    <div className="prompt">What is your email?</div>
                    <textarea value={email} name="email" onChange={handleChange}></textarea>
                    <div className="prompt">What is the URL of your ebook on Amazon (or other online marketplaces)?</div>
                    <textarea value={ebookUrl} name="ebookUrl" onChange={handleChange}></textarea>
                    <div className="prompt">How would you describe the tone of your ebook? Please use three simple, descriptive words.</div>
                    <textarea value={tone} name="tone" onChange={handleChange}></textarea>
                    <div className="prompt">Please describe the story of your book in one sentence.</div>
                    <textarea value={story} name="story" onChange={handleChange}></textarea>
                    <p></p>
                    <button className="info-submit" type="submit">Submit</button>
                </form>
            </div >
            <footer>
                <div>Copyright 2020 eBook Promos</div>
                <div><a href={require("../images/Terms of Use.pdf")}>Terms of Use</a></div>
                <div><a href={require("../images/Privacy Policy.pdf")}>Privacy Policy</a></div>
            </footer>
        </div>
    )
}