// import twitter from 'node-twitter-api';


class Authentication {
  static APP_KEY = '9kyGvxw2hN6RUwQ2MZ9h3WBtV';
  static APP_SECRET_KEY = 'qfEF4Z89AN9WBn80dO91WpBowmUs8AmMLPTTqhA4s14Fyl1AGz';
  static CALLBACK_URL = 'https://example.com';
  static REQUEST_URL = 'https://api.twitter.com/oauth/request_token';
  static REQUEST_METHOD = 'POST';
  static ACCESS_TOKEN_SECRET = '';

  test() {
    this.retstr = 'test';
    return 'testa';
  }

  generateSignature() {
    // Generate Key
    let signatureKey = `${encodeURI(this.APP_SECRET_KEY)} & ${encodeURI(this.ACCESS_TOKEN_SECRET)}`;

    // Generate Data
    let params = {
      oauth_callback: this.CALLBACK_URL,
      oauth_consumer_key: this.APP_KEY,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Date.now(),
      oauth_nonce: this.generateOAuthNonce(),
      oauth_version: '1.0',
    };

    console.log(params);
  }

  generateOAuthNonce() {
    const nonWordChar = /[=+-]/gi;
    const base64Str = btoa(`${this.APP_KEY}:${Date.now()}`);
    const wordOnlyStr = base64Str.replace(nonWordChar, '');

    return wordOnlyStr;
  }
}

export default Authentication;

