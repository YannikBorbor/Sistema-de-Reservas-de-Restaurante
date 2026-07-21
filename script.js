const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    alert("✅ ¡Reserva realizada con éxito!");

    formulario.reset();
});