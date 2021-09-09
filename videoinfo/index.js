const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
ffmpeg.setFfmpegPath(path.join(__dirname, './ffmpeg-n4.4-150-gb5cdf08cae-win64-gpl-4.4/bin/ffprobe'));
const ffmpegPath = require('@ffmpeg-installer/ffmpeg');
// const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    console.log('pasa app.on');

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
    console.log('pasa ipcMain.on y path es : ', path);

    // ffmpeg.ffprobe((path, metadata) => {
    //     mainWindow.webContents.send('video:metadata', metadata.format.duration);
    //     console.log('pasa');
    // });
    ffmpeg.ffprobe(path, function(err, metadata) {
        console.log(err);
        mainWindow.webContents.send('video:metadata', metadata);
    });
});