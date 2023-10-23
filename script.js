var opcionesVisible = false; 

document.getElementById("mostrarComida").addEventListener("click", function() {
    var opciones = document.getElementsByClassName("opcion");
    for (var i = 0; i < opciones.length; i++) {
        if (opcionesVisible) {
            opciones[i].style.display = "none";
        } else {
            opciones[i].style.display = "block";
            opciones[i].addEventListener("click", function() {
                var comida = this.textContent;
                var recetas = obtenerRecetas();
                var receta = recetas[comida];
                document.getElementById("recetaComida").textContent = receta;
            });
        }
    }
    opcionesVisible = !opcionesVisible;
});
document.getElementById("limpiarPantalla").addEventListener("click", function() {
    var opciones = document.getElementsByClassName("opcion");
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].style.display = "none";
    }
    document.getElementById("resultadoComida").textContent = "";
    document.getElementById("recetaComida").textContent = "";
});