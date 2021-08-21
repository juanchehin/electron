const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    console.log('pasa app.on');

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
    console.log('pasa ipcMain.on');

    ffmpeg.ffprobe((path, metadata) => {
        mainWindow.webContents.send('video:metadata', metadata.format.duration);
    });
});