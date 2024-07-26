interface cusElement {
    accept(visitor: Visitor): void;
}
interface Visitor {
    visitBook(book: Book): void;
    visitElectronics(electronics: Electronics): void;
}

class Book implements cusElement {
    constructor(public title: string, public price: number) { }

    public accept(visitor: Visitor): void {
        visitor.visitBook(this);
    }
}

class Electronics implements cusElement {
    constructor(public name: string, public price: number) { }

    public accept(visitor: Visitor): void {
        visitor.visitElectronics(this);
    }
}


class PriceVisitor implements Visitor {
    private total = 0;

    public visitBook(book: Book): void {
        this.total += book.price;
    }

    public visitElectronics(electronics: Electronics): void {
        this.total += electronics.price;
    }

    public getTotal(): number {
        return this.total;
    }
}

class InvoiceVisitor implements Visitor {
    public visitBook(book: Book): void {
        console.log(`Book: ${book.title}, Price: ${book.price}`);
    }

    public visitElectronics(electronics: Electronics): void {
        console.log(`Electronics: ${electronics.name}, Price: ${electronics.price}`);
    }
}

class ShoppingCart {
    private items: cusElement[] = [];

    public addItem(item: cusElement): void {
        this.items.push(item);
    }

    public accept(visitor: Visitor): void {
        for (const item of this.items) {
            item.accept(visitor);
        }
    }
}

const book1 = new Book('Design Patterns', 30);
const book2 = new Book('Clean Code', 25);
const laptop = new Electronics('Laptop', 1200);
const phone = new Electronics('Phone', 800);

//Create cart
const cart = new ShoppingCart();
cart.addItem(book1);
cart.addItem(book2);
cart.addItem(laptop);
cart.addItem(phone);


//Create Visitor to update Price
const priceVisitor = new PriceVisitor();
cart.accept(priceVisitor);
console.log(`Total Price: ${priceVisitor.getTotal()}`);


//Create visitor to update invoice
const invoiceVisitor = new InvoiceVisitor();
cart.accept(invoiceVisitor);

