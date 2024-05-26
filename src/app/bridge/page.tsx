"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState,useEffect } from 'react';
import Notification from '@/components/Notification/Notification';
import { useAccount} from 'wagmi'
import { bridgeAddress,bridgeABI,tokenABI } from '@/contracts/contracts';
import { ethers } from 'ethers';
import { text } from 'stream/consumers';

export default function Bridge() {
  const signer = useEthersSigner()
 
  const [message, setMessage] = useState('');
  const account = useAccount()

  const [tokens,setTokens] = useState([{address:"0x48b7d62748641D93a335687C74Ce5Ba13BefB4F8",symbol:"TL",name:"Tobago Land"}])
 // NOTIFICATIONS functions
 const [notificationTitle, setNotificationTitle] = useState();
 const [notificationDescription, setNotificationDescription] = useState();
 const [dialogType, setDialogType] = useState(1);
 const [show, setShow] = useState(false);
 const close = async () => {
setShow(false);
};
 
  function verifyChainId(chain:number,name:string)
  {
      if(account?.chainId != chain)
      {
 
       setDialogType(2) //Error
       setNotificationTitle("Token");
       setNotificationDescription(`Please select network ${name} id: ${chain}`)
       setShow(true)
       return false
   
      }
      return true
 
  }
 
  const  bridgeToken = async () => {
     const _to = document.getElementById("to").value 
     const _from = document.getElementById("from")
     const _amount = document.getElementById("amount").value 
     const _token = document.getElementById("token").value


     const selectedIndex = _from.selectedIndex;
     const selectedOption = _from.options[selectedIndex];
     const selectedText = selectedOption.text;
     console.log(selectedOption)
     console.log(_from.value)
     
     if(!verifyChainId(_from.value,selectedText))
       return 
      if(_from.value == _to)
      {
        setDialogType(2) //Error
        setNotificationTitle("Token");
        setNotificationDescription(`Error can't bridge token to the same chain`)
        setShow(true)
        return false
     
      }

      if(!_token)
      {
        setDialogType(2) //Error
        setNotificationTitle("Token");
        setNotificationDescription(`Token not selected`)
        setShow(true)
        return false
     
      }


      if(!_amount || _amount ==0)
      {
        setDialogType(2) //Error
        setNotificationTitle("Token");
        setNotificationDescription(`Token amount not entered.`)
        setShow(true)
        return false
     
      }

      const bridgeContract = new ethers.Contract(bridgeAddress.get(account.chanId),bridgeABI,signer)
      const tokenContract = new ethers.Contract(_token,tokenABI,signer)
      try {

             const tx =  tokenContract.callStatic.approve(bridgeAddress.get(account.chainId),_amount)
             const tx1 =  tokenContract.approve(bridgeAddress.get(account.chainId),_amount) 
             await tx1.wait()
             const tx2= bridgeContract.callStatic.bridgeTokens(_token,_amount,_to)
             const tx3 = bridgeContract.bridgeTokens(_token,_amount,_to)
             await tx3.wait()
             setDialogType(1) //Success
             setNotificationTitle("Token");
             setNotificationDescription(`Tokens bridged.`)
             setShow(true)
      }catch(error)
      {
        setDialogType(2) //Error
        setNotificationTitle("Token");
        setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
        setShow(true)
        return
      }
    
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
        <h1 className="font-bold text-4xl text-gray-900 mb-10">Token Bridge</h1>
  
        
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
          <select id="from"          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
            <option value="80002">
              Polygon Amoy
              <img src="/polygon-amoy-logo.png" alt="Polygon Amoy Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="11155111">
              Sepolia
              <img src="/zksync-sepolia-logo.png" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="43113">
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
              
          <select id="to"          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
<option value="">Select</option>
            <option value="80002">
              Polygon Amoy
              <img src="/polygon-amoy-logo.png" alt="Polygon Amoy Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="11155111">
              Sepolia
              <img src="/zksync-sepolia-logo.png" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="43113">
              Fuji
              <img src="/avalanche.svg" alt="Fuji Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
           
          </select>
        

              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="token" className="block text-sm font-medium leading-6 text-gray-900">
                Token
              </label>
              <div className="mt-2">
          <select id="token"        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
            {tokens.map((token) =>(
                  <option key={token.address} value={token.address}>
                  {token.symbol} {token.name}  {token.address} 
            </option>

          ))}
          </select>
        
              </div>
            </div>    


            <div className="sm:col-span-3">
              <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                Amount
              </label>
              <div className="mt-2">
              <input type="number" id="amount" min={0}                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
   
        
              </div>
            </div>   
</div>
</div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
      
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         onClick={()=>bridgeToken()}
        >
          Bridge Tokens
        </button>
      </div>
    </form>

       </div>
    
      </div>

      
    </section>
    <Footer />
    <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
     </main>
     </>
  )
}
