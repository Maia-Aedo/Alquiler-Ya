import { Component } from '@angular/core';

import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: Usuario ={
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
    rememberMe: false,
    rol: '',
    activo: false,
  };

   // Método para manejar el envío del formulario
   inicioSesion(): void {
    if (this.form.username && this.form.password) {
      // Lógica para autenticar al usuario
      console.log('Datos ingresados:', this.form);
    } else {
      // Mostrar mensaje de error si falta algún dato
      console.error('Error en nombre de usuario o contraseña');
    }
  }
}
