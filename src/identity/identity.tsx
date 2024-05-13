import { ethers } from "ethers";
import { IdentitySDK } from '@onchain-id/identity-sdk';
import * as OnChainId from "@onchain-id/solidity"
import { factoryAddress,identityGateway ,claimsIssuer,identityRegistry,identityRegistryABI,identityRegistryStorage
  ,identityRegistryStorageABI,claimTopicsRegistry,claimTopicsRegistryABI,trustedIssuersRegistry,trustedIssuersRegistryABI} from "@/contracts/contracts";
import claimJSON from './claim.json'

const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY)


const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-amoy-bor-rpc.publicnode.com"
  );

const _signer = wallet.connect(provider);

export const createIdentity = async (signer:any)=>{
    const tx = await IdentitySDK.Identity.deployUsingGatewayForWallet({
        gateway: identityGateway,
        identityOwner: await signer.getAddress(),
      }, { signer });

      const deployedIdentity = await tx.wait();
      return deployedIdentity


}

export const getIdentity =async(signer:any,address:any)=>{
  
  const factory = new ethers.Contract(factoryAddress,OnChainId.contracts.Factory.abi,signer)
  const id = await factory.getIdentity(address)
  return id;
  
}

export const allowKYCClaim = async(signer:any)=>{
  
  const id = await getIdentity(signer,await signer.getAddress());
  const _issuer = await getIdentity(signer,claimsIssuer)
  const identity = new IdentitySDK.Identity(id,signer); // Create the Identity Object
  console.log(_issuer)

  console.log(ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(['address'], [claimsIssuer])))
  console.log(IdentitySDK.utils.encodeAndHash(['address'], [claimsIssuer]))
  const addKeyTransaction = await identity.addKey(IdentitySDK.utils.encodeAndHash(['address'], [claimsIssuer]), IdentitySDK.utils.enums.KeyPurpose.CLAIM, IdentitySDK.utils.enums.KeyType.ECDSA,{signer});
 // return addKeyTransaction;
 
}

