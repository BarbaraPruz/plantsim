class Controls {
    constructor(environmentModel) {
        this.environment = environmentModel;
        document.getElementById("controls_form").addEventListener("submit", this.onSubmit);             
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        let vals={};
        vals.water= Number(ev.target.water.value); 
        vals.light= Number(ev.target.light.value);         
        this.environment.update(vals);
    }    
} 

export default Controls;