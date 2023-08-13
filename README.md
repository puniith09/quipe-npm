# Decentralized Identity SDK

This SDK allows you to manage user identity and sessions using blockchain wallets via a NEAR protocol smart contract. It is implemented as an NPM package SDK that wraps the contract interactions.

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

## Documentation

For more detailed information about the SDK methods, please refer to the [IdentitySDK.md](docs/IdentitySDK.md) and [KeyPair.md](docs/KeyPair.md) in the docs directory.

## Getting Started

To get started with using the SDK, please refer to the [GettingStarted.md](docs/GettingStarted.md) guide.

## Tests

Tests for all functionality are written using Jest. To run the tests, use the following command:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)