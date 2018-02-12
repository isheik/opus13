// import twitter from 'node-twitter-api';
import HmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';

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
    let signatureData = `${this.REQUEST_METHOD}&${this.REQUEST_URL}`;

    // Generate Data
    const params = [
      { key: 'oauth_callback', value: this.CALLBACK_URL },
      { key: 'oauth_consumer_key', value: this.APP_KEY },
      { key: 'oauth_signature_method', value: 'HMAC-SHA1' },
      { key: 'oauth_timestamp', value: Date.now() },
      { key: 'oauth_nonce', value: this.generateOAuthNonce() },
      { key: 'oauth_version', value: '1.0' },
    ];

    params.sort((a, b) => (
      a.key.localeCompare(b.key)
    ));

    for (let i = 0; i < params.length; i++) {
      params[i].value = encodeURIComponent(params[i].value);
      signatureData += `&${params[i].key}=${params[i].value}`;
    }

    const hash = HmacSHA1(signatureData, signatureKey);
    const signature = Base64.stringify(hash);

    console.log(signature);
  }

  // Generate random string for Oauth 1.0 oauth_nonce
  static generateOAuthNonce() {
    // removed chars from the last result
    const nonWordChar = /[=+-]/gi;
    const base64Str = btoa(`${this.APP_KEY}: ${Date.now()} `);

    // remove non word chars from the base64 result
    const wordOnlyStr = base64Str.replace(nonWordChar, '');

    return wordOnlyStr;
  }
}

export default Authentication;
