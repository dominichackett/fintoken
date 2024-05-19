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
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', status: 0 ,
    image:
    'https://png.pngtree.com/png-vector/20210522/ourmid/pngtree-vector-illustration-of-crytocurrency-ethereum-png-image_3314668.jpg',
},
    { name: 'Linda Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', status: 1,
    image:
    'https://upload.wikimedia.org/wikipedia/commons/5/58/Bitcoin_Cash.png',
}
    // More people...
  ]
export default function Tokens() {
  const signer = useEthersSigner()
  
  
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
       
        <div className="border-b border-gray-900/10 pb-12 ">
        <h1 className="text-base font-semibold text-4xl text-gray-900 mb-10">Tokens</h1>
  
          <h2 className="text-base font-semibold leading-7 text-gray-900">Manage Tokens</h2>
          <p className="mb-6 mt-1 text-sm leading-6 text-gray-600">Manage your security tokens. </p>
          <a
          href="/createtoken"
          className="rounded-md bg-indigo-600 mt-6 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Security Token
        </a>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
           
          <div className=" col-span-full overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead className="bg-gray-900">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Symbol
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Address
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                      Action
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                        
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <div className="flex items-center">

                      <div className="h-11 w-11 flex-shrink-0">
                          <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
   {person.name}</div></div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                      <span className={person.status == 0?`inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20`:`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}>
                        {person.status ==0 ? "Unverified":"Verified"}
                      </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <a
          href='/token/1'
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Manage
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
