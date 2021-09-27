const electron = require('electron');
const { Browser } = require('electron');

class MainWindow extends Browser {
    constructor(url) {
        super({
            height: 500,
            width: 300,
            frame: false,
            resizable: false,
            show: false,
            skipTaskbar: true,
            webPreferences: { backgroundThrottling: false } // Evita que se pare el tiempo al posar el puntero
        });

        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur() {
        this.hide();
    }
}

module.exports = MainWindow;