import Environment from './model/environment.js';
// ToDo: PlantFactory
import Plant from './model/plant.js';
import Tomato from './model/tomato.js';
import Dashboard from './view/dashboard.js';
import Controls from './view/controls.js';
import GameController from './view/gameController.js';

const TARGET_HEIGHT = 10;
class Controller {
    constructor() {
        // set up "model" and connect to it (so we know when plant grows)
        // Note: plant model is set up when game starts
        this.environmentModel = new Environment();
        this.checkGame = this.checkGame.bind(this);
        // create view objects       
        this.dashboard = new Dashboard(this.environmentModel,this.plantModel);
        this.controls = new Controls(this.environmentModel);
        this.controls.disable();
        this.startGame = this.startGame.bind(this);        
        this.gameController = new GameController(this.startGame,this);
    }

    run() {
        // nothing to do here right now....
    }

    startGame(vals) {
        console.log("Start Game values",vals);
        // construct plant        
        switch (vals.plantType) {
            case 'tomato':
                this.plantModel = new Tomato(this.environmentModel);
                break;
            default:
                this.plantModel = new Plant(this.environmentModel);
        }
        this.plantModel.subscribe(this.checkGame); 
        this.dashboard.setPlant(this.plantModel);
        // reset environment model
        this.environmentModel.reset();
        this.controls.enable();
        this.gameController.disable();
    }

    checkGame() {
        let height = this.plantModel.getHeight();
        console.log("Check Game",height);
        let msg;
        if (height <= 0.00) 
            msg = "You killed the Plant!";
        else if (height >= TARGET_HEIGHT)
           msg = "Congratulations! Plant is ready.";
        if (msg) {
            alert(msg);
            // move to start game
            this.gameController.enable();
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

