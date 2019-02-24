

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

    // ToDo: Delegate height adjustment (or at least ratings) to different object
    // This would allow easy plant customizations
    handleEnvironmentChange() {
        // ratings are 1-4(best)
        console.log("Plant env change, height",this.height,"ratings",
             this.rateMoisture(this.environment.getMoisture()),
             this.rateLight(this.environment.getLight()),
             this.ratepH(this.environment.getpH()));
        let rating = this.rateMoisture(this.environment.getMoisture())
                    + this.rateLight(this.environment.getLight())
                    + this.ratepH(this.environment.getpH())

        if (rating >10)
            this.height += 1;
        else if (rating >= 7)
            this.height += 0.5;
        else if (rating <=3)
            this.height -= 0.5;        
             
        if (this.height < 0) this.height = 0;
        console.log("Plant new height",this.height);
        this.notifyObservers();                      
    }

    // Rate checks - might be good to simplify this code with sets of max/min values
    // but just spelling out the logic right now
    rateMoisture(val) {
        let rate = 1;
        if (this.inRange(val,50,60))
            rate = 4;
        else if (this.inRange(val,40,80))
            rate = 3;
        else if (this.inRange(val,30,90))
            rate = 2;
        return rate;
    }
    rateLight(val) {
        let rate = 1;
        if (this.inRange(val,70,100))
            rate = 4;
        else if (this.inRange(val,40,70))
            rate = 3;
        else if (this.inRange(val,25,40))
            rate = 2;
        return rate;
    }
    ratepH(val) {
        let rate = 1;
        if (this.inRange(val,5.9,6.1))
            rate = 4;
        else if (this.inRange(val,5.5,6.5))
            rate = 3;
        else if (this.inRange(val,5,7))
            rate = 2;
        return rate;
    }    

    inRange(val,min,max) {
        return ((val-min)*(val-max) <= 0)
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