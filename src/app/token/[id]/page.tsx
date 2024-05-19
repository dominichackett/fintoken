"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import { CurrencyDollarIcon, LockClosedIcon, LockOpenIcon, PlusCircleIcon, ArrowRightIcon, ArrowLeftIcon ,DocumentArrowUpIcon} from '@heroicons/react/24/solid';

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
      <div className="min-h-screen flex flex-col  bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-xl p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded-full"
              src="https://png.pngtree.com/png-vector/20210522/ourmid/pngtree-vector-illustration-of-crytocurrency-ethereum-png-image_3314668.jpg"
              alt="Ethereum Logo"
            />
          </div>
          <div className="ml-4">
            <div className="font-bold text-xl text-gray-900">DLH</div>
            <div className="mt-1 text-gray-500">Defi Lama Hackett</div>
            <div className="mt-1  font-bold text-gray-500">Decimals: 0</div>
            <div className="mt-1  font-bold text-gray-500">Asset Type: Equities</div>


          </div>
        </div>

        {/* Token Information Section */}
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
          <div className="col-span-1">
            <span className="block text-sm font-semibold text-gray-700">Token Address:</span>
            <span className="block text-sm text-gray-900 mt-1">0xc74574c03E649C793bC08e5b40d7775840Ee4A9D</span>
          </div>
          <div className="col-span-1 flex justify-between items-center">
            <div>
              <span className="block text-sm font-semibold text-gray-700">Status:</span>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mt-1">Active</span>
            </div>
            <button className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ml-4">
              Pause Token
            </button>
          </div>
          <div className="col-span-1">
            <span className="block text-sm font-semibold text-gray-700">Valuation:</span>
            <span className="block text-sm text-gray-900 mt-1">$123,456,789</span>
          </div>
        </div>

        {/* Valuation Section */}
        <div className="mt-6">
          <div className="flex items-center">
            <span className="block text-sm font-semibold text-gray-700 mr-4">Set Valuation:</span>
            <input
              type="text"
              className="block w-full sm:w-auto flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter new valuation"
            />
            <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Update
            </button>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <CurrencyDollarIcon className="h-12 w-12 text-gray-500" />
            
              <span className="block text-sm font-semibold text-gray-700 mt-1">Circulating Token Supply</span>
              <span className="block text-lg text-gray-500 mt-1">10,000,000</span>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <LockClosedIcon className="h-12 w-12 text-red-500 " />
            
              <span className="block text-sm font-semibold text-gray-700">Total Tokens Locked</span>
              <span className="block text-lg text-red-500 mt-1">5,000,000</span>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <LockOpenIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Total Tokens Unlocked</span>
              <span className="block text-lg text-green-500 mt-1">5,000,000</span>
            
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto bg-white rounded-md shadow-xl p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div >
            <div className="font-bold text-xl text-gray-900">Token Actions</div>
          </div>
        </div>

      
       
      

        {/* Additional Information Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <PlusCircleIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Mint Tokens</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">To</span>
              
                <input
                  type="text"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="To"
                />
                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Mint
                </button>
              </div>
            </div>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <ArrowRightIcon className="h-12 w-12 text-red-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Transfer Tokens</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">To</span>
              
                <input
                  type="text"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="From"
                />
                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Transfer
                </button>
              </div>
            </div>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <ArrowLeftIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Recover Tokens</span>
              <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">From</span>
              
                <input
                  type="text"
                  className="ml-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="From"
                />
                              </div>
            </div>
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">To</span>
              
                <input
                  type="text"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="From"
                />
                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Recover
                </button>
              </div>
            </div>
            
          </div>


          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center col-span-3">
            <PlusCircleIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Batch Mint Tokens</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">To</span>
              
              <textarea
  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  placeholder="To"
  rows="10"
></textarea>

                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  type="text"
                  className="ml-10 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Mint
                </button>
              </div>
            </div>
            
          </div>
     
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto bg-white rounded-md shadow-xl p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div >
            <div className="font-bold text-xl text-gray-900">Available on</div>
          </div>
        </div>

      
       
      

        {/* Additional Information Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
     
          
          
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src="/images/amoy.png" alt="" />
            
              <span className="block text-sm font-semibold text-gray-700">Polygon Amoy</span>
              <span className="block text-xs font-semibold text-gray-700 w-full">0xc74574c03E649C793bC08e5b40d7775840Ee4A9D
</span>

          
        
            
          </div>

          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src="/images/fuji.png" alt="" />
            
              <span className="block text-sm font-semibold text-gray-700">Avalanche Fuji</span>
              <span className="block text-xs font-semibold text-gray-700 w-full">0xc74574c03E649C793bC08e5b40d7775840Ee4A9D
</span>

          
        
            
          </div>


          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src="/images/sepolia.webp" alt="" />
            
              <span className="block text-sm font-semibold text-gray-700">Ethereum</span>
              <span className="block text-xs font-semibold text-gray-700 w-full">0xc74574c03E649C793bC08e5b40d7775840Ee4A9D
</span>

          
        
            
          </div>
          
        


          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center col-span-2">
            <DocumentArrowUpIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Deploy to Blockchain</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1 mr-2">Chain</span>
              
              <select id="to"          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
            <option value="Polygon Amoy">
              Polygon Amoy
              <img src="/images/amoy.png" alt="Polygon Amoy Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Sepolia">
               Sepolia
              <img src="/images/sepolia.webp" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="Fuji">
              Fuji
              <img src="/images/fuji.png" alt="Fuji Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            
          </select>
          <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Register
                </button>
             </div>
            </div>
           
          </div>
     
        </div>
      </div>
    </div>
 

      </div>

      
    </section>
    <Footer />
     </main>
     </>
  )
}
