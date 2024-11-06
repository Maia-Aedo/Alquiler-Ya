import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = {
    username: '',
    password: '',
    rememberMe: false
  };

   // Método para manejar el envío del formulario
   onSubmit(): void {
    if (this.form.username && this.form.password) {
      // Lógica para autenticar al usuario
      console.log('Datos ingresados:', this.form);
    } else {
      // Mostrar mensaje de error si falta algún dato
      console.error('Error en nombre de usuario o contraseña');
    }
  }
}
