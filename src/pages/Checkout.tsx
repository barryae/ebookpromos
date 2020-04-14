import * as React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useState } from 'react';


export default function Checkout() {
    const [isPaid, setIsPayed] = useState(false)

    function confirmation() {
        setIsPayed(true)
    }

    return (
        <div>
            Checkout
            {isPaid ? <div><p>Thanks so much!</p></div> :
                <PayPalButton
                    amount="300.00"
                    shippingPreference="NO_SHIPPING"
                    catchError={"Sorry, something went wrong. Please try again."}
                    onSuccess={(details: any, data: any) => {
                        confirmation();
                    }}
                />
            }
        </div>

    )
}