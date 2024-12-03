import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  selectedRole = 'cliente'; // Valor por defecto

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      usuario: ['', [Validators.required]],
      contrasenia: ['', [Validators.required, Validators.minLength(8)]],
      rol: ['cliente', [Validators.required]],
      dni: [''], // Campo opcional para clientes
      cuil: [''], // Campo opcional para propietarios
    });
    // Validaciones para rol
    this.cambiarRol({ target: { value: this.selectedRole } });
  }

  // Dependiendo el rol activa/desactiva determinados campos
  cambiarRol(event: any): void {
    this.selectedRole = event.target.value;

    // Actualiza validaciones al cambiar de rol
    if (this.selectedRole === 'cliente') {
      this.registerForm.get('dni')?.setValidators([Validators.required]);
      this.registerForm.get('cuil')?.clearValidators();
    } else if (this.selectedRole === 'propietario') {
      this.registerForm.get('cuil')?.setValidators([Validators.required]);
      this.registerForm.get('dni')?.clearValidators();
    } else {
      this.registerForm.get('dni')?.clearValidators();
      this.registerForm.get('cuil')?.clearValidators();
    }
    this.registerForm.get('dni')?.updateValueAndValidity();
    this.registerForm.get('cuil')?.updateValueAndValidity();
  }

  registrar(): void {
    if (this.registerForm.invalid) {
      console.warn('El formulario no es válido');
      return;
    }

    const formData = { ...this.registerForm.value };

    // Elimina campos no usados según rol
    if (this.selectedRole === 'cliente') {
      delete formData.cuil; // Elimina campos no usados
    } else if (this.selectedRole === 'propietario') {
      delete formData.dni;
    } else {
      delete formData.dni;
      delete formData.cuil;
    }
    // Utilizamos método de registro en la api
    this.apiService.register(formData).subscribe({
      next: response => {
        console.log('Registro exitoso:', response);
        // Redirige a la página de inicio después del registro exitoso
        this.router.navigate(['/home']);
      },
      error: error => {
        console.error('Error en el registro:', error.message || error);
      }
    });   
  }
}
