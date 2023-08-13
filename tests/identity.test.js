const { IdentitySDK } = require('../src/index.js');
const { NEAR } = require('near-api-js');

describe('IdentitySDK', () => {
  let sdk;
  let mockWallet;

  beforeEach(() => {
    mockWallet = {
      walletAddress: '0x123',
      publicKey: 'abc',
      walletSignature: 'def'
    };
    sdk = new IdentitySDK();
  });

  test('registerUser', async () => {
    const response = await sdk.registerUser(mockWallet);
    expect(response).toBeTruthy();
  });

  test('authenticate', async () => {
    await sdk.registerUser(mockWallet);
    const session = await sdk.authenticate({ walletSignature: mockWallet.walletSignature });
    expect(session).toBeTruthy();
  });

  test('startSession', async () => {
    await sdk.registerUser(mockWallet);
    await sdk.authenticate({ walletSignature: mockWallet.walletSignature });
    const session = await sdk.startSession();
    expect(session).toBeTruthy();
  });

  test('endSession', async () => {
    await sdk.registerUser(mockWallet);
    await sdk.authenticate({ walletSignature: mockWallet.walletSignature });
    await sdk.startSession();
    const response = await sdk.endSession();
    expect(response).toBeTruthy();
  });

  test('getSession', async () => {
    await sdk.registerUser(mockWallet);
    await sdk.authenticate({ walletSignature: mockWallet.walletSignature });
    await sdk.startSession();
    const session = await sdk.getSession();
    expect(session).toBeTruthy();
  });
});