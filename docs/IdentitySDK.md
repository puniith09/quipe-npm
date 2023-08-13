# IdentitySDK

The IdentitySDK is a JavaScript SDK for managing user identities and sessions using blockchain wallets via a NEAR protocol smart contract.

## Installation

```bash
npm install decentralized-identity
```

## Usage

```javascript
import { IdentitySDK } from 'decentralized-identity';

const sdk = new IdentitySDK();

sdk.registerUser({
  walletAddress: '0x123',
  publicKey: 'abc' 
});

const session = sdk.authenticate({
  walletSignature: 'def' 
});
```

## API

### `registerUser({ walletAddress, publicKey })`

Registers a new user with the given wallet address and public key.

- `walletAddress` (String): The wallet address of the user.
- `publicKey` (String): The public key of the user.

### `authenticate({ walletSignature })`

Authenticates a user with the given wallet signature and starts a session.

- `walletSignature` (String): The wallet signature of the user.

### `startSession()`

Starts a new session for the authenticated user.

### `endSession()`

Ends the current session for the authenticated user.

### `getSession()`

Returns the current session status for the authenticated user.

## Tests

Tests are written using Jest. Run them with:

```bash
npm test
```

## Contributing

Please see the [contributing guide](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)