const edu=document.querySelector("#edu")
const exp=document.querySelector("#exp")
const eca=document.querySelector("#eca")
const diveca=document.querySelector(".ECA")
const body=document.querySelector("body")
const list=document.querySelector(".heading")

eca.addEventListener("click",(event)=>{

    diveca.scrollIntoView( {behavior: "smooth"});

})
window.addEventListener("scroll", ()=>{
    
list.classList.toggle("wrap", window.scrollY > 0)
    
  });