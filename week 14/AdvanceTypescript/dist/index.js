"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userObject = {
    "Parth": 20,
    "Harkirat": 30
};
//Map
const user = new Map();
user.set("Parth", { name: "aditya", age: 20 });
user.set("Harkirat", { name: "kirat", age: 20 });
const users = user.get("Parth");
console.log(users);
//# sourceMappingURL=index.js.map