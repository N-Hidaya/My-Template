import React, {useEffect, useState} from 'react'
import Privacypol from '../components/Privacypol'
import Link from 'next/link';

export const Amount = ({amount, setAmount, value}) => {
  return (
    <span className={`px-4 py-2 text-lg cursor-pointer bg-[#8a4a4a] font-bold drop-shadow-xl text-white rounded-xl hover:scale-105 ease-in duration-300
       ${amount === value ? "border-2 border-yellow drop-shadow-xl" : ""}`}
       onClick={() => setAmount(value)}>${value}</span>
  )
} 

const initValues = { name: "", quote: "", email: "", appid: "", adunit: ""}

const initState = { values: initValues}

function Payhome() {
  const [amount, setAmount] = useState(10)

  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
        ...prev.values,
        [target.name]: target.value,
    }
  }))

  return (
    <div id="payment" className='w-full'>
      <div className='mx-auto px-2 py-20'>
            <p className='text-xl tracking-widest mt-20 uppercase text-center text-white drop-shadow-lg'>Purchasement of Application Contract </p>
            <Privacypol />  
            <div className='flex flex-col space-y-4 mx-auto px-4 py-6 items-center rounded-md md:w-10/12'>
                <h2 className='textBlock-title text-[#402D29]'>Contract Form</h2>
                <p>By filling up this form, you agree to the terms of service, and privacy policy above.</p>
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
                </form>
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

export default Payhome

