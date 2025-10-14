
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createNewPublication } from '../../mock.db'; // ⬅️ Importamos la función

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      ubicacion: [''], // Este campo se mapeará a 'lugar' y a 'ubicacion.direccion' en el mock
      precio: ['', Validators.required],
      imagen: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Llamamos a la función que hace el 'push' a localStorage
      createNewPublication(this.form.value); 
      
      console.log('Publicación creada y guardada localmente.');

      // Redirigimos al ListComponent, que se recargará con el nuevo ítem.
      this.router.navigate(['/publications']);
    }
  }
}
