interface Shape {
    draw(x: number, y: number, color: string): void;
} // extrinsic state

class Circle implements Shape {
    private radius: number = 5;  // intrinsic state
    draw(x: number, y: number, color: string): void {
        console.log(`Drawing a circle at (${x}, ${y}) with color ${color} and radius ${this.radius}`);
    }
}

class ShapeFactory {
    private static circleMap: Map<string, Circle> = new Map();
    static getCircle(color: string): Circle {
        let circle = this.circleMap.get(color);

        if (!circle) {
            circle = new Circle();
            this.circleMap.set(color, circle);
            console.log(`Creating a circle of color: ${color}`);
        } else console.log(`sReusing ${color} circle object.`)

        return circle;
    }
}

function clientCode() {
    const color = ['Red', 'Green', 'Blue', 'White', 'Black'];

    for (let i = 0; i < 10; i++) {
        const circle = ShapeFactory.getCircle(color[i % color.length]);
        circle.draw(i * 10, i * 1, color[i % color.length]);
    }
}

clientCode();