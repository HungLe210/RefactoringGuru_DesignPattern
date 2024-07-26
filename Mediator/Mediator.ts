// Mediator Interface
interface Mediator {
    send(message: string, colleague: Colleague): void;
}

// Colleague Interface
interface Colleague {
    setMediator(mediator: Mediator): void;
    receive(message: string): void;
}

// Concrete Mediator
class ChatRoom implements Mediator {
    private users: Map<string, Colleague> = new Map();

    public addUser(user: Colleague, name: string) {
        this.users.set(name, user);
        user.setMediator(this);
        console.log("Chat Room entries: ", this.users.entries());
    }

    public send(message: string, colleague: Colleague): void {
        const colleagueName = Array.from(this.users.entries()).find(([_, user]) => user === colleague)?.[0];
        if (colleagueName) {
            for (const [name, user] of this.users.entries()) {
                if (name !== colleagueName) {
                    user.receive(message);
                }
            }
        }
    }
}

// Concrete Colleague
class User implements Colleague {
    private mediator!: Mediator;
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    public send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.send(message, this);
    }

    public receive(message: string): void {
        console.log(`${this.name} receives: ${message}`);
    }
}

// Client code
const chatRoom = new ChatRoom();

const alice = new User('Alice');
const bob = new User('Bob');
const charlie = new User('Charlie');

console.log("Alice Object:", alice);

chatRoom.addUser(alice, 'Alice');
chatRoom.addUser(bob, 'Bob');
chatRoom.addUser(charlie, 'Charlie');

console.log("Chat Room object: ", chatRoom);
alice.send('Hello, everyone!');
bob.send('Hi Alice!');
charlie.send('Hey, Bob and Alice!');
