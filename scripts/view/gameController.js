class GameController { 
    constructor(callback,context) {
        this.startGameCallback = callback;
        this.callbackContext = context;
        this.gameFormElement = document.getElementById("game_form"); 
        this.gameFormElement.addEventListener("submit", this.onSubmit);   

        this.scoreDOMElement = document.getElementById("best_score");
        this.plantDOMElement = document.getElementById("best_plant");       
    }

    disable() {
        this.gameFormElement.disabled = true; 
    }

    enable() {
        this.gameFormElement.disabled = false; 
    }  
    
    updateStats(score, plant) {
        this.scoreDOMElement.innerHTML=score;
        this.plantDOMElement.innerHTML=plant;
    }
    
    onSubmit = (ev) => {
        console.log("OnSubmit")
        ev.preventDefault();
        let vals={};
        vals.plantType = ev.target.plant_type.value;      
        this.startGameCallback.call(this.callbackContext,vals);
    }    
}
 
export default GameController;