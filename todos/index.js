const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
    console.log("pasa");
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/main.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add New todo'
    });
    addWindow.loadURL(`file://${__dirname}/add.html`);
}

console.log("pasa 1");
const menuTemplate = [{
    label: 'File',
    submenu: [{
            label: 'New todo',
            click() { createAddWindow(); }
        },
        {
            label: 'Quit',
            accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click() {
                app.quit();
            }
        }
    ]
}];

if (process.platform === 'darwin') {
    console.log("pasa 2");
    menuTemplate.unshift({})
}