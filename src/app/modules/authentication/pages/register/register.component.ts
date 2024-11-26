import { Component } from '@angular/core';

import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Declaración de atributos -> Interfaz Usuario
  form: Usuario = {
    uid: '',
    nombre: '',
    segundonombre: '',
    apellido: '',
    telefono: 0,
    segundotelefono: 0,
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rol: 'usuario', // rol por defecto
    activo: true,
  };

  // Propiedad para verificar si las contraseñas coinciden
  get passwordsMatch(): boolean {
    return this.form.password === this.form.confirmPassword;
  }

  // Método para manejar el envío del formulario
  registro(): void {
    if (this.passwordsMatch) {
      // Aquí puedes agregar la lógica de registro
      console.log('Form data:', this.form);
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}
