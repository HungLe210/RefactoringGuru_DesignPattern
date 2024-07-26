interface Command {
    execute(): void,
}

class Light {
    private color: string = 'White'
    public turnOn(): void {
        console.log(`${this.color} Light is on!`);
    }
    public turnOff(): void {
        console.log("Light is off!");
    }
    public setColor(color: string): void {
        this.color = color;
    }
}

class LightOnCommand implements Command {
    private light: Light;
    private color: string;
    constructor(light: Light, color: string) {
        this.light = light;
        this.color = color;

    }
    public execute(): void {
        this.light.turnOn();
        this.light.setColor(this.color);
    }
}

class LightOffCommand implements Command {
    private light: Light;
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

function clientCode() {
    const light = new Light();

    //config command 
    const lightOn = new LightOnCommand(light, "Red");
    const lightOff = new LightOffCommand(light);

    const remote = new RemoteControl();

    remote.setCommand(lightOn);
    remote.pressButton();

    remote.setCommand(lightOff);
    remote.pressButton();
}

clientCode();
