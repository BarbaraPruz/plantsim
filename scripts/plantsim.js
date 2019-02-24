import Environment from './model/environment.js';
import Plant from './model/plant.js';
import Dashboard from './view/dashboard.js';
import Controls from './view/controls.js';

const TARGET_HEIGHT = 10;
class Controller {
    constructor() {
        // set up "model" and connect to it (so we know when plant grows)
        this.environmentModel = new Environment();
        this.plantModel = new Plant(this.environmentModel);
        this.checkGame = this.checkGame.bind(this);        
        this.plantModel.subscribe(this.checkGame);
        // create view objects       
        this.dashboard = new Dashboard(this.environmentModel,this.plantModel);
        this.controls = new Controls(this.environmentModel);
    }

    run() {
        // nothing to do here right now....
    } 

    // To Do: game restart
    checkGame() {
        let height = this.plantModel.getHeight();
        if (height === 0) 
            alert ("You Killed the Plant!")
        else if (height >= TARGET_HEIGHT)
            alert ("Congratulations! Plant is ready.")    
    }    
}

function initialize() {
    var controller = new Controller();
    controller.run();
}

document.addEventListener("DOMContentLoaded", (event) => { 
    initialize();
});

