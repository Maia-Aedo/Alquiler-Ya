export interface Usuario {
    uid: string;

    cuit: number;
    nombre: string;
    segundonombre?: string;
    apellido: string;

    telefono: number;
    segundotelefono?: number;
    correo: string;
    contrasena: string;

    rol: string;
    activo: boolean;
}
