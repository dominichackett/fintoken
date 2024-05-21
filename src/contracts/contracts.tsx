export const identityGateway = '0x540Bb4Cb0B404ba3535875192912c9786208AC79' 
export const claimsIssuer = '0x9535C4c184bE5627FF077079215d1bcdfE9352e2';
export const factoryAddress = '0x6bBE8A0843D76a4DfC35Da19095515741D3D8833';
export const identityRegistry ='0xe8f4f8C4bb816b1c2b93d0B14926BD499a9324a1'
export const identityRegistryABI =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "AgentAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "AgentRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "claimTopicsRegistry",
          "type": "address"
        }
      ],
      "name": "ClaimTopicsRegistrySet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "investorAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "country",
          "type": "uint16"
        }
      ],
      "name": "CountryUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "investorAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "identity",
          "type": "address"
        }
      ],
      "name": "IdentityRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "investorAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "identity",
          "type": "address"
        }
      ],
      "name": "IdentityRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identityStorage",
          "type": "address"
        }
      ],
      "name": "IdentityStorageSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "oldIdentity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "newIdentity",
          "type": "address"
        }
      ],
      "name": "IdentityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trustedIssuersRegistry",
          "type": "address"
        }
      ],
      "name": "TrustedIssuersRegistrySet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_userAddresses",
          "type": "address[]"
        },
        {
          "internalType": "contract IIdentity[]",
          "name": "_identities",
          "type": "address[]"
        },
        {
          "internalType": "uint16[]",
          "name": "_countries",
          "type": "uint16[]"
        }
      ],
      "name": "batchRegisterIdentity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "contains",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "deleteIdentity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "identity",
      "outputs": [
        {
          "internalType": "contract IIdentity",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "identityStorage",
      "outputs": [
        {
          "internalType": "contract IIdentityRegistryStorage",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_trustedIssuersRegistry",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_claimTopicsRegistry",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_identityStorage",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "investorCountry",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "isAgent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "isVerified",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "issuersRegistry",
      "outputs": [
        {
          "internalType": "contract ITrustedIssuersRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "contract IIdentity",
          "name": "_identity",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "_country",
          "type": "uint16"
        }
      ],
      "name": "registerIdentity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "removeAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_claimTopicsRegistry",
          "type": "address"
        }
      ],
      "name": "setClaimTopicsRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_identityRegistryStorage",
          "type": "address"
        }
      ],
      "name": "setIdentityRegistryStorage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_trustedIssuersRegistry",
          "type": "address"
        }
      ],
      "name": "setTrustedIssuersRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "topicsRegistry",
      "outputs": [
        {
          "internalType": "contract IClaimTopicsRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "_country",
          "type": "uint16"
        }
      ],
      "name": "updateCountry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "contract IIdentity",
          "name": "_identity",
          "type": "address"
        }
      ],
      "name": "updateIdentity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
export const identityRegistryStorage='0x1D5e3165fEFfF14B13F409Ef849c291c70fA2179'

export const identityRegistryStorageABI= [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "AgentAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "AgentRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "investorAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "country",
          "type": "uint16"
        }
      ],
      "name": "CountryModified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "oldIdentity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "newIdentity",
          "type": "address"
        }
      ],
      "name": "IdentityModified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identityRegistry",
          "type": "address"
        }
      ],
      "name": "IdentityRegistryBound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identityRegistry",
          "type": "address"
        }
      ],
      "name": "IdentityRegistryUnbound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "investorAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "identity",
          "type": "address"
        }
      ],
      "name": "IdentityStored",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "investorAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract IIdentity",
          "name": "identity",
          "type": "address"
        }
      ],
      "name": "IdentityUnstored",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "contract IIdentity",
          "name": "_identity",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "_country",
          "type": "uint16"
        }
      ],
      "name": "addIdentityToStorage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_identityRegistry",
          "type": "address"
        }
      ],
      "name": "bindIdentityRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "isAgent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "linkedIdentityRegistries",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "contract IIdentity",
          "name": "_identity",
          "type": "address"
        }
      ],
      "name": "modifyStoredIdentity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "_country",
          "type": "uint16"
        }
      ],
      "name": "modifyStoredInvestorCountry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "removeAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "removeIdentityFromStorage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "storedIdentity",
      "outputs": [
        {
          "internalType": "contract IIdentity",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "storedInvestorCountry",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_identityRegistry",
          "type": "address"
        }
      ],
      "name": "unbindIdentityRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export const claimTopicsRegistry='0x144C6449bb3F78dECd3a18156ce5238718e684ce'
export const claimTopicsRegistryABI= [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "claimTopic",
          "type": "uint256"
        }
      ],
      "name": "ClaimTopicAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "claimTopic",
          "type": "uint256"
        }
      ],
      "name": "ClaimTopicRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_claimTopic",
          "type": "uint256"
        }
      ],
      "name": "addClaimTopic",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getClaimTopics",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_claimTopic",
          "type": "uint256"
        }
      ],
      "name": "removeClaimTopic",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export const trustedIssuersRegistry= '0x25b7b934E5924130295D214E7b3d85Ae7F15feb8'
