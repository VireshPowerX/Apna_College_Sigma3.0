<<<<<<< HEAD
// variable and data-types if-else statements loops object literals functions now we merge this js with html and css
// Dom Document object model logical tree
// every html element convert into object js
console.dir(document.all);
document.getElementById("input");
document.getElementsByClassName("image"); // a HTML Collection we got its similar to array but we can't use array methods
document.getElementsByTagName("p");
document.querySelector('div p'); // for first div paragraph return
document.querySelector('#myId');
document.querySelector('.myClass');
document.querySelectorAll("p");
p.innerText; // Shows the visible text contained in a node
p.innerHTML; // Shows all the full text (display:hidden seen)
p.textContent; // Shows the full markup (bold italic seen)
=======
document.getAttribute('id');
document.setAttribute('id','myid');
document.setAttribute('src',"imagepath");
let heading = document.querySelector('h1');
heading.style.color = 'red';
let links = document.querySelectorAll(".box a");
for(link of links) {
    link.style.color = "purple";
};
for(let i = 0; i < links.length; i++) {
    links[i].style.color = "pink";
};
let img = document.querySelector('id');
img.classList;
 img.classList.add('myclass');
 img.classList.remove('myclass');
 img.classList.contains('myclass');  // returns true/false
 img.classList.toggle('myclass'); // if its not its add or remove
 img.parentElement;
 img.children;
 img.childElementCount;
 img.children[1].previousElementSibling;
 img.nextElementSibling;
 let btn = document.createElement('button');
 btn.innerHTML= "New Button !!!";
 let p = document.querySelector('p');
 p.insertAdjacentElement('beforebegin',btn);
 p.insertAdjacentElement('afterbegin',btn);
 p.insertAdjacentElement('beforeend',btn);
 p.insertAdjacentElement('afterend',btn);
let body = document.querySelector('body');
body.removeChild(btn);
p.insertAdjacentElement("afterend",btn);
btn.remove();
p.remove();
body.remove();
>>>>>>> b6d5d9ecc1f15c3d604cd3f7218586a3327caf2b
