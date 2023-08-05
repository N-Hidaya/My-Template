import React, {useState} from 'react'
import Tos from '../components/Tos'

export const Amount = ({amount, setAmount, value}) => {
  return (
    <span className={`px-4 py-2 text-lg cursor-pointer bg-[#8a4a4a] font-bold drop-shadow-xl text-white rounded-xl hover:scale-105 ease-in duration-300
       ${amount === value ? "border-2 border-yellow drop-shadow-xl" : ""}`}
       onClick={() => setAmount(value)}>${value}</span>
  )
} 

function Payhome() {

  const [amount, setAmount] = useState(10)

  return (
    <div id="payment" className='w-full'>
      <div className='mx-auto px-2 py-20'>
            <p className='text-xl tracking-widest mt-20 uppercase text-center text-white drop-shadow-lg'>Purchasement of Application Contract </p>
            <Tos />

          
            <div className='flex flex-col space-y-4 mx-auto px-4 py-6 items-center rounded-md md:w-10/12'>
                <h2 className='textBlock-title text-[#402D29]'>Payment</h2>
                <p className='textBlock-subtitle'>Choose either full payment of $8000 or monthly instalments of $500</p>
                <div className='flex space-x-10'>
                  <Amount amount={amount} setAmount={setAmount} value={500}/>
                  <Amount amount={amount} setAmount={setAmount} value={8000}/>
                </div>
                <button>Paypal button</button>
            </div>
           
      

      </div>
    </div>
  )
}

export default Payhome
