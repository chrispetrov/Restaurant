import createPage from './page.js';
import './style.css';


const first=createPage();
console.log(first);
const divContent= document.getElementById('content');
console.log(divContent)
divContent.appendChild(first)
console.log("this is a test for webpack npx");