"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    area() {
        console.log("Hello");
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
const m = new Rectangle(20, 20);
console.log(m.width);
console.log(m.height);
//# sourceMappingURL=oops.js.map