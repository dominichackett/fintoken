"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState,useEffect ,useRef} from 'react';
import Notification from '@/components/Notification/Notification';
import { useAccount} from 'wagmi'
import { ethers } from 'ethers';
import { uploadToIPFS } from '@/fleek/fleek';
import { trexGateway,trexGatewayABI } from '@/contracts/contracts';
import { insertToken } from '@/tableland/tableland';
export default function CreateToken() {
  const signer = useEthersSigner()
  const account = useAccount()
  const [preview, setPreview] = useState('')
  const [selectedFile, setSelectedFile] = useState(undefined)
  const filename = useRef()

  useEffect(() => {
    if (!selectedFile) {
        setPreview('')
        return
    }
  
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
  
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  

const _createToken =async()=>{

  if(account.chainId != 80002){
    setDialogType(2) //Error
    setNotificationTitle("Create Token");
    setNotificationDescription("Wrong Network.")
    setShow(true)
    return
  }

  if(!selectedFile)
  {
    setDialogType(2) //Error
    setNotificationTitle("Create Token");
    setNotificationDescription("Please select an image for your logo.")
    setShow(true)
    return
  }
  const name  = document.getElementById("name").value 
  const symbol = document.getElementById("symbol").value 
  const decimals = document.getElementById("decimals").value
  const  type = parseInt(document.getElementById("instrument").value )
  const owner = document.getElementById("owner").value 
  
  
  if(!name || !symbol || !decimals || type==0)
  {

    setDialogType(2) //Error
    setNotificationTitle("Create Token");
    setNotificationDescription("All fields are required.")
    setShow(true)
    return
  }
  if( !ethers.utils.isAddress(owner))
  {
    setDialogType(2) //Error
    setNotificationTitle("Create Token");
    setNotificationDescription("A valid ethereum address is required.")
    setShow(true)
    return
  }

  setDialogType(3) //Info
  setNotificationTitle("Create Token");
  setNotificationDescription("Uploading token image.")
  setShow(true)

  const result = await  uploadToIPFS(filename.current,selectedFile)
  //console.log(await result.json())
  const cid =result.cid.toV1().toString()
  const url = `https://${cid}.ipfs.cf-ipfs.com`
  
   setShow(false)
   console.log(data)
 const contract = new ethers.Contract(trexGateway, trexGatewayABI, signer);

 try{

  const tx= await contract.callStatic.deployTREXSuite({
    owner: owner,
    name: name,
    symbol: symbol,
    decimals: decimals,
    irs: ethers.constants.AddressZero,
    ONCHAINID: ethers.constants.AddressZero,
    irAgents: [],
    tokenAgents: [],
    complianceModules: [],
    complianceSettings: [],
  },
  {
    claimTopics: [],
    issuers: [],
    issuerClaims: [],
  });
  const transaction = await contract.deployTREXSuite(issuer);
  await transaction.wait(); // Wait for the transaction to be mined

  const receipt = await signer.provider.getTransactionReceipt(transaction.hash);

  // Access event data from the receipt (replace 'YourEventName' with your actual event name)
  console.log(receipt)
  const iface = new ethers.utils.Interface(trexGatewayABI);

  const events = iface.parseLog(receipt.logs[1]);
 console.log(events)
  const tokenId = events.args._token;

     console.log(events.args); // Access event arguments
  await  insertToken(tokenId,name,symbol,decimals,type,owner,account.address,url);
  setDialogType(1) //Success
  setNotificationTitle("Create Token");
  setNotificationDescription("Token created successfully.")
  setShow(true)

}catch(error)
{
  setDialogType(2) //Error
  setNotificationTitle("Create Token");
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

const PicSelected = async (e:any) => {
  if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined)
    return
}

// I've kept this example simple by using the first image instead of multiple
setSelectedFile(e.target.files[0])
filename.current = e.target.files[0].name
  
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

                  { preview ? <img
                 className="h-40 w-40 rounded-lg border-my-blue border-2"
                 src={preview}
                 alt=""
               /> :                   <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              }
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={PicSelected}  />
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
          type="button"
          onClick={()=>_createToken()}
          className="w-80 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Token
        </button>
      </div>
    </form>

       </div>
    
      </div>

      
    </section>
    <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
    <Footer />
     </main>
     </>
  )
}
