class Environment {
    constructor() {
        console.log("Environment Model Constructor");
        this.moisture = 50;
        this.observers= [];
    } 

    getMoisture() {
        return this.moisture;
    }

    update(vals) {
        if ('water' in vals) {
            let i = Number(vals.water);
            this.moisture = this.moisture/2;
            if (i==0)
                this.moisture -= 10;
            else
                this.moisture += i;
        }
        this.notifyObservers();
    }

    subscribe(cb){
        this.observers.push(cb);
    }
    notifyObservers() {
        this.observers.forEach( (observer) => observer() )
    }
}

export default Environment;