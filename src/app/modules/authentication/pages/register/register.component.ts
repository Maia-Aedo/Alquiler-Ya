import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';;
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService],
  standalone: false
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

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

  ngOnInit(): void {
    
  }

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
