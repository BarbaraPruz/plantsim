class Environment { 
    constructor() {
        console.log("Environment Model Constructor");
        this.moisture = 50;
    }

    getMoisture() {
        return this.moisture;
    }
}

export default Environment;