interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    public cost(): number {
        return 5
    };

    public description(): string {
        return 'Simple coffee';
    }
}

class BaseIngredient implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    public cost(): number {
        return this.coffee.cost();
    }

    public description(): string {
        return this.coffee.description();
    }
}

class AddMilk extends BaseIngredient {
    public cost(): number {
        return this.coffee.cost() + 2;
    }

    public description(): string {
        return this.coffee.description() + ', milk';
    }
}

class AddSugar extends BaseIngredient {
    public cost(): number {
        return this.coffee.cost() + 1;
    }

    public description(): string {
        return this.coffee.description() + ', sugar';
    }
}

function clientCode() {
    let myCoffee: Coffee = new SimpleCoffee();
    console.log(myCoffee.description());
    console.log(`Cost: $${myCoffee.cost()}`);

    myCoffee = new AddSugar(myCoffee);
    console.log(myCoffee.description());
    console.log(`Cost: $${myCoffee.cost()}`);

    // Add milk to the coffee
    myCoffee = new AddMilk(myCoffee);
    console.log(myCoffee.description());
    console.log(`Cost: $${myCoffee.cost()}`);
}

clientCode();