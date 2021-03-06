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
// import path from 'path';
import Authentication from './utils/Authentication';

// console.log(BrowserWindow);
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
global.mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  // BrowserWindow.addDevToolsExtension(`${process.env.HOME}/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.2.3_0`);
  // BrowserWindow.addDevToolsExtension(`${process.env.HOME}/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.2_0`);
  global.mainWindow = new BrowserWindow({ width: 800, height: 600 });
  global.mainWindow.loadURL(`file://${__dirname}/index.html`);

  global.mainWindow.on('closed', () => {
    global.mainWindow = null;
  });
});

ipcMain.on('twitter-auth-start', (event) => {
  // const token = await Authentication.authenticate();
  Authentication.authenticate((token) => {
    // console.log(token);
    event.sender.send('twitter-auth-finish', token);
  });
  // console.log(token);
  // console.log("test");
  // event.sender.send('twitter-auth-finish', token);
});

ipcMain.on('twitter-auth-finish', (event) => {
  console.log('test');
});


// ipcMain.on('auth-start', () => {
// Authentication.authenticate();
// });
