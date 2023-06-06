import './style.css';

export default function createInfo(){
    //const basePage=document.createElement('div');
    const divContent= document.getElementById('content');
    const mainID=document.getElementById('main')
    divContent.removeChild(mainID)
    
    let main=document.createElement('main');
    main.innerText="Peppino is a portly Italian chef wearing a black T-shirt, black pants, a white tank top, and a chef's hat. He also has black hair and a small mustache under his long nose. He shows signs of both anger and fear, frequently shifting between the two. He is only shown to be happy when he accomplishes something. He is the owner of Peppino's Pizza, named after himself. The restaurant is implied to be in rough shape, with buckets of water spilled on the floor (with a stray bucket), and pizza sliding off the counter.  As shown in the game's intro, running the restaurant seems to be putting Peppino in a bit of debt, with little to no money shown in the shop. Additionally, in the game's ending, Mr. Stick can be seen running off with a bag of money, behind what is assumed to be Peppino's Pizza. This could be the reason behind Peppino's large amounts of debt.Despite their rivalry,Mr. Stick is still considered to be one of Peppino's friends.";
    //prob should fix this
    main.classList.add('whitetext');
    main.id='main';
    
    divContent.appendChild(main);
    console.log("works");
}