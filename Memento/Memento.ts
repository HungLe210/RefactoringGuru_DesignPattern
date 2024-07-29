interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

class ConcreateMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString();
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }

    public getDate(): string {
        return this.date;
    }
}


//Originator Class
class TextEditor {
    private state: string;
    constructor(state: string = '') {
        this.state = state;
    }
    public type(words: string): void {
        this.state += words;
    }

    public save(): Memento {
        return new ConcreateMemento(this.state);
    }
    public restore(memento: Memento): void {
        this.state = memento.getState();
    }
    public getState(): string {
        return this.state;
    }
}

class customHistory {
    private mementos: Memento[] = [];
    private originator: TextEditor;

    constructor(originator: TextEditor) {
        this.originator = originator;
    }
    public save(): void {
        console.log('History: Saving state...');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento: Memento | undefined = this.mementos.pop();
        if (memento) {
            console.log('History : Restoring state...');
            this.originator.restore(memento)
        }
    }

    public showHistory(): void {
        console.log('History: Here\'s the list of mementos');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const editor = new TextEditor();
const customhistory = new customHistory(editor);

editor.type('Hello, ');
customhistory.save();

editor.type('world!');
customhistory.save();

editor.type(' This is an example of Memento Pattern.');
console.log('Current State:', editor.getState());

customhistory.undo();
console.log('State after undo:', editor.getState());

customhistory.undo();
console.log('State after another undo:', editor.getState());