console.log("hello ", 5, ' World!')

class Color{
    constructor(r, g, b) {
        this.red = r;
        this.green = g;
        this.blue = b;
    }

    toString() {
        return (`(${this.red}, ${this.green}, ${this.blue})`)
    }
}

const color = new Color(25, 93, 129)
console.log(color.toString());