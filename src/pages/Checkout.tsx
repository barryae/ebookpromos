import * as React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useState } from 'react';


export default function Checkout() {
    const [isPaid, setIsPayed] = useState(false)
    const [productChosen, setProduct] = useState(0)

    function paymentConfirmation() {
        setIsPayed(true)
    }

    function chooseProduct(e: any) {
        if (e.target.id === 'one-video') {
            setProduct(1)
        } else if (e.target.id === 'two-video') {
            setProduct(2)
        }
    }

    function renderPaypal() {
        if (productChosen === 2) {
            return <PayPalButton
                amount="299.00"
                shippingPreference="NO_SHIPPING"
                catchError={() => { "Sorry, something went wrong. Please try again." }}
                onSuccess={(details: any, data: any) => {
                    paymentConfirmation();
                }}
                options={{
                    clientId: "AUySdemvLQyLqTayB5_7GjfhnjcoVZ12BWJ6WaBGdkN3D4Vk9Mna1Ms3Hd3Uke-snBg0OudBEInUozma"
                }}
            />
        } else if (productChosen === 1) {
            return <PayPalButton
                amount="199.00"
                shippingPreference="NO_SHIPPING"
                catchError={() => { "Sorry, something went wrong. Please try again." }}
                onSuccess={(details: any, data: any) => {
                    paymentConfirmation();
                }}
                options={{
                    clientId: "AUySdemvLQyLqTayB5_7GjfhnjcoVZ12BWJ6WaBGdkN3D4Vk9Mna1Ms3Hd3Uke-snBg0OudBEInUozma"
                }}
            />
        }
    }

    return (
        <div className="container">
                <img className="paypal-badge" src={require("../images/paypal badge.jpg")} alt="Paypal Badge" />
            <div className="main checkout-container">
                {isPaid ? <div className="header">Thank you and we look forward to making your video(s)! You will receive an email confirmation shortly.</div> :
                    <div>
                        <div className="header">Checkout</div>
                        {productChosen ? <p>{"You have selected the " + productChosen + " videos package. Please select your preferred PayPal method below to complete checkout."}</p> :
                            <div>
                                <div className='content'>
                                    <p>
                                       eBook Promos offers two different packages. Our two video package offers massive savings and value.
                   
                                    </p>
                                    <p>
                                        We use the web's most secure checkout client, PayPal, to process all of our transactions.
                   
                                    </p>
                                </div>
                                <div className="option-button">
                                    <div className="two-video-option second-color" id="two-video" onClick={chooseProduct}>Two videos for $299</div>
                                </div>
                                <div className="option-button">
                                    <div className="one-video-option second-color" id="one-video" onClick={chooseProduct}>One video for $199</div>
                                </div>
                            </div>
                        }
                        <div>
                            {renderPaypal()}
                        </div>
                    </div>
                }
            </div >
            <footer>
                <div>Copyright 2020 eBook Promos</div>
                <div><a href={require("../images/Terms of Use.pdf")} rel="noopener noreferrer" target="_blank">Terms of Use</a></div>
                <div><a href={require("../images/Privacy Policy.pdf")} rel="noopener noreferrer" target="_blank">Privacy Policy</a></div>
            </footer>
        </div>
    )
}