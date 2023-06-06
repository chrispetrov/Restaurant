import './style.css';

export default function createMenu(){
    
    const divContent= document.getElementById('content');
    const mainID=document.getElementById('main')
    divContent.removeChild(mainID)
    
    let main=document.createElement('main');
    main.innerHTML= "<ul><li>Pepperoni  Pizza</li><li>Pineapple  Pizza</li><li>Brunos  Salad</li><li id='dashed'>Noises  favorite</li><li class='large'>BEANS</li></ul>"
    //prob should fix this
    main.classList.add('whitetext','menu-items');
    main.id='main';
    
    divContent.appendChild(main);
    console.log("works");
    
}