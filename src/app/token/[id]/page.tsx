"use client"
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image';
import Link from 'next/link'
import { useEthersSigner } from '@/signer/signer'
import {UserPlusIcon, CurrencyDollarIcon, LockClosedIcon, LockOpenIcon, PlusCircleIcon, ArrowRightIcon, ArrowLeftIcon ,DocumentArrowUpIcon,DocumentCheckIcon,XCircleIcon} from '@heroicons/react/24/solid';
import { Country }  from 'country-state-city';
import { useAccount} from 'wagmi'
import { queryInvestor, queryToken,setTokenStatus } from '@/tableland/tableland';
import { useState,useEffect } from 'react';
import * as icountry from "iso-3166-1"
import Notification from '@/components/Notification/Notification';
import numeral from 'numeral';
import { tokenABI,ModularComplianceABI, ModularComplianceBytecode, CountryRestrictModuleABI,CountryRestrictModule,ModuleProxyABI,ModuleProxyBytecode
  , CountryRestrictModuleBytecode,identityRegistryABI,identityGateway,identityGatewayABI} from '@/contracts/contracts';
import { ethers } from 'ethers';
import { getIdentity,registerIdentity } from '@/identity/identity';
import { verify } from 'crypto';
export default function Token({params}) {
    const [isClient, setIsClient] = useState(false);

  const signer = useEthersSigner()
  const [countries,setCountries] = useState([])
  const account = useAccount()
  const [gotToken,setGotToken] = useState()
  const  [token,setToken] = useState()
  const [totalSupply,setTotalSupply] = useState(0)
  const [lockedTokens,setLockedTokens] = useState(0)
  const [unLockedTokens,setUnLockedTokens] = useState(0)
  const [refreshData,setRefreshData] = useState(new Date().getTime())
  const [paused,setPaused] = useState()
  const [compliance,setCompliance] = useState()
  const [countryRestrictModule,setCountryRestrictModule] = useState()
  const [deployedChains, setDeployedChains] = useState(new Map([
    [1, {chainId:80002,name:'Polygon Amoy',address:'0xc74574c03E649C793bC08e5b40d7775840Ee4A9D',image:"/images/amoy.png"}],

    [2, {chainId:43113,name:'Fuji',address:'0xc74574c03E649C793bC08e5b40d7775840Ee4A9D',image:"/images/fuji.png"}],
    [3, {chainId:11155111, name:'Sepolia',address:'0xc74574c03E649C793bC08e5b40d7775840Ee4A9D',image:"/images/sepolia.webp"}]
    
  ]));
  
  const [tokenType,setTokenType] = useState(new Map([[1,"Bond"],[1,"Commodity"],[3,"Equity"],[4,"Real Estate"],[5,"Stable Coint"],[6,"Other"]]))

   // NOTIFICATIONS functions
 const [notificationTitle, setNotificationTitle] = useState();
 const [notificationDescription, setNotificationDescription] = useState();
 const [dialogType, setDialogType] = useState(1);
 const [show, setShow] = useState(false);
 const close = async () => {
setShow(false);
};


 useEffect(()=>{
  
  
  let data =Country.getAllCountries()
  let _countries = []
  for (let country of data){
     let _c = icountry.whereAlpha2(country.isoCode)
     _countries.push({numeric:_c?.numeric,country:_c?.country})
  }
  setCountries(_countries)

  async function getToken(){

    const _token = await queryToken(params.id)
    if(_token.length > 0)
         {
            console.log(_token)
            setToken(_token[0])
           
            setGotToken(true)
  
         } 
         else
         {
            setDialogType(2) //Error
            setNotificationTitle("Token");
            setNotificationDescription("Token not found.")
            setShow(true)
            return
         }



  }

  getToken()

 },[])

 useEffect(()=>{
  async function getTokenData(){
      if(account?.chainId != 80002)
        return
      const contract =  new ethers.Contract(params.id,tokenABI,signer)
      try{
      setTotalSupply(await contract.totalSupply())
      
    
      setPaused(await contract.paused())
      const _compliance= await contract.compliance()
      const _complianceContract = new ethers.Contract(_compliance,ModularComplianceABI,signer)
      const modules = await _complianceContract.getModules()
      if(modules.length > 0)
         setCountryRestrictModule(modules[0])
    
      setCompliance(_compliance 
      )
      
    }catch(error)
      {
        console.log(error)
      }
  } 

  if(account?.address && signer)
  getTokenData()
 },[account?.address,params?.id,signer,account?.chainId,refreshData])



  const togglePauseToken = async()=>{
        const contract =  new ethers.Contract(params.id,tokenABI,signer)
         //await contract.addAgent(account.address)
         //return
           try{
             if(paused)
             {
                setDialogType(3) //Info
                setNotificationTitle("Token");
                setNotificationDescription("Unpausing token.")
                setShow(true)
                await contract.unpause()
                await setTokenStatus(1)

                setDialogType(1) //Suuccess
                setNotificationTitle("Token");
                setNotificationDescription("Token unpasused.")

                setPaused(false)
             }else

             {
              setDialogType(3) //Info
              setNotificationTitle("Token");
              setNotificationDescription("Pausing token.")
              setShow(true)
              await contract.pause()
              await setTokenStatus(0)

              setDialogType(1) //Suuccess
              setNotificationTitle("Token");
              setNotificationDescription("Token pasused.")
            
              setPaused(false)
             }
      }catch(error)
      {
        console.log(error)
      } 
  }

  const enableCompliance = async()=>{
  /*  const ModularCompliance = new ethers.ContractFactory(ModularComplianceABI, ModularComplianceBytecode, signer);

    const complianceBeta = await ModularCompliance.deploy();
    await complianceBeta.deployed();
    console.log(`complianceBeta ${complianceBeta.address}`);
  
    await complianceBeta.init();
    console.log("complianceBeta initialized");
*/
     // Attach to the existing CountryRestrictModule contract
  /*  const crm = new ethers.ContractFactory( CountryRestrictModuleABI,CountryRestrictModuleBytecode, signer);
    const countryRestrictModule = await crm.deploy();
    await countryRestrictModule.deployed();
    console.log(`countryRestrictModule ${countryRestrictModule.address}`);
  */

  try  
  { const crm = new ethers.Contract(CountryRestrictModule,CountryRestrictModuleABI,signer)
    // Encode the initialize function call data
    const initData = crm.interface.encodeFunctionData('initialize');
    // Deploy the ModuleProxy contract
    const ModuleProxyFactory = new ethers.ContractFactory(ModuleProxyABI, ModuleProxyBytecode, signer);
    const moduleProxy = await ModuleProxyFactory.deploy(crm.address, initData);
    await moduleProxy.deployed();
    console.log(`ModuleProxy deployed at: ${moduleProxy.address}`);

    // Attach to the deployed proxy contract
    const proxyInstance = new ethers.Contract(moduleProxy.address, CountryRestrictModuleABI, signer);
   
    const _complianceContract = new ethers.Contract(compliance,ModularComplianceABI,signer)

    await _complianceContract.addModule(proxyInstance.address);
    //const tokenContract =  new ethers.Contract(params.id,tokenABI,signer)
    ///await tokenContract.setCompliance(complianceBeta.address)
    //setCompliance(complianceBeta.address)
    setDialogType(1) //Success
    setNotificationTitle("Token");
    setNotificationDescription("Country restriction module enabled." )
    setShow(true)
    setCountryRestrictModule(proxyInstance.address)
    return
  }catch(error)
  {
    setDialogType(2) //Error
    setNotificationTitle("Token");
    setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
    setShow(true)
    return

  }
} 

  const restrictCountry = async()=>{

    const country = document.getElementById("restrictCountry").value 
    if(country == 0)
    {
         setDialogType(2) //Error
            setNotificationTitle("Token");
            setNotificationDescription("Please select a country to restrict.")
            setShow(true)
            return
    }

    const _compliance = new ethers.Contract(compliance,ModularComplianceABI,signer)
    try{
          //const modules = await _compliance.getModules()
          //const countryRestrictModule = modules[0] 
          await _compliance
            .callModuleFunction(
              new ethers.utils.Interface(['function addCountryRestriction(uint16 country)']).encodeFunctionData('addCountryRestriction', [country]),
              countryRestrictModule,
            );

            setDialogType(1) //Success  
            setNotificationTitle("Token");
            setNotificationDescription("Country restricted.")
            setShow(true)
            return

    }catch(error)
    {  
//      console.log(error.error.data)
        setDialogType(2) //Error
            setNotificationTitle("Token");
            setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
            setShow(true)
            return

    }

  }


  const allowCountry = async()=>{

    const country = document.getElementById("allowCountry").value 
    if(country == 0)
    {
         setDialogType(2) //Error
            setNotificationTitle("Token");
            setNotificationDescription("Please select a country to remove restrictions.")
            setShow(true)
            return
    }

    const _compliance = new ethers.Contract(compliance,ModularComplianceABI,signer)
    try{
          //const modules = await _compliance.getModules()
         // const countryRestrictModule = modules[0] 
          await _compliance
            .callModuleFunction(
              new ethers.utils.Interface(['function removeCountryRestriction(uint16 country)']).encodeFunctionData('removeCountryRestriction', [country]),
              countryRestrictModule,
            );

            setDialogType(1) //Success  
            setNotificationTitle("Token");
            setNotificationDescription("Country restriction removed.")
            setShow(true)
            return

    }catch(error)
    {  
  //    console.log(error.error.data)
        setDialogType(2) //Error
            setNotificationTitle("Token");
            setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
            setShow(true)
            return

    }

  }

  async function idRegistry()
  {
       const tokenContract =  new ethers.Contract(params.id,tokenABI,signer)
       const idr = await tokenContract.identityRegistry()
      return idr
  }


 async function isVerified(_to:string){
  const idrContract = new ethers.Contract(await idRegistry(),identityRegistryABI,signer);
  const isVerified = await idrContract.isVerified(_to)
  return isVerified

 } 

 async function registerAddress(_to:string,country:number){
   const id = await getIdentity(signer,_to)
   console.log(id)    
  
   const _idRegistry = await idRegistry()
   console.log(_idRegistry)
  const idrContract = new ethers.Contract(_idRegistry,identityRegistryABI,signer);
   //const tx = await idrContract.addAgent(account.address)
   //await tx.wait()
  console.log(country)
   
  const tx =  await idrContract.registerIdentity(_to,id,country)
    await tx.wait()
 }

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

 const whitelistUser = async()=>{

  if(!verifyChainId(80002,"Polygon Amoy"))
     return

  const _user = document.getElementById("whitelistUser").value 
  if( !ethers.utils.isAddress(_user))
  {
    setDialogType(2) //Error
    setNotificationTitle("Token");
    setNotificationDescription("Please enter an address to whitelist")
    setShow(true)
    return
  }

  //const idrContract = new ethers.Contract(_idRegistry,identityRegistryABI,signer);
  const _isVerified = await isVerified(_user)
  console.log(_isVerified)
 try
  {if(!_isVerified)
  {

    const _investor = await queryInvestor(_user)
    if(_investor.length ==0)
      throw new Error("User not registered as an investor.")

    await registerAddress(_user,_investor[0].country)
    //const idg  =  new ethers.Contract(identityGateway,identityGatewayABI,signer)
    //console.log(await idg.idFactory())
  }

      setDialogType(1) //Success
      setNotificationTitle("Token");
      setNotificationDescription("Address is whitelisted.")
      setShow(true)
      return


}catch(error)
{
    // console.log(error.error.data)
      setDialogType(2) //Error
      setNotificationTitle("Token");
      setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
      setShow(true)
      return

}
}
  const mintTokens = async()=>{

    if(!verifyChainId(80002,"Polygon Amoy"))
       return

        const _to = document.getElementById("mintTo").value 
        const _amount = document.getElementById("mintAmount").value 
        if(!_amount || !ethers.utils.isAddress(_to))
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription("Please enter recipient and token amount")
          setShow(true)
          return
        }

        const contract = new ethers.Contract(params.id,tokenABI,signer)

        try{

             const tx = await contract.mint(_to,_amount)
             await tx.wait()
             setDialogType(1) //Success
          setNotificationTitle("Token");
          setNotificationDescription(`${_amount} token(s) minted to address ${_to}`)
          setShow(true)
          setRefreshData(new Date().getTime())

        }catch(error)
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
          setShow(true)
          return
    
        }

        
  }


  function validateBatchAddresses(value:any){
    console.log(value)

    var rowCount = (value.match(/\n/g) || []).length + 1;
    var linesArray = value.split('\n'); // Split text into an array of lines
 

    if(rowCount < 1)
    return false

    const isValid = linesArray.every((address:any) => {
      return ethers.utils.isAddress(address);
    });

    return isValid
  }    
  const batchMintTokens = async()=>{

    if(!verifyChainId(80002,"Polygon Amoy"))
       return

        const _to = document.getElementById("batchMintTo").value 
        const _amount = document.getElementById("batchMintAmount").value 
        
        const validAddresses = validateBatchAddresses(_to)
        if(!_amount || !validAddresses)
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription("Please enter recipients and token amount")
          setShow(true)
          return
        }
        var  _addresses = _to.split('\n'); // Split text into an array of lines
        const _amounts = new Array(_addresses.length).fill(_amount);


        const contract = new ethers.Contract(params.id,tokenABI,signer)

        try{

             const tx = await contract.batchMint(_addresses,_amounts)
             await tx.wait()
             setDialogType(1) //Success
          setNotificationTitle("Token");
          setNotificationDescription(`${_amount} token(s) minted to address ${_to}`)
          setShow(true)
          setRefreshData(new Date().getTime())

        }catch(error)
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
          setShow(true)
          return
    
        }

        
  }

  const transferTokens = async()=>{

    if(!verifyChainId(80002,"Polygon Amoy"))
       return

        const _to = document.getElementById("transferTo").value 
        const _amount = document.getElementById("transferAmount").value 
        if(!_amount || !ethers.utils.isAddress(_to))
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription("Please enter recipient and token amount")
          setShow(true)
          return
        }

        const contract = new ethers.Contract(params.id,tokenABI,signer)

        try{

             const tx = await contract.transfer(_to,_amount)
             await tx.wait()
             setDialogType(1) //Success
          setNotificationTitle("Token");
          setNotificationDescription(`${_amount} token(s) transfered to address ${_to}`)
          setShow(true)
          setRefreshData(new Date().getTime())

        }catch(error)
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
          setShow(true)
          return
    
        }

        
  }

  const recoverTokens = async()=>{

    if(!verifyChainId(80002,"Polygon Amoy"))
       return

        const _to = document.getElementById("recoverTo").value
        const _from = document.getElementById("recoverFrom").value 
        
        if( !ethers.utils.isAddress(_to) || !ethers.utils.isAddress(_from))
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription("Please enter lost  address and new address.")
          setShow(true)
          return
        }

        const contract = new ethers.Contract(params.id,tokenABI,signer)

        try{
            
             const id = await getIdentity(signer,_from)
             const tx = await contract.recoveryAddress(_from,_to,id)
             await tx.wait()
             setDialogType(1) //Success
          setNotificationTitle("Token");
          setNotificationDescription(`Tokens recovered.`)
          setShow(true)
          setRefreshData(new Date().getTime())

        }catch(error)
        {
          setDialogType(2) //Error
          setNotificationTitle("Token");
          setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
          setShow(true)
          return
    
        }

        
  }

  const lockAccount = async()=>{

    if(!verifyChainId(80002,"Polygon Amoy"))
       return
  
    const _user = document.getElementById("lockUser").value 
    if( !ethers.utils.isAddress(_user))
    {
      setDialogType(2) //Error
      setNotificationTitle("Token");
      setNotificationDescription("Please enter an address to lock")
      setShow(true)
      return
    }
  
    
   try
    {

      const contract = new ethers.Contract(params.id,tokenABI,signer)

      const tx =  await contract.setAddressFrozen(_user,true)
      
        await tx.wait()
        setDialogType(1) //Success
        setNotificationTitle("Token");
        setNotificationDescription("Address is locked/frozen.")
        setShow(true)
        return
  
  
  }catch(error)
  {
       //console.log(error.error.data)
        setDialogType(2) //Error
        setNotificationTitle("Token");
        setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
        setShow(true)
        return
  
  }
  }

  const unLockAccount = async()=>{

    if(!verifyChainId(80002,"Polygon Amoy"))
       return
  
    const _user = document.getElementById("unlockUser").value 
    if( !ethers.utils.isAddress(_user))
    {
      setDialogType(2) //Error
      setNotificationTitle("Token");
      setNotificationDescription("Please enter an address to unlock")
      setShow(true)
      return
    }
  
    
   try
    {

      const contract = new ethers.Contract(params.id,tokenABI,signer)

      const tx =  await contract.setAddressFrozen(_user,false)
      
        await tx.wait()
        setDialogType(1) //Success
        setNotificationTitle("Token");
        setNotificationDescription("Address is unlocked/unfrozen.")
        setShow(true)
        return
  
  
  }catch(error)
  {
       //console.log(error.error.data)
        setDialogType(2) //Error
        setNotificationTitle("Token");
        setNotificationDescription(error?.error?.data?.message ? error?.error?.data?.message: error.message )
        setShow(true)
        return
  
  }
  }
   useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
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
      
  
      <div className="container ">
      <div className="min-h-screen flex flex-col  bg-gray-100 p-6">
      <div className="w-full mx-auto bg-white rounded-md shadow-xl p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded-full"
              src={token?.logo ? token.logo : "/images/sepolia.png"}
              alt="Logo"
            />
          </div>
          <div className="ml-4">
            <div className="font-bold text-xl text-gray-900">{token?.name}</div>
            <div className="mt-1 text-gray-500">{token?.symbol}</div>
            <div className="mt-1  font-bold text-black"><span>Decimals:</span> <span className="ml-2  font-bold text-gray-500">{token?.decimals}</span></div>
            <div className="mt-1  font-bold text-black"><span>Asset Type:</span> <span className="ml-2  font-bold text-gray-500">{tokenType.get(token?.type)}</span></div>


          </div>
        </div>

        {/* Token Information Section */}
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
          <div className="col-span-1">
            <span className="block text-sm font-semibold text-gray-700">Token Address:</span>
            <span className="block text-sm text-gray-900 mt-1">{token?.id}</span>
          </div>
          <div className="col-span-1 flex justify-between items-center">
            <div>
              <span className="block text-sm font-semibold text-gray-700">Status:</span>
              <span className={paused == true? "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20 mt-1":"inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mt-1"}>{paused == true? "Paused": "Active"}</span>
            </div>
            <button className={paused ? `inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ml-4`: `inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ml-4`}
              onClick={(()=>togglePauseToken())}
            >
            
              {paused ? "Unpause Token": "Pause Token"}
            </button>
           { !countryRestrictModule && <button className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ml-4"
            onClick={()=>enableCompliance()}
            >
               Enable Country Restriction  
            </button>}
          </div>
        
        </div>

      

        {/* Additional Information Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <CurrencyDollarIcon className="h-12 w-12 text-gray-500" />
            
              <span className="block text-sm font-semibold text-gray-700 mt-1">Circulating Token Supply</span>
              <span className="block text-lg text-gray-500 mt-1">{numeral(totalSupply).format('0,0')}</span>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <LockClosedIcon className="h-12 w-12 text-red-500 " />
            
              <span className="block text-sm font-semibold text-gray-700">Total Tokens Locked</span>
              <span className="block text-lg text-red-500 mt-1">{numeral(lockedTokens).format('0,0')}</span>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <LockOpenIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Total Tokens Unlocked</span>
              <span className="block text-lg text-green-500 mt-1">{numeral(unLockedTokens).format('0,0')}</span>
            
          </div>
        </div>
      </div>

      <div className="w-full mt-10  mx-auto bg-white rounded-md shadow-xl p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div >
            <div className="font-bold text-xl text-gray-900">Token Actions</div>
          </div>
        </div>

      
       
      

        {/* Additional Information Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <UserPlusIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Whitelist Address</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">User</span>
              
                <input
                  id="whitelistUser"
                  type="text"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="whitelistUser"
                />
                              </div>
            </div>
            <div className="w-full mt-2">
              <div className="flex items-center ">
               
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>whitelistUser()}>
                  Whitelist
                </button>
              </div>
            </div>
            
            
          </div>
        <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <PlusCircleIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Mint Tokens</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">To</span>
              
                <input
                  id="mintTo"
                  type="text"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="To"
                />
                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  id="mintAmount"
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>mintTokens()}>
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
                  id="transferTo"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="To"
                />
                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  type="text"
                  id="transferAmount"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                 type="button"
                 onClick={()=>transferTokens()}>
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
                 id="recoverFrom"
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
                  id="recoverTo"
                  type="text"
                  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="From"
                />
                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
               
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="button"
                onClick={()=>recoverTokens()}
                >
                  Recover
                </button>
              </div>
            </div>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <LockClosedIcon className="h-12 w-12 text-red-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Lock Account</span>
             
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                 id="lockUser"
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="button"
                onClick={()=>lockAccount()}>
                  Lock
                </button>
              </div>
            </div>
            
          </div>

          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <LockOpenIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">UnLock Account</span>
             
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                 id="unlockUser"
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="button"
                onClick={()=>unLockAccount()}>
                  Unlock
                </button>
              </div>
            </div>
            
          </div>

        {countryRestrictModule && <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
            <XCircleIcon className="h-12 w-12 text-red-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Restrict Country</span>
             
              <div className="w-full mt-2">
              <div className="flex items-center ">
              <select 
        id="restrictCountry"
        className="ml-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
 
      >
        <option value="0">Country</option>
        {countries.map((_country) => (
          <option key={_country.numeric} value={_country.numeric}>
            {_country.country} 
          </option>
        ))}
      </select>   
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={()=>restrictCountry()}
                >
                  Restrict
                </button>
              </div>
            </div>
            
          </div>}

          {countryRestrictModule &&   <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center ">
            <DocumentCheckIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Remove Country Restriction</span>
             
              <div className="w-full mt-2">
              <div className="flex items-center ">
              <select 
        id="allowCountry"
        className="ml-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
 
      >
        <option value="">Country</option>
        {countries.map((_country) => (
          <option key={_country.numeric} value={_country.numeric}>
            {_country.country} 
          </option>
        ))}
      </select>   
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>allowCountry()}>
                  Remove
                </button>
              </div>
            </div>
            
          </div>}

          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center col-span-3">
            <PlusCircleIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Batch Mint Tokens</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1">To</span>
              
              <textarea
  className="block w-full ml-6 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  placeholder="To"
  id='batchMintTo'
  rows="10"
></textarea>

                              </div>
            </div>
              <div className="w-full mt-2">
              <div className="flex items-center ">
                <input
                  type="text"
                  id='batchMintAmount'
                  className="ml-10 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Amount"
                />
                <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 ml-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>batchMintTokens()}>
                  Mint
                </button>
              </div>
            </div>
            
          </div>
     
        </div>
      </div>

      <div className="w-full mt-10  mx-auto bg-white rounded-md shadow-xl p-6">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div >
            <div className="font-bold text-xl text-gray-900">Available on</div>
          </div>
        </div>

      
       
      

        {/* Additional Information Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
     
          
          
     {[...deployedChains].map(([key,chain]) =>(     <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={chain.image} alt="" />
            
              <span className="block text-sm font-semibold text-gray-700">{chain.name}</span>
              <span className="block text-sm font-semibold text-gray-700 ">{chain.address}
</span>

          
        
            
          </div>))}

     


          <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center col-span-2">
            <DocumentArrowUpIcon className="h-12 w-12 text-green-500" />
            
              <span className="block text-sm font-semibold text-gray-700">Deploy to Blockchain</span>
             
            <div className="w-full mt-2">
              <div className="flex items-center">
              <span className="block text-lg text-green-500 mt-1 mr-2">Chain</span>
              
              <select id="to"          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
>
            <option value="">Select</option>
           
            <option value="11155111">
               Sepolia
              <img src="/images/sepolia.webp" alt="ZkSync Sepolia Logo" className="w-6 h-6 inline-block ml-2" />
            </option>
            <option value="43113">
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
