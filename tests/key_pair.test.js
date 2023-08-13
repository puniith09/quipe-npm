const { KeyPair } = require('../src/key_pair');
const { IdentitySDK } = require('../src/index');

describe('KeyPair', () => {
  let keyPair;
  let sdk;

  beforeEach(() => {
    sdk = new IdentitySDK();
    keyPair = new KeyPair();
  });

  test('should generate a valid NEAR key pair', () => {
    const keyPair = keyPair.generateKeyPair();
    expect(keyPair).toHaveProperty('publicKey');
    expect(keyPair).toHaveProperty('secretKey');
  });

  test('should generate a valid NEAR account ID', () => {
    const accountId = keyPair.generateAccountId();
    expect(accountId).toMatch(/^[a-z0-9_]+$/);
  });

  test('should connect with MetaMask wallet', () => {
    const wallet = keyPair.connectWallet();
    expect(wallet).toBeInstanceOf(Object);
  });

  test('should register user with generated key pair', () => {
    const keyPair = keyPair.generateKeyPair();
    const user = sdk.registerUser({
      walletAddress: '0x123',
      publicKey: keyPair.publicKey
    });
    expect(user).toHaveProperty('walletAddress', '0x123');
    expect(user).toHaveProperty('publicKey', keyPair.publicKey);
  });
});