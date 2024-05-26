export const identityGateway = '0x540Bb4Cb0B404ba3535875192912c9786208AC79' 
export const identityGatewayABI =[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "idFactoryAddress",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "signersToApprove",
        "type": "address[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "ExpiredSignature",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "RevokedSignature",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "SignatureAlreadyRevoked",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "SignatureNotRevoked",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "SignerAlreadyApproved",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "SignerAlreadyNotApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TooManySigners",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "UnapprovedSigner",
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
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "SignatureApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "SignatureRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "SignerApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "SignerRevoked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "approveSignature",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "approveSigner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "approvedSigners",
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
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "callFactory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "identityOwner",
        "type": "address"
      }
    ],
    "name": "deployIdentityForWallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "identityOwner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "salt",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "signatureExpiry",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "deployIdentityWithSalt",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "identityOwner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "salt",
        "type": "string"
      },
      {
        "internalType": "bytes32[]",
        "name": "managementKeys",
        "type": "bytes32[]"
      },
      {
        "internalType": "uint256",
        "name": "signatureExpiry",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "deployIdentityWithSaltAndManagementKeys",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "idFactory",
    "outputs": [
      {
        "internalType": "contract IdFactory",
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
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "revokeSignature",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "revokeSigner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "revokedSignatures",
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
        "name": "newOwner",
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
export const claimsIssuer = '0x9535C4c184bE5627FF077079215d1bcdfE9352e2';
export const identityFactoryAddress = "0x6bBE8A0843D76a4DfC35Da19095515741D3D8833"
export const trexfactoryAddress ="0xB418C454D6B87361168d98D7E0383EeCaFc64cC4"//"0x6bBE8A0843D76a4DfC35Da19095515741D3D8833"//0x540Bb4Cb0B404ba3535875192912c9786208AC79//"0xD2309Ad7E1c211CDf9014aD0B1c4d222535B81aa"//"0xB418C454D6B87361168d98D7E0383EeCaFc64cC4"//'0x6bBE8A0843D76a4DfC35Da19095515741D3D8833';// "0xB418C454D6B87361168d98D7E0383EeCaFc64cC4"
export const trexfactoryABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementationAuthority_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "idFactory_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "Deployed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_idFactory",
        "type": "address"
      }
    ],
    "name": "IdFactorySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_implementationAuthority",
        "type": "address"
      }
    ],
    "name": "ImplementationAuthoritySet",
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
        "name": "_token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_ir",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_irs",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_tir",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_ctr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_mc",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "_salt",
        "type": "string"
      }
    ],
    "name": "TREXSuiteDeployed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_salt",
        "type": "string"
      },
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
    "inputs": [],
    "name": "getIdFactory",
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
    "name": "getImplementationAuthority",
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
        "internalType": "string",
        "name": "_salt",
        "type": "string"
      }
    ],
    "name": "getToken",
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
        "name": "_contract",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "recoverContractOwnership",
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
        "name": "idFactory_",
        "type": "address"
      }
    ],
    "name": "setIdFactory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementationAuthority_",
        "type": "address"
      }
    ],
    "name": "setImplementationAuthority",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "tokenDeployed",
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


