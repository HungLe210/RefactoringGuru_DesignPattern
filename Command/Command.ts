interface Command {
    execute(): void,
}

class Light {
    private color: string | undefined;
    public turnOn(): void {
        console.log(`${this.color ? this.color : ''} Light is on!`);
    }
    public turnOff(): void {
        console.log(`${this.color ? this.color : ''} Light is off!`);
    }
    public setColor(color: string): void {
        this.color = color;
    }
}

class LightOnCommand implements Command {
    private light: Light;
    private color: string = '';
    constructor(light: Light, color?: string) {
        this.light = light;
        if (color)
            this.color = color;

    }
    public execute(): void {
        this.light.setColor(this.color);
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;
    private color: string | undefined;
    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOff();
    }
}

class RemoteControl {  //Invoker
    private command!: Command;
    public setCommand(command: Command): void {
        this.command = command;
    }
    public pressButton(): void {
        this.command.execute();
    }
}


const light = new Light();

//config command 
const lightOn = new LightOnCommand(light, "RED");
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton();
remote.setCommand(lightOff);
remote.pressButton();

