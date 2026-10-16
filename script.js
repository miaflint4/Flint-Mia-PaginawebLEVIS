
document.addEventListener("DOMContentLoaded", function () {

    const botonesProducto = document.querySelectorAll(
        ".boton-producto"
    );

    botonesProducto.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const tarjeta = boton.closest(".card");
            const titulo = tarjeta.querySelector("h3");
            const descripcion = tarjeta.querySelector("p");

            if (titulo && descripcion) {
                alert(
                    titulo.textContent + "\n\n" +
                    descripcion.textContent
                );
            }
        });
    });


    const buscador = document.getElementById("buscarProducto");
    const limpiarBusqueda = document.getElementById("limpiarBusqueda");
    const resultadoBusqueda = document.getElementById("resultadoBusqueda");
    const sinResultados = document.getElementById("sinResultados");

    function filtrarProductos() {
        const texto = buscador.value.trim().toLowerCase();

        const productos = document.querySelectorAll(
            "#listaProductos .card"
        );

        let cantidad = 0;

        productos.forEach(function (producto) {
            const contenido = producto.textContent.toLowerCase();
            const coincide = contenido.includes(texto);

            producto.hidden = !coincide;

            if (coincide) {
                cantidad++;
            }
        });

        if (texto === "") {
            resultadoBusqueda.textContent = "";
        } else {
            resultadoBusqueda.textContent =
                cantidad === 1
                    ? "Se encontró 1 producto."
                    : "Se encontraron " + cantidad + " productos.";
        }

        sinResultados.hidden = cantidad !== 0;
    }

    buscador.addEventListener("input", filtrarProductos);

    limpiarBusqueda.addEventListener("click", function () {
        buscador.value = "";
        filtrarProductos();
        buscador.focus();
    });


    const botonesFavoritos = document.querySelectorAll(
        ".boton-favorito"
    );

    const contadorFavoritos = document.getElementById(
        "contadorFavoritos"
    );

    let cantidadFavoritos = 0;

    botonesFavoritos.forEach(function (boton) {
        boton.addEventListener("click", function () {

            const tarjeta = boton.closest(".card");

            if (boton.dataset.favorito === "si") {
                boton.dataset.favorito = "no";
                boton.textContent = "♡ Agregar a favoritos";
                tarjeta.classList.remove("es-favorito");
                cantidadFavoritos--;
            } else {
                boton.dataset.favorito = "si";
                boton.textContent = "♥ Quitar de favoritos";
                tarjeta.classList.add("es-favorito");
                cantidadFavoritos++;
            }

            contadorFavoritos.textContent =
                "Favoritos seleccionados: " + cantidadFavoritos;
        });
    });


    const opcionesMenu = document.querySelectorAll(
        "[data-categoria]"
    );

    opcionesMenu.forEach(function (opcion) {
        opcion.addEventListener("click", function () {
            const categoria = opcion.dataset.categoria;

            const nombres = {
                hombre: "HOMBRE",
                mujer: "MUJER",
                ninos: "NIÑOS"
            };

            alert(
                "Seleccionaste " + nombres[categoria] +
                ". En esta página se muestran los productos más buscados."
            );
        });
    });


    const horaActual = document.getElementById("horaActual");

    function actualizarReloj() {
        const ahora = new Date();

        horaActual.textContent = ahora.toLocaleTimeString(
            "es-AR",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );
    }

    actualizarReloj();
    setInterval(actualizarReloj, 1000);


    const formulario = document.getElementById(
        "formulario-contacto"
    );

    const mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre")
            .value.trim();

        const email = document.getElementById("email")
            .value.trim();

        const consulta = document.getElementById("consulta")
            .value.trim();

        if (!nombre || !email || !consulta) {
            mensaje.style.color = "#c41230";
            mensaje.textContent =
                "Por favor, completá todos los campos.";
            return;
        }

        mensaje.style.color = "#176b37";
        mensaje.textContent =
            "¡Gracias, " + nombre +
            "! Tu consulta se completó correctamente.";

        formulario.reset();
    });

    const botonArriba = document.getElementById("volverArriba");

    function controlarBotonArriba() {
        botonArriba.style.display =
            window.scrollY > 300 ? "block" : "none";
    }

    window.addEventListener("scroll", controlarBotonArriba);

    botonArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