export const CountryRestrictModuleBytecode="0x60a06040523060805234801561001457600080fd5b50608051611dad61004c6000396000818161092c0152818161096c01528181610b9201528181610bd20152610c650152611dad6000f3fe6080604052600436106101355760003560e01c80634f1ef286116100ab5780638da5cb5b1161006f5780638da5cb5b146103a7578063bcc21053146103cf578063bdf9a07e146103f0578063e6f5e80714610410578063f104a8c9146102a1578063f2fde38b1461042457600080fd5b80634f1ef2861461032757806352d1902d1461033a5780636aae7b261461035d578063715018a61461037d5780638129fc1c1461039257600080fd5b80632cb7e1ec116100fd5780632cb7e1ec1461021557806330236f4a146102355780633659cfe614610281578063372491a2146102a15780634a932544146102c15780634cf4d295146102e157600080fd5b8063013b7ce41461013a5780630333ce241461016f5780630694a5fb1461019157806306fdde03146101b1578063249c981d146101f5575b600080fd5b34801561014657600080fd5b5061015a610155366004611820565b610444565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5061018f61018a366004611883565b61049c565b005b34801561019d57600080fd5b5061018f6101ac3660046118a0565b6105b3565b3480156101bd57600080fd5b506040805180820182526015815274436f756e74727952657374726963744d6f64756c6560581b6020820152905161016691906118e1565b34801561020157600080fd5b5061018f610210366004611914565b6106ca565b34801561022157600080fd5b5061018f610230366004611989565b6108e3565b34801561024157600080fd5b5061015a6102503660046119ca565b6001600160a01b038216600090815260c96020908152604080832061ffff8516845290915290205460ff1692915050565b34801561028d57600080fd5b5061018f61029c3660046118a0565b610922565b3480156102ad57600080fd5b5061018f6102bc366004611a03565b610a01565b3480156102cd57600080fd5b5061018f6102dc3660046118a0565b610a45565b3480156102ed57600080fd5b5061015a6102fc3660046118a0565b6001600160a01b03166000908152600080516020611d58833981519152602052604090205460ff1690565b61018f610335366004611a45565b610b88565b34801561034657600080fd5b5061034f610c58565b604051908152602001610166565b34801561036957600080fd5b5061018f610378366004611883565b610d0b565b34801561038957600080fd5b5061018f610e0b565b34801561039e57600080fd5b5061018f610e1f565b3480156103b357600080fd5b506033546040516001600160a01b039091168152602001610166565b3480156103db57600080fd5b5061015a6103ea3660046118a0565b50600190565b3480156103fc57600080fd5b5061018f61040b366004611914565b610f2f565b34801561041c57600080fd5b50600161015a565b34801561043057600080fd5b5061018f61043f3660046118a0565b611145565b60008061045183866111bb565b6001600160a01b038416600090815260c96020908152604080832061ffff8516845290915290205490915060ff161561048e576000915050610494565b60019150505b949350505050565b336000908152600080516020611d58833981519152602081905260409091205460ff166104e45760405162461bcd60e51b81526004016104db90611b09565b60405180910390fd5b33600090815260c96020908152604080832061ffff8616845290915290205460ff16156105535760405162461bcd60e51b815260206004820152601a60248201527f636f756e74727920616c7265616479207265737472696374656400000000000060448201526064016104db565b33600081815260c96020908152604080832061ffff871680855290835292819020805460ff19166001179055519182527f5e0addf626d7d7091ab7aebf34682c3203384648734760b24921e31ddcec0bb591015b60405180910390a25050565b336000908152600080516020611d58833981519152602081905260409091205460ff166105f25760405162461bcd60e51b81526004016104db90611b09565b600080516020611d588339815191526001600160a01b0383166106575760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016104db565b336001600160a01b0384161461067f5760405162461bcd60e51b81526004016104db90611b40565b6001600160a01b038316600081815260208390526040808220805460ff19169055517f408b49d9be1c914c52a0227e18a077e5a892dddf32a26cfa94a5d9708fad77189190a2505050565b336000908152600080516020611d58833981519152602081905260409091205460ff166107095760405162461bcd60e51b81526004016104db90611b09565b60c3821061076e5760405162461bcd60e51b815260206004820152602c60248201527f6d6178696d756d203139352063616e20626520756e726573747269637465642060448201526b0d2dc40dedcca40c4c2e8c6d60a31b60648201526084016104db565b60005b828110156108dd5733600090815260c9602052604081209085858481811061079b5761079b611b81565b90506020020160208101906107b09190611883565b61ffff16815260208101919091526040016000205460ff1615156001146108125760405162461bcd60e51b815260206004820152601660248201527518dbdd5b9d1c9e481b9bdd081c995cdd1c9a58dd195960521b60448201526064016104db565b33600090815260c9602052604081208186868581811061083457610834611b81565b90506020020160208101906108499190611883565b61ffff1681526020810191909152604001600020805460ff1916911515919091179055337ffb8bb575200aa114265a31c7d8ebeb4e395bd3cd9d0914c4bfa2a511d2011a7a8585848181106108a0576108a0611b81565b90506020020160208101906108b59190611883565b60405161ffff909116815260200160405180910390a2806108d581611b97565b915050610771565b50505050565b336000908152600080516020611d58833981519152602081905260409091205460ff166108dd5760405162461bcd60e51b81526004016104db90611b09565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361096a5760405162461bcd60e51b81526004016104db90611bbe565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109b3600080516020611d11833981519152546001600160a01b031690565b6001600160a01b0316146109d95760405162461bcd60e51b81526004016104db90611c0a565b6109e2816112f3565b604080516000808252602082019092526109fe918391906112fb565b50565b336000908152600080516020611d58833981519152602081905260409091205460ff16610a405760405162461bcd60e51b81526004016104db90611b09565b505050565b600080516020611d588339815191526001600160a01b038216610aaa5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016104db565b6001600160a01b03821660009081526020829052604090205460ff1615610b135760405162461bcd60e51b815260206004820152601860248201527f636f6d706c69616e636520616c726561647920626f756e64000000000000000060448201526064016104db565b336001600160a01b03831614610b3b5760405162461bcd60e51b81526004016104db90611b40565b6001600160a01b038216600081815260208390526040808220805460ff19166001179055517f1f7b76c58fb697eb53c6c7c1becb96911516a136e24d7ced386b2355358b75a39190a25050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610bd05760405162461bcd60e51b81526004016104db90611bbe565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c19600080516020611d11833981519152546001600160a01b031690565b6001600160a01b031614610c3f5760405162461bcd60e51b81526004016104db90611c0a565b610c48826112f3565b610c54828260016112fb565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cf85760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016104db565b50600080516020611d1183398151915290565b336000908152600080516020611d58833981519152602081905260409091205460ff16610d4a5760405162461bcd60e51b81526004016104db90611b09565b33600090815260c96020908152604080832061ffff8616845290915290205460ff161515600114610db65760405162461bcd60e51b815260206004820152601660248201527518dbdd5b9d1c9e481b9bdd081c995cdd1c9a58dd195960521b60448201526064016104db565b33600081815260c96020908152604080832061ffff871680855290835292819020805460ff19169055519182527ffb8bb575200aa114265a31c7d8ebeb4e395bd3cd9d0914c4bfa2a511d2011a7a91016105a7565b610e13611466565b610e1d60006114c0565b565b600054610100900460ff1615808015610e3f5750600054600160ff909116105b80610e595750303b158015610e59575060005460ff166001145b610ebc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104db565b6000805460ff191660011790558015610edf576000805461ff0019166101001790555b610ee7611512565b80156109fe576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b336000908152600080516020611d58833981519152602081905260409091205460ff16610f6e5760405162461bcd60e51b81526004016104db90611b09565b60c38210610fd15760405162461bcd60e51b815260206004820152602a60248201527f6d6178696d756d203139352063616e206265207265737472696374656420696e604482015269040dedcca40c4c2e8c6d60b31b60648201526084016104db565b60005b828110156108dd5733600090815260c96020526040812090858584818110610ffe57610ffe611b81565b90506020020160208101906110139190611883565b61ffff16815260208101919091526040016000205460ff16156110785760405162461bcd60e51b815260206004820152601a60248201527f636f756e74727920616c7265616479207265737472696374656400000000000060448201526064016104db565b33600090815260c96020526040812060019186868581811061109c5761109c611b81565b90506020020160208101906110b19190611883565b61ffff1681526020810191909152604001600020805460ff1916911515919091179055337f5e0addf626d7d7091ab7aebf34682c3203384648734760b24921e31ddcec0bb585858481811061110857611108611b81565b905060200201602081019061111d9190611883565b60405161ffff909116815260200160405180910390a28061113d81611b97565b915050610fd4565b61114d611466565b6001600160a01b0381166111b25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104db565b6109fe816114c0565b6000826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121f9190611c56565b6001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561125c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112809190611c56565b604051637e42683b60e01b81526001600160a01b0384811660048301529190911690637e42683b90602401602060405180830381865afa1580156112c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ec9190611c73565b9392505050565b6109fe611466565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561132e57610a4083611549565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611388575060408051601f3d908101601f1916820190925261138591810190611c90565b60015b6113eb5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016104db565b600080516020611d11833981519152811461145a5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016104db565b50610a408383836115e5565b6033546001600160a01b03163314610e1d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104db565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166115395760405162461bcd60e51b81526004016104db90611ca9565b61154161160a565b610e1d611639565b6001600160a01b0381163b6115b65760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104db565b600080516020611d1183398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6115ee83611660565b6000825111806115fb5750805b15610a40576108dd83836116a0565b600054610100900460ff166116315760405162461bcd60e51b81526004016104db90611ca9565b610e1d6116c5565b600054610100900460ff16610e1d5760405162461bcd60e51b81526004016104db90611ca9565b61166981611549565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606112ec8383604051806060016040528060278152602001611d31602791396116f5565b600054610100900460ff166116ec5760405162461bcd60e51b81526004016104db90611ca9565b610e1d336114c0565b6060600080856001600160a01b0316856040516117129190611cf4565b600060405180830381855af49150503d806000811461174d576040519150601f19603f3d011682016040523d82523d6000602084013e611752565b606091505b50915091506117638683838761176d565b9695505050505050565b606083156117dc5782516000036117d5576001600160a01b0385163b6117d55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104db565b5081610494565b61049483838151156117f15781518083602001fd5b8060405162461bcd60e51b81526004016104db91906118e1565b6001600160a01b03811681146109fe57600080fd5b6000806000806080858703121561183657600080fd5b84356118418161180b565b935060208501356118518161180b565b92506040850135915060608501356118688161180b565b939692955090935050565b61ffff811681146109fe57600080fd5b60006020828403121561189557600080fd5b81356112ec81611873565b6000602082840312156118b257600080fd5b81356112ec8161180b565b60005b838110156118d85781810151838201526020016118c0565b50506000910152565b60208152600082518060208401526119008160408501602087016118bd565b601f01601f19169190910160400192915050565b6000806020838503121561192757600080fd5b823567ffffffffffffffff8082111561193f57600080fd5b818501915085601f83011261195357600080fd5b81358181111561196257600080fd5b8660208260051b850101111561197757600080fd5b60209290920196919550909350505050565b60008060006060848603121561199e57600080fd5b83356119a98161180b565b925060208401356119b98161180b565b929592945050506040919091013590565b600080604083850312156119dd57600080fd5b82356119e88161180b565b915060208301356119f881611873565b809150509250929050565b60008060408385031215611a1657600080fd5b8235611a218161180b565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611a5857600080fd5b8235611a638161180b565b9150602083013567ffffffffffffffff80821115611a8057600080fd5b818501915085601f830112611a9457600080fd5b813581811115611aa657611aa6611a2f565b604051601f8201601f19908116603f01168101908382118183101715611ace57611ace611a2f565b81604052828152886020848701011115611ae757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6020808252601e908201527f6f6e6c7920626f756e6420636f6d706c69616e63652063616e2063616c6c0000604082015260600190565b60208082526021908201527f6f6e6c7920636f6d706c69616e636520636f6e74726163742063616e2063616c6040820152601b60fa1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060018201611bb757634e487b7160e01b600052601160045260246000fd5b5060010190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b600060208284031215611c6857600080fd5b81516112ec8161180b565b600060208284031215611c8557600080fd5b81516112ec81611873565b600060208284031215611ca257600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008251611d068184602087016118bd565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564f6cc97de1266c180cd39f3b311632644143ce7873d2927755382ad4b39e8ae00a2646970667358221220cab5f23fe4fea8a602157711dc024e7b16023274833bb703a4036893ff3c208e64736f6c63430008110033"
 export const CountryRestrictModule = "0x9cea45a6f298bB11C79df0E813D4fea4305AdBCc"
