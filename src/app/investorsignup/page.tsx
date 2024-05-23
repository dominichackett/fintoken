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
import Notification from '@/components/Notification/Notification';
import { useAccount} from 'wagmi'
import { getIdentity,createIdentity,allowKYCClaim } from '@/identity/identity';
import { ethers } from 'ethers';
import { insertInvestor } from '@/tableland/tableland';
export default function InvestorSignup() {
  const account = useAccount()

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


 // NOTIFICATIONS functions
 const [notificationTitle, setNotificationTitle] = useState();
 const [notificationDescription, setNotificationDescription] = useState();
 const [dialogType, setDialogType] = useState(1);
 const [show, setShow] = useState(false);
 const close = async () => {
setShow(false);
};

const _register = async()=>{

  if(account.chainId != 80002){
    setDialogType(2) //Error
    setNotificationTitle("Add Issuer");
    setNotificationDescription("Wrong Network.")
    setShow(true)
    return
  }

      const firstname  = document.getElementById("firstname").value 
      const lastname = document.getElementById("lastname").value 
      const email = document.getElementById("email").value 
      const street = document.getElementById("street").value 
      const zip = document.getElementById("zip").value 

      if(!firstname || !lastname ||!email || !street || !zip || !country || !state || !city )
      {

        setDialogType(2) //Error
        setNotificationTitle("Investor Signup");
        setNotificationDescription("All fields are required.")
        setShow(true)
        return
      }
    try 
      {let id = await getIdentity(signer,account.address)
      if(id==ethers.constants.AddressZero ){
        console.log(id)

         id =await createIdentity(signer)
      }

      await allowKYCClaim(signer)
      setDialogType(3) //Investor
      setNotificationTitle("Investor Signup");
      setNotificationDescription("Registering please wait.")
      setShow(true)
      await insertInvestor(id,firstname,lastname,email,country,state,city,street,zip)
      setDialogType(1) //Success
      setNotificationTitle("Investor Signup");
      setNotificationDescription("Investor registration successfull")
      setShow(true)
    }catch(error){
      setDialogType(2) //Error
      setNotificationTitle("Investor Signup");
      setNotificationDescription(error.message)
      setShow(true)
      return
    }

}
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
        <h1 className="text-base font-semibold text-4xl text-gray-900 mb-10">Investor Registration</h1>
  
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
              <select onChange={countryChanged} value={country}
        id="countries"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
               
 
      >
        <option value="">Country</option>
        {countries.map((_country) => (
          <option key={_country.alpha2} value={_country.alpha2}>
            {_country.country} 
          </option>
        ))}
      </select>          
                
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street"
                  id="street"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                State
              </label>
              <div className="mt-2">
              <select onChange={stateChanged}
        id="states"
        className="block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={state}
      >
        <option value="">State</option>
        {states.map((_state) => (
          <option key={_state.isoCode} value={_state.isoCode}>
            {_state.name} {_state.isoCode}
          </option>
        ))}
      </select>     
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
              <select 
        id="cities"
        onChange={cityChanged}
        className="block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
       value={city}
      >
        <option value="">City</option>
        {cities.map((_city,index) => (
          <option key={index} value={index}>
            {_city.name} 
          </option>
        ))}
      </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zip" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Two Forms of Government ID</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Two of any of these forms of ID are required. National or State ID, Passport,Drives License
          </p>
          <div class="relative">
  <input type="file" class="absolute inset-0 opacity-0 w-full h-full cursor-pointer" accept="image/*"  />
  <div class="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-sm inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
      <path fill-rule="evenodd" d="M10 2C6.686 2 4 4.686 4 8v8c0 3.314 2.686 6 6 6s6-2.686 6-6V8c0-3.314-2.686-6-6-6zM5 8c0-2.757 2.243-5 5-5s5 2.243 5 5v8c0 2.757-2.243 5-5 5s-5-2.243-5-5V8z" clip-rule="evenodd" />
    </svg>
    <span>Select ID Documents</span>
  </div>
</div>

</div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        
        <button
          onClick={_register}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Register
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
