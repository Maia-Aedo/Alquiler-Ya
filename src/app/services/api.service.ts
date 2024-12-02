import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HttpClient está incluido y disseñado para trabajar con angular especialmente para inyecciones de dependencias.
 * Utiliza observables para manejar respuestas
 */

@Injectable({
  providedIn: 'root', // El servicio estará disponible en toda la aplicación
})

export class ApiService {
    // URL BASE
  private apiUrl = 'https://alquiler-ya-api.onrender.com';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, data);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  generateJWT(token: string): void {
    localStorage.setItem('authToken', token);
  }

  authenticateJWT(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
