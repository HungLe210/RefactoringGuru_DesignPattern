interface Product {
    operation(): string,
}

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
  * Note that the Creator may also provide some default implementation of the
  * factory method.
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
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }

}