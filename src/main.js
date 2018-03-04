// 'use strict';

// console.log(require.resolve('electron'));
// var electron = require('electron').remote;
// const { app, BrowserWindow, ipcMain } = require('electron');
import { app, BrowserWindow, ipcMain } from 'electron';
// console.log(electron);
// import electron from 'electron';
// import inde from './src/index.jsx';
// var app = electron.app;
// var app = require('electron').remote.app;
// console.log(app);
// var BrowserWindow = electron.BrowserWindow;
// var BrowserWindow = require('electron').remote.BrowserWindow;
// const Authentication = require('./src/utils/authentication');
import path from 'path';
import Authentication from './utils/authentication';

let base = path.resolve(__dirname);
console.log(base);

// console.log(BrowserWindow);
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;
let twitterAuthWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

// Hook navigate event to go back from Twitter Auth window to the original app window
ipcMain.on('twitter-auth-start', async () => {
  twitterAuthWindow = new BrowserWindow({
    width: 800,
    height: 600,
    parent: mainWindow,
    modal: true,
  });

  const authURL = await Authentication.getTwitterAuthURL();

  twitterAuthWindow.webContents.on('will-navigate', (event, url) => {
    const matchesArray = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
    if (matchesArray) {
      console.log(matchesArray);
    } else {
      console.log('failed auth');
    }
    twitterAuthWindow.close();
  });
  twitterAuthWindow.loadURL(authURL);
});


// ipcMain.on('auth-start', () => {
  // Authentication.authenticate();
// });
