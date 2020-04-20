import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



export default function InfoForm(this: any) {
    const [toCheckout, setToCheckout] = useState(false)
    const [ebookUrl, setUrl] = useState('')
    const [tone, setTone] = useState('')
    const [story, setStory] = useState('')

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
        }
    }

    const handleSubmit = (e: any) => {
        if (e) { e.preventDefault(); }
        axios.post("https://submit-form.com/V3O5LOXxFB8gGpNGF0fRk", {
            tone: tone,
            story: story,
            ebookUrl: ebookUrl,
        }).then(res => { setToCheckout(true) })
    }

    return (
        <div className='main info-form'>
            {toCheckout ? <Redirect to="/checkout" /> : null}
            <h2 className="header">Tell us about your eBook</h2>
            <form onSubmit={handleSubmit}>
                <p>What is the URL of your ebook on Amazon (or other online marketplaces)?</p>
                <textarea value={ebookUrl} name="ebookUrl" onChange={handleChange}></textarea>
                <p>How would you describe the tone of your ebook? Please use three simple, descriptive words.</p>
                <textarea value={tone} name="tone" onChange={handleChange}></textarea>
                <p>Please describe the story of your book in one sentence.</p>
                <textarea value={story} name="story" onChange={handleChange}></textarea>
                <p></p>
                <button className="info-submit" type="submit">Submit</button>
            </form>
        </div >
    )
}