export const approveKYC = async(signer:any,data:string,topic:number)=>{
   
  const id = await getIdentity(signer,await signer.getAddress());
 
  // prepare the claim
   /* const claim = new IdentitySDK.Claim({
        address: id,
        data: ethers.utils.sha256(ethers.utils.toUtf8Bytes(data)),
        issuer: claimsIssuer,
        emissionDate: Date.now(),
        scheme: ethers.utils.sha256(ethers.utils.toUtf8Bytes(JSON.stringify(claimJSON[topic]))),
        topic: topic,
        uri:"http://www.eventslive101.com"
    });
    console.log(claim)

     // sign the claim
     const customSigner = new IdentitySDK.SignerModule({
      publicKey: await _signer.getAddress(),
      signMessage: _signer.signMessage.bind(_signer)
  });
  await claim.sign(customSigner);
  console.log(id)*/
  //const identity = new IdentitySDK.Identity(id,_signer); // Create the Identity Object
  //console.log(await identity.getKey(   ethers.utils.keccak256( ethers.utils.defaultAbiCoder.encode(['address'], [claimsIssuer]))))
  //console.log(await identity.getKey(  ethers.utils.keccak256( ethers.utils.defaultAbiCoder.encode(['address'], [await _signer.getAddress()]))))

console.log("Free")
  // emit the claim

  //console.log(OnChainId.contracts.ClaimIssuer.abi)
  const issuer = new ethers.Contract(claimsIssuer,OnChainId.contracts.ClaimIssuer.abi,_signer)
  console.log("Free")

  const cdata = ethers.utils.sha256(ethers.utils.toUtf8Bytes(data))
  console.log("Free")

  const scheme=ethers.utils.sha256(ethers.utils.toUtf8Bytes(JSON.stringify(claimJSON[topic])))
  console.log("Free")

  const topicBytes32 = ethers.utils.formatBytes32String(topic.toString());


  const signature = _signer.signMessage(ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address', 'uint256', 'bytes'], [id, topic, cdata])));



   //const tx = await identity.addClaim(topic, claim.scheme, claimsIssuer, claim.signature, claim.data, claim.uri, { _signer });
  //const tx = await identity.addClaim(claim.topic, claim.scheme, claim.issuer, claim.signature, claim.data, claim.uri, { _signer });
  const tx = await issuer.addClaim(topic, scheme, claimsIssuer, signature, cdata, "http://www.eventslive101.com",{gasLimit:3000000});
  
  await tx.wait();
}


export const getClaims = async(signer:any,topic:number)=>{

  const id = await getIdentity(signer,await signer.getAddress());
  const identity = new IdentitySDK.Identity(id,signer); // Create the Identity Object
   console.log(await identity.getKeysByPurpose(IdentitySDK.utils.enums.KeyPurpose.CLAIM) )
   console.log(await identity.getClaimIdsByTopic(101010003000021))
   console.log(OnChainId.contracts.ClaimIssuer)

  const issuer = new ethers.Contract(claimsIssuer,OnChainId.contracts.ClaimIssuer.abi,_signer)
  console.log(await issuer.getKey(await _signer.getAddress() ))
   // 
}

export const validateClaim = async(signer:any,data:string,topic:number)=>{
  const id = await getIdentity(signer,await signer.getAddress());
 
  // prepare the claim
/*    const claim = new IdentitySDK.Claim({
        address: id,
        data: ethers.utils.sha256(ethers.utils.toUtf8Bytes(data)),
        issuer: claimsIssuer,
        emissionDate: Date.now(),
        scheme: ethers.utils.sha256(ethers.utils.toUtf8Bytes(JSON.stringify(claimJSON[topic]))),
        topic: topic,
        uri:"http://www.eventslive101.com"
    });
    console.log(claim)

     // sign the claim
     const customSigner = new IdentitySDK.SignerModule({
      publicKey: await _signer.getAddress(),
      signMessage: _signer.signMessage.bind(_signer)
  });
  await claim.sign(customSigner);
  const identity = new IdentitySDK.Identity(id,signer); // Create the Identity Object
console.log("Free")
  // emit the claim
*/
  console.log(OnChainId.contracts.ClaimIssuer.abi)
  const issuer = new ethers.Contract(claimsIssuer,OnChainId.contracts.ClaimIssuer.abi,_signer)

  // const tx = await identity.addClaim(topic, claim.scheme, claimsIssuer, claim.signature, claim.data, claim.uri, { _signer });
  //const tx = await identity.addClaim(claim.topic, claim.scheme, claim.issuer, claim.signature, claim.data, claim.uri, { _signer });
  //const tx = await issuer.addClaim(topic, claim.scheme, claimsIssuer, claim.signature, claim.data, claim.uri,{gasLimit:3000000});
 //console.log(claim)
 const cdata = ethers.utils.sha256(ethers.utils.toUtf8Bytes(data))
  const scheme=ethers.utils.sha256(ethers.utils.toUtf8Bytes(JSON.stringify(claimJSON[topic])))
  const topicBytes32 = ethers.utils.formatBytes32String(topic.toString());

  const signature = _signer.signMessage(ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address', 'uint256', 'bytes'], [id, topic, cdata])));


  const tx = await issuer.isClaimValid(claimsIssuer,topic,cdata,signature);
 console.log(tx)
  //await tx.wait();
  
}

export const addAgent = async(signer:any,address:string)=>{
  const idRegistry = new ethers.Contract(identityRegistry,identityRegistryABI,signer)
///  await idRegistry.addAgent(address);
  const idRegistryStorage = new ethers.Contract(identityRegistryStorage,identityRegistryStorageABI,signer)
  //await idRegistryStorage.addAgent(identityRegistry)
  console.log(await idRegistryStorage.addAgent(identityRegistry)) 
}
export const registerIdentity =async (signer:any,address:string)=>{
  const id = await getIdentity(signer,address);
  console.log(id)
  const idRegistry = new ethers.Contract(identityRegistry,identityRegistryABI,signer)
   await idRegistry.registerIdentity(address,id,780)


}


export const isVerified = async(signer:any,address:string)=>{
  const idRegistry = new ethers.Contract(identityRegistry,identityRegistryABI,signer)
  return await idRegistry.isVerified(address);
}

export const getTopics = async(signer:any)=>{
  const ctRegistry = new ethers.Contract(claimTopicsRegistry,claimTopicsRegistryABI,signer)
  //await ctRegistry.addClaimTopic(1) //KYC
  
  return await ctRegistry.getClaimTopics();
}


export const addTrustedIssuer = async(signer:any)=>{
  const tiRegistry = new ethers.Contract(trustedIssuersRegistry,trustedIssuersRegistryABI,signer)
  //await tiRegistry.addTrustedIssuer(claimsIssuer,[1])
 return await tiRegistry.getTrustedIssuerClaimTopics(claimsIssuer);
}




