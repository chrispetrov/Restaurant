import createPage from './page.js';
import './style.css';


const first=createPage();

const divContent= document.getElementById('content');
//this creates the first default page
divContent.appendChild(first)
console.log("this is a test for webpack npx");