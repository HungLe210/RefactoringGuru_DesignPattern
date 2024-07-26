class Player {
    private state: State;

    constructor() {
        this.state = new StoppedState(); // Initial state
    }

    public setState(state: State): void {
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }

    public play(): void {
        this.state.play(this);
    }

    public pause(): void {
        this.state.pause(this);
    }

    public stop(): void {
        this.state.stop(this);
    }
}

interface State {
    play(player: Player): void;
    pause(player: Player): void;
    stop(player: Player): void;
    notify(): string;
}

class PlayingState implements State {
    protected noti: string = "State: PLAYING"
    public play(player: Player): void {
        console.log('Player is already playing.');
    }

    public pause(player: Player): void {
        console.log('Player is pausing.');
        player.setState(new PausedState());
        console.log(player.getState().notify());

    }

    public stop(player: Player): void {
        console.log('Player is changing from play to stop.');
        player.setState(new StoppedState());
        console.log(player.getState().notify());
    }

    public notify(): string {
        return this.noti;
    }
}

class PausedState implements State {
    protected noti: string = "STATE: PAUSED"
    public play(player: Player): void {
        console.log('Player is resuming.');
        player.setState(new PlayingState());
        console.log(player.getState().notify());
    }

    public pause(player: Player): void {
        console.log('Player is already paused.');
    }

    public stop(player: Player): void {
        console.log('Player is stopping from pause.');
        player.setState(new StoppedState());
        console.log(player.getState().notify());
    }

    public notify(): string {
        return this.noti;
    }
}

class StoppedState implements State {
    protected noti: string = "State: STOPPED!!!";
    public play(player: Player): void {
        console.log('Player is changing stop to play State');
        player.setState(new PlayingState());
        console.log(player.getState().notify());
    }

    public pause(player: Player): void {
        console.log('Player cannot pause. It is stopped.');
    }

    public stop(player: Player): void {
        console.log('Player is already stopped.');
    }
    public notify(): string {
        return this.noti;
    }
}


const player = new Player();

player.play();   // Output: Player is starting to play.
player.pause();  // Output: Player is pausing.
player.play();   // Output: Player is resuming.
player.stop();   // Output: Player is stopping.
player.pause();  // Output: Player cannot pause. It is stopped.
