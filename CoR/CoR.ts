interface Handler<Request = string, Result = string> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
    handle(request: Request): Result;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return "";
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === "Banana") {
            return `Monkey ate the ${request}`;
        } return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === "Nut") {
            return `Squirrel ate the ${request}`;
        } return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === "MeatBall") {
            return `Dog ate the ${request}`;
        } return super.handle(request);
    }
}

function clientCode(handler: Handler) {
    const foods = ["Nut", "Banana", "Cup of Coffee"];

    for (const food of foods) {
        console.log(`Client: Who wants ${food}?`)

        const result = handler.handle(food);
        if (result)
            console.log(result);
        else
            console.log(food + " was left untouched.");
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrel);