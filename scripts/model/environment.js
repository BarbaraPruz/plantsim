class Environment {
    constructor() {
        this.moisture = 50;
        this.light = 50;
        this.observers= [];
    } 

    getMoisture() {
        return this.moisture;
    }
    getLight() {
        return this.light;
    }
    update(vals) {
        if ('water' in vals) {
            let i = vals.water;
            this.moisture = this.moisture/2;
            if (i==0)
                this.moisture -= 10;
            else
                this.moisture += i;
        }
        if ('light' in vals) {
            this.light = vals.light;
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