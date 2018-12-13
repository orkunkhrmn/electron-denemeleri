const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;


function createWindow() {
    win = new BrowserWindow({width: 960, height:540});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes: true
    }));

    //win.webContents.openDevTools(); // uygulamada chorome developer tool açmak için
}

app.on('ready', createWindow);