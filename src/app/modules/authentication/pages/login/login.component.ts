import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

/**
 * Componente encargado de manejar la lógica de autenticación de usuario.
 * Proporciona un formulario de inicio de sesión e interactúa con el servicio API para validar credenciales.
 * 
 * @component
 */
@Component({
  selector: 'app-login', // Selector del componente en la plantilla
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService], // Proveedor del servicio API
  standalone: false
})
export class LoginComponent {
  /**
   * Formulario reactivo para el inicio de sesión.
   * @type {FormGroup}
   */
  loginForm: FormGroup;

  /**
   * Mensaje de error para mostrar al usuario en caso de fallo en el login.
   * @type {string}
   */
  errorMessage: string = '';

  /**
   * Constructor del componente con inyección de dependencias.
   * @param {FormBuilder} fb - Utilidad para construir formularios reactivos.
   * @param {ApiService} apiService - Servicio que maneja peticiones HTTP hacia la API.
   * @param {Router} router - Enrutador de Angular para navegación.
   */
  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Maneja el envío del formulario de login.
   * Verifica si el formulario es válido y llama al servicio de autenticación.
   * En caso de éxito, guarda el token y redirige al usuario.
   * Si falla, muestra un mensaje de error.
   * 
   * @returns {void}
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.apiService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          this.apiService.generateJWT(response.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error al iniciar sesión', err);
          this.errorMessage = 'Credenciales incorrectas o servidor no responde.';
        }
      });
    }
  }
}
