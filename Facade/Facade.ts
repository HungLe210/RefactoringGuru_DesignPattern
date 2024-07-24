//System A

class Engine {
    public start() {
        console.log('Engine starting...');
    }

    public stop() {
        console.log('Engine stopping');
    }
}

// Subsystem B
class Lights {
    public turnOn() {
        console.log('Lights turned on...');
    }

    public turnOff() {
        console.log('Lights turned off...');
    }
}

//Facade
class CarFacade {
    private engine: Engine;
    private lights: Lights;

    constructor() {
        this.engine = new Engine();
        this.lights = new Lights();
    }

    public startCar() {
        this.engine.start()
        this.lights.turnOn();
        console.log('Car is ready to drive!');
    }

    public stopCar() {
        this.engine.stop();
        this.lights.turnOff();
        console.log('Car is stopped.');
    }
}

function clientCode() {
    const car = new CarFacade();

    // Start the car
    car.startCar();

    // Perform driving actions...

    // Stop the car
    car.stopCar();
}

clientCode();