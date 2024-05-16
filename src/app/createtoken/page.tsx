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
export default function CreateToken() {
  const signer = useEthersSigner()
  const [country,setCountry] = useState()
  const [countries,setCountries] = useState([])
  const [state,setState] = useState()
  const [states,setStates] = useState([])
  const [city,setCity] = useState()
  const [cities,setCities] = useState([])

  const countryChanged = (event:any)=>{
    const _states = State.getStatesOfCountry(event.target.value)
    
     setStates(_states)
     setCountry(event.target.value)
   } 

 
const stateChanged = (event:any)=>{
 const _cities = City.getCitiesOfState(country,event.target.value)
 console.log(event.target.value)
 console.log(_cities)
  setCities(_cities)
  setState(event.target.value)
}   

const cityChanged = (event:any)=>{
  setCity(event.target.value) 
}

useEffect(()=>{
    //setCountries(Country.getAllCountries())
    //console.log( Country.getAllCountries())
     console.log(icountry.all())
     setCountries(icountry.all())
},[])
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
        <h1 className="text-base font-semibold text-4xl text-gray-900 mb-10">Create Token</h1>
  
          <h2 className="text-base font-semibold leading-7 text-gray-900">Tokenize an Asset</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please enter your token information.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="tokenname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="symbol" className="block text-sm font-medium leading-6 text-gray-900">
                Symbol
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="symbol"
                  id="symbol"
                  autoComplete="tokensymbol"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="decimals" className="block text-sm font-medium leading-6 text-gray-900">
                Decimals
              </label>
              <div className="mt-2">
                <input
                  id="decimals"
                  name="decimals"
                  type="number"
                  autoComplete="decimals"
                  min={0}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="instrument" className="block text-sm font-medium leading-6 text-gray-900">
                Instrument Type
              </label>
              <div className="mt-2">
              <select 
        id="instrument"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
               
 
      >
        <option value="0">Instrument Type</option>
        <option value="1">Bond</option>
        <option value="2">Commodity</option>
        <option value="3">Equity</option>

        <option value="4">Real Estate</option>
        <option value="5">Stable Coin</option>  
       <option value="6">Other</option>
      </select>          
                
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="owner" className="block text-sm font-medium leading-6 text-gray-900">
                Owner Wallet Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="owner"
                  id="owner"
                  autoComplete="owner"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

          
      
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Token Logo</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please select an appropriate logo for your token.
          </p>
        
          <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Logo image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
         </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
      
        <button
          type="submit"
          className="w-80 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Token
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
