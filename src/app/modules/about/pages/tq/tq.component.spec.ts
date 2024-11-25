import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqComponent } from './tq.component';

describe('TqComponent', () => {
  let component: TqComponent;
  let fixture: ComponentFixture<TqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TqComponent]
    });
    fixture = TestBed.createComponent(TqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
