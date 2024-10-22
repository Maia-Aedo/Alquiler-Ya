import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './page/registro/registro.component';
import { InicioSesionComponent } from './page/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {
    path: "registro", component: RegistroComponent
  },
  {
    path: "inicio-sesion", component: InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
