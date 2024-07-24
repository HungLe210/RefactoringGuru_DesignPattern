interface Chair {
    sitOn(): void;
}

interface Table {
    placeItem(): void,
}

class ModernChair implements Chair {
    sitOn() {
        console.log("Sitting on a modern chair");
    }
}

class VictorianChair implements Chair {
    sitOn() {
        console.log("Sittong on a Victorian Chair");
    }
}

class ModernTable implements Table {
    placeItem() {
        console.log("Placing item on a modern table");
    }
}

class VictorianTable implements Table {
    placeItem() {
        console.log("Placing item on a Victorian Table");
    }
}


interface FurnitureFactory {
    createChair(): Chair,
    createTable(): Table,
}


class ModernFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createTable(): Table {
        return new ModernTable();
    }
}

class VictorianFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createTable(): Table {
        return new VictorianTable();
    }
}


function ClientCode(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const table = factory.createTable();

    chair.sitOn();
    table.placeItem();
}

console.log("----------------This is Abstract Factory---------------")

const modern = new ModernFactory();
ClientCode(modern);

const victorian = new VictorianFactory();
ClientCode(victorian);