import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacComponent } from './tac.component';

describe('TacComponent', () => {
  let component: TacComponent;
  let fixture: ComponentFixture<TacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacComponent]
    });
    fixture = TestBed.createComponent(TacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
