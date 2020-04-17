import * as React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useState } from 'react';


export default function Checkout() {
    const [isPaid, setIsPayed] = useState(false)
    const [productChosen, setProduct] = useState(0)

    function confirmation() {
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
                    confirmation();
                }}
            />
        } else if (productChosen === 1) {
            return <PayPalButton
                amount="199.00"
                shippingPreference="NO_SHIPPING"
                catchError={"Sorry, something went wrong. Please try again."}
                onSuccess={(details: any, data: any) => {
                    confirmation();
                }}
            />
        }
    }

    return (
        <div className="main">
            {isPaid ? <div><p>Thanks so much!</p></div> :
                <div>
                    <h2 className="page-header primary-background">Checkout</h2>
                    <div className='content'>
                        <p>
                            <strong>eBook Promos offers two different packages. Our two video package offers massive savings and value.
                    </strong>
                        </p>
                    </div>
                    {productChosen ? <p>{productChosen + " videos chosen"}</p> :
                        <div>
                            <div className="option-button">
                                <div className="two-video-option" onClick={chooseProduct}>Two videos for $299</div>
                            </div>
                            <div className="option-button">
                                <div className="one-video-option" onClick={chooseProduct}>One video for $199</div>
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