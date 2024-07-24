class Singleton {
    private static instance: Singleton;

    public data: String;

    private constructor(data: string) {
        this.data = data;
    }

    public static getInstance(data: string): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(data);
        }
        return Singleton.instance;
    }

    public setData(data: string) {
        this.data = data;
    }
}

function clientCode() {
    const singleton = Singleton.getInstance('Initial Data');

    console.log(singleton.data);

    singleton.setData('Updated Data');

    const singletonSub = Singleton.getInstance('Another Data');
    console.log(singletonSub.data);
    console.log(singleton === singletonSub);
}

clientCode();