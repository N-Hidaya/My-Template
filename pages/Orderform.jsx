import React, {useEffect, useState} from 'react'
import Privacypol from '../components/Privacypol'
import Link from 'next/link';
import { sendOrderForm } from '../lib/api';
import { Alert, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';

export const Amount = ({amount, setAmount, value}) => {
  return (
    <span className={`px-4 py-2 text-lg cursor-pointer bg-[#8a4a4a] font-bold drop-shadow-xl text-white rounded-xl hover:scale-105 ease-in duration-300
       ${amount === value ? "border-2 border-yellow drop-shadow-xl" : ""}`}
       onClick={() => setAmount(value)}>${value}</span>
  )
} 

const initValues = { name: "", quote: "", email: "", appid: "", adunit: ""}

const initState = { values: initValues}

function OrderForm() {
  const [amount, setAmount] = useState(10)
  const [success, setSuccess] = useState(false)
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const router = useRouter()

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
        ...prev.values,
        [target.name]: target.value,
    }
  }))

  function IconSuccess() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
}

const onSubmit = async () => {
    setSuccess(true)
    setState((prev) => ({
        ...prev,
        isLoading: true,
    }));
    router.push('/payhome')

    try {
        await sendOrderForm(values);
          setState(initState)
        

    } catch (error) {
        setSuccess(false)
        setState((prev) => ({
            ...prev,
            isLoading: false,
            error: error.message,
            
        }));
    }
    
}

  return (
    <div id="payment" className='w-full'>
      <div className='mx-auto px-2 py-20'>
            <p className='text-xl tracking-widest mt-20 uppercase text-center text-white drop-shadow-lg'>Purchasement of Application Contract </p>
            <Privacypol />  
            <div className='flex flex-col space-y-4 mx-auto px-4 py-6 items-center rounded-md md:w-10/12'>
                <h2 className='textBlock-title text-[#402D29]'>Contract Form</h2>
                <p>By filling up this form, you agree to the terms of service, and privacy policy above.</p>
                {error && (
            <p className='text-[#f75c51] text-xl p-4'>{error}</p> 
            )}
                <form>
                  <div className='flex flex-row'>
                    <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 '>Name <span className='text-[#ec504e]'>*</span></label>
                            <input type='text' id='name' name='name' value={values.name} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                    </div>
                    <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 '>Quote No. <span className='text-[#ec504e]'>*</span></label>
                            <input type='text' id='quote' name='quote' value={values.quote} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                    </div>
                  </div>
                  
                  <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email <span className='text-[#ec504e]'>*</span></label>
                            <input type='email' id='email' name='email' value={values.email} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                  </div>
                  <div className='flex flex-row'>
                    <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 '>AdMob App ID <span className='text-[#ec504e]'>*</span></label>
                            <input type='text' id='appid' name='appid' value={values.appid} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                    </div>
                    <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 '>AdMob Ad Unit ID<span className='text-[#ec504e]'>*</span></label>
                            <input type='text' id='adunit' name='adunit' value={values.adunit} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                    </div>
                  </div>
                  <button isloading={isLoading} disabled={!values.name || !values.email} onClick={onSubmit} className='w-full p-4 text-gray-100 mt-4'>Send</button>

                </form>
                <Alert
                open={success}
            
                className="max-w-screen-md bg-[#586d4f] p-4"
                icon={<IconSuccess />}
              >
                <Typography variant="h5" >Success</Typography>
                <Typography className="mt-2 font-normal p-2">
                    Your details has been sent successfully :) Thank you for your order!
                </Typography>
                </Alert>
            </div>          
            <div className='flex flex-col space-y-4 mx-auto px-4 py-6 items-center rounded-md md:w-10/12'>
                <h2 className='textBlock-title text-[#402D29]'>Payment</h2>
                <p className='textBlock-subtitle'>Choose either full payment of $8000 or monthly instalments of $500</p>
                <div className='flex space-x-10'>
                  <Amount amount={amount} setAmount={setAmount} value={500}/>
                  <Amount amount={amount} setAmount={setAmount} value={8000}/>
                </div>
                <p className='textBlock-subtitle'>We only accept PayPal. If you don't have PayPal account, you can create one here: <a target='_blank' href='https://www.paypal.com/us/webapps/mpp/account-selection' className='underline font-bold text-blue-500 drop-shadow-xl '>PayPal</a></p>
                <div className='paypal'>
                  <a target='_blank' href='https://www.paypal.com/paypalme/wintersista' className='px-4 py-2 text-lg cursor-pointer bg-blue-500 font-bold drop-shadow-xl text-white rounded-xl hover:scale-105 ease-in duration-300'>PayPal</a>
                </div>
                <p className='textBlock-subtitle'>Thank you for your payment. We will process your application product and send you an update by email.</p>
            </div>
           
      

      </div>
    </div>
  )
}

export default OrderForm

