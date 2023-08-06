import React, {useEffect, useState} from 'react'
import Privacypol from '../components/Privacypol'
import PaypalCheckoutButton from '../components/payments/Paypal';

export const Amount = ({amount, setAmount, value}) => {
  return (
    <span className={`px-4 py-2 text-lg cursor-pointer bg-[#8a4a4a] font-bold drop-shadow-xl text-white rounded-xl hover:scale-105 ease-in duration-300
       ${amount === value ? "border-2 border-yellow drop-shadow-xl" : ""}`}
       onClick={() => setAmount(value)}>${value}</span>
  )
} 

function Payhome() {

  const product = {
    description: "Hanguk4Ummah Android App - Downpayment",
    price: 500
  }

  const [amount, setAmount] = useState(10)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  
  const addPaypalScript = () => {
    if(window.paypal){
      setScriptLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://www.paypal.com/sdk/js?client-id=AV2TlY0JsDQqStiAWmxC89KAV1ZBPWZr-g3kz8W5ufLTomskEHs9cnvtgaANufgb6JUAOuZqhuAOXjIs";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

  }

  useEffect(() => {
    addPaypalScript();
  }, []);

  return (
    <div id="payment" className='w-full'>
      <div className='mx-auto px-2 py-20'>
            <p className='text-xl tracking-widest mt-20 uppercase text-center text-white drop-shadow-lg'>Purchasement of Application Contract </p>
            <Privacypol />            
            <div className='flex flex-col space-y-4 mx-auto px-4 py-6 items-center rounded-md md:w-10/12'>
                <h2 className='textBlock-title text-[#402D29]'>Payment</h2>
                <p className='textBlock-subtitle'>Choose either full payment of $8000 or monthly instalments of $500</p>
                <div className='flex space-x-10'>
                  <Amount amount={amount} setAmount={setAmount} value={500}/>
                  <Amount amount={amount} setAmount={setAmount} value={8000}/>
                </div>
                <div className='paypal'>
                  <PaypalCheckoutButton product={product} />
                </div>
            </div>
           
      

      </div>
    </div>
  )
}

export default Payhome

 //{scriptLoaded ? (<PaypalCheckoutButton product={product} />) : (<span>loading...</span>) }
