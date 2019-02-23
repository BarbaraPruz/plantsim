class Controls {
    constructor(environmentModel) {
        console.log("Controls Constructor");
        document.getElementById("controls_form").addEventListener("submit", this.onSubmit);             
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        console.log("Submit  Water:",ev.target.water.value,);
    } 
}

export default Controls;