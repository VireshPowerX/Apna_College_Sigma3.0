// library is a colollection of pre-written code to perform tasks eg :- axios
// framework is a set of pre-written code to provide structure for developing software applications eg :- express
// npm init 
// npm install express
// touch index.js
// Ports endpoints of a network connection for web server and web client
const express = require('express');
const app = express();
console.log(app);
let port = 3000; // 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// node index.js so the server continue start for stop Ctrl + C
// so server start in browser we use localhost
app.use((req, res) => {
    res.send('Hello World'); // send response to client
    // object, html, array can send res to see page
});
// routing path across mutliple network networks
// eg :- google.com/search where /search is route
app.get("/", (req,res) => {
    res.send("Welcome to Homepage");
})
app.get("/about", (req,res) => {
    res.send("Welcome to About Page");
})
app.get("*", (req,res) => {
    res.send("Page Not Found");
})
// POST method for form submission
 app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Form Submitted");
})
// everytime server restart
// install nodemon
// npm install -g nodemon
// nodemon index.js
app.get("/:username", (req, res) => {
    res.send(`Welcome ${req.params.username}`);
}) // localhost:3000/hello
// query strings
 app.get("/search", (req, res) => {
    console.log(req.query);
    if(!q) {
        res.send("No Search Query");
        return;
    }
    res.send("Search Results");
}) // localhost:3000/search?q=hello&planet=earth