export const CountryRestrictModuleABI =[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_country",
        "type": "uint16"
      }
    ],
    "name": "AddedRestrictedCountry",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "ComplianceBound",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "ComplianceUnbound",
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
        "name": "_compliance",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_country",
        "type": "uint16"
      }
    ],
    "name": "RemovedRestrictedCountry",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_country",
        "type": "uint16"
      }
    ],
    "name": "addCountryRestriction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16[]",
        "name": "_countries",
        "type": "uint16[]"
      }
    ],
    "name": "batchRestrictCountries",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16[]",
        "name": "_countries",
        "type": "uint16[]"
      }
    ],
    "name": "batchUnrestrictCountries",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "bindCompliance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "canComplianceBind",
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
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "isComplianceBound",
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
        "name": "_compliance",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "_country",
        "type": "uint16"
      }
    ],
    "name": "isCountryRestricted",
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
    "name": "isPlugAndPlay",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "moduleBurnAction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "moduleCheck",
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
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "moduleMintAction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "moduleTransferAction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
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
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_country",
        "type": "uint16"
      }
    ],
    "name": "removeCountryRestriction",
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
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "unbindCompliance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      }
    ],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]

export const complianceProxy= "0xCAD35d02dFFb156A698D8bC0551C2b40040bcFA5"

