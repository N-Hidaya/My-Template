import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const PaypalCheckoutButton = (props) => {
    const {product} = props;
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove = (orderID) => {
        //call backend function to fulfill order

        //if response is success
        setPaidFor(true)
        //Refresh user's account or subscription status

        //if user response is error
        //alert
       // setError(true)
    }

    if (paidFor) {
        //display success message, modal or redirect user to success page
        alert("Thank you for your purchase!")
    }

    if (error) {
        //display error message, modal or redirect user to error page
        alert(error)
    }

    return (
        <PayPalButtons
        style={{
            color: "silver",
            layout: "horizontal",
            height: 48,
            tagline: false,
            shape: "pill"
        }}
        onClick={(data, actions) => {
            //validate on button click from client/server
            const hasAlreadyBought = false

            if(hasAlreadyBought) {
                setError("You already bought this product!")
                return actions.reject()

            }else {
                return actions.resolve()
            }
            
        }}
        createOrder={(data, actions) => {
            return actions.order.create
            ({purchase_units: [
                {description: product.description,
                amount: {
                    value: product.price
                }}
            ]})
        }}
        
        onApprove={async(data, actions) => {
            const order = await actions.order.capture()
            console.log("order", order)

            handleApprove(data.orderID);
        }}
        onCancel={() => {
            //Display cancel message, modal, or redirect user to cancel page
        }}
        onError={(err) => {
            setError(err);
            console.log(err)
        }}/>
    )
}

export default PaypalCheckoutButton