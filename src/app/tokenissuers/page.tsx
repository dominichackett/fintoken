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

import { queryTokenIssuers } from '@/tableland/tableland';
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
export default function TokenIssuers() {
  const signer = useEthersSigner()
  const [issuers,setIssuers] = useState([])
  useEffect(()=>{
      async function getIssuers(){
        const _issuers = await queryTokenIssuers()
        setIssuers(_issuers)
      } 
      getIssuers()
  },[]
  )
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
        <h1 className="text-base font-semibold text-4xl text-gray-900 mb-10">Token Issuers</h1>
  
          <h2 className="text-base font-semibold leading-7 text-gray-900">Manage Token Issuers</h2>
          <p className="mb-6 mt-1 text-sm leading-6 text-gray-600">Your authorized token issuers information. </p>
          <a
          href="/addtokenissuer"
          className="rounded-md bg-indigo-600 mt-6 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Token Issuer
        </a>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           
          <div className=" col-span-full overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Company
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Address
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Action
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {issuers.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.firstname} {person.lastname}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.company}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.id}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button
          type="submit"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Delete
        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          
           
          
      
          </div>
        </div>

     
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
