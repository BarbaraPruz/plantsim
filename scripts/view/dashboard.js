class Dashboard {
    constructor(environmentModel,plantModel) {
        console.log("Dashboard Constructor");
        this.plant = plantModel;
        this.environment =environmentModel;
        this.plantDOMElement = document.getElementById("plant_height");
        this.moistureDOMElement = document.getElementById("moisture");        
        this.showPlant();
        this.showEnvironment();
    }
    
    showPlant() {
        this.plantDOMElement.innerHTML = this.plant.getHeight();   
    }

    showEnvironment() {
        this.moistureDOMElement.innerHTML = this.environment.getMoisture();   
    } 
}

export default Dashboard;