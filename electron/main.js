const { app, BrowserWindow, session } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 1000,
    resizable: true,
    webPreferences: {
      nodeIntegration: false, // Improve security (disable unless required)
      contextIsolation: true, // Prevent global access
      webSecurity: false    },
  });

  if (isDev) {
    setTimeout(() => {
      win.loadURL("http://localhost:5173"); // Wait for Vite server
    }, 500);
  } else {
    win.loadFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
}

app.whenReady().then(() => {
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const headers = { ...details.responseHeaders };
    if (details.url.endsWith(".js") || details.url.endsWith(".jsx")) {
      headers["Content-Type"] = ["application/javascript"];
    }
    callback({ responseHeaders: headers });
  });

  createWindow();
});

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