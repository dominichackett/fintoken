import { ethers } from "ethers";


// Function to convert Ethereum address to a lowercase hexadecimal string without '0x' prefix
function toHexString(address) {
    return address.replace(/^0x/, '');
}
  
  
  // Function to generate salt
   export const generateSalt = (ownerAddress:any, tokenName:any)=> {
    // Convert owner address to hex string
    const ownerHex = toHexString(ownerAddress);
  
    
    // Concatenate the owner hex string with the token name
const concatenated = ownerAdd + tokenName;
console.log(concatenated)

// Encode the concatenated string using ethers.js (similar to abi.encodePacked in Solidity)
const salt = ethers.utils.hexlify (ethers.utils.toUtf8Bytes(concatenated))

    return salt;
  }