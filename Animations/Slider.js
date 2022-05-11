let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")

let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 9500;


function Funcioncheck(x) {
    if (x.matches) {


        window.addEventListener("resize", function () {
            width = sliderIndividual[0].clientWidth;
        })

        setInterval(function () {
            slides();
        }, intervalo);



        function slides() {
            slider.style.transform = "translate(" + (-width) + "px)";
            slider.style.transition = "transform .8s";
            contador++;

            if (contador == sliderIndividual.length) {
                setTimeout(function () {
                    slider.style.transform = "translate(0px)";
                    slider.style.transition = "transform .8s";
                    contador = 1;
                }, 4500)
            }
        }
    }
}

var x= window.matchMedia("(max-width:1100px)");
Funcioncheck(x);
