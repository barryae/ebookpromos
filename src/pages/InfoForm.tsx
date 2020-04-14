import * as React from 'react';
import { Link } from 'react-router-dom';

// const handleSubmit = (event: any) => {
//     event.preventDefault()

// }

export default function InfoForm() {
    return (
        <div className='main'>
            <h2>Tell Us About Your eBook</h2>
            <form action="https://submit-form.com/V3O5LOXxFB8gGpNGF0fRk" target="_self">
                <p>What is the URL of your ebook on Amazon (or other online marketplaces)?</p>
                <textarea name="ebookUrl" placeholder=""></textarea>
                <p>How would you describe the tone of your ebook? Please use three simple, descriptive words.</p>
                <textarea name="tone" placeholder=""></textarea>
                <p>Please describe the story of your book in one sentence.</p>
                <textarea name="story" placeholder=""></textarea>
                <input type="hidden" name="_redirect" value="/checkout" />
                <Link to="/checkout">
                    <button type="submit">Submit</button>
                </Link>

            </form>

        </div >
    )
}