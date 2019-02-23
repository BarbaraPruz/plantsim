class Controls {
    constructor(environmentModel) {
        console.log("Controls Constructor");
        this.environment = environmentModel;
        document.getElementById("controls_form").addEventListener("submit", this.onSubmit);             
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        let vals={};
        vals.water= ev.target.water.value;
        console.log("Submit:",vals);  
        this.environment.update(vals);
    }    
}
 
export default Controls;