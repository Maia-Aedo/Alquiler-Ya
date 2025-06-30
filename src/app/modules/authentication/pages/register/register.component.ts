import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

/**
 * Componente responsable del registro de nuevos usuarios en la aplicación.
 * Proporciona un formulario validado para enviar los datos del nuevo usuario al servidor.
 *
 * @component
 */
@Component({
  selector: 'app-register', // Selector utilizado en la plantilla HTML
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService],
  standalone: false
})
export class RegisterComponent implements OnInit {
  /**
   * Formulario reactivo para capturar los datos del usuario.
   * @type {FormGroup}
   */
  registerForm: FormGroup;

  /**
   * Mensaje de error para mostrar si falla el proceso de registro.
   * @type {string}
   */
  errorMessage: string = '';

  /**
   * Constructor del componente. Utiliza inyección de dependencias para construir el formulario,
   * acceder al servicio de API y manejar la navegación.
   * 
   * @param {FormBuilder} fb - Utilidad para construir formularios reactivos.
   * @param {ApiService} apiService - Servicio que comunica con el backend.
   * @param {Router} router - Servicio para redirigir entre rutas.
   */
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required],
      celular: ['', Validators.required],
      tipo_usuario: ['cliente', Validators.required]
    });
  }

  /**
   * Método del ciclo de vida que se ejecuta al iniciar el componente.
   * En este caso, no realiza ninguna acción específica.
   * 
   * @returns {void}
   */
  ngOnInit(): void { }

  /**
   * Maneja el envío del formulario de registro. Si es válido, se envían los datos
   * al servidor. En caso de éxito se redirige al login, en caso de error se informa al usuario.
   * 
   * @returns {void}
   */
  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.apiService.register(userData).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error al registrarse', err);
          this.errorMessage = 'No se pudo registrar. Inténtalo nuevamente.';
        }
      });
    }
  }
}
