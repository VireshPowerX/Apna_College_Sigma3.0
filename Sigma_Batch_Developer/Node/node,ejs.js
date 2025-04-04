// ejs embedded javascript templates
// mkdir EJSdir
// npm install -y package templates
// npm i express
// npm i ejs
// touch index.js
const express = require("express");
const app = express();
const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
// nodemon index.js
app.set("view engine", "ejs");
app.get("/", (req,res) => {
    res.send("this is home");
    res.render("home.ejs");
});
// mkdir views (default folder)
// touch home.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home Page</title>
</head>
<body>
    <h1>Home Page for website</h1>
    <p>Home Paragraph for AI</p>
    <button>Click Me</button>
</body>
</html>
// cd ..
// nodemon EJSdir/index.js
app.get("/hello", (req,res) => {
    res.send("Hello AI");
});
// localhost:8080/hello
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
// localhost:8080
// website ejs.co
<h1>This is the home page 1 * 2</h1>
<h1><%= ["hello", "bonjaou", "namaste"][2] "ai".toUpperCase() 1 * 2 </h1>
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.rander("rolldice", { diceVal });
});
// touch rolldice.ejs
<h1>Dice value was : <%= diceVal %> </h1>
<% if(diceVal == 6) { %>
    <h2>Nice! Roll dice again.</h2>
<% } %>
app.get("/ig/:username", (req, res) => {
    const followers = ["Fauna", "Viresh", "Flora"];
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers });
});
// touch instagram.ejs
<h2>This page belongs to <%= username %></h2>
<button>Follow</button>
<button>Message</button>
<ul>
    <% for(let username of followers) { %>
    <li> <%= username %> </li>
    <% } %>
</ul>
app.get("/gt/:username", (req, res) => {
    let { username } = req.params;
    const gitData = require("./data,ejs.json");
    const data = gitData[username];
    if (data) {
    res.render("github.ejs", { data });
    } else {
        res.rander("error.ejs");
    }
});
// touch error.ejs
<h1>No such Account</h1>
// touch github.ejs
<style> img { height:100px; width:100px; } </style>
<h2> This page belongs to <%= data.name %> </h2>
<button> Follow </button>
<button> Message </button>
<p>
    Followers : <%= data.followers %> &nbsp;&nbsp;&nbsp;&nbsp; Following : <%= data.following %>
</p>
<hr />
<% for(let post of data.post) { %>
    <img src="<%= post.image %>" alt="some img" />
    <p>
        Likes : <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp; comments : <%= post.comments%>
    </p>
<% } %>
// mkdir public
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
// in public folder mkdir css js
// touch style.css app.js
body{background-color:pink;}
img{height:100px; width:100px;}
const btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
    });
};
// github.ejs
<link rel="stylesheet" href="/style.css"></link>
<style src="/app.js"></style>
// EJSdir > node_modules, public, views, data.json index.js package-lock.json package.json
// public > [css > style.css, js > app.js]
// views > includes error.ejs home.ejs instagram.ejs github.ejs rolldice.ejs
// github.ejs its <!DOCTYPE to </head> cut
// views > includes > head.ejs footer.ejs
// paste head.ejs </html>
// footer.ejs
<div style="background-color: lightblue">Contact us at : hello@abc <bt /> Phone no. - +91 xxxxxxxxxx</div>
// github.ejs
<%- include("/includes/head.ejs")%>
<%- include("/includes/footer.ejs")%>
// same to error.ejs rolldice.ejs