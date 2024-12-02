import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Vistas
import { AboutComponent } from './pages/about/about.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TacComponent } from './pages/tac/tac.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: "about", component: AboutComponent
  },
  {
    path: "faqs", component: FaqsComponent
  },
  {
    path: "tc", component: TacComponent
  },
  {
    path: "error", component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
