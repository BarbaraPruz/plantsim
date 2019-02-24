class Plant {
    constructor(environment) {
        console.log("Plant Model Constructor");
        this.height = 0;
        this.environment = environment;
        this.observers= [];        
        this.handleEnvironmentChange = this.handleEnvironmentChange.bind(this);
        this.environment.subscribe(this.handleEnvironmentChange);
    } 
    getHeight() {
        return this.height;
    }

    handleEnvironmentChange() {
        let moisture = this.environment.getMoisture();
        if (moisture <= 20) {
            --this.height;
            this.notifyObservers();
        }
        else if (moisture >= 100) {
            --this.height;
            this.notifyObservers();
        }
        else {
            ++this.height;
            this.notifyObservers();            
        }            
    }
    subscribe(cb){
        this.observers.push(cb);
    }
    notifyObservers() {
        this.observers.forEach( (observer) => observer() )
    }    
}

export default Plant;