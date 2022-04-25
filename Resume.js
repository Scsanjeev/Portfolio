const edu=document.querySelector("#edu")
const exp=document.querySelector("#exp")
const contact=document.querySelector("#Contact")
const home=document.querySelector("#Home")

const divhome=document.querySelector(".Home")
const divedu=document.querySelector(".Education")
const divecontact=document.querySelector(".ContactMe")
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
eca.addEventListener("click",(event)=>{

  diveca.scrollIntoView( {behavior: "smooth"});

})
window.addEventListener("scroll", ()=>{
    
list.classList.toggle("wrap", window.scrollY > 300)
    
  });