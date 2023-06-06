import createPage from './page.js';
import './style.css';
import createMenu from './menu.js';
import createInfo from './info.js';
import Icon from '../src/jumpscare.jpg';


let head=document.createElement('header');
head.innerText="Peppinos Pizza";
head.classList.add('whitetext');
let first=createPage();
let button1=document.createElement('div');
let button2=document.createElement('div');
let button3=document.createElement('div');
button1.innerText='MENU';
button2.innerText='INFO';
button3.innerText='ESCAPE';
button1.classList.add('whitetext','buttons','menu');
button2.classList.add('whitetext','buttons','info');
button3.classList.add('whitetext','buttons','escape');

button1.addEventListener('click', createMenu);
button2.addEventListener('click', createInfo);
button3.addEventListener('click', jumpScare);
const divContent= document.getElementById('content');
//this creates the first default page
let bod=document.body;
divContent.appendChild(head);
divContent.appendChild(button1);
divContent.appendChild(button2);
divContent.appendChild(button3);
divContent.appendChild(first);
//
const myIcon = new Image();
myIcon.src = Icon;






//

function jumpScare(){
    bod.innerHTML='<audio id="audio" src="../src/sound.mp3" autostart="false" ></audio>';
    var sound = document.getElementById("audio");
   sound.play();
   
    bod.style.background="url(../src/jumpscare.jpg)";
   bod.style.backgroundSize='cover';
   
}
