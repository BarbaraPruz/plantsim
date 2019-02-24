class Dashboard { 
    constructor(environmentModel,plantModel) {
        // hook up to the model. 
        this.plant = plantModel;
        this.environment =environmentModel;
        this.environment.subscribe( () => this.showEnvironment());
        this.plant.subscribe( () => this.showPlant())   
        // save off DOM info so we don't have to keep looking it up     
        this.plantDOMElement = document.getElementById("plant_height");
        this.moistureDOMElement = document.getElementById("moisture");
        this.lightDOMElement = document.getElementById("light"); 
        this.phDOMElement = document.getElementById("ph");                
        // show initial status        
        this.showPlant();
        this.showEnvironment();
    }
     
    showPlant() {
        let height = this.plant.getHeight().toFixed(2);   
        this.plantDOMElement.innerHTML = this.plant.getHeight().toFixed(2);         
    }

    showEnvironment() {
        this.moistureDOMElement.innerHTML = this.environment.getMoisture().toFixed(2); 
        this.lightDOMElement.innerHTML = this.environment.getLight();
        this.phDOMElement.innerHTML = this.environment.getpH().toFixed(2);                            
    }

}

export default Dashboard;