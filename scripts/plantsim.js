// PlanSim - this is the "controller" for the game.  
// It sets up the Model object (environment + plant) and the 
// View object (dashboard + controls).  
// The Environment implements an observer pattern and the dashboard
// listens for updates (to plant size, moisture levels, etc.).  The
// contoller uses the same interface to check for game over.
// The controls lets the user water, change light, etc. These 
// updates are passed to the environment object.  

import Environment from './model/environment.js';
import Plant from './model/plant.js';
import Dashboard from './view/dashboard.js';
import Controls from './view/controls.js';

// "model"
var environmentModel;   // figures out moisture, npk, light levels based on time and adjustments
var plantModel;     

// "view" - what you see on the screen.  
var dashboard;
var controls; 

function initialize() {
    console.log("initialize");
    environmentModel = new Environment();
    plantModel = new Plant();
    dashboard = new Dashboard(environmentModel,plantModel);
    controls = new Controls(environmentModel);
}

document.addEventListener("DOMContentLoaded", function(event) { 
    initialize();
});