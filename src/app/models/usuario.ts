/**
 * Modelo que representa un usuario del sistema.
 * 
 * @interface Usuario
 * @property {string | any} uid - ID único del usuario (puede variar según origen)
 * @property {string} nombre - Nombre del usuario
 * @property {string} apellido - Apellido del usuario
 * @property {number} telefono - Número de teléfono
 * @property {string} username - Nombre de usuario
 * @property {string} email - Correo electrónico
 * @property {string} password - Contraseña
 * @property {string} [confirmPassword] - Confirmación de contraseña (opcional)
 * @property {boolean} [rememberMe] - Recordar sesión (opcional)
 * @property {string} rol - Rol asignado (ej. 'admin', 'user')
 * @property {boolean} activo - Si el usuario está activo o no
 */

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