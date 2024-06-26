"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState,useEffect } from 'react';
import { queryInvestors } from '@/tableland/tableland';
import * as icountry from "iso-3166-1"

export default function Investors() {
  const signer = useEthersSigner()
  const [investors,setInvestors] = useState([])
  useEffect(()=>{
    async function getInvestors(){
      const _investors = await queryInvestors()
      setInvestors(_investors)
      console.log(icountry.whereAlpha2("TT")?.country)

    } 
    getInvestors()
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
        <div className=" -mx-4  bg-white flex justify-center items-center  pt-10  pb-10  rounded-xl border border-black">
        <form  className="w-full">
      <div className="w-full  p-24 pt-2 space-y-12">
       
        <div className="border-b border-gray-900/10 pb-12 ">
        <h1 className="font-bold text-4xl text-gray-900 mb-10">Investors</h1>
  
          <h2 className="text-base font-semibold leading-7 text-gray-900">Manage Investors</h2>
          <p className="mb-6 mt-1 text-sm leading-6 text-gray-600">Manage investor approvals KYC/AML. </p>
         
          <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
           
          <div className=" col-span-full overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Country
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Action
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {investors.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.firstname} {person.lastname}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{icountry.whereAlpha2(person.country)?.country}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                      <span className={person.kyc == 0?`inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20`:`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}>
                        {person.kyc ==0 ? "Unverified":"Verified"}
                      </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <a
          href={`/investor/${person.id}`}
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          view
        </a>
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
