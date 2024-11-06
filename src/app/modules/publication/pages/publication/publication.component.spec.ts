import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationComponent } from './publication.component';

describe('PublicationComponent', () => {
  let component: PublicationComponent;
  let fixture: ComponentFixture<PublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationComponent]
    });
    fixture = TestBed.createComponent(PublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
