import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionadaComponent } from './pages/seleccionada/seleccionada.component';

const routes: Routes = [
  {
    path:"seleccionada", component:SeleccionadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
