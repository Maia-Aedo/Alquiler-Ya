import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionadaComponent } from './seleccionada.component';

describe('SeleccionadaComponent', () => {
  let component: SeleccionadaComponent;
  let fixture: ComponentFixture<SeleccionadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionadaComponent]
    });
    fixture = TestBed.createComponent(SeleccionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
