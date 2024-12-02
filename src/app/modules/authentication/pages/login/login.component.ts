import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    const { username, password } = this.loginForm.value;

    this.apiService.login(username, password).subscribe({
      next: (response) => {
        this.apiService.generateJWT(response.token); // Guarda el token en localStorage
        this.router.navigate(['/dashboard']); // Redirige a home
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Datos incorrectos.';
        } else {
          this.errorMessage = 'Error en el servidor, intente más tarde.';
        }
      },
    });
  }
}
