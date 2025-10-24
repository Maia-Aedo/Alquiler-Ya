import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicationsRoutingModule } from './publications-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { AllPublicationComponent } from './pages/all-publication/all-publication.component';
import { ViewPublicationComponent } from './pages/view-publication/view-publication.component';
import { ListPublicationsComponent } from './pages/list-publications/list-publications.component';

@NgModule({
    declarations: [ListComponent, FormComponent, AllPublicationComponent, ViewPublicationComponent, ListPublicationsComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        PublicationsRoutingModule,
    ],
})
export class PublicationsModule { }