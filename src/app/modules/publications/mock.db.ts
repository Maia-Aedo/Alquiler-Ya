import { ALQUILERES_INICIALES } from "src/app/listado/alquileres.json";

export const createNewPublication = (newPubForm: any) => {
    const storedPublications = window.localStorage.getItem('publicaciones');

    let publications = storedPublications
        ? JSON.parse(storedPublications)
        : [...ALQUILERES_INICIALES];

    // 1. Asignar un ID
    const lastId = publications.length > 0 ? publications[publications.length - 1].id : 0;

    // 2. Crear la nueva publicación
    const newPublication = {
        // Copiamos los campos simples del formulario (titulo, precio, imagen, etc.)
        ...newPubForm,

        id: lastId + 1,

        // Asignamos el campo 'lugar' (string simple para la tarjeta) usando la 'ubicacion' del form
        lugar: newPubForm.ubicacion,

        // Sobrescribimos la 'ubicacion' (string) del formulario
        // con el objeto complejo que requiere el tipo Publicacion
        ubicacion: {
            latitud: 0, // Usamos 0 como valor predeterminado
            longitud: 0, // Usamos 0 como valor predeterminado
            direccion: newPubForm.ubicacion // Usamos el texto del formulario aquí
        },

        // Añadimos los campos complejos predeterminados para que coincida con el JSON
        cantidad_habitaciones: 1,
        wifi: false,
        valoracion: 0,
        cantidad_calificaciones: 0,
        descripcion: newPubForm.descripcion || "Publicación creada por usuario.",
        normas: ["No hay normas especiales."],
        propietario: "Usuario Actual",
        opiniones_publicas: [],
        metros_cuadrados: 50,
        disponible: true,
        amueblado: false,
        zona: "usuario",
        servicios: ["Servicio Básico"]
    };

    // 3. Añadir la nueva publicación al array
    publications.push(newPublication);

    // 4. Guardar la lista actualizada en localStorage
    window.localStorage.setItem('publicaciones', JSON.stringify(publications));
};