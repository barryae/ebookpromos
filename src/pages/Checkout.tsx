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
        if (e.target.className === 'one-video-option') {
            console.log(1)
            setProduct(1)
        } else {
            setProduct(2)
        }
    }

    function renderPaypal() {
        if (productChosen === 2) {
            return <PayPalButton
                amount="299.00"
                shippingPreference="NO_SHIPPING"
                catchError={"Sorry, something went wrong. Please try again."}
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
                catchError={"Sorry, something went wrong. Please try again."}
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
        <div className="main checkout-container">
            {isPaid ? <h2 className="header">Thank you and we look forward to making your video(s)! You will receive an email confirmation shortly.</h2> :
                <div>
                    <h2 className="header">Checkout</h2>
                    {productChosen ? <p><strong>{"You have selected the " + productChosen + " videos package. Please select you preferred PayPal method below to complete checkout."}</strong></p> :
                        <div>
                            <div className='content'>
                                <p>
                                    <strong>eBook Promos offers two different packages. Our two video package offers massive savings and value.
                    </strong>
                                </p>
                                <p>
                                    <strong>We use the web's most secure checkout client, PayPal, to process all of our transactions.
                    </strong>
                                </p>
                            </div>
                            <div className="option-button">
                                <div className="two-video-option second-color" onClick={chooseProduct}>Two videos for $299</div>
                            </div>
                            <div className="option-button">
                                <div className="one-video-option second-color" onClick={chooseProduct}>One video for $199</div>
                            </div>
                        </div>
                    }
                    <div>
                        {renderPaypal()}
                    </div>
                </div>
            }
        </div >
    )
}