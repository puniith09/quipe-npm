const Identity = require('./identity');
const KeyPair = require('./key_pair');

/**
 * Main SDK class for managing identities.
 * @class
 */
class IdentitySDK {
  constructor() {
    this.identity = new Identity();
    this.keyPair = new KeyPair();
  }

  /**
   * Register a new user.
   * @param {Object} user - The user to register.
   * @param {string} user.walletAddress - The wallet address of the user.
   * @param {string} user.publicKey - The public key of the user.
   * @returns {Promise<void>}
   */
  async registerUser(user) {
    return this.identity.registerUser(user);
  }

  /**
   * Authenticate a wallet signature.
   * @param {Object} auth - The authentication data.
   * @param {string} auth.walletSignature - The wallet signature to authenticate.
   * @returns {Promise<Object>} The session data.
   */
  async authenticate(auth) {
    return this.identity.authenticate(auth);
  }

  /**
   * Start a session.
   * @returns {Promise<Object>} The session data.
   */
  async startSession() {
    return this.identity.startSession();
  }

  /**
   * End a session.
   * @returns {Promise<void>}
   */
  async endSession() {
    return this.identity.endSession();
  }

  /**
   * Get the active session status.
   * @returns {Promise<Object>} The session data.
   */
  async getSession() {
    return this.identity.getSession();
  }
}

module.exports = IdentitySDK;