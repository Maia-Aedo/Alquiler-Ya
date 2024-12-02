export interface Usuario {
    uid: string | any;

    nombre: string;
    apellido: string;

    telefono: number;

    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
    rememberMe?: boolean;

    rol: string;
    activo: boolean;
}