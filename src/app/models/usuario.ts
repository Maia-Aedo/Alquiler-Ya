export interface Usuario {
    uid: string | any;

    nombre: string;
    segundonombre?: string;
    apellido: string;

    telefono: number;
    segundotelefono?: number;

    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    rememberMe?: boolean;

    rol: string;
    activo: boolean;
}