// 'use strict';

// console.log(require.resolve('electron'));
// var electron = require('electron').remote;
const { app, BrowserWindow } = require('electron');
// console.log(electron);
// import electron from 'electron';
// import inde from './src/index.jsx';
// var app = electron.app;
// var app = require('electron').remote.app;
// console.log(app);
// var BrowserWindow = electron.BrowserWindow;
// var BrowserWindow = require('electron').remote.BrowserWindow;

// console.log(BrowserWindow);
let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
