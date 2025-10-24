import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { AllPublicationComponent } from './pages/all-publication/all-publication.component';
import { ViewPublicationComponent } from './pages/view-publication/view-publication.component';
import { ListPublicationsComponent } from './pages/list-publications/list-publications.component';

const routes: Routes = [
  { path: '', component: ListComponent }, // /publications
  { path: 'new', component: FormComponent }, // /publications/new
  { path: 'list-publications', component: ListPublicationsComponent },
  { path: 'all-publications', component: AllPublicationComponent },
  { path: 'detail/:id', component: ViewPublicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
