const { Client } = require('minecraft-launcher-core');
const launcher = new Client();

const dataDirectory = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME)

const msmc = require("msmc"); 


function play(){
    msmc.getNWjs().FastLaunch((callback)=> {
        const version_minecraft = document.querySelector(".minecraft_version").value

        let opts = {
            clientPackage: null,
            authorization: msmc.getMCLC().getAuth(callback),
            root: dataDirectory + "/.minecraft",
            version: {
                number: version_minecraft,
                type: "release"
            },
            memory: {
                max: "1G",
                min: "1G"
            }
        }
        console.log("Starting")
        launcher.launch(opts);
        
        launcher.on('debug', (e) => console.log(e));
        launcher.on('data', (e) => console.log(e));
    
    }, (update) => {
        console.log("CallBack!!!!!")
        console.log(update)
    })
}
