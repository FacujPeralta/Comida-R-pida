document.addEventListener("DOMContentLoaded", function() {
    const comidas = [
        { nombre: "Empanadas de Jamón y Queso", receta: "Agarrar rollitos de jamón y queso fileteado y picarlos, luego ponerlos en el centro, doblar la masa y sella los bordes. Hornea hasta que estén doradas (aprox 20min)." },

        { nombre: "Carne al Horno con Papas", receta: "Coloca carne y condimentar a gusto (oregano, pimienta, ajo, etc.) agregar papas cortadas en cubo en una bandeja  y hornea a 180°C. (El tiempo dependera del corte de carne se estima de 30 a 45 minutos." },
    
        { nombre: "Fideos con Salsa de Tomate", receta: "Cocina la pasta y mézclala con salsa de tomate. Espolvorea queso parmesano por encima / Receta de la salsa:Salsa de tomate, cebolla, carne picada y condimentos a gusto."},

        { nombre: "Arroz con Pollo", receta: "Cocina el pollo y las verduras en una sartén, agrega el arroz y el caldo, cocina hasta que el arroz esté tierno." },

        { nombre: "Papas Fritas", receta: "Corta las papas en tiras, fríelas en aceite caliente hasta que estén doradas y escúrrelas." },

        { nombre: "Hamburguesas Caseras", receta: "Forma hamburguesas con carne molida, ásalas en una sartén caliente. Coloca en el pan con lechuga, tomate, cebolla, ketchup y mostaza." },

        { nombre: "Pollo a la Parrilla", receta: "Vas y compras el pollo y lo hazas en la parrilla hasta que este cocido, ojo llevalo fresco no vaya a ser cosa que se te pase (pocas brazas si la parrilla el baja y medilas si la parrilla es media alta.)" },

        { nombre: "Pizza Casera", receta: "Extiende salsa de tomate sobre una base de pizza, agrega mozzarella y tus ingredientes favoritos. Hornea hasta que esté doradita." },

        { nombre: "Lasagna", receta: "Alterna capas de pasta, carne picada, salsa de tomate y queso ricotta (mucho en lo posible para que este más rico). Hornea hasta que esté burbujeante y dorada."},

        { nombre: "Milanesas con Puré", receta: "Calentar aceite y poner las milanesas (no tardan más de 5 minutos por lado) luego para el puré corta las papas en cubos y ponelas a hervir en agua, dejalas al rededor de 20 minutos y luego retirar y aplastar con un pisa papa / batidora."},

        {
          nombre: "Panchos", receta: "Poner las salchicas a hervir durante 10 o 15 minutos dependiendo el gusto de cada uno, luego retirarlas y colocarlas dentro del pan que se va a utilizar y agregar aderezos que más les guste. (infaltable las papitas de copetin arriba)."
        },

        { nombre: "zapallitos rellenos", receta: "Cortar la parte superior del zapallito y vaciarlo por dentro. Agregar carne picada, verduras a gusto, hornear a 180° "},
        { nombre: "Ravioles", receta: "Agregar agua en una olla y dejarla hervir (Que este bien caliente) agregarle sal a gusto y un chorrito de aceite para que las pastas no se peguen entre sí, agregar las pastas y revolver sin parar entre 5 y 10 minutos."},

        { nombre: "Ñoquis", receta: "Agregar agua en una olla y dejarla hervir (Que este bien caliente) agregarle sal a gusto y un chorrito de aceite para que las pastas no se peguen entre sí, agregar las pastas y revolver sin parar entre 5 y 10 minutos."},

        {nombre: "Canelones", receta: "Picar acelga y cebolla, dorarlas en una olla durante 5 minutos luego agregarle ricota y huevos hervidos y batir, luego le pones queso rallado y condimentos a gusto. A eso lo pones dentro de los panqueques enrollas y a comer! "},
    ];

    const generarComidaBtn = document.getElementById("generarComida");
    const limpiarPantallaBtn = document.getElementById("limpiarPantalla");
    const comidaYRecetaDiv = document.getElementById("comidaYReceta");
    const comidaSeleccionada = document.getElementById("comidaSeleccionada");
    const recetaSeleccionada = document.getElementById("recetaSeleccionada");

    generarComidaBtn.addEventListener("click", function() {
        const comidaAleatoria = comidas[Math.floor(Math.random() * comidas.length)];
        comidaSeleccionada.textContent = comidaAleatoria.nombre;
        recetaSeleccionada.textContent = comidaAleatoria.receta;
        comidaYRecetaDiv.style.display = "block";
    });

    limpiarPantallaBtn.addEventListener("click", function() {
        comidaSeleccionada.textContent = "";
        recetaSeleccionada.textContent = "";
        comidaYRecetaDiv.style.display = "none";
    });
});