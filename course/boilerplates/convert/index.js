const { ipcMain } = require('electron');
const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 800,
        webPreferences: { backgroundThrottling: false }
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

ipcMain.on('videos:added', (event, videos) => {
    console.log('videos es : ', videos);
});