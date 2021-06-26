const { app, BrowserWindow } = require('electron')
const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer')
const path = require('path')
const url = require('url')

let mainWindow

const createWindow = () => {
  if (!app.isPackaged) {
    installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
      .then((name) => console.log(`Added Extension:  ${name}`, name))
      .catch((err) => console.log('An error occurred: ', err))
  }

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  mainWindow.loadURL(
    !app.isPackaged
      ? process.env.ELECTRON_START_URL
      : url.format({
          pathname: path.join(__dirname, '../index.html'),
          protocol: 'file:',
          slashes: true
        })
  )

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
