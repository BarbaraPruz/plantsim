import Plant from './plant.js';
import Tomato from './tomato.js';

class PlantFactory {
    static createPlant(plantType, environment) {
        console.log("PlantFactory",plantType,environment);
        switch (plantType) {
            case 'tomato':
                return new Tomato(environment);
                break;
            default:
                return new Plant(environment);
        }
    }
}

export default PlantFactory;