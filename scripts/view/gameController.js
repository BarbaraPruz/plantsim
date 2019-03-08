class GameController { 
    constructor(callback) {
        this.startGameCallback = callback;
        document.getElementById("game_form").addEventListener("submit", this.onSubmit);             
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        let vals={};
        vals.plantType = ev.target.plant_type.value;      
        this.startGameCallback(vals);
    }    
}
 
export default GameController;