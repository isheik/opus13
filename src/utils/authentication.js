// import twitter from 'node-twitter-api';
// import HmacSHA1 from 'crypto-js/hmac-sha1';
// import Base64 from 'crypto-js/enc-base64';
// import OAuth from 'oauth'; -> uninstalal later
// import Request from 'request';
import Request from 'request-promise-native';
import QueryStr from 'querystring';
// import { BrowserWindow } from 'electron';
// import { remote } from 'electron';
import { BrowserWindow } from 'electron';
// import electron from 'electron';
// const BrowserWindow = electron.remote.BrowserWindow;

// let authWindow = null;
let twitterAuthWindow = null;

class Authentication {
  static APP_KEY = '9kyGvxw2hN6RUwQ2MZ9h3WBtV';
  static APP_SECRET_KEY = 'qfEF4Z89AN9WBn80dO91WpBowmUs8AmMLPTTqhA4s14Fyl1AGz';
  static CALLBACK_URL = 'https://example.com';
  static REQUEST_TOKEN_URL = 'https://api.twitter.com/oauth/request_token';
  static ACCESS_TOKEN_URL = 'https://api.twitter.com/oauth/access_token';
  static REQUEST_METHOD = 'POST';
  static ACCESS_TOKEN_SECRET = '';
  static REQ_AUTH_BASE_URL = 'https://api.twitter.com/oauth/authorize?oauth_token=';
  static requestToken;
  static accessToken;

  static async authenticate() {
    // let reqToken = await this.getRequrestToken();

    // let authBaseURL = 'https://api.twitter.com/oauth/authorize?oauth_token=';
    // let authURL = `${authBaseURL}${reqToken.oauth_token}`;
    // console.log(authURL);
    // authWindow = new BrowserWindow({
    //   width: 800,
    //   height: 600,
    //   webPreferences: {
    //     nodeIntegration: false,
    //   },
    // });

    // // Hook navigate event to go back from Twitter Auth window to the original app window
    // authWindow.webContents.on('will-navigate', (event, url) => {
    //   const matchesArray = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
    //   if (matchesArray) {
    //     console.log(matchesArray);
    //   } else {
    //     console.log('failed auth');
    //   }
    //   authWindow.close();
    // });

    // authWindow.loadURL(authURL);
  }

  static async getRequrestToken() {
    // let oauth = new OAuth.OAuth(
    //   this.REQUEST_TOKEN_URL,
    //   this.ACCESS_TOKEN_URL,
    //   this.APP_KEY,
    //   this.APP_SECRET_KEY,
    //   '1.0A',
    //   null,
    //   'HMAC-SHA1',
    // );
    // let rtoken = oauth.getOAuthRequestToken(function () {
    // console.log("tet");
    // });
    const oauth = {
      consumer_key: this.APP_KEY,
      consumer_secret: this.APP_SECRET_KEY,
    };

    const requestOptions = {
      method: 'POST',
      uri: this.REQUEST_TOKEN_URL,
      oauth,
    };

    // ** Callback way **
    // Request.post({ url: this.REQUEST_TOKEN_URL, oauth: oauth }, function (e, r, body) {
    // the following test 2 is displayed first since async
    // console.log(body);
    // });
    // console.log("test2");

    // ** Promise way **
    // Request(requestOptions)
    //   .then(() => {
    //     console.log('great');
    //   })
    //   .catch(() => {
    //     console.log('OMG');
    //   });

    // TODO: Error handling
    this.requestToken = QueryStr.parse(await Request(requestOptions));
    return this.requestToken;
    // const keys = Object.keys(requestToken);
    // for (let i = 0; i < keys.length; i++) {
    // console.log(requestToken[keys[i]]);
    // }
    // console.log("test2");
  }

  // TODO: Think about this process design
  static async getAccessToken() {
    twitterAuthWindow = new BrowserWindow({
      width: 800,
      height: 600,
      modal: true,
      show: false,
    });
    // parent: mainWindow,

    // c    this.requestToken = await this.getRequrestToken();
    const authURL = `${this.REQ_AUTH_BASE_URL}${this.requestToken.oauth_token}`;

    // Hook navigate event to go back from Twitter Auth window to the original app window
    // Callback to local file is not allowed. This is an alternative to using Callback.
    twitterAuthWindow.webContents.on('will-navigate', async (event, url) => {
      const matchesArray = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
      const authData = {
        oauth_token: matchesArray[1],
        oauth_verifier: matchesArray[2],
      };

      if (matchesArray) {
        // Authentication.getAccessToken(authData);
        const oauth = {
          consumer_key: this.APP_KEY,
          consumer_secret: this.APP_SECRET_KEY,
          token: authData.oauth_token,
          token_secret: this.requestToken.oauth_token_secret,
          verifier: authData.oauth_verifier,
        };

        const requestOptions = {
          method: 'POST',
          uri: this.ACCESS_TOKEN_URL,
          oauth,
        };

        this.accessToken = QueryStr.parse(await Request(requestOptions));
        console.log(this.accessToken);
      } else {
        // TODO: Need error handling
        console.log('failed auth');
      }
      twitterAuthWindow.close();
    });

    // Prevent blank window from being displayed
    twitterAuthWindow.on('ready-to-show', () => {
      twitterAuthWindow.show();
    });

    twitterAuthWindow.loadURL(authURL);
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

    // console.log(signature);
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
