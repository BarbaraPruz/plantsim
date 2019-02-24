class Environment {
    constructor() {
        this.moisture = 50;
        this.light = 50;
        this.pH = 6;
        this.observers= [];
    } 

    getMoisture() { return this.moisture; }
    getLight() { return this.light; }
    getpH() { return this.pH; }

    update(vals) {
        console.log("Update Environment, vals",vals," current",this.moisture,this.light,this.pH);
        // first, adjust current values for normal use of moisture, etc.
        this.dailyAdjust();

        // apply individual new settings
        this.moisture += this.translateWaterVal(vals.water);
        this.pH += this.translateFertilizerVal(vals.fertilizer)
        if ('light' in vals) {
            this.light = vals.light;
        }
        
         console.log("Update Environment done",this.moisture,this.light,this.pH);
        // let everyone know
        this.notifyObservers();
    }

    dailyAdjust() {
        // each day we loose 5% moisture (5% of total available range)
        this.moisture -= 5;
        // Some factor influence others: if high moisture, drop pH, else raise it a little
        if (this.moisture > 75)
            this.pH -= 0.1;
        else
            this.pH += 0.05;
    }

    translateWaterVal(val) {
        switch (val) {
            case 'low': 
                return 2.5;
            case 'medium':
                return 5;
            case 'high':
                return 10;
            default:
                return 0; // no water!
        }
    }

    translateFertilizerVal(val) {
        switch (val) {
            case 'peat': 
                return -0.25;
            case 'lime':
                return 0.25;
            default:
                return 0;   // no fertilizer
        }
    }
    // support listeners
    subscribe(cb){
        this.observers.push(cb);
    }
    notifyObservers() {
        this.observers.forEach( (observer) => observer() )
    }
}

export default Environment;