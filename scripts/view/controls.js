class Controls { 
    constructor(environmentModel) {
        this.environment = environmentModel;
        this.controlFormElement = document.getElementById("controls_form");
        this.controlFormElement.addEventListener("submit", this.onSubmit);             
    }

    disable() {
        this.controlFormElement.disabled = true; 
    }

    enable() {
        this.controlFormElement.disabled = false; 
    }    

    onSubmit = (ev) => {
        ev.preventDefault();
        let vals={};
        if (ev.target.water.value != "none")
            vals.water = ev.target.water.value;          
        vals.light= Number(ev.target.light.value);
        if (ev.target.fertilizer.value != "none")
            vals.fertilizer = ev.target.fertilizer.value;         
        this.environment.update(vals);
    }    
}
 
export default Controls;