// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";


/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract DestinationMinter is CCIPReceiver {


    event MintCallSuccessfull();
    event MessageReceived(
    bytes32 indexed messageId, // The unique ID of the message.
    uint64 indexed sourceChainSelector, // The chain selector of the source chain.
    address sender, // The address of the sender from the source chain.
    address tokenAddress // The borrower EOA. Should be a depositor.
    
  );

    constructor(address router) CCIPReceiver(router) {
    
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        
        bytes32 messageId = message.messageId; // fetch the messageId
        uint64 sourceChainSelector = message.sourceChainSelector; // fetch the source chain identifier (aka selector)
        address sender = abi.decode(message.sender, (address)); // abi-decoding of the sender address
        Client.EVMTokenAmount[] memory tokenAmounts = message.destTokenAmounts;
        address token = tokenAmounts[0].token;
        (bool success, ) = token.call(message.data);
        require(success);
        emit MessageReceived(messageId, sourceChainSelector, sender,  tokenAmounts[0].token);
    }
}