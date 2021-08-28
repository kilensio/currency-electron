const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 640,
    height: 480
  })

  
  win.loadFile('./src/index.html')
  
  // win.webContents.openDevTools({ mode: 'detach' });
}

app.whenReady().then(() => {
  createWindow()
  
  Menu.setApplicationMenu(null)
})

