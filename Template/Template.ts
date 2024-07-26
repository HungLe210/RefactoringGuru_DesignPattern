abstract class CoffeeTemplate {

    protected abstract boilWater(): void;
    protected abstract brewCoffeeGrinds(): void;
    protected abstract pourInCup(): void;
    protected abstract addCondiments(): void;

    public makeCoffee(): void {
        this.boilWater();
        this.brewCoffeeGrinds();
        this.pourInCup();
        this.addCondiments();
    }
}

class BlackCoffe extends CoffeeTemplate {
    protected boilWater(): void {
        console.log('Boiling water');
    }

    protected brewCoffeeGrinds(): void {
        console.log('Dripping Coffee through filter');
    }

    protected pourInCup(): void {
        console.log('Pouring into cup');
    }

    protected addCondiments(): void {
        console.log('Adding Sugar and Milk');
    }
}

class Cappuccino extends CoffeeTemplate {
    protected boilWater(): void {
        console.log('Boiling water');
    }

    protected brewCoffeeGrinds(): void {
        console.log('Dripping Coffee through filter');
    }

    protected pourInCup(): void {
        console.log('Pouring into cup');
    }

    protected addCondiments(): void {
        console.log('Adding Cinnamon');
    }
}

const blackCoffee = new BlackCoffe();
console.log("------------------ MAKING BLACK COFFE: ---------------")
blackCoffee.makeCoffee();

const cappuccino = new Cappuccino();
console.log("------------------ MAKING CAPPUCCINO: ----------------")
cappuccino.makeCoffee();