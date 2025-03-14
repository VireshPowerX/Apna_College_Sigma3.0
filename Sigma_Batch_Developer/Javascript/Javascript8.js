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

