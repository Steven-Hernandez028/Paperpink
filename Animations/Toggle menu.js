let menu  = document.querySelector("#menu");
var x = window.matchMedia("(max-width: 1350px");
var x2 = window.matchMedia("(min-width: 1351px)")
let ham = document.querySelector(".menu-link");
let side = document.querySelector(".sidebar");

function togglemenu(x){
    if(x.matches){
        menu.classList.toggle("menu-links-hidden");
    }
    if(x2.matches){
      let ad =  document.getElementById("hamburger-visible");
      ad.style.display= "none";
        }


}


togglemenu(x);

document.querySelector('.hamburger-menu').addEventListener('click', ()=>{
    document.querySelector('.container').classList.toggle
    ('change');
})

