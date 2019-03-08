import Environment from './model/environment.js';
import Plant from './model/plant.js';
import Dashboard from './view/dashboard.js';
import Controls from './view/controls.js';
import GameController from './view/gameController.js';

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
        this.gameController = new GameController(this.startGame)
    }

    run() {
        // nothing to do here right now....
    }

    startGame(vals) {
        console.log("Start Game values",vals);
    }

    checkGame() {
        let height = this.plantModel.getHeight();
        let msg;
        if (height <= 0.00) 
            msg = "You killed the Plant!";
        else if (height >= TARGET_HEIGHT)
           msg = "Congratulations! Plant is ready.";
        if (msg) {
            alert(msg);
            this.environmentModel.reset();
            this.plantModel.reset();
        }    
    }    
}

function initialize() {
    var controller = new Controller();
    controller.run();
}

document.addEventListener("DOMContentLoaded", (event) => { 
    initialize();
});

