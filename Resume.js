const edu=document.querySelector("#edu")
const skills=document.querySelector("#skills")
const contact=document.querySelector("#Contact")
const home=document.querySelector("#Home")
const hobbies=document.querySelector("#hobbies")

const divhome=document.querySelector(".Home")
const divskills=document.querySelector(".Skills")
const divecontact=document.querySelector(".ContactMe")
const divedu=document.querySelector(".Education")
const divhobbies=document.querySelector(".Hobbies")

const body=document.querySelector("body")
const list=document.querySelector(".heading")

contact.addEventListener("click",(event)=>{

    divecontact.scrollIntoView( {behavior: "smooth"});

})

edu.addEventListener("click",(event)=>{

  divedu.scrollIntoView( {behavior: "smooth"});

})

home.addEventListener("click",(event)=>{

  divhome.scrollIntoView( {behavior: "smooth"});

})

skills.addEventListener("click",(event)=>{

  divskills.scrollIntoView( {behavior: "smooth"});

})

hobbies.addEventListener("click",(event)=>{

  divhobbies.scrollIntoView( {behavior: "smooth"});

})

window.addEventListener("scroll", ()=>{
    
list.classList.toggle("wrap", window.scrollY > 640)
    
  });