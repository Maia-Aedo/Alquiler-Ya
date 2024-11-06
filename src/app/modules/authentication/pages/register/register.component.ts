import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  // Propiedad para verificar si las contraseñas coinciden
  get passwordsMatch(): boolean {
    return this.form.password === this.form.confirmPassword;
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.passwordsMatch) {
      // Aquí puedes agregar la lógica de registro
      console.log('Form data:', this.form);
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}
