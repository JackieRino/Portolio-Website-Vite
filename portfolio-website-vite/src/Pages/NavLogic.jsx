import { useState } from "react"
import Home from "./Home";
import { Contact } from "./Contact";


export function NavLogic (){
const homePage= <Home/>;
const contactPage= <Contact/>;

const [buttonClicked, setButtonClicked] = useState("Home");

const pages= [{buttonName:"Home", component: homePage},
             {buttonName:"Contact", component: contactPage}
]

function selectPage(event){

    console.log(setButtonClicked(event.target.value));
}

  return (
   <>
   
   <button value="Home" onClick={(event)=>selectPage(event)}>Home</button>
    <button value="Contact" onClick={(event)=>selectPage(event)}>Contact</button>

    {pages.map(page=>{ if(buttonClicked=== page.buttonName){return page.component}})}

   </>
  )
}


