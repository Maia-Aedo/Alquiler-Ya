import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      ubicacion: [''],
      precio: ['', Validators.required],
      imagen: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Publicación enviada:', this.form.value);
      // Lógica futura: enviar al backend o Firebase
      this.router.navigate(['/publications']);
    }
  }
}
