// GET & POST Request
// // GET is response Data sent in query strings(limited, string data & visible in URL)
// POST is create/write/update Data sent via request body (any type of data)
// mkdir Miscellaneous
// mkdir Frontend Backend
// touch index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GET & POST Requests</title>
</head>
<body>
    <h3>GET Request Form</h3>
    <form method="get" action="http://localhost:8080/register">
    <input placeholder="enter username" name="user"type="text" />
    <input placeholder="enter password" name="password"type="password" />
    <button>Submit</button>
    </form>
    <hr />
    <h3>POST Request Form</h3>
    <form method="post" action="http://localhost:8080/register">
    <input placeholder="enter username" name="user"type="text" />
    <input placeholder="enter password" name="password"type="password" />
    <button>Submit</button>
    </form>
</body>
</html>
// Backend npm init -y npm i express touch index.js
const express = require("express");
const app = express();
const port = 8080;
app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send('standard GET response. Welcome ${user}!');
});
app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`standard POST response. Welcome ${user}!`);
});
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
// Handling POST Requests
// Set up POST route to get some response Parse POST request data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Revisiting js
// Object Oriented Programming OOPS object is class is template is profile
// Object Prototypes
// Prototypes are objects inherit features from one another 
// like single template object that all objects inherit methods and properties from without having their own copy
// arr._proto_(reference) Array.prototype(actual object) String.prototype
// Constructors - doesn't return anything & start with capital
// Classes are group
// touch app.js
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    talk () {
        console.log(`Hi ${this.name}`);
    }
}
let p1 = new Person("AI",22);
let p2 = new Person("Viresh", 25);
// Inheritance create new classes on already existing classes
class Mammal {
    constructor (name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat () {
        console.log("I am eating");
    }
}
class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("woof...");
        eat() {
            console.log("Dog is eating");
        }
    }
}
class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow...");
    }
}
// Miscellaneous > Backend Frontend
// Frontend > index.html app.js
// Backend > index.js
// Oops,recape.txt