
/**
 * The Product interface declares the operations that all  
 * concrete products must implement.
 */

interface Product {
    operation(): string,
}


/**
 * Concrete Products provide various implementations of the Product interface.
 */
class A_Product implements Product {
    public operation(): string {
        return "This is A_Product";
    }
}

class B_Product implements Product {
    public operation(): string {
        return "This is B_Product";
    }
}


abstract class Creator {

    /**
  * Note that the Creator may also provide some default implementation of the factory method.
  */

    public abstract factoryMethod(): Product;


    /**
         * Also note that, despite its name, the Creator's primary responsibility is
         * not creating products. Usually, it contains some core business logic that
         * relies on Product objects, returned by the factory method. Subclasses can
         * indirectly change that business logic by overriding the factory method
         * and returning a different type of product from it.
         */

    public mainOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with [(${product.operation()})]`;
    }

}

class A_Creator extends Creator {
    public factoryMethod(): Product {
        return new A_Product();
    }
}

class B_Creator extends Creator {
    public factoryMethod(): Product {
        return new B_Product();
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.mainOperation());
}

console.log('App : Launched with A_Creator.');
clientCode(new A_Creator());

const a = new A_Creator();
a.mainOperation();
console.log('App : Launched with B_Creator.');
clientCode(new B_Creator());