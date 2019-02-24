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
        if ('water' in vals) {
            let i = vals.water;
            this.moisture = this.moisture/2;
            if (i==0)
                this.moisture -= 10;
            else
                this.moisture += i;
            // note: higher moisture => lower pH
        }
        if ('light' in vals) {
            this.light = vals.light;
        }
        if ('fertilizer' in vals) {
            // currently just support lime
            this.pH += 0.25
        }
        this.notifyObservers();
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