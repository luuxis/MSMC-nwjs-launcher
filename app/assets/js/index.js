const {Client} = require('minecraft-launcher-core');
const launcher = new Client();
const msmc = require("msmc"); 

//Just using NWjs for this example, any function that gives the callback parameter type will work 
msmc.getNWjs().FastLaunch((callback)=>{
    let opts = {
        clientPackage: null,
        // Pulled from the Minecraft Launcher core docs , this function is the star of the show
        authorization: msmc.getMCLC().getAuth(callback),
        root: "./minecraft",
        version: {
            number: "1.14.4",
            type: "release"
        },
        memory: {
            max: "6G",
            min: "4G"
        }
    }
    console.log("Starting")
    launcher.launch(opts);
    
    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => console.log(e));

}, (update) => {
    //A hook for catching loading bar events and errors, standard with MSMC 
    console.log("CallBack!!!!!")
    console.log(update)
})