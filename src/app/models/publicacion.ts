import { Opinion } from "./opinion";
import { UbicacionDetalle } from "./ubicacion-detalle";

export interface Publicacion {
    // Campos utilizados en el listado y el formulario
    id: number;
    titulo: string;
    lugar: string;
    precio: number;
    imagen: string;

    cantidad_habitaciones: number;
    wifi: boolean;
    valoracion: number;
    cantidad_calificaciones: number;
    descripcion: string;
    normas: string[];
    propietario: string;
    descripcion_propietario: string;
    opiniones_publicas: Opinion[];
    zona: string;
    disponible: boolean;
    amueblado: boolean;
    ubicacion: UbicacionDetalle;
    metros_cuadrados: number;
    servicios: string[];
}