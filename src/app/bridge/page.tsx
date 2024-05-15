"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState,useEffect } from 'react';
export default function Bridge() {
  const signer = useEthersSigner()
  const [fromBlockchain, setFromBlockchain] = useState('');
  const [toBlockchain, setToBlockchain] = useState('');
  const [amount, setAmount] = useState(0);
  const [tokenAddress, setTokenAddress] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the function to transfer tokens using the provided data
    // Display success or error message accordingly
    setMessage('Tokens transferred successfully');
  };
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet"/>   
     <title>FinToken - Asset Tokenization</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-blue-medium"
       
     >
         <Header/>

     <section
      id="home"
      className= "  opacity-90 relative  overflow-hidden bg-cover bg-top bg-no-repeat pt-[150px] pb-24"
          >
          
      <div
        className="grade absolute left-0 top-0 -z-10 h-full w-full"
       
        
      ></div>      
      <div
        className="absolute left-0 top-0 -z-10 h-full w-full"
      
      ></div>
        <video className="-z-10 absolute top-0 left-0 w-full h-full object-cover bg-top bg-no-repeat " autoPlay loop muted>
    <source src="/videos/fintoken.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
      <div className="container ">
        <div className="-mx-4  bg-white flex justify-center items-center ml-5 mr-5 pt-10  pb-10  rounded-xl border border-black">
        <form>
      <div className="space-y-12">
       
        <div className="border-b border-gray-900/10 pb-12">
        <h1 className="text-base font-semibold text-4xl text-gray-900 mb-10">Token Bridge</h1>
  
        
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Token Bridge</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Select the chains you wish to bridge your tokens to and from.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
              <label htmlFor="from" className="block text-sm font-medium leading-6 text-gray-900">
                From
              </label>
              <div className="mt-2">
          <select id="from" value={fromBlockchain} onChange={(e) => setFromBlockchain(e.target.value)}         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
            <option value="Polygon Amoy">
              Polygon Amoy
              <img src="/polygon-amoy-logo.png" alt="Polygon Amoy Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Sepolia">
              Sepolia
              <img src="/zksync-sepolia-logo.png" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Fuji">
              Fuji
              <img src="/avalanche.svg" alt="Fuji Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
           
          </select>
        
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="to" className="block text-sm font-medium leading-6 text-gray-900">
                To
              </label>
              <div className="mt-2">
              
          <select id="to" value={toBlockchain} onChange={(e) => setToBlockchain(e.target.value)}         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
            <option value="Polygon Amoy">
              Polygon Amoy
              <img src="/polygon-amoy-logo.png" alt="Polygon Amoy Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Sepolia">
               Sepolia
              <img src="/zksync-sepolia-logo.png" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Fuji">
              Fuji
              <img src="/fuji-logo.png" alt="Fuji Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            
          </select>
        

              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="token" className="block text-sm font-medium leading-6 text-gray-900">
                Token
              </label>
              <div className="mt-2">
          <select id="token" value={fromBlockchain} onChange={(e) => setFromBlockchain(e.target.value)}         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
            <option value="Polygon Amoy">
              Polygon Amoy
              <img src="/polygon-amoy-logo.png" alt="Polygon Amoy Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="ZkSync Sepolia">
              ZkSync Sepolia
              <img src="/zksync-sepolia-logo.png" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Fuji">
              Fuji
              <img src="/fuji-logo.png" alt="Fuji Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Scroll Sepolia">
              Scroll Sepolia
              <img src="/scroll-sepolia-logo.png" alt="Scroll Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
          </select>
        
              </div>
            </div>    


            <div className="sm:col-span-3">
              <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                Amount
              </label>
              <div className="mt-2">
              <input type="number" id="amount" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))}                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
   
        
              </div>
            </div>   
</div>
</div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
      
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Bridge Tokens
        </button>
      </div>
    </form>

       </div>
    
      </div>

      
    </section>
    <Footer />
     </main>
     </>
  )
}