export const tokenABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "_isFrozen",
        "type": "bool"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "AddressFrozen",
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
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "ComplianceAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_identityRegistry",
        "type": "address"
      }
    ],
    "name": "IdentityRegistryAdded",
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
        "indexed": false,
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_lostWallet",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_newWallet",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_investorOnchainID",
        "type": "address"
      }
    ],
    "name": "RecoverySuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "TokensFrozen",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "TokensUnfrozen",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "_newName",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "_newSymbol",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "_newDecimals",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_newVersion",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_newOnchainID",
        "type": "address"
      }
    ],
    "name": "UpdatedTokenInformation",
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
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
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
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
    "name": "balanceOf",
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
        "internalType": "address[]",
        "name": "_userAddresses",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchBurn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_fromList",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "_toList",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchForcedTransfer",
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
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchFreezePartialTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_toList",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchMint",
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
        "internalType": "bool[]",
        "name": "_freeze",
        "type": "bool[]"
      }
    ],
    "name": "batchSetAddressFrozen",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_toList",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchTransfer",
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
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchUnfreezePartialTokens",
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
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "compliance",
    "outputs": [
      {
        "internalType": "contract IModularCompliance",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "forcedTransfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "freezePartialTokens",
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
    "name": "getFrozenTokens",
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
    "inputs": [],
    "name": "identityRegistry",
    "outputs": [
      {
        "internalType": "contract IIdentityRegistry",
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
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_identityRegistry",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_decimals",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "_onchainID",
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
    "name": "isFrozen",
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
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "onchainID",
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
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
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
        "name": "_lostWallet",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_newWallet",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_investorOnchainID",
        "type": "address"
      }
    ],
    "name": "recoveryAddress",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
        "name": "_userAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_freeze",
        "type": "bool"
      }
    ],
    "name": "setAddressFrozen",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_compliance",
        "type": "address"
      }
    ],
    "name": "setCompliance",
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
    "name": "setIdentityRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "setName",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_onchainID",
        "type": "address"
      }
    ],
    "name": "setOnchainID",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      }
    ],
    "name": "setSymbol",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
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
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "unfreezePartialTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
]
export const ModuleProxyABI= [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]
export const ModularComplianceABI= [
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
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "target",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes4",
        "name": "selector",
        "type": "bytes4"
      }
    ],
    "name": "ModuleInteraction",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "ModuleRemoved",
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
        "indexed": false,
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "TokenBound",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "TokenUnbound",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "addModule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "bindToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "callData",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "callModuleFunction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "canTransfer",
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
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "created",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "destroyed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getModules",
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
    "inputs": [],
    "name": "getTokenBound",
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
    "name": "init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "isModuleBound",
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
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "removeModule",
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
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferred",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "unbindToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


