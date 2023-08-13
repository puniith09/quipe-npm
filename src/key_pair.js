```javascript
const { KeyPair, utils } = require('near-api-js');

/**
 * Generates a NEAR key pair and account ID for users who connect with a wallet like MetaMask.
 * @class
 */
class KeyPairGenerator {
  /**
   * Generates a new key pair.
   * @returns {KeyPair} The generated key pair.
   */
  generateKeyPair() {
    return KeyPair.fromRandom('ed25519');
  }

  /**
   * Generates a new account ID.
   * @param {string} walletAddress The wallet address of the user.
   * @returns {string} The generated account ID.
   */
  generateAccountId(walletAddress) {
    return utils.encodeBase58(walletAddress);
  }
}

module.exports = KeyPairGenerator;
```