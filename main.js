const { app, BrowserWindow, ipcMain } = require('electron');
const robot = require('robotjs');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 500,
        minWidth: 800,
        minHeight: 500,
        maxWidth: 800,
        maxHeight: 500,
        icon: __dirname + '/assets/icons/icon.ico',
        webPreferences: {
            // nodeIntegration: false,
            // contextIsolation: true,
            preload: __dirname + '/preload.js'
        }
    })
  
    // Hide the default menu
    win.setMenu(null);

    win.loadFile('./views/index.html')
}

const delay = async (ms) => {
    await new Promise(resolve => setTimeout(resolve, ms));
}

const DetectFoundGame = (x, y) => {
    let colorAtPos = robot.getPixelColor(x, y);

    // console.log(`Color at position: ${colorAtPos}`);
    
    // Accept button background color: #1e252a
    if(colorAtPos === "1e252a") {
        console.log(`Game found`);
    
        return true;
    }

    return false;
}

const AcceptGame = (x, y) => {
    robot.moveMouse(x, y);
    robot.mouseClick();
}

let stateBtnAutoaccept;

const ActivateAutoAccept = async () => {
    // Height: 1080
    // Width: 1920
    stateBtnAutoaccept = true;
    const screenHeight = robot.getScreenSize().height;
    const screenWidth = robot.getScreenSize().width;

    const screenHCenter = screenHeight / 2;

    // Get accept button position
    const acceptButtonPosX = screenWidth / 2; // 960 (in my screen) 
    const acceptButtonPosY = screenHCenter + (screenHeight / 6); // 720 (in my screen) 

    // En este while deberia agregar una condicion para que se detenga cuando se apreta el boton de desactivar
    while(stateBtnAutoaccept) {
        await delay(3000);
        console.log(`Searching game...`);
        
        if(DetectFoundGame(acceptButtonPosX, acceptButtonPosY)) {
            AcceptGame(acceptButtonPosX, acceptButtonPosY);
            await delay(200);
            robot.moveMouse(0, 0);
        }
    }
}

const DeactivateAutoAccept = () => {
    stateBtnAutoaccept = false;
    console.log(`Autoaccept deactivated`);
}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.on('activate-autoaccept', () => {
    ActivateAutoAccept();
});


ipcMain.on('deactivate-autoaccept', () => {
    DeactivateAutoAccept();
});