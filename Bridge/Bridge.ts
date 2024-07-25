interface Device {
    name: string,
    isEnable(): boolean,
    enable(): void,
    disable(): void,

}

class TV implements Device {
    private on: boolean = false;
    public name: string = "TV";
    isEnable(): boolean {
        return this.on;
    }
    enable(): void {
        this.on = true;
    }
    disable(): void {
        this.on = false;
    }
}

class Radio implements Device {
    private on: boolean = false;
    public name: string = "Radio";
    isEnable(): boolean {
        return this.on;
    }
    enable(): void {
        this.on = true;
    }
    disable(): void {
        this.on = false;
    }
}

class Remote {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public TogglePowerButton(): void {
        if (this.device.isEnable() == true) {
            this.device.disable()
            console.log("Turn off this " + this.device.name)
        }
        else {
            this.device.enable()
            console.log("Turn on this " + this.device.name)
        }
    }
}

class AdvancedRemote extends Remote {
    mute(): void {
        console.log(this.device.name + " is muted!");
    }
}

function clientCode() {
    const tv = new TV();
    const remote = new Remote(tv);
    remote.TogglePowerButton();

    const radio = new Radio();
    const advancedRemote = new AdvancedRemote(radio);
    advancedRemote.TogglePowerButton();
    advancedRemote.mute();
    advancedRemote.TogglePowerButton();
    remote.TogglePowerButton();
}

clientCode();