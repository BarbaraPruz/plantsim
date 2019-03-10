import Plant from './plant.js';

class Tomato extends Plant {
    constructor(environment) {
        super(environment);
    }
    
    // tomatoes will grow fast
    handleEnvironmentChange() {
        console.log("tomato - handle environment change");
        // ratings are 0-4(best).  Each factor has equal weight.
        let rating = this.rateMoisture(this.environment.getMoisture())
                    + this.rateLight(this.environment.getLight())
                    + this.ratepH(this.environment.getpH())

        if (rating >= 10)
            this.height += 1.5;
        else if (rating >= 7)
            this.height += 1.0;
        else if (rating <=4)
            this.height -= 0.5;                    
        if (this.height < 0) this.height = 0;

        //console.log("Plant new height",this.height);
        this.notifyObservers();                      
    }

    // these tomatoes like lots of water and full sun
    rateMoisture(val) {
        let rate = 0;
        if (val >80)
            rate = 4;
        else if (val > 60)
            rate = 3;
        else if (val > 40 )
            rate = 2;
        else if (val > 30)
            rate = 1;
        return rate;
    }
    
    rateLight(val) {  
        let rate = 0;
        if (val > 80)
            rate = 4;
        else if (val > 65)
            rate = 3;
        else if (val > 50)
            rate = 2;
        else if (val > 40)
            rate = 1;
        return rate;
    }

    ratepH(val) {  
        let rate = 0;
        if (this.inRange(val,6.0,6.8))
            rate = 4;
        else if (this.inRange(val,5.8,7.0))
            rate = 3;
        else if (val > 5.5)
            rate = 2;
        return rate;
    }    
   
}

export default Tomato;