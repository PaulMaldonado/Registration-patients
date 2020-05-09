// Importando modulo electron
const electron = require('electron');

// Importando modulo app y browserwindow
const { app, BrowserWindow } = require('electron');

// Creando función que ejecutara la venta de electron
function createWindow() {
  //Crea la venta del navegador
  let win = new BrowserWindow({
    width: 1200,
    height: 800,

    webPreferences: {
      nodeIntegration: true
    }

  });

  // Carga el index.html de la aplicación
  win.loadFile('src/index.html')
}

app.whenReady().then(createWindow);