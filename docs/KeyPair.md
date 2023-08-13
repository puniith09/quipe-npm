# KeyPair Module

The `key_pair.js` module is responsible for generating NEAR key pairs and account IDs for users who connect with a wallet like MetaMask.

## Usage

First, import the module:

```javascript
const { KeyPair } = require('decentralized-identity');
```

Then, create a new instance of the `KeyPair` class:

```javascript
const keyPair = new KeyPair();
```

You can now use the `generateKeyPair` method to generate a new key pair:

```javascript
const { publicKey, privateKey } = keyPair.generateKeyPair();
```

This method returns an object with `publicKey` and `privateKey` properties.

You can also generate a NEAR account ID with the `generateAccountId` method:

```javascript
const accountId = keyPair.generateAccountId();
```

This method returns a string representing the account ID.

## Methods

### generateKeyPair()

Generates a new key pair.

**Returns:** `{ publicKey: string, privateKey: string }`

### generateAccountId()

Generates a new NEAR account ID.

**Returns:** `string`