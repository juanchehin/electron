const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
    new BrowserWindow({
        width: 600,
        height: 800,
        webPreferences: { backgroundThrottling: false }
    })
});