export const trustedIssuersRegistryABI =[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract IClaimIssuer",
          "name": "trustedIssuer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "claimTopics",
          "type": "uint256[]"
        }
      ],
      "name": "ClaimTopicsUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract IClaimIssuer",
          "name": "trustedIssuer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "claimTopics",
          "type": "uint256[]"
        }
      ],
      "name": "TrustedIssuerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract IClaimIssuer",
          "name": "trustedIssuer",
          "type": "address"
        }
      ],
      "name": "TrustedIssuerRemoved",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract IClaimIssuer",
          "name": "_trustedIssuer",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "_claimTopics",
          "type": "uint256[]"
        }
      ],
      "name": "addTrustedIssuer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IClaimIssuer",
          "name": "_trustedIssuer",
          "type": "address"
        }
      ],
      "name": "getTrustedIssuerClaimTopics",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTrustedIssuers",
      "outputs": [
        {
          "internalType": "contract IClaimIssuer[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "claimTopic",
          "type": "uint256"
        }
      ],
      "name": "getTrustedIssuersForClaimTopic",
      "outputs": [
        {
          "internalType": "contract IClaimIssuer[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_issuer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_claimTopic",
          "type": "uint256"
        }
      ],
      "name": "hasClaimTopic",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_issuer",
          "type": "address"
        }
      ],
      "name": "isTrustedIssuer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IClaimIssuer",
          "name": "_trustedIssuer",
          "type": "address"
        }
      ],
      "name": "removeTrustedIssuer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IClaimIssuer",
          "name": "_trustedIssuer",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "_claimTopics",
          "type": "uint256[]"
        }
      ],
      "name": "updateIssuerClaimTopics",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  
 export const trexGateway = '0xb03897b1a8b1960df600bbdc6c6aa76c3985385a'
 export const trexGatewayABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "factory",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "publicDeploymentStatus",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "lengthLimit",
        "type": "uint16"
      }
    ],
    "name": "BatchMaxLengthExceeded",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "DeployerAlreadyExists",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "DeployerDoesNotExist",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DeploymentFeesAlreadyDisabled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DeploymentFeesAlreadyEnabled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DiscountOutOfRange",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyAdminCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PublicCannotDeployOnBehalf",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PublicDeploymentAlreadyDisabled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PublicDeploymentAlreadyEnabled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PublicDeploymentsNotAllowed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_agent",
        "type": "address"
      }
    ],
    "name": "AgentAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_agent",
        "type": "address"
      }
    ],
    "name": "AgentRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "DeployerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "DeployerRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bool",
        "name": "isEnabled",
        "type": "bool"
      }
    ],
    "name": "DeploymentFeeEnabled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "feeToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "feeCollector",
        "type": "address"
      }
    ],
    "name": "DeploymentFeeSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "factory",
        "type": "address"
      }
    ],
    "name": "FactorySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "discount",
        "type": "uint16"
      }
    ],
    "name": "FeeDiscountApplied",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "requester",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "intendedOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "feeApplied",
        "type": "uint256"
      }
    ],
    "name": "GatewaySuiteDeploymentProcessed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bool",
        "name": "publicDeploymentStatus",
        "type": "bool"
      }
    ],
    "name": "PublicDeploymentStatusSet",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_agent",
        "type": "address"
      }
    ],
    "name": "addAgent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "addDeployer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "discount",
        "type": "uint16"
      }
    ],
    "name": "applyFeeDiscount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "deployers",
        "type": "address[]"
      }
    ],
    "name": "batchAddDeployer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "deployers",
        "type": "address[]"
      },
      {
        "internalType": "uint16[]",
        "name": "discounts",
        "type": "uint16[]"
      }
    ],
    "name": "batchApplyFeeDiscount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "decimals",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "irs",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ONCHAINID",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "irAgents",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "tokenAgents",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "complianceModules",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "complianceSettings",
            "type": "bytes[]"
          }
        ],
        "internalType": "struct ITREXFactory.TokenDetails[]",
        "name": "_tokenDetails",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256[]",
            "name": "claimTopics",
            "type": "uint256[]"
          },
          {
            "internalType": "address[]",
            "name": "issuers",
            "type": "address[]"
          },
          {
            "internalType": "uint256[][]",
            "name": "issuerClaims",
            "type": "uint256[][]"
          }
        ],
        "internalType": "struct ITREXFactory.ClaimDetails[]",
        "name": "_claimDetails",
        "type": "tuple[]"
      }
    ],
    "name": "batchDeployTREXSuite",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "deployers",
        "type": "address[]"
      }
    ],
    "name": "batchRemoveDeployer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "calculateFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "decimals",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "irs",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ONCHAINID",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "irAgents",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "tokenAgents",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "complianceModules",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "complianceSettings",
            "type": "bytes[]"
          }
        ],
        "internalType": "struct ITREXFactory.TokenDetails",
        "name": "_tokenDetails",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256[]",
            "name": "claimTopics",
            "type": "uint256[]"
          },
          {
            "internalType": "address[]",
            "name": "issuers",
            "type": "address[]"
          },
          {
            "internalType": "uint256[][]",
            "name": "issuerClaims",
            "type": "uint256[][]"
          }
        ],
        "internalType": "struct ITREXFactory.ClaimDetails",
        "name": "_claimDetails",
        "type": "tuple"
      }
    ],
    "name": "deployTREXSuite",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_isEnabled",
        "type": "bool"
      }
    ],
    "name": "enableDeploymentFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDeploymentFee",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "feeToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "feeCollector",
            "type": "address"
          }
        ],
        "internalType": "struct ITREXGateway.Fee",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFactory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPublicDeploymentStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_agent",
        "type": "address"
      }
    ],
    "name": "isAgent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "isDeployer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isDeploymentFeeEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_agent",
        "type": "address"
      }
    ],
    "name": "removeAgent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      }
    ],
    "name": "removeDeployer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_feeToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_feeCollector",
        "type": "address"
      }
    ],
    "name": "setDeploymentFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "factory",
        "type": "address"
      }
    ],
    "name": "setFactory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_isEnabled",
        "type": "bool"
      }
    ],
    "name": "setPublicDeploymentStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferFactoryOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]