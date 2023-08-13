# Getting Started with Decentralized Identity SDK

This guide will help you get started with the Decentralized Identity SDK, a powerful tool for managing user identities and sessions using blockchain wallets via the NEAR protocol.

## Installation

First, install the SDK using npm:

```bash
npm install decentralized-identity
```

## Importing the SDK

Import the main SDK class in your JavaScript file:

```javascript
import { IdentitySDK } from 'decentralized-identity';
```

## Creating an Instance

Create a new instance of the SDK:

```javascript
const sdk = new IdentitySDK();
```

## Registering a User

To register a new user, use the `registerUser` method. You need to provide a wallet address and a public key:

```javascript
sdk.registerUser({
  walletAddress: '0x123',
  publicKey: 'abc'
});
```

## Authenticating a User

To authenticate a user, use the `authenticate` method. You need to provide a wallet signature:

```javascript
const session = sdk.authenticate({
  walletSignature: 'def'
});
```

## Session Management

You can start, end, and check the status of a session using the `startSession`, `endSession`, and `getSession` methods respectively:

```javascript
sdk.startSession();
sdk.endSession();
const sessionStatus = sdk.getSession();
```

For more detailed information, refer to the comprehensive JSDoc documentation in the `IdentitySDK.md` and `KeyPair.md` files.