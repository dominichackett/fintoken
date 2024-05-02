"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';

import Link from 'next/link'
export default function Home() {
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
      <main className="bg-black"
       
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
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h1
                className="mb-4 text-[40px] font-bold leading-tight text-white md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]"
              >
               
               FinToken - Asset Tokenization
                             </h1>
              <p
                className="mb-8 text-lg font-medium leading-relaxed text-white md:pr-14 bg-grey"
              >

FinToken is a pioneering platform empowering banks and asset managers to tokenize assets seamlessly, utilizing the ERC-3643 standard. This innovative approach facilitates the digitization of real-world assets such as real estate, securities, and commodities, providing a secure and efficient means for institutions to unlock new opportunities in asset management. By leveraging blockchain technology and adhering to industry standards, FinToken enables greater liquidity, transparency, and accessibility, ultimately reshaping the landscape of traditional finance and paving the way for a more inclusive and innovative financial ecosystem.




</p>
         <div className="flex flex-wrap items-center">
                <Link
                  href="/institutions"
                  className="mr-5 mb-5 inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary py-3 px-7 text-base font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  Institutions
                </Link>
                <Link
                  href="/individuals"
                  className="mb-5 inline-flex items-center justify-center rounded-md border-2 border-white py-3 px-7 text-base font-semibold text-white transition-all hover:border-primary hover:bg-primary"
                >
                  Investors
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
          <Image
        src="/images/fintoken.png" // Path to the image from the `public` directory
        alt="Image 1"
        width={400} // Set the width
        height={300} // Set the height
className='opacity-90 rounded-full'
      /></div>
        </div>
      </div>

      
    </section>
    <Footer />
     </main>
     </>
  )
}
