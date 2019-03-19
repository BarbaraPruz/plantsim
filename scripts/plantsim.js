import Environment from './model/environment.js';

import PlantFactory from './model/plantFactory.js'
import Plant from './model/plant.js';
import Dashboard from './view/dashboard.js';
import Controls from './view/controls.js';
import GameController from './view/gameController.js';

const TARGET_HEIGHT = 5; //10;
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
        //
        this.bestScore = 9999;
        this.bestPlant = '';
    }

    run() {
        // nothing to do here right now....
    }

    startGame(vals) {
        console.log("Start Game values",vals);
        // construct plant        
        this.plantModel = PlantFactory.createPlant(vals.plantType, this.environmentModel);
        this.plantModel.subscribe(this.checkGame); 
        this.dashboard.setPlant(this.plantModel);
        // reset environment model
        this.environmentModel.reset();
        this.controls.enable();
        this.gameController.disable();
    }

    checkGame() {
        let height = this.plantModel.getHeight();
        let days = this.plantModel.getDays();
        console.log("Check Game",height);
        let msg;
        if (height <= 0.00) 
            msg = `You killed the Plant in only ${days} days`;
        else if (height >= TARGET_HEIGHT) {
           msg = `Congratulations! Plant is ready. It took ${days} days`;
           // if days less than best days, update best days & best plant and update view 
           if (days <= this.bestScore)  {
               this.bestScore = days;
               this.bestPlant = this.plantModel.getName();
               this.gameController.updateStats(this.bestScore,this.bestPlant);
           } 
        }
        if (msg) {
            this.environmentModel.freeze();
            alert(msg);           
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

