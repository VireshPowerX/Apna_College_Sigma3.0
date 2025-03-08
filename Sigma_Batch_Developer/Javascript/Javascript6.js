// this. is a keyword use for to get data outer obj
const student = { // student is object
    name: "Fauna", // name is key, Fauna is value
    age: 18, // object property
    sci: 91,
    math: 96,
    phy: 99,
    getAvg() {let avg = Math.floor((this.sci + this.math + this.phy) / 3); // getAvg() {...} is method, this keyword is object
        console.log(`${this.name} got average marks = ${avg}`); // this keyword is variable
    }
};
student.getAvg();

//try & catch