export const ModularComplianceBytecode ="0x608060405234801561001057600080fd5b506115f3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063e1c7392a11610066578063e1c7392a14610220578063e46638e614610228578063efb22d331461023b578063f2fde38b1461024e57600080fd5b80638da5cb5b146101ab578063a0632461146101bc578063a446d49f146101cf578063b2494df31461020b57600080fd5b80636a3edf28116100d35780636a3edf2814610153578063715018a61461017d5780638baf29b4146101855780638d2ea7721461019857600080fd5b80631ed86f19146101055780633ff5aa021461011a57806340db3b501461012d5780635f8dead314610140575b600080fd5b6101186101133660046112f2565b610261565b005b6101186101283660046112f2565b610570565b61011861013b3660046112f2565b61067b565b61011861014e36600461130d565b6107c3565b6065546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b61011861090c565b610118610193366004611337565b610920565b6101186101a636600461130d565b610a94565b6033546001600160a01b0316610160565b6101186101ca3660046112f2565b610bd7565b6101fb6101dd3660046112f2565b6001600160a01b031660009081526067602052604090205460ff1690565b6040519015158152602001610174565b610213610e0f565b6040516101749190611373565b610118610e71565b6101fb610236366004611337565b610f7e565b6101186102493660046113c0565b61105b565b61011861025c3660046112f2565b611141565b6102696111b7565b6001600160a01b0381166102985760405162461bcd60e51b815260040161028f90611441565b60405180910390fd5b6001600160a01b03811660009081526067602052604090205460ff16156102f85760405162461bcd60e51b81526020600482015260146024820152731b5bd91d5b1948185b1c9958591e48189bdd5b9960621b604482015260640161028f565b6066546018101561034b5760405162461bcd60e51b815260206004820152601f60248201527f63616e6e6f7420616464206d6f7265207468616e203235206d6f64756c657300604482015260640161028f565b6000819050806001600160a01b031663e6f5e8076040518163ffffffff1660e01b8152600401602060405180830381865afa15801561038e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b29190611478565b6104875760405163bcc2105360e01b81523060048201526001600160a01b0382169063bcc2105390602401602060405180830381865afa1580156103fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041e9190611478565b6104875760405162461bcd60e51b815260206004820152603460248201527f636f6d706c69616e6365206973206e6f74207375697461626c6520666f722062604482015273696e64696e6720746f20746865206d6f64756c6560601b606482015260840161028f565b6040516312a4c95160e21b81523060048201526001600160a01b03821690634a93254490602401600060405180830381600087803b1580156104c857600080fd5b505af11580156104dc573d6000803e3d6000fd5b50506066805460018082019092557f46501879b8ca8525e8c2fd519e2fbfcfa2ebea26501294aa02cbfcfb12e943540180546001600160a01b0319166001600160a01b038716908117909155600081815260676020526040808220805460ff191690941790935591519093507fead6a006345da1073a106d5f32372d2d2204f46cb0b4bca8f5ebafcbbed12b8a9250a25050565b336105836033546001600160a01b031690565b6001600160a01b031614806105b457506065546001600160a01b03161580156105b45750336001600160a01b038216145b6106005760405162461bcd60e51b815260206004820152601c60248201527f6f6e6c79206f776e6572206f7220746f6b656e2063616e2063616c6c00000000604482015260640161028f565b6001600160a01b0381166106265760405162461bcd60e51b815260040161028f90611441565b606580546001600160a01b0319166001600160a01b0383169081179091556040519081527f2de35142b19ed5a07796cf30791959c592018f70b1d2d7c460eef8ffe713692b906020015b60405180910390a150565b3361068e6033546001600160a01b031690565b6001600160a01b031614806106ab5750336001600160a01b038216145b6106f75760405162461bcd60e51b815260206004820152601c60248201527f6f6e6c79206f776e6572206f7220746f6b656e2063616e2063616c6c00000000604482015260640161028f565b6065546001600160a01b038281169116146107545760405162461bcd60e51b815260206004820152601760248201527f5468697320746f6b656e206973206e6f7420626f756e64000000000000000000604482015260640161028f565b6001600160a01b03811661077a5760405162461bcd60e51b815260040161028f90611441565b606580546001600160a01b03191690556040516001600160a01b03821681527f28a4ca7134a3b3f9aff286e79ad3daadb4a06d1b43d037a3a98bdc074edd9b7a90602001610670565b6065546001600160a01b031633146107ed5760405162461bcd60e51b815260040161028f9061149a565b6001600160a01b0382166108135760405162461bcd60e51b815260040161028f90611441565b600081116108635760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420617267756d656e74202d206e6f2076616c7565206d696e74604482015260640161028f565b60665460005b81811015610906576066818154811061088457610884611504565b60009182526020909120015460405163f104a8c960e01b81526001600160a01b038681166004830152602482018690529091169063f104a8c990604401600060405180830381600087803b1580156108db57600080fd5b505af11580156108ef573d6000803e3d6000fd5b5050505080806108fe90611530565b915050610869565b50505050565b6109146111b7565b61091e6000611211565b565b6065546001600160a01b0316331461094a5760405162461bcd60e51b815260040161028f9061149a565b6001600160a01b0383161580159061096a57506001600160a01b03821615155b6109865760405162461bcd60e51b815260040161028f90611441565b600081116109e25760405162461bcd60e51b8152602060048201526024808201527f696e76616c696420617267756d656e74202d206e6f2076616c7565207472616e60448201526339b332b960e11b606482015260840161028f565b60665460005b81811015610a8d5760668181548110610a0357610a03611504565b600091825260209091200154604051630b2df87b60e21b81526001600160a01b03878116600483015286811660248301526044820186905290911690632cb7e1ec90606401600060405180830381600087803b158015610a6257600080fd5b505af1158015610a76573d6000803e3d6000fd5b505050508080610a8590611530565b9150506109e8565b5050505050565b6065546001600160a01b03163314610abe5760405162461bcd60e51b815260040161028f9061149a565b6001600160a01b038216610ae45760405162461bcd60e51b815260040161028f90611441565b60008111610b345760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420617267756d656e74202d206e6f2076616c7565206275726e604482015260640161028f565b60665460005b818110156109065760668181548110610b5557610b55611504565b600091825260209091200154604051631b9248d160e11b81526001600160a01b038681166004830152602482018690529091169063372491a290604401600060405180830381600087803b158015610bac57600080fd5b505af1158015610bc0573d6000803e3d6000fd5b505050508080610bcf90611530565b915050610b3a565b610bdf6111b7565b6001600160a01b038116610c055760405162461bcd60e51b815260040161028f90611441565b6001600160a01b03811660009081526067602052604090205460ff16610c605760405162461bcd60e51b815260206004820152601060248201526f1b5bd91d5b19481b9bdd08189bdd5b9960821b604482015260640161028f565b60665460005b81811015610e0a57826001600160a01b031660668281548110610c8b57610c8b611504565b6000918252602090912001546001600160a01b031603610df857604051630694a5fb60e01b81523060048201526001600160a01b03841690630694a5fb90602401600060405180830381600087803b158015610ce657600080fd5b505af1158015610cfa573d6000803e3d6000fd5b505050506066600183610d0d9190611549565b81548110610d1d57610d1d611504565b600091825260209091200154606680546001600160a01b039092169183908110610d4957610d49611504565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506066805480610d8857610d8861155c565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03851680835260679091526040808320805460ff191690555190917f0a1ee69f55c33d8467c69ca59ce2007a737a88603d75392972520bf67cb513b891a2505050565b80610e0281611530565b915050610c66565b505050565b60606066805480602002602001604051908101604052809291908181526020018280548015610e6757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e49575b5050505050905090565b600054610100900460ff1615808015610e915750600054600160ff909116105b80610eab5750303b158015610eab575060005460ff166001145b610f0e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161028f565b6000805460ff191660011790558015610f31576000805461ff0019166101001790555b610f39611263565b8015610f7b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610670565b50565b606654600090815b8181101561104d5760668181548110610fa157610fa1611504565b600091825260209091200154604051624edf3960e21b81526001600160a01b0388811660048301528781166024830152604482018790523060648301529091169063013b7ce490608401602060405180830381865afa158015611008573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102c9190611478565b61103b57600092505050611054565b8061104581611530565b915050610f86565b5060019150505b9392505050565b6110636111b7565b6001600160a01b03811660009081526067602052604090205460ff166110cb5760405162461bcd60e51b815260206004820152601960248201527f63616c6c206f6e6c79206f6e20626f756e64206d6f64756c6500000000000000604482015260640161028f565b6040518284823760008084836000865af16110ea573d6000803e3d6000fd5b50806001600160a01b03167f20d79de70adcc6e9353d8a9a5646b46dc352710d0a310b1ad1f67faeca7ef8916111208585611292565b6040516001600160e01b0319909116815260200160405180910390a2505050565b6111496111b7565b6001600160a01b0381166111ae5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161028f565b610f7b81611211565b6033546001600160a01b0316331461091e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161028f565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661128a5760405162461bcd60e51b815260040161028f90611572565b61091e6112a6565b6000600482106112a0575081355b92915050565b600054610100900460ff166112cd5760405162461bcd60e51b815260040161028f90611572565b61091e33611211565b80356001600160a01b03811681146112ed57600080fd5b919050565b60006020828403121561130457600080fd5b611054826112d6565b6000806040838503121561132057600080fd5b611329836112d6565b946020939093013593505050565b60008060006060848603121561134c57600080fd5b611355846112d6565b9250611363602085016112d6565b9150604084013590509250925092565b6020808252825182820181905260009190848201906040850190845b818110156113b45783516001600160a01b03168352928401929184019160010161138f565b50909695505050505050565b6000806000604084860312156113d557600080fd5b833567ffffffffffffffff808211156113ed57600080fd5b818601915086601f83011261140157600080fd5b81358181111561141057600080fd5b87602082850101111561142257600080fd5b60209283019550935061143891860190506112d6565b90509250925092565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b60006020828403121561148a57600080fd5b8151801515811461105457600080fd5b60208082526044908201527f6572726f72203a20746869732061646472657373206973206e6f74206120746f60408201527f6b656e20626f756e6420746f2074686520636f6d706c69616e636520636f6e746060820152631c9858dd60e21b608082015260a00190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016115425761154261151a565b5060010190565b818103818111156112a0576112a061151a565b634e487b7160e01b600052603160045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212207a87933edce4ed573fc47049834ded07b36c5d9072d3e427f9e71883fd5a556e64736f6c63430008110033"
export const ModuleProxyBytecode = "0x608060405234801561001057600080fd5b5060405161073838038061073883398101604081905261002f9161032a565b818161003d82826000610046565b50505050610447565b61004f8361007c565b60008251118061005c5750805b156100775761007583836100bc60201b6100291760201c565b505b505050565b610085816100e8565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100e18383604051806060016040528060278152602001610711602791396101ba565b9392505050565b6100fb8161023360201b6100551760201c565b6101625760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101997f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61024260201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101d791906103f8565b600060405180830381855af49150503d8060008114610212576040519150601f19603f3d011682016040523d82523d6000602084013e610217565b606091505b50909250905061022986838387610245565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102b45782516000036102ad576001600160a01b0385163b6102ad5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610159565b50816102be565b6102be83836102c6565b949350505050565b8151156102d65781518083602001fd5b8060405162461bcd60e51b81526004016101599190610414565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610321578181015183820152602001610309565b50506000910152565b6000806040838503121561033d57600080fd5b82516001600160a01b038116811461035457600080fd5b60208401519092506001600160401b038082111561037157600080fd5b818501915085601f83011261038557600080fd5b815181811115610397576103976102f0565b604051601f8201601f19908116603f011681019083821181831017156103bf576103bf6102f0565b816040528281528860208487010111156103d857600080fd5b6103e9836020830160208801610306565b80955050505050509250929050565b6000825161040a818460208701610306565b9190910192915050565b6020815260008251806020840152610433816040850160208701610306565b601f01601f19169190910160400192915050565b6102bb806104566000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025f602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100e0919061020f565b600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101318683838761013b565b9695505050505050565b606083156101af5782516000036101a8576001600160a01b0385163b6101a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101b9565b6101b983836101c1565b949350505050565b8151156101d15781518083602001fd5b8060405162461bcd60e51b815260040161019f919061022b565b60005b838110156102065781810151838201526020016101ee565b50506000910152565b600082516102218184602087016101eb565b9190910192915050565b602081526000825180602084015261024a8160408501602087016101eb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122005480bb831cd63043ad50fc8240c9afb2df0b3aeae8f728eceaab0f15036e7c764736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564"
  