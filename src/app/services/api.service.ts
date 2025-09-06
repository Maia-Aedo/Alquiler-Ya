import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HttpClient está incluido y disseñado para trabajar con angular especialmente para inyecciones de dependencias.
 * Utiliza observables para manejar respuestas.
 * También gestiona autenticación mediante JWT
 */

@Injectable({
  providedIn: 'root', // El servicio estará disponible en toda la aplicación
})

export class ApiService {
    /**
   * URL base de la API
   * @private
   * @type {string}
   */
  private apiUrl = 'http://localhost:3000/api';

  /**
   * Constructor con inyección de dependencia de HttpClient.
   * @param {HttpClient} http - Cliente HTTP proporcionado por Angular
   */
  constructor(private http: HttpClient) {}

  /**
   * Registra un nuevo usuario en la API.
   * @param {any} data - Datos del usuario a registrar
   * @returns {Observable<any>} Observable con la respuesta de la API
   */
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, data);
  }

  /**
   * Inicia sesión con nombre de usuario y contraseña.
   * @param {string} username - Nombre de usuario o correo electrónico
   * @param {string} password - Contraseña del usuario
   * @returns {Observable<any>} Observable con el token JWT u otros datos de autenticación
   */
  login(username: string, password: string): Observable<any> {
  const body = { username, password }; // Usa "email" o "username", dependiendo de tu API
  return this.http.post(`${this.apiUrl}/users/login`, body, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

/**
   * Guarda el token JWT en el almacenamiento local del navegador.
   * @param {string} token - Token JWT recibido del servidor
   * @returns {void}
   */
  generateJWT(token: string): void {
    localStorage.setItem('authToken', token);
  }

  /**
   * Obtiene el token JWT almacenado, si existe.
   * @returns {string|null} Token JWT o `null` si no existe
   */
  authenticateJWT(): string | null {
    return localStorage.getItem('authToken');
  }
  
  /**
   * Elimina el token JWT del almacenamiento local, cerrando sesión del usuario.
   * @returns {void}
   */
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
