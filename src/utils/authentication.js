// import twitter from 'node-twitter-api';

class Authentication {
  static APP_KEY = '9kyGvxw2hN6RUwQ2MZ9h3WBtV';
  static APP_SECRET_KEY = 'qfEF4Z89AN9WBn80dO91WpBowmUs8AmMLPTTqhA4s14Fyl1AGz';
  static CALLBACK_URL = 'https://example.com';
  static REQUEST_URL = 'https://api.twitter.com/oauth/request_token';
  static REQUEST_METHOD = 'POST';
  static ACCESS_TOKEN_SECRET = '';

  constructor() {

  }

  test() {
    this.retstr = 'test';
    return 'testa';
  }

  static generateSignature() {
    // Generate Key
    const signatureKey = `${encodeURI(this.APP_SECRET_KEY)}&${encodeURI(this.ACCESS_TOKEN_SECRET)}`;

    // Generate Data
    const params = {
      oauth_callback: this.CALLBACK_URL,
      oauth_consumer_key: this.APP_KEY,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Date.now(),
      oauth_nonce: this.generateOAuthNonce(),
      oauth_version: '1.0',
    };

    // Encode parameters
    Object.keys(params)
      .forEach((key) => {
        if (key !== 'oauth_callback') {
          params[key] = encodeURIComponent(params[key]);
        }
      });

    console.log(params);
  }

  // Generate random string for Oauth 1.0 oauth_nonce
  static generateOAuthNonce() {
    const nonWordChar = /[=+-]/gi;
    const base64Str = btoa(`${this.APP_KEY}:${Date.now()}`);
    const wordOnlyStr = base64Str.replace(nonWordChar, '');

    return wordOnlyStr;
  }
}

export default Authentication;
