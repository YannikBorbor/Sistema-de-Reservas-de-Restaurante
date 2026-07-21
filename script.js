const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    alert("✅ ¡Reserva realizada con éxito!");

    formulario.reset();
});

const formOpinion = document.getElementById("formOpinion");

formOpinion.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombreCliente").value;

    const estrellas = document.getElementById("calificacion").value;

    const comentario = document.getElementById("comentario").value;

    const nuevaOpinion = document.createElement("div");

    nuevaOpinion.className = "opinion";

    nuevaOpinion.innerHTML = `
        <h4>${estrellas} ${nombre}</h4>
        <p>${comentario}</p>
    `;

    document.getElementById("listaOpiniones").prepend(nuevaOpinion);

    formOpinion.reset();

    alert("🎉 ¡Gracias por compartir tu opinión!");

});

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        btnArriba.style.display = "block";
    }else{
        btnArriba.style.display = "none";
    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
