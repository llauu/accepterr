const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    activateAutoaccept: () => {
        ipcRenderer.send('activate-autoaccept');
    },
    deactivateAutoaccept: () => {
        ipcRenderer.send('deactivate-autoaccept');
    }
});
