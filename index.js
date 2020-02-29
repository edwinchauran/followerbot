/**
 Cosas que faltan:
    -comprobar si youtube se tranco en suscriciones
    -crear una funcion para cambiar de tarea si no hay mas tareas
    -comprobar si hay internet
 */
const { app, BrowserWindow } = require('electron');
// const watch = require('./src/youtube/view.js');


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    backgroundColor: "#3f51b5",
    width: 378,
    height: 400,
    // width: 1000,
    // height: 1000,
    maxWidth: 378,
    maxHeight: 400,
    frame: false,
    title: "maquinita",
    fullscreenable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  win.center();
  // win.removeMenu();
  // win.openDevTools();
  // and load the index.html of the app.
  // win.setResizable(false)
  win.on('will-resize', (e) => {
    //prevent resizing even if resizable property is true.
    e.preventDefault();
    });
  win.loadFile('./src/view/index.html')
  win.on('closed', () => {
    win = null
  })
}

app.whenReady().then(createWindow);


  // sub.subscribe(1000, 'Usuario')
  // .catch((e)=> console.log('hubo un error'))
  // .then(()=>{
    // watch.view(1000, 'Usuario')
  // })