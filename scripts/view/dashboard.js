class Dashboard { 
    constructor(environmentModel) {
        // hook up to the model. 
        this.plant = null;
        this.environment =environmentModel;
        this.environment.subscribe( () => this.showEnvironment());
        // save off DOM info so we don't have to keep looking it up     
        this.plantDOMElement = document.getElementById("plant_height");
        this.plantProgressDOMElement = document.getElementById("plant_progress");  
        this.plantDaysElement = document.getElementById("days");      
        this.moistureDOMElement = document.getElementById("moisture");
        this.lightDOMElement = document.getElementById("light"); 
        this.phDOMElement = document.getElementById("ph");                
        // show initial status        
        this.showEnvironment();
    }
     
    setPlant(plant) {
        this.plant = plant;
        this.plant.subscribe( () => this.showPlant()) ;
        this.showPlant();   
    }
    
    showPlant() {
        let height = this.plant.getHeight().toFixed(2);   
        this.plantDOMElement.innerHTML = this.plant.getHeight().toFixed(2); 
        console.log("Height",height,"%",(height/10.0 * 100));
        this.plantProgressDOMElement.style.width = `${(height/10.0 * 100)}%`;
        this.plantDaysElement.innerHTML = this.plant.getDays();
    }

    showEnvironment() {
        this.moistureDOMElement.innerHTML = this.environment.getMoisture().toFixed(2); 
        this.lightDOMElement.innerHTML = this.environment.getLight();
        this.phDOMElement.innerHTML = this.environment.getpH().toFixed(2);                            
    }

}

export default Dashboard;