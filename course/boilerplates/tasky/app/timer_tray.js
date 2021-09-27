const electron = require('electron');
const { Tray, app, Menu } = electron;

class TimerTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath); // Metodo constructor del objeto padre (Tray)

        this.mainWindow = mainWindow; // Asigno mainWindow a la propiedad, que viene de Tray, llamada mainWindow

        this.setToolTip('Timer App');
        this.on('click', this.onClick.bind(this)); // cuando se hace click, dispara el evento onClick
        this.on('right-click', this.onRightClick.bind(this)); //
    }

    onClick(event, bounds) {
        // Limites de evento clic
        const { x, y } = bounds;

        // Alto y ancho de la ventana
        const { height, width } = this.mainWindow.getBounds();

        if (this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        } else {
            const yPosition = process.platform === 'darwin' ? y : y - height;
            this.mainWindow.setBounds({
                x: x - width / 2,
                y: yPosition,
                width,
                height
            });
            this.mainWindow.show();
        }
    }

    onRightClick() {
        const menuConfig = Menu.buildFromTemplate([{
            label: 'Quit',
            click: () => app.quit()
        }]);

        this.popUpContextMenu(menuConfig);
    }
}

module.exports = TimerTray;