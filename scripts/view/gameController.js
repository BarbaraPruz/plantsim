class GameController { 
    constructor(callback,context) {
        this.startGameCallback = callback;
        this.callbackContext = context;
        this.gameFormElement = document.getElementById("game_form"); 
        this.gameFormElement.addEventListener("submit", this.onSubmit);                     
    }

    disable() {
        this.gameFormElement.disabled = true; 
    }

    enable() {
        this.gameFormElement.disabled = false; 
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