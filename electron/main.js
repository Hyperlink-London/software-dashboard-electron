const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    setTimeout(() => {
      win.loadURL("http://localhost:5173");  // Wait for React to start
    }, 500);  // Delay of 2 seconds (adjust if necessary)
  } else {
    win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});