"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState,useEffect } from 'react';
import { Country, State, City }  from 'country-state-city';
import * as icountry from "iso-3166-1"
import { insertTokenIssuer } from '@/tableland/tableland';
import { trexGateway,trexGatewayABI } from '@/contracts/contracts';
import { ethers } from 'ethers';
import Notification from '@/components/Notification/Notification';
import { useAccount} from 'wagmi'

export default function AddIssuer() {
  const signer = useEthersSigner()
  const account = useAccount()
  const addIssuer = async()=>{
      if(account.chainId != 80002){
        setDialogType(2) //Error
        setNotificationTitle("Add Issuer");
        setNotificationDescription("Wrong Network.")
        setShow(true)
        return
      }

      const firstname  = document.getElementById("firstname").value 
      const lastname = document.getElementById("lastname").value 
      const company = document.getElementById("company").value
      const issuer = document.getElementById("issuer").value 
      if(!firstname || !lastname || !company)
      {

        setDialogType(2) //Error
        setNotificationTitle("Add Issuer");
        setNotificationDescription("All fields are required.")
        setShow(true)
        return
      }
      if( !ethers.utils.isAddress(issuer))
      {
        setDialogType(2) //Error
        setNotificationTitle("Add Issuer");
        setNotificationDescription("A valid ethereum address is required.")
        setShow(true)
        return
      }

      const contract = new ethers.Contract(trexGateway, trexGatewayABI, signer);

      try{

        const tx= await contract.callStatic.addDeployer(issuer);
        const transaction = await contract.addDeployer(issuer);
        await transaction.wait(); // Wait for the transaction to be mined
        await  insertTokenIssuer(issuer,firstname,lastname,company);
        setDialogType(1) //Success
        setNotificationTitle("Add Issuer");
        setNotificationDescription("Token issuer added successfully.")
        setShow(true)

      }catch(error)
      {
        setDialogType(2) //Error
        setNotificationTitle("Add Issuer");
        setNotificationDescription(error?.message)
        setShow(true)

      }

      

  }
  // NOTIFICATIONS functions
  const [notificationTitle, setNotificationTitle] = useState();
  const [notificationDescription, setNotificationDescription] = useState();
  const [dialogType, setDialogType] = useState(1);
  const [show, setShow] = useState(false);
  const close = async () => {
setShow(false);
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
        <h1 className="text-base font-semibold text-4xl text-gray-900 mb-10">Token Issuer</h1>
  
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add Token Issuer</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please enter the token issuer information.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="firstname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="lastname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

            <div className="col-span-full">
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="company"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="issuer" className="block text-sm font-medium leading-6 text-gray-900">
                Issuer Wallet Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="issuer"
                  id="issuer"
                  autoComplete="owner"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

          
      
          </div>
        </div>

     
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
      
        <button
        type="button"
          onClick={()=>addIssuer()}
          className="w-80 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Issuer
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
