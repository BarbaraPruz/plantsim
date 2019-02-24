class Plant {
    constructor(environment) {
        this.height = 0.01;
        this.observers= [];
        // connect to environment
        this.environment = environment;       
        this.handleEnvironmentChange = this.handleEnvironmentChange.bind(this);
        this.environment.subscribe(this.handleEnvironmentChange);
    }
     
    getHeight() {
        return this.height;
    }

    handleEnvironmentChange() {
        let moisture = this.environment.getMoisture();
        if (moisture <= 20) 
            --this.height;
        else if (moisture >= 100) 
            --this.height;
        else 
            ++this.height;
        let light = this.environment.getLight();
        if (light < 20)
            this.height -= .5
        if (this.height < 0) this.height = 0;
        this.notifyObservers();                      
    }

    // support listenters
    subscribe(cb){
        this.observers.push(cb);
    }
    notifyObservers() {
        this.observers.forEach( (observer) => observer() )
    }    
}

export default Plant;