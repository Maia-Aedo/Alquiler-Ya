import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService],
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.apiService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          // Guarda token
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']); // Redirige
        },
        error: (err) => {
          console.error('Error al iniciar sesión', err);
          this.errorMessage = 'Credenciales incorrectas o servidor no responde.';
        }
      });
    }
  }
}
