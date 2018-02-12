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

  static generateSignature() {
    // Generate Key
    const signatureKey = `${encodeURI(this.APP_SECRET_KEY)}&${encodeURI(this.ACCESS_TOKEN_SECRET)}`;

    // Generate Data
    let params = [
      { key: 'oauth_callback', value: this.CALLBACK_URL },
      { key: 'oauth_consumer_key', value: this.APP_KEY },
      { key: 'oauth_signature_method', value: 'HMAC-SHA1' },
      { key: 'oauth_timestamp', value: Date.now() },
      { key: 'oauth_nonce', value: this.generateOAuthNonce() },
      { key: 'oauth_version', value: '1.0' },
    ];

    for (let i = 0; i < params.length; i++) {
      if (params[i].key !== 'oauth_callback') {
        params[i].value = encodeURIComponent(params[i].value);
      }
    }

    params.sort((a, b) => (
      a.key.localeCompare(b.key)
    ));

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
